'use client';
import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function Dashboard() {
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = '/login';
      } else {
        const role = data.user.user_metadata?.role;
        if (role === 'recruiter') window.location.href = '/recruiter';
        else window.location.href = '/employer';
      }
    });
  }, []);

  return (
    <div style={{ minHeight:'100vh', background:'#12082E', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontFamily:"'DM Sans',sans-serif" }}>
      Redirecting...
    </div>
  );
}