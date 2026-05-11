'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function EmployerPage() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ title:'', company_name:'', type:'tech', description:'' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch('/api/extract-keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: form.description }),
      });
      const data = await res.json();
      const keywords = data.keywords || [];
      const { data: insertedJob, error } = await supabase.from('jobs').insert([{
        title: form.title, company_name: form.company_name,
        type: form.type, description: form.description,
        user_id: user.id, keywords, status: 'active',
      }]).select().single();
      if (error) throw error;
      await fetch('/api/cluster-jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job_id: insertedJob.id }),
      });
      setSuccess(true);
      setForm({ title:'', company_name:'', type:'tech', description:'' });
      fetchJobs(user.id);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const logout = async () => { await supabase.auth.signOut(); window.location.href = '/login'; };

  const NAV = ({ active }) => (
    <div style={{ background:'#0D0D0D', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'0 40px', display:'flex', justifyContent:'space-between', alignItems:'center', height:60 }}>
      <div style={{ display:'flex', alignItems:'center', gap:32 }}>
        <a href="/" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
          <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:28, height:28, objectFit:'contain' }} onError={e=>e.target.style.display='none'} />
          <span style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:'white' }}>RecSay</span>
        </a>
        <div style={{ display:'flex', gap:4 }}>
          {[['Dashboard','/employer/dashboard'],['Post JD','/employer'],['Candidates','/employer/candidates']].map(([l,h]) => (
            <a key={l} href={h} style={{ fontSize:13, padding:'6px 14px', borderRadius:6, textDecoration:'none', fontWeight:500, background: active===l ? 'rgba(123,47,255,0.15)' : 'transparent', color: active===l ? '#C084FC' : 'rgba(255,255,255,0.4)', border: active===l ? '1px solid rgba(123,47,255,0.3)' : '1px solid transparent', transition:'all 0.2s' }}>{l}</a>
          ))}
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{user?.email}</span>
        <span style={{ fontSize:10, fontWeight:700, background:'rgba(123,47,255,0.2)', color:'#C084FC', padding:'3px 10px', borderRadius:99, letterSpacing:'0.08em' }}>EMPLOYER</span>
        <button onClick={logout} style={{ fontSize:12, padding:'7px 16px', background:'transparent', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, color:'rgba(255,255,255,0.4)', cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>Sign out</button>
      </div>
    </div>
  );

  if (!user) return <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontFamily:"'DM Sans',sans-serif" }}>Loading...</div>;

  return (
    <div style={{ minHeight:'100vh', background:'#0A0A0A', fontFamily:"'DM Sans',sans-serif", color:'white' }}>
      <NAV active="Post JD" />
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}>

        {/* FORM */}
        <div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:36, fontWeight:800, letterSpacing:'-1px', marginBottom:8 }}>Post a Job</h1>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:32 }}>RecSay will extract keywords and cluster it automatically.</p>

          {success && <div style={{ background:'rgba(0,212,170,0.1)', border:'1px solid rgba(0,212,170,0.25)', borderRadius:10, padding:'14px 18px', marginBottom:24, fontSize:13, color:'#00D4AA', fontWeight:500 }}>✅ JD uploaded and clustered successfully!</div>}

          <form onSubmit={handleSubmit} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:28, display:'flex', flexDirection:'column', gap:18 }}>
            {[['Job Title','title','text','e.g. Senior Python Developer'],['Company Name','company_name','text','e.g. TechCorp India']].map(([label,key,type,ph]) => (
              <div key={key}>
                <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8, letterSpacing:'0.1em', textTransform:'uppercase' }}>{label}</label>
                <input className="inp" type={type} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} placeholder={ph} required />
              </div>
            ))}
            <div>
              <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8, letterSpacing:'0.1em', textTransform:'uppercase' }}>Hiring Type</label>
              <div style={{ display:'flex', gap:8 }}>
                {['tech','non-tech'].map(t => (
                  <button key={t} type="button" onClick={() => setForm({...form,type:t})}
                    style={{ flex:1, padding:'11px', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif", textTransform:'capitalize', transition:'all 0.2s',
                      background: form.type===t ? 'linear-gradient(135deg,#7B2FFF,#9B5FFF)' : 'rgba(255,255,255,0.05)',
                      color: form.type===t ? 'white' : 'rgba(255,255,255,0.4)',
                      border: form.type===t ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8, letterSpacing:'0.1em', textTransform:'uppercase' }}>Job Description</label>
              <textarea className="inp" style={{ height:180, resize:'vertical', lineHeight:1.6 }}
                placeholder="Paste the full JD here — skills, responsibilities, requirements..."
                value={form.description} onChange={e=>setForm({...form,description:e.target.value})} required />
            </div>
            <button type="submit" disabled={loading} className="auth-btn" style={{ marginTop:4 }}>
              {loading ? 'Uploading & clustering...' : 'Upload JD →'}
            </button>
          </form>
        </div>

        {/* JOB LIST */}
        <div>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, letterSpacing:'-0.5px', marginBottom:6 }}>Your Posted JDs</h2>
          <p style={{ fontSize:13, color:'rgba(255,255,255,0.35)', marginBottom:24 }}>{jobs.length} job{jobs.length!==1?'s':''} posted</p>
          {jobs.length===0
            ? <div style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:40, textAlign:'center', color:'rgba(255,255,255,0.3)', fontSize:14 }}>No JDs yet. Post your first one.</div>
            : jobs.map(job => (
              <div key={job.id} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:20, marginBottom:12, transition:'border-color 0.2s' }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(123,47,255,0.3)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                  <div>
                    <div style={{ fontSize:15, fontWeight:600, color:'white', marginBottom:3 }}>{job.title}</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)' }}>{job.company_name}</div>
                  </div>
                  <div style={{ display:'flex', gap:6 }}>
                    <span style={{ fontSize:10, fontWeight:700, padding:'3px 9px', borderRadius:4, background:'rgba(123,47,255,0.15)', color:'#C084FC', textTransform:'uppercase' }}>{job.type}</span>
                    {job.cluster_id && <span style={{ fontSize:10, fontWeight:700, padding:'3px 9px', borderRadius:4, background:'rgba(0,212,170,0.1)', color:'#00D4AA' }}>Clustered ✓</span>}
                  </div>
                </div>
                <p style={{ fontSize:12, color:'rgba(255,255,255,0.3)', lineHeight:1.5, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{job.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}