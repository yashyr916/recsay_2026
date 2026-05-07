'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function EmployerDashboard() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    title: '',
    company_name: '',
    type: 'tech',
    description: '',
  });

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

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  try {
    // Step 1 — extract keywords
    const res = await fetch('/api/extract-keywords', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: form.description }),
    });
    const data = await res.json();
    const keywords = data.keywords || [];

    // Step 2 — save JD to Supabase
    const { data: insertedJob, error } = await supabase
      .from('jobs')
      .insert([{
        title:        form.title,
        company_name: form.company_name,
        type:         form.type,
        description:  form.description,
        user_id:      user.id,
        keywords:     keywords,
        status:       'active',
      }])
      .select()
      .single();

    if (error) throw error;

    // Step 3 — run clustering on the new job
    await fetch('/api/cluster-jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ job_id: insertedJob.id }),
    });

    setSuccess(true);
    setForm({ title:'', company_name:'', type:'tech', description:'' });
    fetchJobs(user.id);

  } catch (err) {
    console.error('Error:', err);
  }

  setLoading(false);
};
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    border: '1.5px solid #DDD6FF', borderRadius: 8,
    fontSize: 14, outline: 'none',
    fontFamily: "'DM Sans',sans-serif",
    color: '#1E0F45', background: 'white',
  };

  const labelStyle = {
    fontSize: 12, fontWeight: 600,
    color: '#5A4880', display: 'block', marginBottom: 6,
  };

  if (!user) return (
    <div style={{ minHeight:'100vh', background:'#12082E', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>
      Loading...
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', background:'#F8F6FF', fontFamily:"'DM Sans',sans-serif" }}>

      {/* NAV */}
      <div style={{ background:'#12082E', padding:'18px 40px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:28 }}>
  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'white' }}>RecSay</span>
  <a href="/employer" style={{ fontSize:13, color: 'rgba(192,132,252,0.8)', textDecoration:'none', fontWeight:500 }}>Post JD</a>
  <a href="/employer/candidates" style={{ fontSize:13, color:'rgba(192,132,252,0.8)', textDecoration:'none', fontWeight:500 }}>Candidates</a>
</div>
        <div style={{ display:'flex', alignItems:'center', gap:20 }}>
          <span style={{ fontSize:13, color:'rgba(192,132,252,0.8)' }}>{user.email}</span>
          <button onClick={logout} style={{ background:'transparent', border:'1px solid rgba(192,132,252,0.3)', color:'#C084FC', padding:'8px 18px', borderRadius:6, cursor:'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
            Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'48px 32px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}>

        {/* LEFT — UPLOAD FORM */}
        <div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, color:'#1E0F45', marginBottom:6 }}>
            Post a Job
          </h1>
          <p style={{ fontSize:14, color:'#8B7AAE', marginBottom:32 }}>
            Upload your JD — RecSay will cluster it with similar roles automatically.
          </p>

          {success && (
            <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:8, padding:'14px 18px', marginBottom:24, fontSize:13, color:'#166534', fontWeight:500 }}>
              ✅ JD uploaded successfully! Keyword extraction coming next.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:16, padding:32, boxShadow:'0 4px 24px rgba(123,47,255,0.06)' }}>

            <div style={{ marginBottom:20 }}>
              <label style={labelStyle}>Job Title</label>
              <input style={inputStyle} placeholder="e.g. Senior Python Developer"
                value={form.title} onChange={e => setForm({...form, title:e.target.value})} required />
            </div>

            <div style={{ marginBottom:20 }}>
              <label style={labelStyle}>Company Name</label>
              <input style={inputStyle} placeholder="e.g. TechCorp India"
                value={form.company_name} onChange={e => setForm({...form, company_name:e.target.value})} required />
            </div>

            <div style={{ marginBottom:20 }}>
              <label style={labelStyle}>Hiring Type</label>
              <div style={{ display:'flex', gap:8 }}>
                {['tech','non-tech'].map(t => (
                  <button key={t} type="button" onClick={() => setForm({...form, type:t})}
                    style={{ flex:1, padding:'10px', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, textTransform:'capitalize', fontFamily:"'DM Sans',sans-serif", border: form.type===t ? '1.5px solid #7B2FFF' : '1.5px solid #DDD6FF', background: form.type===t ? 'linear-gradient(135deg,#7B2FFF,#C084FC)' : 'transparent', color: form.type===t ? 'white' : '#8B7AAE', transition:'all 0.2s' }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom:28 }}>
              <label style={labelStyle}>Job Description</label>
              <textarea style={{ ...inputStyle, height:200, resize:'vertical', lineHeight:1.6 }}
                placeholder="Paste the full job description here — required skills, responsibilities, experience needed..."
                value={form.description} onChange={e => setForm({...form, description:e.target.value})} required />
            </div>

            <button type="submit" disabled={loading}
              style={{ width:'100%', padding:14, background:'linear-gradient(135deg,#7B2FFF,#C084FC)', color:'white', border:'none', borderRadius:8, fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif", boxShadow:'0 4px 16px rgba(123,47,255,0.3)' }}>
              {loading ? 'Uploading...' : 'Upload JD →'}
            </button>
          </form>
        </div>

        {/* RIGHT — POSTED JOBS */}
        <div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, fontWeight:700, color:'#1E0F45', marginBottom:6 }}>
            Your Posted JDs
          </h2>
          <p style={{ fontSize:14, color:'#8B7AAE', marginBottom:24 }}>
            {jobs.length} job{jobs.length !== 1 ? 's' : ''} posted
          </p>

          {jobs.length === 0
            ? <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:32, textAlign:'center', color:'#8B7AAE', fontSize:14 }}>
                No JDs yet. Post your first one →
              </div>
            : jobs.map(job => (
              <div key={job.id} style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:24, marginBottom:16, boxShadow:'0 2px 12px rgba(123,47,255,0.04)' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                  <div>
                    <div style={{ fontSize:16, fontWeight:600, color:'#1E0F45', marginBottom:2 }}>{job.title}</div>
                    <div style={{ fontSize:13, color:'#8B7AAE' }}>{job.company_name}</div>
                  </div>
                  <span style={{ background: job.type==='tech' ? '#EDE9FF' : '#F0FDF4', color: job.type==='tech' ? '#7B2FFF' : '#166534', border: `1px solid ${job.type==='tech' ? '#C4B8FF' : '#86EFAC'}`, borderRadius:4, padding:'3px 10px', fontSize:11, fontWeight:600, textTransform:'uppercase' }}>
                    {job.type}
                  </span>
                </div>
                <p style={{ fontSize:13, color:'#8B7AAE', lineHeight:1.5, marginBottom:12, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>
                  {job.description}
                </p>
                <div style={{ fontSize:11, color:'#C4B8FF' }}>
                  {new Date(job.created_at).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}