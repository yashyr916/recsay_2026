'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function RecruiterDashboard() {
  const [user, setUser] = useState(null);
  const [clusters, setClusters] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [candidate, setCandidate] = useState({
    name: '', email: '', phone: '', skills: '', note: ''
  });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else {
        setUser(data.user);
        fetchClusters();
      }
    });
  }, []);

  const fetchClusters = async () => {
    const { data } = await supabase
      .from('clusters')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setClusters(data);
  };

  const handleSubmitCandidate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from('candidates').insert([{
      name:         candidate.name,
      email:        candidate.email,
      phone:        candidate.phone,
      skills:       candidate.skills.split(',').map(s => s.trim()),
      note:         candidate.note,
      cluster_id:   selectedCluster.id,
      recruiter_id: user.id,
      status:       'submitted',
    }]);

    if (!error) {
      setSuccess(true);
      setCandidate({ name:'', email:'', phone:'', skills:'', note:'' });
      setTimeout(() => { setShowForm(false); setSuccess(false); }, 2000);
    }
    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    border: '1.5px solid #DDD6FF', borderRadius: 8,
    fontSize: 14, outline: 'none',
    fontFamily: "'DM Sans',sans-serif",
    color: '#1E0F45', background: 'white',
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
        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'white' }}>RecSay</span>
        <div style={{ display:'flex', alignItems:'center', gap:20 }}>
          <span style={{ fontSize:13, color:'rgba(192,132,252,0.8)' }}>{user.email}</span>
          <span style={{ fontSize:11, background:'rgba(123,47,255,0.3)', color:'#C084FC', padding:'4px 10px', borderRadius:99, fontWeight:600 }}>RECRUITER</span>
          <button onClick={logout} style={{ background:'transparent', border:'1px solid rgba(192,132,252,0.3)', color:'#C084FC', padding:'8px 18px', borderRadius:6, cursor:'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
            Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'48px 32px' }}>

        {/* HEADER */}
        <div style={{ marginBottom:40 }}>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:40, fontWeight:700, color:'#1E0F45', marginBottom:8 }}>
            Clustered Job Roles
          </h1>
          <p style={{ fontSize:15, color:'#8B7AAE' }}>
            {clusters.length} active cluster{clusters.length !== 1 ? 's' : ''} — submit candidates to reach multiple employers at once
          </p>
        </div>

        {/* STATS ROW */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:40 }}>
          {[
            { num: clusters.length,                          label:'Active Clusters' },
            { num: clusters.reduce((a,c) => a + (c.job_ids?.length || 0), 0), label:'Total JDs Clustered' },
            { num: '70%',                                    label:'Match Threshold' },
          ].map(s => (
            <div key={s.label} style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:'20px 24px', textAlign:'center' }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, background:'linear-gradient(135deg,#7B2FFF,#C084FC)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', lineHeight:1, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:12, color:'#8B7AAE', fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CLUSTER CARDS */}
        {clusters.length === 0
          ? <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:48, textAlign:'center', color:'#8B7AAE', fontSize:15 }}>
              No clusters yet. Employers need to upload JDs first.
            </div>
          : <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20 }}>
              {clusters.map(cluster => (
                <div key={cluster.id} style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:14, overflow:'hidden', boxShadow:'0 2px 16px rgba(123,47,255,0.05)', transition:'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(123,47,255,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 16px rgba(123,47,255,0.05)'; }}
                >
                  {/* Card header */}
                  <div style={{ background:'linear-gradient(135deg,#1E0F45,#7B2FFF)', padding:'20px 24px' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                      <div style={{ fontSize:9, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)' }}>
                        Active Cluster
                      </div>
                      <div style={{ display:'flex', alignItems:'center', gap:6, background:'rgba(255,255,255,0.15)', borderRadius:99, padding:'3px 10px' }}>
                        <span style={{ width:6, height:6, borderRadius:'50%', background:'#10B981', display:'inline-block', animation:'ping 2s infinite' }} />
                        <span style={{ fontSize:10, color:'white', fontWeight:600 }}>LIVE</span>
                      </div>
                    </div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'white', lineHeight:1.2 }}>
                      {cluster.title}
                    </div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.6)', marginTop:6 }}>
                      {cluster.job_ids?.length || 0} employer{(cluster.job_ids?.length || 0) !== 1 ? 's' : ''} matched
                    </div>
                  </div>

                  {/* Keywords */}
                  <div style={{ padding:'16px 24px', borderBottom:'1px solid #DDD6FF' }}>
                    <div style={{ fontSize:10, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'#8B7AAE', marginBottom:10 }}>
                      Key Skills
                    </div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                      {(cluster.keywords || []).slice(0, 8).map(k => (
                        <span key={k} style={{ background:'#EDE9FF', border:'1px solid #C4B8FF', borderRadius:4, padding:'3px 8px', fontSize:11, fontWeight:600, color:'#7B2FFF' }}>
                          {k}
                        </span>
                      ))}
                      {(cluster.keywords || []).length > 8 && (
                        <span style={{ background:'#F8F6FF', border:'1px solid #DDD6FF', borderRadius:4, padding:'3px 8px', fontSize:11, color:'#8B7AAE' }}>
                          +{cluster.keywords.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action */}
                  <div style={{ padding:'16px 24px' }}>
                    <button
                      onClick={() => { setSelectedCluster(cluster); setShowForm(true); setSuccess(false); }}
                      style={{ width:'100%', padding:'11px', background:'linear-gradient(135deg,#7B2FFF,#C084FC)', color:'white', border:'none', borderRadius:8, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif", boxShadow:'0 4px 14px rgba(123,47,255,0.25)' }}>
                      Submit Candidate →
                    </button>
                  </div>
                </div>
              ))}
            </div>
        }
      </div>

      {/* CANDIDATE SUBMIT MODAL */}
      {showForm && selectedCluster && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:200, display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}
          onClick={e => { if (e.target === e.currentTarget) setShowForm(false); }}>
          <div style={{ background:'white', borderRadius:20, padding:40, width:'100%', maxWidth:480, boxShadow:'0 20px 60px rgba(0,0,0,0.3)', maxHeight:'90vh', overflowY:'auto' }}>

            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
              <div>
                <div style={{ fontSize:10, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'#7B2FFF', marginBottom:6 }}>
                  Submitting for
                </div>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700, color:'#1E0F45' }}>
                  {selectedCluster.title}
                </h2>
                <p style={{ fontSize:13, color:'#8B7AAE', marginTop:4 }}>
                  Reaches {selectedCluster.job_ids?.length || 0} employer{(selectedCluster.job_ids?.length || 0) !== 1 ? 's' : ''} simultaneously
                </p>
              </div>
              <button onClick={() => setShowForm(false)}
                style={{ background:'#F8F6FF', border:'1px solid #DDD6FF', borderRadius:8, width:36, height:36, cursor:'pointer', fontSize:18, color:'#8B7AAE', display:'flex', alignItems:'center', justifyContent:'center' }}>
                ×
              </button>
            </div>

            {success
              ? <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:10, padding:24, textAlign:'center' }}>
                  <div style={{ fontSize:32, marginBottom:8 }}>🎉</div>
                  <p style={{ color:'#166534', fontWeight:600, fontSize:15 }}>Candidate submitted!</p>
                  <p style={{ color:'#166534', fontSize:13, marginTop:4 }}>Reaching {selectedCluster.job_ids?.length || 0} employers now.</p>
                </div>
              : <form onSubmit={handleSubmitCandidate}>
                  <div style={{ marginBottom:16 }}>
                    <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Full Name</label>
                    <input style={inputStyle} placeholder="Candidate full name" required
                      value={candidate.name} onChange={e => setCandidate({...candidate, name:e.target.value})} />
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Email</label>
                    <input style={inputStyle} type="email" placeholder="candidate@email.com" required
                      value={candidate.email} onChange={e => setCandidate({...candidate, email:e.target.value})} />
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Phone</label>
                    <input style={inputStyle} placeholder="+91 XXXXX XXXXX"
                      value={candidate.phone} onChange={e => setCandidate({...candidate, phone:e.target.value})} />
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Skills <span style={{ color:'#8B7AAE', fontWeight:400 }}>(comma separated)</span></label>
                    <input style={inputStyle} placeholder="Python, Django, AWS, PostgreSQL"
                      value={candidate.skills} onChange={e => setCandidate({...candidate, skills:e.target.value})} />
                  </div>
                  <div style={{ marginBottom:24 }}>
                    <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Recruiter Note</label>
                    <textarea style={{ ...inputStyle, height:80, resize:'vertical' }}
                      placeholder="Any relevant context about this candidate..."
                      value={candidate.note} onChange={e => setCandidate({...candidate, note:e.target.value})} />
                  </div>
                  <button type="submit" disabled={loading}
                    style={{ width:'100%', padding:14, background:'linear-gradient(135deg,#7B2FFF,#C084FC)', color:'white', border:'none', borderRadius:8, fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif", boxShadow:'0 4px 16px rgba(123,47,255,0.3)' }}>
                    {loading ? 'Submitting...' : `Submit to ${selectedCluster.job_ids?.length || 0} Employers →`}
                  </button>
                </form>
            }
          </div>
        </div>
      )}
    </div>
  );
}