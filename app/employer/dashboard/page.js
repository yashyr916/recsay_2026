'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function EmployerDashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ jobs:0, clusters:0, candidates:0, shortlisted:0, hired:0, rejected:0 });
  const [recentCandidates, setRecentCandidates] = useState([]);
  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else { setUser(data.user); fetchAll(data.user.id); }
    });
  }, []);

  const fetchAll = async (uid) => {
    const { data: jobs } = await supabase.from('jobs').select('*').eq('user_id', uid);
    setRecentJobs((jobs||[]).slice(0,5));
    const clusterIds = [...new Set((jobs||[]).filter(j=>j.cluster_id).map(j=>j.cluster_id))];
    let allCands = [];
    if (clusterIds.length > 0) {
      const { data: cands } = await supabase.from('candidates').select('*').in('cluster_id', clusterIds).order('created_at',{ascending:false});
      allCands = cands || [];
    }
    setRecentCandidates(allCands.slice(0,6));
    setStats({ jobs:(jobs||[]).length, clusters:clusterIds.length, candidates:allCands.length, shortlisted:allCands.filter(c=>c.status==='shortlisted').length, hired:allCands.filter(c=>c.status==='hired').length, rejected:allCands.filter(c=>c.status==='rejected').length });
  };

  const logout = async () => { await supabase.auth.signOut(); window.location.href='/login'; };

  const hireRate = stats.candidates>0 ? Math.round((stats.hired/stats.candidates)*100) : 0;
  const shortlistRate = stats.candidates>0 ? Math.round((stats.shortlisted/stats.candidates)*100) : 0;

  const statusStyle = (status) => {
    const map = { shortlisted:['rgba(0,212,170,0.1)','#00D4AA','rgba(0,212,170,0.3)'], hired:['rgba(255,107,53,0.1)','#FF6B35','rgba(255,107,53,0.3)'], rejected:['rgba(255,60,60,0.1)','#FF3C3C','rgba(255,60,60,0.3)'], submitted:['rgba(123,47,255,0.1)','#C084FC','rgba(123,47,255,0.3)'] };
    return map[status] || map.submitted;
  };

  if (!user) return <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontFamily:"'DM Sans',sans-serif" }}>Loading...</div>;

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
            {[['Dashboard','/employer/dashboard'],['Post JD','/employer'],['Candidates','/employer/candidates']].map(([l,h]) => (
              <a key={l} href={h} style={{ fontSize:13, padding:'6px 14px', borderRadius:6, textDecoration:'none', fontWeight:500, background: l==='Dashboard' ? 'rgba(123,47,255,0.15)' : 'transparent', color: l==='Dashboard' ? '#C084FC' : 'rgba(255,255,255,0.4)', border: l==='Dashboard' ? '1px solid rgba(123,47,255,0.3)' : '1px solid transparent' }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{user?.email}</span>
          <span style={{ fontSize:10, fontWeight:700, background:'rgba(123,47,255,0.2)', color:'#C084FC', padding:'3px 10px', borderRadius:99 }}>EMPLOYER</span>
          <button onClick={logout} style={{ fontSize:12, padding:'7px 16px', background:'transparent', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, color:'rgba(255,255,255,0.4)', cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>Sign out</button>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 40px' }}>
        <div style={{ marginBottom:40 }}>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:36, fontWeight:800, letterSpacing:'-1px', marginBottom:6 }}>Hiring Dashboard</h1>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)' }}>Overview of your recruitment activity</p>
        </div>

        {/* STATS */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:12, marginBottom:32 }}>
          {[
            [stats.jobs,'JDs Posted','#7B2FFF','rgba(123,47,255,0.1)'],
            [stats.clusters,'Clusters','#9B5FFF','rgba(155,95,255,0.1)'],
            [stats.candidates,'Candidates','white','rgba(255,255,255,0.05)'],
            [stats.shortlisted,'Shortlisted','#00D4AA','rgba(0,212,170,0.1)'],
            [stats.hired,'Hired','#FF6B35','rgba(255,107,53,0.1)'],
            [stats.rejected,'Rejected','#FF3C3C','rgba(255,60,60,0.1)'],
          ].map(([n,l,col,bg]) => (
            <div key={l} style={{ background:bg, border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'18px 14px', textAlign:'center' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:32, fontWeight:800, color:col, lineHeight:1, marginBottom:6 }}>{n}</div>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)', fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* PIPELINE */}
        <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:28, marginBottom:24 }}>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:20, fontWeight:800, marginBottom:24 }}>Pipeline Performance</h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:28 }}>
            {[['Hire Rate', hireRate, stats.hired, '#FF6B35'],['Shortlist Rate', shortlistRate, stats.shortlisted, '#00D4AA']].map(([label,rate,num,col]) => (
              <div key={label}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                  <span style={{ fontSize:13, fontWeight:500, color:'rgba(255,255,255,0.7)' }}>{label}</span>
                  <span style={{ fontSize:13, fontWeight:700, color:col }}>{rate}%</span>
                </div>
                <div style={{ height:8, background:'rgba(255,255,255,0.06)', borderRadius:99, overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${rate}%`, background:col, borderRadius:99, transition:'width 1s ease' }} />
                </div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginTop:6 }}>{num} out of {stats.candidates} candidates</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
          {/* RECENT CANDIDATES */}
          <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:24 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:700 }}>Recent Candidates</h3>
              <a href="/employer/candidates" style={{ fontSize:12, color:'#7B2FFF', textDecoration:'none', fontWeight:500 }}>View all →</a>
            </div>
            {recentCandidates.length===0
              ? <div style={{ textAlign:'center', padding:28, color:'rgba(255,255,255,0.25)', fontSize:13 }}>No candidates yet</div>
              : recentCandidates.map(c => {
                const [bg,col,border] = statusStyle(c.status);
                return (
                  <div key={c.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'11px 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
                    <div>
                      <div style={{ fontSize:14, fontWeight:500, color:'white' }}>{c.name}</div>
                      <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{c.email}</div>
                    </div>
                    <span style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', padding:'3px 10px', borderRadius:99, background:bg, color:col, border:`1px solid ${border}` }}>{c.status}</span>
                  </div>
                );
              })
            }
          </div>

          {/* RECENT JDS */}
          <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:24 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:700 }}>Your JDs</h3>
              <a href="/employer" style={{ fontSize:12, color:'#7B2FFF', textDecoration:'none', fontWeight:500 }}>Post new →</a>
            </div>
            {recentJobs.length===0
              ? <div style={{ textAlign:'center', padding:28, color:'rgba(255,255,255,0.25)', fontSize:13 }}>No JDs posted yet</div>
              : recentJobs.map(job => (
                <div key={job.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'11px 0', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <div style={{ fontSize:14, fontWeight:500, color:'white' }}>{job.title}</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{job.company_name}</div>
                  </div>
                  <div style={{ display:'flex', gap:5 }}>
                    <span style={{ fontSize:10, fontWeight:700, padding:'3px 8px', borderRadius:4, background:'rgba(123,47,255,0.15)', color:'#C084FC', textTransform:'uppercase' }}>{job.type}</span>
                    {job.cluster_id && <span style={{ fontSize:10, fontWeight:700, padding:'3px 8px', borderRadius:4, background:'rgba(0,212,170,0.1)', color:'#00D4AA' }}>✓</span>}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}