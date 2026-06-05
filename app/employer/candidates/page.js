'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function EmployerCandidates() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detailCandidate, setDetailCandidate] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else { setUser(data.user); fetchJobs(data.user.id); }
    });
  }, []);

  const fetchJobs = async (uid) => {
    const { data } = await supabase.from('jobs').select('*').eq('user_id', uid).order('created_at', { ascending: false });
    if (data) setJobs(data);
  };

  const selectJob = (job) => {
    setSelectedJob(job);
    setDetailCandidate(null);
    loadCandidates(job.cluster_id);
  };

  const loadCandidates = async (clusterId) => {
    setLoading(true);
    const { data } = await supabase.from('candidates').select('*').eq('cluster_id', clusterId).order('created_at', { ascending: false });
    if (data) setCandidates(data);
    setLoading(false);
  };

  const updateStatus = async (candidateId, newStatus, clusterId) => {
    setCandidates(prev => prev.map(c => c.id === candidateId ? { ...c, status: newStatus } : c));
    if (detailCandidate?.id === candidateId) setDetailCandidate(prev => ({ ...prev, status: newStatus }));
    await supabase.from('candidates').update({ status: newStatus }).eq('id', candidateId);
    if (newStatus === 'rejected') {
      await fetch('/api/pipeline-shift', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ candidate_id: candidateId, current_cluster_id: clusterId }),
      });
    }
    loadCandidates(clusterId);
  };

  const logout = async () => { await supabase.auth.signOut(); window.location.href = '/login'; };

  const statusStyle = (s) => ({
    shortlisted:        ['rgba(0,212,170,0.1)',  '#00D4AA', 'rgba(0,212,170,0.3)'],
    hired:              ['rgba(255,107,53,0.1)', '#FF6B35', 'rgba(255,107,53,0.3)'],
    rejected:           ['rgba(255,60,60,0.1)',  '#FF3C3C', 'rgba(255,60,60,0.3)'],
    submitted:          ['rgba(123,47,255,0.1)', '#C084FC', 'rgba(123,47,255,0.3)'],
    pipeline_exhausted: ['rgba(255,184,0,0.1)',  '#FFB800', 'rgba(255,184,0,0.3)'],
  }[s] || ['rgba(123,47,255,0.1)', '#C084FC', 'rgba(123,47,255,0.3)']);

  if (!user) return <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>Loading...</div>;

  return (
    <div style={{ minHeight:'100vh', background:'#0A0A0A', fontFamily:"'DM Sans',sans-serif", color:'white' }}>

      {/* NAV */}
      <div style={{ background:'#0D0D0D', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'0 40px', display:'flex', justifyContent:'space-between', alignItems:'center', height:60 }}>
        <div style={{ display:'flex', alignItems:'center', gap:32 }}>
          <a href="/" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
            <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:28, height:28, objectFit:'contain' }} onError={e=>e.target.style.display='none'} />
            <span style={{ fontFamily:"'Cabinet Grotesk',sans-serif", fontSize:18, fontWeight:800, color:'white', letterSpacing:'-0.5px' }}>RecSay</span>
          </a>
          <div style={{ display:'flex', gap:4 }}>
            {[['Dashboard','/employer/dashboard'],['Post JD','/employer'],['Candidates','/employer/candidates']].map(([l,h]) => (
              <a key={l} href={h} style={{ fontSize:13, padding:'6px 14px', borderRadius:6, textDecoration:'none', fontWeight:500,
                background: l==='Candidates' ? 'rgba(123,47,255,0.15)' : 'transparent',
                color: l==='Candidates' ? '#C084FC' : 'rgba(255,255,255,0.4)',
                border: l==='Candidates' ? '1px solid rgba(123,47,255,0.3)' : '1px solid transparent' }}>{l}</a>
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
            <div key={job.id} onClick={() => selectJob(job)}
              style={{ background: selectedJob?.id===job.id ? 'rgba(123,47,255,0.15)' : '#111',
                border: `1px solid ${selectedJob?.id===job.id ? 'rgba(123,47,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius:10, padding:'14px 16px', marginBottom:8, cursor:'pointer', transition:'all 0.2s' }}>
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
                  : candidates.length === 0
                    ? <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:40, textAlign:'center', color:'rgba(255,255,255,0.35)', fontSize:14 }}>No candidates yet.</div>
                    : candidates.map(c => {
                        const [bg, col, border] = statusStyle(c.status);
                        return (
                          <div key={c.id}
                            onClick={() => setDetailCandidate(c)}
                            style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:20, marginBottom:12, cursor:'pointer', transition:'border-color 0.2s' }}
                            onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(123,47,255,0.25)'}
                            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}>
                            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
                              <div>
                                <div style={{ fontSize:16, fontWeight:600, color:'white', marginBottom:2 }}>{c.name}</div>
                                <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{c.email} {c.phone && `· ${c.phone}`}</div>
                              </div>
                              <span style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', padding:'4px 10px', borderRadius:99, background:bg, color:col, border:`1px solid ${border}` }}>{c.status}</span>
                            </div>
                            {c.skills?.length > 0 && (
                              <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:8 }}>
                                {c.skills.slice(0,4).map(s => <span key={s} style={{ fontSize:11, fontWeight:600, padding:'3px 8px', borderRadius:4, background:'rgba(123,47,255,0.1)', color:'#C084FC', border:'1px solid rgba(123,47,255,0.2)' }}>{s}</span>)}
                                {c.skills.length > 4 && <span style={{ fontSize:11, color:'rgba(255,255,255,0.25)', padding:'3px 6px' }}>+{c.skills.length-4}</span>}
                              </div>
                            )}
                            <div style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginTop:4 }}>Click to expand →</div>
                          </div>
                        );
                      })
                }
              </>
          }
        </div>
      </div>

      {/* CANDIDATE DETAIL PANEL */}
      {detailCandidate && (
        <>
          <div onClick={() => setDetailCandidate(null)}
            style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:150 }} />
          <div style={{ position:'fixed', top:0, right:0, bottom:0, width:'min(500px,95vw)',
            background:'#0D0D0D', borderLeft:'1px solid rgba(255,255,255,0.08)',
            zIndex:200, overflowY:'auto', padding:'32px 28px', fontFamily:"'DM Sans',sans-serif" }}>

            {/* Header */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
              <div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#7B2FFF', marginBottom:6 }}>Candidate Profile</div>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, color:'white', marginBottom:4 }}>{detailCandidate.name}</h2>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.4)' }}>{detailCandidate.email} {detailCandidate.phone && `· ${detailCandidate.phone}`}</p>
              </div>
              <button onClick={() => setDetailCandidate(null)}
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, width:34, height:34, cursor:'pointer', fontSize:18, color:'rgba(255,255,255,0.5)', display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
            </div>

            {/* Status badge */}
            {(() => { const [bg,col,bdr] = statusStyle(detailCandidate.status); return (
              <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:bg, border:`1px solid ${bdr}`, borderRadius:99, padding:'5px 14px', marginBottom:24 }}>
                <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', color:col }}>{detailCandidate.status}</span>
              </div>
            ); })()}

            {/* Skills */}
            {detailCandidate.skills?.length > 0 && (
              <div style={{ marginBottom:20 }}>
                <div style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.35)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:10 }}>Skills</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                  {detailCandidate.skills.map(s => <span key={s} style={{ fontSize:12, fontWeight:600, padding:'4px 10px', borderRadius:4, background:'rgba(123,47,255,0.15)', color:'#C084FC', border:'1px solid rgba(123,47,255,0.25)' }}>{s}</span>)}
                </div>
              </div>
            )}

            {/* Recruiter note */}
            {detailCandidate.note && (
              <div style={{ marginBottom:24 }}>
                <div style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.35)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:10 }}>Recruiter Note</div>
                <div style={{ fontSize:13, color:'rgba(255,255,255,0.6)', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, padding:'14px 16px', lineHeight:1.65, fontStyle:'italic' }}>
                  "{detailCandidate.note}"
                </div>
              </div>
            )}

            {/* Submitted date */}
            <div style={{ marginBottom:28 }}>
              <div style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.35)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>Submitted</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)' }}>
                {new Date(detailCandidate.created_at).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' })}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {[
                ['Shortlist','shortlisted','rgba(0,212,170,0.1)','#00D4AA','rgba(0,212,170,0.3)'],
                ['Hire',     'hired',      'rgba(255,107,53,0.1)','#FF6B35','rgba(255,107,53,0.3)'],
                ['Reject',   'rejected',   'rgba(255,60,60,0.1)', '#FF3C3C','rgba(255,60,60,0.3)'],
              ].map(([label, status, bg2, col2, bdr]) => {
                const isActive = detailCandidate.status === status;
                return (
                  <button key={label}
                    onClick={() => updateStatus(detailCandidate.id, status, detailCandidate.cluster_id)}
                    disabled={isActive}
                    style={{ width:'100%', padding:'13px', borderRadius:9, fontSize:13, fontWeight:600,
                      cursor: isActive ? 'default' : 'pointer', fontFamily:"'DM Sans',sans-serif", transition:'all 0.2s',
                      background: isActive ? bg2 : 'rgba(255,255,255,0.04)',
                      color: isActive ? col2 : 'rgba(255,255,255,0.5)',
                      border: `1px solid ${isActive ? bdr : 'rgba(255,255,255,0.1)'}` }}>
                    {isActive ? `✓ ${label}ed` : label}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

    </div>
  );
}