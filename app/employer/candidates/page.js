'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function EmployerCandidates() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else { setUser(data.user); fetchJobs(data.user.id); }
    });
  }, []);

  const fetchJobs = async (uid) => {
    const { data } = await supabase.from('jobs').select('*').eq('user_id', uid).order('created_at',{ascending:false});
    if (data) setJobs(data);
  };

  const fetchCandidates = async (job) => {
    setSelectedJob(job); setLoading(true);
    const { data } = await supabase.from('candidates').select('*').eq('cluster_id', job.cluster_id).order('created_at',{ascending:false});
    if (data) setCandidates(data);
    setLoading(false);
  };

  const updateStatus = async (candidateId, newStatus, clusterId) => {
    await supabase.from('candidates').update({ status: newStatus }).eq('id', candidateId);
    if (newStatus === 'rejected') {
      await fetch('/api/pipeline-shift', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ candidate_id: candidateId, current_cluster_id: clusterId }) });
    }
    fetchCandidates(selectedJob);
  };

  const logout = async () => { await supabase.auth.signOut(); window.location.href='/login'; };

  const statusStyle = (s) => ({ shortlisted:['rgba(0,212,170,0.1)','#00D4AA','rgba(0,212,170,0.3)'], hired:['rgba(255,107,53,0.1)','#FF6B35','rgba(255,107,53,0.3)'], rejected:['rgba(255,60,60,0.1)','#FF3C3C','rgba(255,60,60,0.3)'], submitted:['rgba(123,47,255,0.1)','#C084FC','rgba(123,47,255,0.3)'] }[s] || ['rgba(123,47,255,0.1)','#C084FC','rgba(123,47,255,0.3)']);

  if (!user) return <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>Loading...</div>;

  return (
    <div style={{ minHeight:'100vh', background:'#0A0A0A', fontFamily:"'DM Sans',sans-serif", color:'white' }}>
      <div style={{ background:'#0D0D0D', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'0 40px', display:'flex', justifyContent:'space-between', alignItems:'center', height:60 }}>
        <div style={{ display:'flex', alignItems:'center', gap:32 }}>
          <a href="/" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
            <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:28, height:28, objectFit:'contain' }} onError={e=>e.target.style.display='none'} />
            <span style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:'white' }}>RecSay</span>
          </a>
          <div style={{ display:'flex', gap:4 }}>
            {[['Dashboard','/employer/dashboard'],['Post JD','/employer'],['Candidates','/employer/candidates']].map(([l,h]) => (
              <a key={l} href={h} style={{ fontSize:13, padding:'6px 14px', borderRadius:6, textDecoration:'none', fontWeight:500, background: l==='Candidates' ? 'rgba(123,47,255,0.15)' : 'transparent', color: l==='Candidates' ? '#C084FC' : 'rgba(255,255,255,0.4)', border: l==='Candidates' ? '1px solid rgba(123,47,255,0.3)' : '1px solid transparent' }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{user?.email}</span>
          <span style={{ fontSize:10, fontWeight:700, background:'rgba(123,47,255,0.2)', color:'#C084FC', padding:'3px 10px', borderRadius:99 }}>EMPLOYER</span>
          <button onClick={logout} style={{ fontSize:12, padding:'7px 16px', background:'transparent', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, color:'rgba(255,255,255,0.4)', cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>Sign out</button>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 40px', display:'grid', gridTemplateColumns:'280px 1fr', gap:28 }}>
        {/* JOB LIST */}
        <div>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:20, fontWeight:800, marginBottom:6 }}>Your JDs</h2>
          <p style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginBottom:20 }}>Select to see candidates</p>
          {jobs.map(job => (
            <div key={job.id} onClick={() => fetchCandidates(job)}
              style={{ background: selectedJob?.id===job.id ? 'rgba(123,47,255,0.15)' : '#111', border: `1px solid ${selectedJob?.id===job.id ? 'rgba(123,47,255,0.4)' : 'rgba(255,255,255,0.07)'}`, borderRadius:10, padding:'14px 16px', marginBottom:8, cursor:'pointer', transition:'all 0.2s' }}>
              <div style={{ fontSize:14, fontWeight:600, color:'white', marginBottom:3 }}>{job.title}</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginBottom:8 }}>{job.company_name}</div>
              <div style={{ display:'flex', gap:5 }}>
                <span style={{ fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:3, background:'rgba(123,47,255,0.15)', color:'#C084FC', textTransform:'uppercase' }}>{job.type}</span>
                {job.cluster_id && <span style={{ fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:3, background:'rgba(0,212,170,0.1)', color:'#00D4AA' }}>Clustered ✓</span>}
              </div>
            </div>
          ))}
        </div>

        {/* CANDIDATES */}
        <div>
          {!selectedJob
            ? <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:60, textAlign:'center' }}>
                <div style={{ fontSize:40, marginBottom:12 }}>👈</div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:20, fontWeight:700, marginBottom:8 }}>Select a JD</h3>
                <p style={{ color:'rgba(255,255,255,0.35)', fontSize:14 }}>Click any JD on the left to see candidates</p>
              </div>
            : <>
                <div style={{ marginBottom:24 }}>
                  <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:800, marginBottom:4 }}>{selectedJob.title}</h2>
                  <p style={{ fontSize:13, color:'rgba(255,255,255,0.35)' }}>{selectedJob.company_name} · {candidates.length} candidates</p>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginBottom:24 }}>
                  {[['Total',candidates.length,'white'],['Shortlisted',candidates.filter(c=>c.status==='shortlisted').length,'#00D4AA'],['Hired',candidates.filter(c=>c.status==='hired').length,'#FF6B35'],['Rejected',candidates.filter(c=>c.status==='rejected').length,'#FF3C3C']].map(([l,n,col]) => (
                    <div key={l} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'14px', textAlign:'center' }}>
                      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:26, fontWeight:800, color:col, lineHeight:1, marginBottom:4 }}>{n}</div>
                      <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)' }}>{l}</div>
                    </div>
                  ))}
                </div>
                {loading
                  ? <div style={{ textAlign:'center', padding:40, color:'rgba(255,255,255,0.35)' }}>Loading...</div>
                  : candidates.length===0
                    ? <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:40, textAlign:'center', color:'rgba(255,255,255,0.35)', fontSize:14 }}>No candidates yet for this cluster.</div>
                    : candidates.map(c => {
                        const [bg,col,border] = statusStyle(c.status);
                        return (
                          <div key={c.id} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:20, marginBottom:12, transition:'border-color 0.2s' }}
                            onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(123,47,255,0.25)'}
                            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}>
                            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
                              <div>
                                <div style={{ fontSize:16, fontWeight:600, color:'white', marginBottom:2 }}>{c.name}</div>
                                <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{c.email} {c.phone && `· ${c.phone}`}</div>
                              </div>
                              <span style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', padding:'4px 10px', borderRadius:99, background:bg, color:col, border:`1px solid ${border}` }}>{c.status}</span>
                            </div>
                            {c.skills?.length>0 && (
                              <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:10 }}>
                                {c.skills.map(s => <span key={s} style={{ fontSize:11, fontWeight:600, padding:'3px 8px', borderRadius:4, background:'rgba(123,47,255,0.1)', color:'#C084FC', border:'1px solid rgba(123,47,255,0.2)' }}>{s}</span>)}
                              </div>
                            )}
                            {c.note && <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', background:'rgba(255,255,255,0.03)', borderRadius:6, padding:'8px 12px', marginBottom:12, fontStyle:'italic' }}>"{c.note}"</div>}
                            <div style={{ display:'flex', gap:8 }}>
                              {[['Shortlist','shortlisted','rgba(0,212,170,0.1)','#00D4AA','rgba(0,212,170,0.3)'],['Hire','hired','rgba(255,107,53,0.1)','#FF6B35','rgba(255,107,53,0.3)'],['Reject','rejected','rgba(255,60,60,0.1)','#FF3C3C','rgba(255,60,60,0.3)']].map(([label,status,bg2,col2,bdr]) => (
                                <button key={label} onClick={() => updateStatus(c.id, status, c.cluster_id)}
                                  disabled={c.status===status}
                                  style={{ flex:1, padding:'9px', borderRadius:7, fontSize:12, fontWeight:600, cursor: c.status===status ? 'default' : 'pointer', fontFamily:"'DM Sans',sans-serif", transition:'all 0.2s', background: c.status===status ? bg2 : 'transparent', color: c.status===status ? col2 : 'rgba(255,255,255,0.4)', border:`1px solid ${c.status===status ? bdr : 'rgba(255,255,255,0.1)'}` }}>
                                  {c.status===status ? `✓ ${label}ed` : label}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })
                }
              </>
          }
        </div>
      </div>
    </div>
  );
}