'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employer');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { data: { role } }
    });
    if (error) setError(error.message);
    else setSuccess(true);
    setLoading(false);
  };

  return (
    <div style={{ minHeight:'100vh', background:'#12082E', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ background:'white', borderRadius:16, padding:40, width:'100%', maxWidth:420, boxShadow:'0 8px 40px rgba(123,47,255,0.2)' }}>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:32, fontWeight:700, color:'#1E0F45', marginBottom:8 }}>Create account</h1>
        <p style={{ fontSize:14, color:'#8B7AAE', marginBottom:28 }}>Join RecSay as an employer or recruiter</p>
        {error && <p style={{ background:'#FEE2E2', color:'#DC2626', padding:'10px 14px', borderRadius:8, fontSize:13, marginBottom:16 }}>{error}</p>}
        {success
          ? <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:8, padding:20, textAlign:'center' }}>
              <p style={{ color:'#166534', fontWeight:600, marginBottom:4 }}>✓ Account created!</p>
              <p style={{ color:'#166534', fontSize:13 }}>Check your email to confirm your account.</p>
            </div>
          : <form onSubmit={handleRegister}>
              <div style={{ marginBottom:16 }}>
                <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>I am a</label>
                <div style={{ display:'flex', gap:8 }}>
                  {['employer','recruiter'].map(r => (
                    <button key={r} type="button" onClick={() => setRole(r)}
                      style={{ flex:1, padding:10, borderRadius:8, border: role===r ? '1.5px solid #7B2FFF' : '1.5px solid #DDD6FF', background: role===r ? 'linear-gradient(135deg,#7B2FFF,#C084FC)' : 'transparent', color: role===r ? 'white' : '#8B7AAE', fontSize:13, fontWeight:600, cursor:'pointer', textTransform:'capitalize', fontFamily:"'DM Sans',sans-serif" }}>
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom:16 }}>
                <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" required
                  style={{ width:'100%', padding:'12px 16px', border:'1.5px solid #DDD6FF', borderRadius:8, fontSize:15, outline:'none', fontFamily:"'DM Sans',sans-serif" }} />
              </div>
              <div style={{ marginBottom:24 }}>
                <label style={{ fontSize:12, fontWeight:600, color:'#5A4880', display:'block', marginBottom:6 }}>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="min 6 characters" required
                  style={{ width:'100%', padding:'12px 16px', border:'1.5px solid #DDD6FF', borderRadius:8, fontSize:15, outline:'none', fontFamily:"'DM Sans',sans-serif" }} />
              </div>
              <button type="submit" disabled={loading}
                style={{ width:'100%', padding:14, background:'linear-gradient(135deg,#7B2FFF,#C084FC)', color:'white', border:'none', borderRadius:8, fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>
        }
        <p style={{ textAlign:'center', marginTop:20, fontSize:13, color:'#8B7AAE' }}>
          Have an account? <a href="/login" style={{ color:'#7B2FFF', fontWeight:600 }}>Sign in</a>
        </p>
      </div>
    </div>
  );
}