'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function RecruiterDashboardPage() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ clusters: 0, submitted: 0, shortlisted: 0, hired: 0, rejected: 0 });
  const [recentCandidates, setRecentCandidates] = useState([]);
  const [activeClusters, setActiveClusters] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else { setUser(data.user); fetchAll(data.user.id); }
    });
  }, []);

  const fetchAll = async (uid) => {
    // my candidates
    const { data: cands } = await supabase
      .from('candidates')
      .select('*')
      .eq('recruiter_id', uid)
      .order('created_at', { ascending: false });

    const allCands = cands || [];
    setRecentCandidates(allCands.slice(0, 6));

    // unique clusters I worked on
    const clusterIds = [...new Set(allCands.map(c => c.cluster_id).filter(Boolean))];

    // fetch those clusters
    let clusters = [];
    if (clusterIds.length > 0) {
      const { data: cls } = await supabase
        .from('clusters')
        .select('*')
        .in('id', clusterIds);
      clusters = cls || [];
    }
    setActiveClusters(clusters.slice(0, 4));

    setStats({
      clusters:    clusterIds.length,
      submitted:   allCands.length,
      shortlisted: allCands.filter(c => c.status === 'shortlisted').length,
      hired:       allCands.filter(c => c.status === 'hired').length,
      rejected:    allCands.filter(c => c.status === 'rejected').length,
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const placementRate = stats.submitted > 0 ? Math.round((stats.hired / stats.submitted) * 100) : 0;
  const shortlistRate = stats.submitted > 0 ? Math.round((stats.shortlisted / stats.submitted) * 100) : 0;

  const statusColor = (status) => {
    switch(status) {
      case 'shortlisted': return { bg:'#F0FDF4', color:'#166534', border:'#86EFAC' };
      case 'hired':       return { bg:'#FFF7ED', color:'#C2410C', border:'#FED7AA' };
      case 'rejected':    return { bg:'#FEF2F2', color:'#DC2626', border:'#FCA5A5' };
      default:            return { bg:'#EDE9FF', color:'#7B2FFF', border:'#C4B8FF' };
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
        <div style={{ display:'flex', alignItems:'center', gap:28 }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'white' }}>RecSay</span>
          <a href="/recruiter/dashboard" style={{ fontSize:13, color:'white', textDecoration:'none', fontWeight:600, borderBottom:'2px solid #7B2FFF', paddingBottom:2 }}>Dashboard</a>
          <a href="/recruiter" style={{ fontSize:13, color:'rgba(192,132,252,0.7)', textDecoration:'none' }}>Clusters</a>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <span style={{ fontSize:13, color:'rgba(192,132,252,0.8)' }}>{user.email}</span>
          <span style={{ fontSize:11, background:'rgba(123,47,255,0.3)', color:'#C084FC', padding:'4px 10px', borderRadius:99, fontWeight:600 }}>RECRUITER</span>
          <button onClick={logout} style={{ background:'transparent', border:'1px solid rgba(192,132,252,0.3)', color:'#C084FC', padding:'8px 18px', borderRadius:6, cursor:'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
            Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 32px' }}>

        {/* HEADER */}
        <div style={{ marginBottom:40 }}>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:40, fontWeight:700, color:'#1E0F45', marginBottom:8 }}>
            Recruiter Dashboard
          </h1>
          <p style={{ fontSize:15, color:'#8B7AAE' }}>Your placement activity and pipeline performance</p>
        </div>

        {/* BIG STATS */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14, marginBottom:40 }}>
          {[
            { num:stats.clusters,    label:'Clusters Worked', color:'#7B2FFF', bg:'#EDE9FF' },
            { num:stats.submitted,   label:'Candidates Sent', color:'#1E0F45', bg:'white' },
            { num:stats.shortlisted, label:'Shortlisted',     color:'#166534', bg:'#F0FDF4' },
            { num:stats.hired,       label:'Placed / Hired',  color:'#C2410C', bg:'#FFF7ED' },
            { num:`${placementRate}%`, label:'Placement Rate', color:'#5B21B6', bg:'#EDE9FF' },
          ].map(s => (
            <div key={s.label} style={{ background:s.bg, border:'1px solid #DDD6FF', borderRadius:12, padding:'20px 16px', textAlign:'center' }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, color:s.color, lineHeight:1, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:11, color:'#8B7AAE', fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* PERFORMANCE */}
        <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:32, marginBottom:32 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, color:'#1E0F45', marginBottom:24 }}>
            Placement Performance
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                <span style={{ fontSize:13, fontWeight:600, color:'#1E0F45' }}>Placement Rate</span>
                <span style={{ fontSize:13, fontWeight:700, color:'#C2410C' }}>{placementRate}%</span>
              </div>
              <div style={{ height:10, background:'#F8F6FF', borderRadius:99, overflow:'hidden', border:'1px solid #DDD6FF' }}>
                <div style={{ height:'100%', width:`${placementRate}%`, background:'linear-gradient(90deg,#7B2FFF,#C084FC)', borderRadius:99 }} />
              </div>
              <div style={{ fontSize:11, color:'#8B7AAE', marginTop:6 }}>{stats.hired} placed out of {stats.submitted} submitted</div>
            </div>
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                <span style={{ fontSize:13, fontWeight:600, color:'#1E0F45' }}>Shortlist Rate</span>
                <span style={{ fontSize:13, fontWeight:700, color:'#166534' }}>{shortlistRate}%</span>
              </div>
              <div style={{ height:10, background:'#F8F6FF', borderRadius:99, overflow:'hidden', border:'1px solid #DDD6FF' }}>
                <div style={{ height:'100%', width:`${shortlistRate}%`, background:'linear-gradient(90deg,#166534,#22C55E)', borderRadius:99 }} />
              </div>
              <div style={{ fontSize:11, color:'#8B7AAE', marginTop:6 }}>{stats.shortlisted} shortlisted out of {stats.submitted} submitted</div>
            </div>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>

          {/* ACTIVE CLUSTERS */}
          <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:28 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'#1E0F45' }}>Active Clusters</h2>
              <a href="/recruiter" style={{ fontSize:13, color:'#7B2FFF', textDecoration:'none', fontWeight:500 }}>View all →</a>
            </div>
            {activeClusters.length === 0
              ? <div style={{ textAlign:'center', padding:32, color:'#8B7AAE', fontSize:14 }}>No clusters worked yet</div>
              : activeClusters.map(cl => (
                <div key={cl.id} style={{ padding:'12px 0', borderTop:'1px solid #F8F6FF' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div>
                      <div style={{ fontSize:14, fontWeight:600, color:'#1E0F45' }}>{cl.title}</div>
                      <div style={{ fontSize:12, color:'#8B7AAE' }}>{cl.job_ids?.length || 0} employers</div>
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:5, background:'rgba(123,47,255,0.08)', border:'1px solid rgba(123,47,255,0.2)', borderRadius:99, padding:'3px 10px' }}>
                      <span style={{ width:5, height:5, borderRadius:'50%', background:'#10B981', display:'inline-block' }} />
                      <span style={{ fontSize:10, fontWeight:600, color:'#7B2FFF' }}>LIVE</span>
                    </div>
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginTop:8 }}>
                    {(cl.keywords || []).slice(0,4).map(k => (
                      <span key={k} style={{ background:'#EDE9FF', border:'1px solid #C4B8FF', borderRadius:4, padding:'2px 6px', fontSize:10, fontWeight:600, color:'#7B2FFF' }}>{k}</span>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>

          {/* RECENT CANDIDATES */}
          <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:28 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'#1E0F45' }}>My Candidates</h2>
              <a href="/recruiter" style={{ fontSize:13, color:'#7B2FFF', textDecoration:'none', fontWeight:500 }}>Submit more →</a>
            </div>
            {recentCandidates.length === 0
              ? <div style={{ textAlign:'center', padding:32, color:'#8B7AAE', fontSize:14 }}>No candidates submitted yet</div>
              : recentCandidates.map(c => {
                  const sc = statusColor(c.status);
                  return (
                    <div key={c.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'11px 0', borderTop:'1px solid #F8F6FF' }}>
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
        </div>
      </div>
    </div>
  );
}