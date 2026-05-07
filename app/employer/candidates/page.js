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
      else {
        setUser(data.user);
        fetchJobs(data.user.id);
      }
    });
  }, []);

  const fetchJobs = async (uid) => {
    const { data } = await supabase
      .from('jobs')
      .select('*')
      .eq('user_id', uid)
      .order('created_at', { ascending: false });
    if (data) setJobs(data);
  };

  const fetchCandidates = async (job) => {
    setSelectedJob(job);
    setLoading(true);
    const { data } = await supabase
      .from('candidates')
      .select('*')
      .eq('cluster_id', job.cluster_id)
      .order('created_at', { ascending: false });
    if (data) setCandidates(data);
    setLoading(false);
  };

  const updateStatus = async (candidateId, newStatus) => {
    await supabase
      .from('candidates')
      .update({ status: newStatus })
      .eq('id', candidateId);
    // refresh
    fetchCandidates(selectedJob);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const statusColor = (status) => {
    switch(status) {
      case 'submitted':  return { bg:'#EDE9FF', color:'#7B2FFF', border:'#C4B8FF' };
      case 'shortlisted':return { bg:'#F0FDF4', color:'#166534', border:'#86EFAC' };
      case 'rejected':   return { bg:'#FEF2F2', color:'#DC2626', border:'#FCA5A5' };
      case 'hired':      return { bg:'#FFF7ED', color:'#C2410C', border:'#FED7AA' };
      default:           return { bg:'#F8F6FF', color:'#8B7AAE', border:'#DDD6FF' };
    }
  };

  if (!user) return (
    <div style={{ minHeight:'100vh', background:'#12082E', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontFamily:"'DM Sans',sans-serif" }}>
      Loading...
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', background:'#F8F6FF', fontFamily:"'DM Sans',sans-serif" }}>

      {/* NAV */}
      <div style={{ background:'#12082E', padding:'18px 40px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:24 }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'white' }}>RecSay</span>
          <a href="/employer" style={{ fontSize:13, color:'rgba(192,132,252,0.7)', textDecoration:'none' }}>← Post JD</a>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <span style={{ fontSize:13, color:'rgba(192,132,252,0.8)' }}>{user.email}</span>
          <span style={{ fontSize:11, background:'rgba(123,47,255,0.3)', color:'#C084FC', padding:'4px 10px', borderRadius:99, fontWeight:600 }}>EMPLOYER</span>
          <button onClick={logout} style={{ background:'transparent', border:'1px solid rgba(192,132,252,0.3)', color:'#C084FC', padding:'8px 18px', borderRadius:6, cursor:'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
            Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 32px', display:'grid', gridTemplateColumns:'320px 1fr', gap:32, alignItems:'start' }}>

        {/* LEFT — JOB LIST */}
        <div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700, color:'#1E0F45', marginBottom:6 }}>
            Your JDs
          </h2>
          <p style={{ fontSize:13, color:'#8B7AAE', marginBottom:20 }}>
            Select a JD to see candidates
          </p>

          {jobs.length === 0
            ? <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:24, textAlign:'center', color:'#8B7AAE', fontSize:13 }}>
                No JDs posted yet. <a href="/employer" style={{ color:'#7B2FFF' }}>Post one →</a>
              </div>
            : jobs.map(job => (
              <div key={job.id}
                onClick={() => fetchCandidates(job)}
                style={{
                  background: selectedJob?.id === job.id ? '#1E0F45' : 'white',
                  border: selectedJob?.id === job.id ? '1.5px solid #7B2FFF' : '1px solid #DDD6FF',
                  borderRadius:12, padding:'16px 20px', marginBottom:10,
                  cursor:'pointer', transition:'all 0.2s',
                  boxShadow: selectedJob?.id === job.id ? '0 4px 20px rgba(123,47,255,0.2)' : 'none',
                }}>
                <div style={{ fontSize:15, fontWeight:600, color: selectedJob?.id === job.id ? 'white' : '#1E0F45', marginBottom:4 }}>
                  {job.title}
                </div>
                <div style={{ fontSize:12, color: selectedJob?.id === job.id ? 'rgba(192,132,252,0.8)' : '#8B7AAE', marginBottom:8 }}>
                  {job.company_name}
                </div>
                <div style={{ display:'flex', gap:6 }}>
                  <span style={{ fontSize:10, fontWeight:600, textTransform:'uppercase', padding:'3px 8px', borderRadius:4,
                    background: selectedJob?.id === job.id ? 'rgba(123,47,255,0.3)' : '#EDE9FF',
                    color: selectedJob?.id === job.id ? '#C084FC' : '#7B2FFF',
                    border: `1px solid ${selectedJob?.id === job.id ? 'rgba(192,132,252,0.3)' : '#C4B8FF'}`,
                  }}>
                    {job.type}
                  </span>
                  {job.cluster_id
                    ? <span style={{ fontSize:10, fontWeight:600, padding:'3px 8px', borderRadius:4, background:'#F0FDF4', color:'#166534', border:'1px solid #86EFAC' }}>Clustered ✓</span>
                    : <span style={{ fontSize:10, fontWeight:600, padding:'3px 8px', borderRadius:4, background:'#FEF2F2', color:'#DC2626', border:'1px solid #FCA5A5' }}>Not clustered</span>
                  }
                </div>
              </div>
            ))
          }
        </div>

        {/* RIGHT — CANDIDATES */}
        <div>
          {!selectedJob
            ? <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:60, textAlign:'center' }}>
                <div style={{ fontSize:48, marginBottom:16 }}>👈</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, color:'#1E0F45', marginBottom:8 }}>
                  Select a JD
                </h3>
                <p style={{ fontSize:14, color:'#8B7AAE' }}>Click any JD on the left to see candidates submitted for that role</p>
              </div>
            : <>
                {/* Header */}
                <div style={{ marginBottom:24 }}>
                  <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:32, fontWeight:700, color:'#1E0F45', marginBottom:4 }}>
                    {selectedJob.title}
                  </h2>
                  <p style={{ fontSize:14, color:'#8B7AAE' }}>
                    {selectedJob.company_name} · {candidates.length} candidate{candidates.length !== 1 ? 's' : ''} in pipeline
                  </p>
                </div>

                {/* Stats */}
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:28 }}>
                  {[
                    { label:'Total',       num: candidates.length,                                        color:'#7B2FFF' },
                    { label:'Shortlisted', num: candidates.filter(c=>c.status==='shortlisted').length,    color:'#166534' },
                    { label:'Rejected',    num: candidates.filter(c=>c.status==='rejected').length,       color:'#DC2626' },
                    { label:'Hired',       num: candidates.filter(c=>c.status==='hired').length,          color:'#C2410C' },
                  ].map(s => (
                    <div key={s.label} style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:10, padding:'14px 16px', textAlign:'center' }}>
                      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, fontWeight:700, color:s.color, lineHeight:1, marginBottom:4 }}>{s.num}</div>
                      <div style={{ fontSize:11, color:'#8B7AAE', fontWeight:500 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Candidates list */}
                {loading
                  ? <div style={{ textAlign:'center', padding:40, color:'#8B7AAE' }}>Loading candidates...</div>
                  : candidates.length === 0
                    ? <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:48, textAlign:'center' }}>
                        <div style={{ fontSize:36, marginBottom:12 }}>🕐</div>
                        <p style={{ color:'#8B7AAE', fontSize:15 }}>No candidates yet for this cluster.</p>
                        <p style={{ color:'#C4B8FF', fontSize:13, marginTop:6 }}>Recruiters will submit candidates soon.</p>
                      </div>
                    : candidates.map(c => {
                        const sc = statusColor(c.status);
                        return (
                          <div key={c.id} style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:24, marginBottom:14, boxShadow:'0 2px 12px rgba(123,47,255,0.04)' }}>
                            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                              <div>
                                <div style={{ fontSize:17, fontWeight:600, color:'#1E0F45', marginBottom:2 }}>{c.name}</div>
                                <div style={{ fontSize:13, color:'#8B7AAE' }}>{c.email} {c.phone && `· ${c.phone}`}</div>
                              </div>
                              <span style={{ fontSize:11, fontWeight:600, textTransform:'uppercase', padding:'4px 12px', borderRadius:99, background:sc.bg, color:sc.color, border:`1px solid ${sc.border}` }}>
                                {c.status}
                              </span>
                            </div>

                            {/* Skills */}
                            {c.skills && c.skills.length > 0 && (
                              <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:12 }}>
                                {c.skills.map(s => (
                                  <span key={s} style={{ background:'#EDE9FF', border:'1px solid #C4B8FF', borderRadius:4, padding:'3px 8px', fontSize:11, fontWeight:600, color:'#7B2FFF' }}>{s}</span>
                                ))}
                              </div>
                            )}

                            {/* Note */}
                            {c.note && (
                              <div style={{ fontSize:13, color:'#5A4880', background:'#F8F6FF', borderRadius:8, padding:'10px 14px', marginBottom:14, fontStyle:'italic' }}>
                                &ldquo;{c.note}&rdquo;
                              </div>
                            )}

                            {/* Actions */}
                            <div style={{ display:'flex', gap:8 }}>
                              <button onClick={() => updateStatus(c.id, 'shortlisted')}
                                disabled={c.status === 'shortlisted'}
                                style={{ flex:1, padding:'9px', borderRadius:7, border:'1.5px solid #86EFAC', background: c.status==='shortlisted' ? '#F0FDF4' : 'transparent', color:'#166534', fontSize:12, fontWeight:600, cursor: c.status==='shortlisted' ? 'default' : 'pointer', fontFamily:"'DM Sans',sans-serif", transition:'all 0.2s' }}>
                                {c.status === 'shortlisted' ? '✓ Shortlisted' : 'Shortlist'}
                              </button>
                              <button onClick={() => updateStatus(c.id, 'hired')}
                                disabled={c.status === 'hired'}
                                style={{ flex:1, padding:'9px', borderRadius:7, border:'1.5px solid #FED7AA', background: c.status==='hired' ? '#FFF7ED' : 'transparent', color:'#C2410C', fontSize:12, fontWeight:600, cursor: c.status==='hired' ? 'default' : 'pointer', fontFamily:"'DM Sans',sans-serif", transition:'all 0.2s' }}>
                                {c.status === 'hired' ? '✓ Hired' : 'Mark Hired'}
                              </button>
                              <button onClick={() => updateStatus(c.id, 'rejected')}
                                disabled={c.status === 'rejected'}
                                style={{ flex:1, padding:'9px', borderRadius:7, border:'1.5px solid #FCA5A5', background: c.status==='rejected' ? '#FEF2F2' : 'transparent', color:'#DC2626', fontSize:12, fontWeight:600, cursor: c.status==='rejected' ? 'default' : 'pointer', fontFamily:"'DM Sans',sans-serif", transition:'all 0.2s' }}>
                                {c.status === 'rejected' ? '✗ Rejected' : 'Reject'}
                              </button>
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