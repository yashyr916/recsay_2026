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
    if (error) {
  setError(error.message);
} else {
  const { data: userData } = await supabase.auth.getUser();
  const role = userData.user?.user_metadata?.role;
  if (role === 'recruiter') window.location.href = '/recruiter/dashboard';
  else window.location.href = '/employer/dashboard';
}
    setLoading(false);
  };

  return (
    <div style={{ minHeight:'100vh', background:'#12082E', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ background:'white', borderRadius:16, padding:40, width:'100%', maxWidth:420, boxShadow:'0 8px 40px rgba(123,47,255,0.2)' }}>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:32, fontWeight:700, color:'#1E0F45', marginBottom:8 }}>Welcome back</h1>
        <p style={{ fontSize:14, color:'#8B7AAE', marginBottom:28 }}>Sign in to your RecSay account</p>
        {error && <p style={{ background:'#FEE2E2', color:'#DC2626', padding:'10px 14px', borderRadius:8, fontSize:13, marginBottom:16 }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom:16 }}>
            <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com" required
              style={{ width:'100%', padding:'12px 16px', border:'1.5px solid #DDD6FF', borderRadius:8, fontSize:15, outline:'none', fontFamily:"'DM Sans',sans-serif" }} />
          </div>
          <div style={{ marginBottom:24 }}>
            <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="••••••••" required
              style={{ width:'100%', padding:'12px 16px', border:'1.5px solid #DDD6FF', borderRadius:8, fontSize:15, outline:'none', fontFamily:"'DM Sans',sans-serif" }} />
          </div>
          <button type="submit" disabled={loading}
            style={{ width:'100%', padding:14, background:'linear-gradient(135deg,#7B2FFF,#C084FC)', color:'white', border:'none', borderRadius:8, fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p style={{ textAlign:'center', marginTop:20, fontSize:13, color:'#8B7AAE' }}>
          No account? <a href="/register" style={{ color:'#7B2FFF', fontWeight:600 }}>Register here</a>
        </p>
      </div>
    </div>
  );
}