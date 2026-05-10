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
    <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', fontFamily:"'DM Sans',sans-serif" }}>
     

      {/* LEFT */}
      <div style={{ flex:1, background:'linear-gradient(135deg,#0A1A1A 0%,#0A0A0A 100%)', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'20%', left:'10%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,212,170,0.15) 0%,transparent 70%)', pointerEvents:'none' }} />
        <a href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', marginBottom:60 }}>
          <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:36, height:36, objectFit:'contain' }} onError={e=>e.target.style.display='none'} />
          <span style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:'white' }}>RecSay</span>
        </a>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(32px,4vw,52px)', fontWeight:800, lineHeight:1.05, letterSpacing:'-1.5px', color:'white', marginBottom:20 }}>
          Join the bridge.<br />Start placing<br /><span style={{ color:'#00D4AA' }}>smarter.</span>
        </h1>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.45)', lineHeight:1.7, maxWidth:360, marginBottom:40 }}>Whether you're hiring or recruiting — RecSay's clustering engine makes you 5× more efficient from day one.</p>

        {/* Role benefits */}
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {[
            { icon:'🏢', title:'As an Employer', desc:'Post once, receive candidates from multiple recruiters with zero duplicates' },
            { icon:'👤', title:'As a Recruiter', desc:'Submit one candidate to five companies simultaneously via cluster cards' },
          ].map(item => (
            <div key={item.title} style={{ display:'flex', gap:14, alignItems:'flex-start', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'16px' }}>
              <span style={{ fontSize:22 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize:14, fontWeight:600, color:'white', marginBottom:3 }}>{item.title}</div>
                <div style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ width:480, display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 52px', background:'#0D0D0D', borderLeft:'1px solid rgba(255,255,255,0.06)' }}>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:32, fontWeight:800, color:'white', marginBottom:8, letterSpacing:'-0.5px' }}>Create account</h2>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)', marginBottom:36 }}>Free forever. No credit card needed.</p>

        {error && <div style={{ background:'rgba(255,60,60,0.1)', border:'1px solid rgba(255,60,60,0.3)', borderRadius:8, padding:'12px 16px', marginBottom:20, fontSize:13, color:'#FF6B6B' }}>{error}</div>}

        {success
          ? <div style={{ background:'rgba(0,212,170,0.1)', border:'1px solid rgba(0,212,170,0.3)', borderRadius:12, padding:28, textAlign:'center' }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🎉</div>
              <p style={{ color:'#00D4AA', fontWeight:600, fontSize:16, marginBottom:6 }}>Account created!</p>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:14 }}>Check your email to confirm your account, then sign in.</p>
              <a href="/login" style={{ display:'inline-block', marginTop:20, color:'#7B2FFF', fontWeight:600, fontSize:14, textDecoration:'none' }}>Go to login →</a>
            </div>
          : <form onSubmit={handleRegister} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div>
                <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.5)', display:'block', marginBottom:8, letterSpacing:'0.06em', textTransform:'uppercase' }}>I am a</label>
                <div style={{ display:'flex', gap:8 }}>
                  {['employer','recruiter'].map(r => (
                    <button key={r} type="button" onClick={() => setRole(r)}
                      style={{ flex:1, padding:'12px', borderRadius:8, cursor:'pointer', fontSize:14, fontWeight:600, fontFamily:"'DM Sans',sans-serif", textTransform:'capitalize', transition:'all 0.2s',
                        background: role===r ? (r==='employer' ? 'linear-gradient(135deg,#7B2FFF,#9B5FFF)' : 'linear-gradient(135deg,#FF6B35,#FF3CAC)') : 'rgba(255,255,255,0.05)',
                        color: role===r ? 'white' : 'rgba(255,255,255,0.4)',
                        border: role===r ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      }}>
                      {r === 'employer' ? '🏢' : '👤'} {r.charAt(0).toUpperCase()+r.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.5)', display:'block', marginBottom:8, letterSpacing:'0.06em', textTransform:'uppercase' }}>Email</label>
                <input className="inp" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required />
              </div>
              <div>
                <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.5)', display:'block', marginBottom:8, letterSpacing:'0.06em', textTransform:'uppercase' }}>Password</label>
                <input className="inp" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="min 6 characters" required />
              </div>
              <button className="btn" type="submit" disabled={loading} style={{ marginTop:8 }}>
                {loading ? 'Creating account...' : 'Create Account →'}
              </button>
            </form>
        }

        <div style={{ marginTop:24, textAlign:'center' }}>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color:'#7B2FFF', fontWeight:600, textDecoration:'none' }}>Sign in</a>
          </p>
        </div>
        <div style={{ marginTop:32, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.06)', textAlign:'center' }}>
          <a href="/" style={{ fontSize:13, color:'rgba(255,255,255,0.25)', textDecoration:'none' }}>← Back to recsay.com</a>
        </div>
      </div>
    </div>
  );
}