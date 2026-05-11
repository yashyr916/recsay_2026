'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function RecruiterPage() {
  const [user, setUser] = useState(null);
  const [clusters, setClusters] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [candidate, setCandidate] = useState({ name:'', email:'', phone:'', skills:'', note:'' });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else { setUser(data.user); fetchClusters(); }
    });
  }, []);

  const fetchClusters = async () => {
    const { data } = await supabase.from('clusters').select('*').order('created_at',{ascending:false});
    if (data) setClusters(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setSuccess(false);
    const { error } = await supabase.from('candidates').insert([{
      name: candidate.name, email: candidate.email, phone: candidate.phone,
      skills: candidate.skills.split(',').map(s=>s.trim()),
      note: candidate.note, cluster_id: selectedCluster.id,
      recruiter_id: user.id, status: 'submitted',
    }]);
    if (!error) { setSuccess(true); setCandidate({ name:'', email:'', phone:'', skills:'', note:'' }); setTimeout(()=>{ setShowForm(false); setSuccess(false); }, 2000); }
    setLoading(false);
  };

  const logout = async () => { await supabase.auth.signOut(); window.location.href='/login'; };

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
              <a key={l} href={h} style={{ fontSize:13, padding:'6px 14px', borderRadius:6, textDecoration:'none', fontWeight:500, background: l==='Clusters' ? 'rgba(123,47,255,0.15)' : 'transparent', color: l==='Clusters' ? '#C084FC' : 'rgba(255,255,255,0.4)', border: l==='Clusters' ? '1px solid rgba(123,47,255,0.3)' : '1px solid transparent' }}>{l}</a>
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
        <div style={{ marginBottom:40 }}>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:36, fontWeight:800, letterSpacing:'-1px', marginBottom:8 }}>Clustered Job Roles</h1>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)' }}>{clusters.length} active clusters — submit candidates to reach multiple employers at once</p>
        </div>

        {/* STATS */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginBottom:40 }}>
          {[[clusters.length,'Active Clusters','#7B2FFF'],[clusters.reduce((a,c)=>a+(c.job_ids?.length||0),0),'Total JDs','#FF6B35'],['70%','Match Threshold','#00D4AA']].map(([n,l,col]) => (
            <div key={l} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'20px 24px', textAlign:'center' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:36, fontWeight:800, color:col, lineHeight:1, marginBottom:6 }}>{n}</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* CLUSTER CARDS */}
        {clusters.length===0
          ? <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:48, textAlign:'center', color:'rgba(255,255,255,0.35)', fontSize:14 }}>No clusters yet. Employers need to upload JDs first.</div>
          : <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:16 }}>
              {clusters.map(cluster => (
                <div key={cluster.id} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, overflow:'hidden', transition:'transform 0.2s,border-color 0.2s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.borderColor='rgba(123,47,255,0.3)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; }}>
                  <div style={{ background:'linear-gradient(135deg,#1A0A3C,#7B2FFF)', padding:'18px 20px' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
                      <div style={{ fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)' }}>Active Cluster</div>
                      <div style={{ display:'flex', alignItems:'center', gap:5, background:'rgba(255,255,255,0.1)', borderRadius:99, padding:'3px 9px' }}>
                        <span style={{ width:5, height:5, borderRadius:'50%', background:'#00D4AA', display:'inline-block' }} />
                        <span style={{ fontSize:9, color:'white', fontWeight:700 }}>LIVE</span>
                      </div>
                    </div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:700, color:'white', lineHeight:1.2 }}>{cluster.title}</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginTop:4 }}>{cluster.job_ids?.length||0} employer{(cluster.job_ids?.length||0)!==1?'s':''} matched</div>
                  </div>
                  <div style={{ padding:'14px 20px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize:10, color:'rgba(255,255,255,0.3)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.08em' }}>Key Skills</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                      {(cluster.keywords||[]).slice(0,7).map(k => <span key={k} style={{ fontSize:11, fontWeight:600, padding:'3px 8px', borderRadius:4, background:'rgba(123,47,255,0.15)', color:'#C084FC', border:'1px solid rgba(123,47,255,0.25)' }}>{k}</span>)}
                      {(cluster.keywords||[]).length>7 && <span style={{ fontSize:11, padding:'3px 8px', color:'rgba(255,255,255,0.25)' }}>+{cluster.keywords.length-7}</span>}
                    </div>
                  </div>
                  <div style={{ padding:'14px 20px' }}>
                    <button onClick={() => { setSelectedCluster(cluster); setShowForm(true); setSuccess(false); }}
                      style={{ width:'100%', padding:'11px', background:'linear-gradient(135deg,#7B2FFF,#9B5FFF)', color:'white', border:'none', borderRadius:8, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                      Submit Candidate →
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
                <p style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:4 }}>Reaches {selectedCluster.job_ids?.length||0} employer{(selectedCluster.job_ids?.length||0)!==1?'s':''} simultaneously</p>
              </div>
              <button onClick={() => setShowForm(false)} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, width:34, height:34, cursor:'pointer', fontSize:18, color:'rgba(255,255,255,0.5)', display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
            </div>
            {success
              ? <div style={{ background:'rgba(0,212,170,0.1)', border:'1px solid rgba(0,212,170,0.3)', borderRadius:12, padding:28, textAlign:'center' }}>
                  <div style={{ fontSize:36, marginBottom:8 }}>🎉</div>
                  <p style={{ color:'#00D4AA', fontWeight:600, fontSize:15 }}>Candidate submitted!</p>
                </div>
              : <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {[['Full Name','name','text','Candidate full name'],['Email','email','email','candidate@email.com'],['Phone','phone','text','+91 XXXXX XXXXX'],['Skills','skills','text','Python, Django, AWS']].map(([label,key,type,ph]) => (
                    <div key={key}>
                      <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:6, letterSpacing:'0.08em', textTransform:'uppercase' }}>{label}</label>
                      <input className="inp" type={type} placeholder={ph} value={candidate[key]} onChange={e=>setCandidate({...candidate,[key]:e.target.value})} required={key!=='phone'} />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:6, letterSpacing:'0.08em', textTransform:'uppercase' }}>Note</label>
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