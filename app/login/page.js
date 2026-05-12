'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else {
      const { data: userData } = await supabase.auth.getUser();
      const role = userData.user?.user_metadata?.role;
      window.location.href = role === 'recruiter' ? '/recruiter/dashboard' : '/employer/dashboard';
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', fontFamily:"'DM Sans',sans-serif" }}>
   

      {/* LEFT PANEL */}
      <div className="auth-left" style={{ flex:1, background:'linear-gradient(135deg,#1A0A3C 0%,#0A0A0A 100%)', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'20%', left:'10%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(123,47,255,0.2) 0%,transparent 70%)', pointerEvents:'none' }} />
        <a href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', marginBottom:0 }}>
          <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:172, height:172, objectFit:'contain' }} onError={e=>e.target.style.display='none'} />
          <span style={{ fontFamily:"'Syne',sans-serif", fontSize:50, fontWeight:800, color:'white' }}>RecSay</span>
        </a>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(36px,4vw,56px)', fontWeight:800, lineHeight:1.05, letterSpacing:'-1.5px', color:'white', marginBottom:20 }}>
          The smarter<br />bridge between<br /><span style={{ background:'linear-gradient(135deg,#FF6B35,#FF3CAC,#7B2FFF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>recruitment.</span>
        </h1>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.45)', lineHeight:1.7, maxWidth:360 }}>One JD. Five companies. Zero wasted candidates. Join 340+ recruiters and employers already on RecSay.</p>
        <div style={{ display:'flex', gap:16, marginTop:40 }}>
          {[['5×','Employer reach'],['70%','Match threshold'],['0','Duplicates']].map(([n,l]) => (
            <div key={l} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'16px 20px', textAlign:'center' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, color:'#7B2FFF', lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)', marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ width:480, display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 52px', background:'#0D0D0D', borderLeft:'1px solid rgba(255,255,255,0.06)' }}>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:32, fontWeight:800, color:'white', marginBottom:8, letterSpacing:'-0.5px' }}>Welcome back</h2>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:36 }}>Sign in to your RecSay account</p>

        {error && <div style={{ background:'rgba(255,60,60,0.1)', border:'1px solid rgba(255,60,60,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:20, fontSize:13, color:'#FF6B6B' }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <div>
            <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.5)', display:'block', marginBottom:8, letterSpacing:'0.06em', textTransform:'uppercase' }}>Email</label>
            <input className="inp" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required />
          </div>
          <div>
            <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.5)', display:'block', marginBottom:8, letterSpacing:'0.06em', textTransform:'uppercase' }}>Password</label>
            <input className="inp" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button className="btn" type="submit" disabled={loading} style={{ marginTop:8 }}>
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>

        <div style={{ marginTop:24, textAlign:'center' }}>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)' }}>
            No account?{' '}
            <a href="/register" style={{ color:'#7B2FFF', fontWeight:600, textDecoration:'none' }}>Create one free</a>
          </p>
        </div>

        <div style={{ marginTop:48, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.06)', textAlign:'center' }}>
          <a href="/" style={{ fontSize:13, color:'rgba(255,255,255,0.25)', textDecoration:'none' }}>← Back to recsay.com</a>
        </div>
      </div>
    </div>
  );
}