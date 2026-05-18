'use client';
import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../lib/supabase';

const PER_PAGE = 9;

export default function RecruiterPage() {
  const [user, setUser] = useState(null);
  const [clusters, setClusters] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [candidate, setCandidate] = useState({ name:'', email:'', phone:'', skills:'', note:'' });

  // Search + Filter + Pagination state
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else { setUser(data.user); fetchClusters(); }
    });
  }, []);

  const fetchClusters = async () => {
    const { data } = await supabase.from('clusters').select('*').order('created_at', { ascending: false });
    if (data) setClusters(data);
  };

  // Filter + Search + Sort logic
  const filtered = useMemo(() => {
    let result = [...clusters];

    // search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.title?.toLowerCase().includes(q) ||
        (c.keywords || []).some(k => k.toLowerCase().includes(q))
      );
    }

    // filter by type
    if (filter === 'tech') {
      result = result.filter(c =>
        (c.keywords || []).some(k =>
          ['python','javascript','react','node','java','django','aws','docker','sql','typescript','flutter','android','ios','devops'].includes(k.toLowerCase())
        )
      );
    } else if (filter === 'non-tech') {
      result = result.filter(c =>
        !(c.keywords || []).some(k =>
          ['python','javascript','react','node','java','django','aws','docker','sql','typescript','flutter','android','ios','devops'].includes(k.toLowerCase())
        )
      );
    } else if (filter === 'urgent') {
      const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);
      result = result.filter(c => new Date(c.created_at) > twoDaysAgo);
    }

    // sort
    if (sort === 'newest') result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    else if (sort === 'most_employers') result.sort((a, b) => (b.job_ids?.length || 0) - (a.job_ids?.length || 0));
    else if (sort === 'most_keywords') result.sort((a, b) => (b.keywords?.length || 0) - (a.keywords?.length || 0));

    return result;
  }, [clusters, search, filter, sort]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Reset page when filter/search changes
  useEffect(() => { setPage(1); }, [search, filter, sort]);

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setSuccess(false);
    const { error } = await supabase.from('candidates').insert([{
      name: candidate.name, email: candidate.email, phone: candidate.phone,
      skills: candidate.skills.split(',').map(s => s.trim()),
      note: candidate.note, cluster_id: selectedCluster.id,
      recruiter_id: user.id, status: 'submitted',
    }]);
    if (!error) {
      setSuccess(true);
      setCandidate({ name:'', email:'', phone:'', skills:'', note:'' });
      setTimeout(() => { setShowForm(false); setSuccess(false); }, 2000);
    }
    setLoading(false);
  };

  const logout = async () => { await supabase.auth.signOut(); window.location.href = '/login'; };

  const isUrgent = (cluster) => new Date(cluster.created_at) > new Date(Date.now() - 48 * 60 * 60 * 1000);

  if (!user) return <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>Loading...</div>;

  return (
    <div style={{ minHeight:'100vh', background:'#0A0A0A', fontFamily:"'DM Sans',sans-serif", color:'white' }}>

      {/* NAV */}
      <div style={{ background:'#0D0D0D', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'0 40px', display:'flex', justifyContent:'space-between', alignItems:'center', height:60 }}>
        <div style={{ display:'flex', alignItems:'center', gap:32 }}>
          <a href="/" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
            <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:28, height:28, objectFit:'contain' }} onError={e=>e.target.style.display='none'} />
            <span style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:'white' }}>RecSay</span>
          </a>
          <div style={{ display:'flex', gap:4 }}>
            {[['Dashboard','/recruiter/dashboard'],['Clusters','/recruiter']].map(([l,h]) => (
              <a key={l} href={h} style={{ fontSize:13, padding:'6px 14px', borderRadius:6, textDecoration:'none', fontWeight:500,
                background: l==='Clusters' ? 'rgba(123,47,255,0.15)' : 'transparent',
                color: l==='Clusters' ? '#C084FC' : 'rgba(255,255,255,0.4)',
                border: l==='Clusters' ? '1px solid rgba(123,47,255,0.3)' : '1px solid transparent' }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{user?.email}</span>
          <span style={{ fontSize:10, fontWeight:700, background:'rgba(255,107,53,0.15)', color:'#FF6B35', padding:'3px 10px', borderRadius:99 }}>RECRUITER</span>
          <button onClick={logout} style={{ fontSize:12, padding:'7px 16px', background:'transparent', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, color:'rgba(255,255,255,0.4)', cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>Sign out</button>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 40px' }}>

        {/* HEADER */}
        <div style={{ marginBottom:32 }}>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:36, fontWeight:800, letterSpacing:'-1px', marginBottom:8 }}>Clustered Job Roles</h1>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)' }}>
            {filtered.length} cluster{filtered.length!==1?'s':''} found
            {search && ` for "${search}"`}
            {' '}— submit candidates to reach multiple employers at once
          </p>
        </div>

        {/* STATS */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginBottom:32 }}>
          {[[clusters.length,'Total Clusters','#7B2FFF'],[clusters.reduce((a,c)=>a+(c.job_ids?.length||0),0),'Total JDs','#FF6B35'],['70%','Match Threshold','#00D4AA']].map(([n,l,col]) => (
            <div key={l} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'18px 24px', textAlign:'center' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:32, fontWeight:800, color:col, lineHeight:1, marginBottom:6 }}>{n}</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* SEARCH + FILTER + SORT BAR */}
        <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, padding:'20px 24px', marginBottom:28, display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>

          {/* Search */}
          <div style={{ flex:1, minWidth:220, position:'relative' }}>
            <span style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'rgba(255,255,255,0.3)', fontSize:16 }}>🔍</span>
            <input
              type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by role or skill... (Python, React, DevOps)"
              style={{ width:'100%', padding:'10px 14px 10px 36px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'white', fontFamily:"'DM Sans',sans-serif", fontSize:14, outline:'none' }}
              onFocus={e => e.target.style.borderColor='rgba(123,47,255,0.5)'}
              onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Filter buttons */}
          <div style={{ display:'flex', gap:6 }}>
            {[['all','All'],['tech','⚡ Tech'],['non-tech','🏢 Non-Tech'],['urgent','🔴 Urgent']].map(([val, label]) => (
              <button key={val} onClick={() => setFilter(val)}
                style={{ padding:'9px 14px', borderRadius:8, border:'none', cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif", transition:'all 0.2s',
                  background: filter===val ? 'rgba(123,47,255,0.25)' : 'rgba(255,255,255,0.05)',
                  color: filter===val ? '#C084FC' : 'rgba(255,255,255,0.4)',
                  outline: filter===val ? '1px solid rgba(123,47,255,0.4)' : '1px solid transparent',
                }}>
                {label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select value={sort} onChange={e => setSort(e.target.value)}
            style={{ padding:'9px 14px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'rgba(255,255,255,0.7)', fontFamily:"'DM Sans',sans-serif", fontSize:12, cursor:'pointer', outline:'none' }}>
            <option value="newest" style={{ background:'#111' }}>Sort: Newest</option>
            <option value="most_employers" style={{ background:'#111' }}>Sort: Most Employers</option>
            <option value="most_keywords" style={{ background:'#111' }}>Sort: Most Skills</option>
          </select>

          {/* Clear */}
          {(search || filter!=='all' || sort!=='newest') && (
            <button onClick={() => { setSearch(''); setFilter('all'); setSort('newest'); }}
              style={{ padding:'9px 14px', borderRadius:8, border:'1px solid rgba(255,60,60,0.3)', cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif", background:'rgba(255,60,60,0.08)', color:'#FF6B6B' }}>
              ✕ Clear
            </button>
          )}
        </div>

        {/* CLUSTER CARDS */}
        {paginated.length === 0
          ? <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:60, textAlign:'center' }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
              <p style={{ color:'rgba(255,255,255,0.35)', fontSize:15 }}>
                {search ? `No clusters found for "${search}"` : 'No clusters match your filters.'}
              </p>
              <button onClick={() => { setSearch(''); setFilter('all'); }}
                style={{ marginTop:16, padding:'8px 20px', background:'rgba(123,47,255,0.15)', border:'1px solid rgba(123,47,255,0.3)', borderRadius:8, color:'#C084FC', cursor:'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
                Clear filters
              </button>
            </div>
          : <>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:16, marginBottom:32 }}>
                {paginated.map(cluster => (
                  <div key={cluster.id}
                    style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, overflow:'hidden', transition:'transform 0.2s,border-color 0.2s' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.borderColor='rgba(123,47,255,0.3)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; }}>

                    <div style={{ background:'linear-gradient(135deg,#1A0A3C,#7B2FFF)', padding:'18px 20px' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
                        <div style={{ fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)' }}>Active Cluster</div>
                        <div style={{ display:'flex', gap:5 }}>
                          {isUrgent(cluster) && (
                            <span style={{ fontSize:9, fontWeight:700, padding:'2px 7px', borderRadius:99, background:'rgba(255,107,53,0.3)', color:'#FF6B35', border:'1px solid rgba(255,107,53,0.4)' }}>🔴 URGENT</span>
                          )}
                          <div style={{ display:'flex', alignItems:'center', gap:4, background:'rgba(255,255,255,0.1)', borderRadius:99, padding:'3px 9px' }}>
                            <span style={{ width:5, height:5, borderRadius:'50%', background:'#00D4AA', display:'inline-block' }} />
                            <span style={{ fontSize:9, color:'white', fontWeight:700 }}>LIVE</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:17, fontWeight:700, color:'white', lineHeight:1.2 }}>{cluster.title}</div>
                      <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginTop:4 }}>
                        {cluster.job_ids?.length||0} employer{(cluster.job_ids?.length||0)!==1?'s':''} matched
                      </div>
                    </div>

                    <div style={{ padding:'14px 20px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize:10, color:'rgba(255,255,255,0.3)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.08em' }}>Key Skills</div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                        {(cluster.keywords||[]).slice(0,7).map(k => (
                          <span key={k} style={{ fontSize:11, fontWeight:600, padding:'3px 8px', borderRadius:4,
                            background: search && k.toLowerCase().includes(search.toLowerCase()) ? 'rgba(123,47,255,0.4)' : 'rgba(123,47,255,0.15)',
                            color: search && k.toLowerCase().includes(search.toLowerCase()) ? 'white' : '#C084FC',
                            border:'1px solid rgba(123,47,255,0.25)' }}>
                            {k}
                          </span>
                        ))}
                        {(cluster.keywords||[]).length>7 && (
                          <span style={{ fontSize:11, padding:'3px 8px', color:'rgba(255,255,255,0.25)' }}>+{cluster.keywords.length-7}</span>
                        )}
                      </div>
                    </div>

                    <div style={{ padding:'14px 20px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <div style={{ fontSize:11, color:'rgba(255,255,255,0.25)' }}>
                        {new Date(cluster.created_at).toLocaleDateString('en-IN', { day:'numeric', month:'short' })}
                      </div>
                      <button onClick={() => { setSelectedCluster(cluster); setShowForm(true); setSuccess(false); }}
                        style={{ padding:'9px 18px', background:'linear-gradient(135deg,#7B2FFF,#9B5FFF)', color:'white', border:'none', borderRadius:8, fontSize:12, fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                        Submit Candidate →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:8 }}>
                  <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}
                    style={{ padding:'8px 16px', borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'transparent', color: page===1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)', cursor: page===1 ? 'not-allowed' : 'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
                    ← Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i+1).map(n => (
                    <button key={n} onClick={() => setPage(n)}
                      style={{ width:36, height:36, borderRadius:8, border:'none', cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif", transition:'all 0.2s',
                        background: page===n ? 'linear-gradient(135deg,#7B2FFF,#9B5FFF)' : 'rgba(255,255,255,0.05)',
                        color: page===n ? 'white' : 'rgba(255,255,255,0.4)' }}>
                      {n}
                    </button>
                  ))}

                  <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages}
                    style={{ padding:'8px 16px', borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'transparent', color: page===totalPages ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)', cursor: page===totalPages ? 'not-allowed' : 'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
                    Next →
                  </button>

                  <span style={{ fontSize:12, color:'rgba(255,255,255,0.25)', marginLeft:8 }}>
                    Page {page} of {totalPages} · {filtered.length} clusters
                  </span>
                </div>
              )}
            </>
        }
      </div>

      {/* MODAL */}
      {showForm && selectedCluster && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.8)', zIndex:200, display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}
          onClick={e=>{ if(e.target===e.currentTarget) setShowForm(false); }}>
          <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.1)', borderRadius:20, padding:36, width:'100%', maxWidth:460, maxHeight:'90vh', overflowY:'auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
              <div>
                <div style={{ fontSize:10, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'#7B2FFF', marginBottom:6 }}>Submitting for</div>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:'white' }}>{selectedCluster.title}</h2>
                <p style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:4 }}>
                  Reaches {selectedCluster.job_ids?.length||0} employer{(selectedCluster.job_ids?.length||0)!==1?'s':''} simultaneously
                </p>
              </div>
              <button onClick={() => setShowForm(false)}
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, width:34, height:34, cursor:'pointer', fontSize:18, color:'rgba(255,255,255,0.5)', display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
            </div>

            {success
              ? <div style={{ background:'rgba(0,212,170,0.1)', border:'1px solid rgba(0,212,170,0.3)', borderRadius:12, padding:28, textAlign:'center' }}>
                  <div style={{ fontSize:36, marginBottom:8 }}>🎉</div>
                  <p style={{ color:'#00D4AA', fontWeight:600, fontSize:15 }}>Candidate submitted!</p>
                  <p style={{ color:'rgba(255,255,255,0.4)', fontSize:13, marginTop:4 }}>Reaching {selectedCluster.job_ids?.length||0} employers now.</p>
                </div>
              : <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {[['Full Name','name','text','Candidate full name'],['Email','email','email','candidate@email.com'],['Phone','phone','text','+91 XXXXX XXXXX'],['Skills (comma separated)','skills','text','Python, Django, AWS']].map(([label,key,type,ph]) => (
                    <div key={key}>
                      <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:6, letterSpacing:'0.08em', textTransform:'uppercase' }}>{label}</label>
                      <input className="inp" type={type} placeholder={ph} value={candidate[key]} onChange={e=>setCandidate({...candidate,[key]:e.target.value})} required={key!=='phone'} />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:6, letterSpacing:'0.08em', textTransform:'uppercase' }}>Recruiter Note</label>
                    <textarea className="inp" style={{ height:70, resize:'vertical' }} placeholder="Any context about this candidate..." value={candidate.note} onChange={e=>setCandidate({...candidate,note:e.target.value})} />
                  </div>
                  <button type="submit" disabled={loading} className="auth-btn" style={{ marginTop:4 }}>
                    {loading ? 'Submitting...' : `Submit to ${selectedCluster.job_ids?.length||0} Employers →`}
                  </button>
                </form>
            }
          </div>
        </div>
      )}
    </div>
  );
}