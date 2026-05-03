'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else setUser(data.user);
    });
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  if (!user) return (
    <div style={{ minHeight:'100vh', background:'#12082E', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontFamily:"'DM Sans',sans-serif" }}>
      Loading...
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', background:'#F8F6FF', fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ background:'#12082E', padding:'20px 40px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:'white' }}>RecSay</span>
        <button onClick={logout} style={{ background:'transparent', border:'1px solid rgba(192,132,252,0.3)', color:'#C084FC', padding:'8px 18px', borderRadius:6, cursor:'pointer', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
          Sign out
        </button>
      </div>
      <div style={{ padding:40 }}>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, color:'#1E0F45', marginBottom:8 }}>
          Welcome back 👋
        </h1>
        <p style={{ color:'#8B7AAE', fontSize:15, marginBottom:32 }}>{user.email} · {user.user_metadata?.role || 'user'}</p>
        <div style={{ background:'white', border:'1px solid #DDD6FF', borderRadius:12, padding:32, maxWidth:500 }}>
          <p style={{ color:'#5A4880', fontSize:15 }}>Dashboard coming soon. Auth is working ✅</p>
        </div>
      </div>
    </div>
  );
}