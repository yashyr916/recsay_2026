'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function EmployerDashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ jobs: 0, clusters: 0, candidates: 0, shortlisted: 0, hired: 0, rejected: 0 });
  const [recentCandidates, setRecentCandidates] = useState([]);
  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else { setUser(data.user); fetchAll(data.user.id); }
    });
  }, []);

  const fetchAll = async (uid) => {
    // fetch jobs
    const { data: jobs } = await supabase.from('jobs').select('*').eq('user_id', uid);
    setRecentJobs((jobs || []).slice(0, 5));

    const clusterIds = [...new Set((jobs || []).filter(j => j.cluster_id).map(j => j.cluster_id))];

    // fetch candidates for all clusters
    let allCandidates = [];
    if (clusterIds.length > 0) {
      const { data: cands } = await supabase
        .from('candidates')
        .select('*')
        .in('cluster_id', clusterIds)
        .order('created_at', { ascending: false });
      allCandidates = cands || [];
    }

    setRecentCandidates(allCandidates.slice(0, 6));
    setStats({
      jobs:        (jobs || []).length,
      clusters:    clusterIds.length,
      candidates:  allCandidates.length,
      shortlisted: allCandidates.filter(c => c.status === 'shortlisted').length,
      hired:       allCandidates.filter(c => c.status === 'hired').length,
      rejected:    allCandidates.filter(c => c.status === 'rejected').length,
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const statusColor = (status) => {
    switch(status) {
      case 'shortlisted': return { bg:'#F0FDF4', color:'#166534', border:'#86EFAC' };
      case 'hired':       return { bg:'#FFF7ED', color:'#C2410C', border:'#FED7AA' };
      case 'rejected':    return { bg:'#FEF2F2', color:'#DC2626', border:'#FCA5A5' };
      default:            return { bg:'#EDE9FF', color:'#7B2FFF', border:'#C4B8FF' };
    }
  };

  const hireRate = stats.candidates > 0 ? Math.round((stats.hired / stats.candidates) * 100) : 0;
  const shortlistRate = stats.candidates > 0 ? Math.round((stats.shortlisted / stats.candidates) * 100) : 0;

  if (!user) return (
    <div style={{ minHeight:'100vh', background:'#12082E', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontFamily:"'DM Sans',sans-serif" }}>
      Loading...
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', background:'#F8F6FF', fontFamily:"'DM Sans',sans-serif" }}>

      {/* NAV */}
      <div style={{ background:'#12082E', padding:'18px 40px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:28 }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'white' }}>RecSay</span>
          <a href="/employer/dashboard" style={{ fontSize:13, color:'white', textDecoration:'none', fontWeight:600, borderBottom:'2px solid #7B2FFF', paddingBottom:2 }}>Dashboard</a>
          <a href="/employer" style={{ fontSize:13, color:'rgba(192,132,252,0.7)', textDecoration:'none' }}>Post JD</a>
          <a href="/employer/candidates" style={{ fontSize:13, color:'rgba(192,132,252,0.7)', textDecoration:'none' }}>Candidates</a>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <span style={{ fontSize:13, color:'rgba(192,132,252,0.8)' }}>{user.email}</span>
          <span style={{ fontSize:11, background:'rgba(123,47,255,0.3)', color:'#C084FC', padding:'4px 10px', borderRadius:99, fontWeight:600 }}>EMPLOYER</span>
          <button onClick={logout} style={{ background:'transparent', border:'1px solid rgba(192,132,252,0.3)', color:'#C084FC', padding:'8px 18px', borderRadius:6, cursor:'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
            Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 32px' }}>

        {/* HEADER */}
        <div style={{ marginBottom:40 }}>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:40, fontWeight:700, color:'#1E0F45', marginBottom:8 }}>
            Hiring Dashboard
          </h1>
          <p style={{ fontSize:15, color:'#8B7AAE' }}>Overview of your recruitment activity on RecSay</p>
        </div>

        {/* BIG STATS */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:14, marginBottom:40 }}>
          {[
            { num:stats.jobs,        label:'JDs Posted',    color:'#7B2FFF', bg:'#EDE9FF' },
            { num:stats.clusters,    label:'Clusters',      color:'#5B21B6', bg:'#EDE9FF' },
            { num:stats.candidates,  label:'Candidates',    color:'#1E0F45', bg:'white' },
            { num:stats.shortlisted, label:'Shortlisted',   color:'#166534', bg:'#F0FDF4' },
            { num:stats.hired,       label:'Hired',         color:'#C2410C', bg:'#FFF7ED' },
            { num:stats.rejected,    label:'Rejected',      color:'#DC2626', bg:'#FEF2F2' },
          ].map(s => (
            <div key={s.label} style={{ background:s.bg, border:'1px solid #DDD6FF', borderRadius:12, padding:'20px 16px', textAlign:'center' }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, color:s.color, lineHeight:1, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:11, color:'#8B7AAE', fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* PROGRESS BARS */}
        <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:32, marginBottom:32 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, color:'#1E0F45', marginBottom:24 }}>
            Pipeline Performance
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
            {/* Hire rate */}
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                <span style={{ fontSize:13, fontWeight:600, color:'#1E0F45' }}>Hire Rate</span>
                <span style={{ fontSize:13, fontWeight:700, color:'#C2410C' }}>{hireRate}%</span>
              </div>
              <div style={{ height:10, background:'#F8F6FF', borderRadius:99, overflow:'hidden', border:'1px solid #DDD6FF' }}>
                <div style={{ height:'100%', width:`${hireRate}%`, background:'linear-gradient(90deg,#C2410C,#FB923C)', borderRadius:99, transition:'width 1s ease' }} />
              </div>
              <div style={{ fontSize:11, color:'#8B7AAE', marginTop:6 }}>{stats.hired} hired out of {stats.candidates} candidates</div>
            </div>
            {/* Shortlist rate */}
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                <span style={{ fontSize:13, fontWeight:600, color:'#1E0F45' }}>Shortlist Rate</span>
                <span style={{ fontSize:13, fontWeight:700, color:'#166534' }}>{shortlistRate}%</span>
              </div>
              <div style={{ height:10, background:'#F8F6FF', borderRadius:99, overflow:'hidden', border:'1px solid #DDD6FF' }}>
                <div style={{ height:'100%', width:`${shortlistRate}%`, background:'linear-gradient(90deg,#166534,#22C55E)', borderRadius:99, transition:'width 1s ease' }} />
              </div>
              <div style={{ fontSize:11, color:'#8B7AAE', marginTop:6 }}>{stats.shortlisted} shortlisted out of {stats.candidates} candidates</div>
            </div>
            {/* Pipeline donut — SVG */}
            <div style={{ gridColumn:'1/-1', display:'flex', gap:40, alignItems:'center', paddingTop:16, borderTop:'1px solid #DDD6FF' }}>
              <svg width="120" height="120" viewBox="0 0 120 120" style={{ flexShrink:0 }}>
                {stats.candidates > 0 ? (() => {
                  const total = stats.candidates;
                  const r = 48; const circ = 2 * Math.PI * r;
                  const segments = [
                    { val: stats.hired,       color:'#FB923C' },
                    { val: stats.shortlisted, color:'#22C55E' },
                    { val: stats.rejected,    color:'#F87171' },
                    { val: stats.candidates - stats.hired - stats.shortlisted - stats.rejected, color:'#C4B8FF' },
                  ];
                  let offset = 0;
                  return segments.map((seg, i) => {
                    const pct = seg.val / total;
                    const dash = pct * circ;
                    const el = (
                      <circle key={i} cx="60" cy="60" r={r} fill="none"
                        stroke={seg.color} strokeWidth="16"
                        strokeDasharray={`${dash} ${circ - dash}`}
                        strokeDashoffset={-offset}
                        transform="rotate(-90 60 60)"
                      />
                    );
                    offset += dash;
                    return el;
                  });
                })() : <circle cx="60" cy="60" r="48" fill="none" stroke="#DDD6FF" strokeWidth="16"/>}
                <text x="60" y="58" textAnchor="middle" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, fill:'#1E0F45' }}>{stats.candidates}</text>
                <text x="60" y="72" textAnchor="middle" style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, fill:'#8B7AAE' }}>total</text>
              </svg>
              <div style={{ display:'flex', flexWrap:'wrap', gap:16 }}>
                {[
                  { label:'Hired',      num:stats.hired,       color:'#FB923C' },
                  { label:'Shortlisted',num:stats.shortlisted, color:'#22C55E' },
                  { label:'Rejected',   num:stats.rejected,    color:'#F87171' },
                  { label:'Pending',    num:stats.candidates - stats.hired - stats.shortlisted - stats.rejected, color:'#C4B8FF' },
                ].map(item => (
                  <div key={item.label} style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <div style={{ width:10, height:10, borderRadius:2, background:item.color, flexShrink:0 }} />
                    <span style={{ fontSize:13, color:'#5A4880' }}>{item.label}: <strong style={{ color:'#1E0F45' }}>{item.num}</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>

          {/* RECENT CANDIDATES */}
          <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:28 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'#1E0F45' }}>Recent Candidates</h2>
              <a href="/employer/candidates" style={{ fontSize:13, color:'#7B2FFF', textDecoration:'none', fontWeight:500 }}>View all →</a>
            </div>
            {recentCandidates.length === 0
              ? <div style={{ textAlign:'center', padding:32, color:'#8B7AAE', fontSize:14 }}>No candidates yet</div>
              : recentCandidates.map(c => {
                  const sc = statusColor(c.status);
                  return (
                    <div key={c.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderTop:'1px solid #F8F6FF' }}>
                      <div>
                        <div style={{ fontSize:14, fontWeight:600, color:'#1E0F45' }}>{c.name}</div>
                        <div style={{ fontSize:12, color:'#8B7AAE' }}>{c.email}</div>
                      </div>
                      <span style={{ fontSize:10, fontWeight:600, textTransform:'uppercase', padding:'3px 10px', borderRadius:99, background:sc.bg, color:sc.color, border:`1px solid ${sc.border}` }}>
                        {c.status}
                      </span>
                    </div>
                  );
                })
            }
          </div>

          {/* RECENT JDS */}
          <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:28 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'#1E0F45' }}>Your JDs</h2>
              <a href="/employer" style={{ fontSize:13, color:'#7B2FFF', textDecoration:'none', fontWeight:500 }}>Post new →</a>
            </div>
            {recentJobs.length === 0
              ? <div style={{ textAlign:'center', padding:32, color:'#8B7AAE', fontSize:14 }}>No JDs posted yet</div>
              : recentJobs.map(job => (
                <div key={job.id} style={{ padding:'12px 0', borderTop:'1px solid #F8F6FF' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div>
                      <div style={{ fontSize:14, fontWeight:600, color:'#1E0F45' }}>{job.title}</div>
                      <div style={{ fontSize:12, color:'#8B7AAE' }}>{job.company_name}</div>
                    </div>
                    <div style={{ display:'flex', gap:6 }}>
                      <span style={{ fontSize:10, fontWeight:600, padding:'3px 8px', borderRadius:4, background:'#EDE9FF', color:'#7B2FFF', border:'1px solid #C4B8FF', textTransform:'uppercase' }}>
                        {job.type}
                      </span>
                      {job.cluster_id && <span style={{ fontSize:10, fontWeight:600, padding:'3px 8px', borderRadius:4, background:'#F0FDF4', color:'#166534', border:'1px solid #86EFAC' }}>✓</span>}
                    </div>
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