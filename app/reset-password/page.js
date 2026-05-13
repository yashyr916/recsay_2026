'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) { setError('Passwords do not match'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setError(error.message);
    else setDone(true);
    setLoading(false);
  };

  return (
    <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'DM Sans',sans-serif", padding:24 }}>
      <div style={{ width:'100%', maxWidth:420, background:'#0D0D0D', border:'1px solid rgba(255,255,255,0.06)', borderRadius:20, padding:'48px 40px' }}>
        <a href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', marginBottom:36 }}>
          <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:36, height:36, objectFit:'contain' }} onError={e=>e.target.style.display='none'} />
          <span style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:'white' }}>RecSay</span>
        </a>

        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:800, color:'white', marginBottom:8 }}>Reset password</h2>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:32 }}>Enter your new password below.</p>

        {error && <div style={{ background:'rgba(255,60,60,0.1)', border:'1px solid rgba(255,60,60,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:20, fontSize:13, color:'#FF6B6B' }}>{error}</div>}

        {done
          ? <div style={{ background:'rgba(0,212,170,0.1)', border:'1px solid rgba(0,212,170,0.3)', borderRadius:12, padding:24, textAlign:'center' }}>
              <div style={{ fontSize:36, marginBottom:12 }}>✅</div>
              <p style={{ color:'#00D4AA', fontWeight:600, fontSize:15, marginBottom:6 }}>Password updated!</p>
              <a href="/login" style={{ display:'inline-block', marginTop:16, color:'#7B2FFF', fontWeight:600, fontSize:14, textDecoration:'none' }}>Sign in now →</a>
            </div>
          : <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div>
                <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8, letterSpacing:'0.08em', textTransform:'uppercase' }}>New Password</label>
                <input className="inp" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="min 6 characters" required />
              </div>
              <div>
                <label style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8, letterSpacing:'0.08em', textTransform:'uppercase' }}>Confirm Password</label>
                <input className="inp" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="repeat password" required />
              </div>
              <button className="auth-btn" type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Password →'}
              </button>
            </form>
        }
      </div>
    </div>
  );
}