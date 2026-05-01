'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [role, setRole] = useState('employer');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let n = 0;
    const t = setInterval(() => {
      n += 7;
      if (n >= 340) { setCount(340); clearInterval(t); }
      else setCount(n);
    }, 18);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s + 1) % 4), 2800);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setEmail('');
  };

  const steps = [
    { icon: '📋', title: 'Employer Posts JD', desc: 'Upload job description and specify role requirements' },
    { icon: '⬡',  title: 'AI Clusters JDs',   desc: 'Algorithm groups similar JDs from multiple employers' },
    { icon: '👤', title: 'Recruiter Submits',  desc: 'One submission reaches all matched companies' },
    { icon: '🔁', title: 'Pipeline Routes',    desc: 'Candidates auto-shift to next company if rejected' },
  ];

  const employerFeatures = [
    'Company profile with verified hiring details',
    'Tech & non-tech hiring tracks',
    'Batch candidates per role, zero duplicates',
    'Real-time hiring dashboard',
    'Auto-routed pipeline candidates',
  ];

  const recruiterFeatures = [
    'Work solo or under any consultancy',
    'Clustered JD view — one card per role type',
    'Submit once, reach multiple companies',
    'Earnings & placement analytics',
    'Real-time candidate stage alerts',
  ];

  const stats = [
    { num: '5×',  label: 'More employer reach per submission' },
    { num: '70%', label: 'Keyword match triggers a cluster' },
    { num: '0',   label: 'Duplicate candidates per company' },
    { num: '∞',   label: 'Pipeline — no candidate wasted' },
  ];

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: '#F7F6F2', color: '#1A1A2E', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        :root {
          --navy: #1A1A2E; --navy2: #16213E; --blue: #0F3460;
          --accent: #C8922A; --accent2: #E8A83A;
          --cream: #F7F6F2; --cream2: #EFEDE6; --cream3: #E5E2D8;
          --muted: #6B6A7A; --muted2: #9896A8;
          --border: #D8D5CC; --border2: #C5C2B8;
        }
        .sans { font-family: 'DM Sans', sans-serif; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .fade-in { animation: fadeIn 0.7s ease both; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .btn-gold {
          background: #C8922A; color: white;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          padding: 13px 28px; border-radius: 4px; border: none; cursor: pointer;
          text-decoration: none; display: inline-block; transition: background 0.2s, transform 0.15s;
        }
        .btn-gold:hover { background: #E8A83A; transform: translateY(-1px); }
        .btn-outline {
          background: transparent; color: #1A1A2E;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          padding: 12px 28px; border-radius: 4px; border: 1.5px solid #C5C2B8;
          cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #1A1A2E; background: #EFEDE6; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .persona-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .plans-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .cta-row { flex-direction: column !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="sans" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 52px', height: 64,
        background: scrolled ? 'rgba(247,246,242,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #D8D5CC' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 28, background: '#1A1A2E', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#C8922A', fontSize: 14, fontFamily: 'Playfair Display', fontWeight: 700 }}>R</span>
          </div>
          <span style={{ fontSize: 18, fontFamily: 'Playfair Display', fontWeight: 700, color: '#1A1A2E' }}>RecSay</span>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {['How it works', 'For Employers', 'For Recruiters', 'Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`}
              style={{ fontSize: 14, color: '#6B6A7A', textDecoration: 'none', fontFamily: 'DM Sans' }}>
              {l}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#waitlist" className="btn-outline" style={{ padding: '9px 20px', fontSize: 13 }}>Sign in</a>
          <a href="#waitlist" className="btn-gold" style={{ padding: '9px 20px', fontSize: 13 }}>Request Access</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '120px 52px 80px', maxWidth: 1240, margin: '0 auto' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 72, alignItems: 'center' }}>
          <div className="fade-in">
            <div className="sans" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8922A', marginBottom: 14 }}>
              Recruitment Intelligence Platform
            </div>
            <h1 className="serif" style={{ fontSize: 'clamp(44px,5vw,70px)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-1px', color: '#1A1A2E', marginBottom: 24 }}>
              The Smarter Bridge<br />
              Between <em style={{ color: '#C8922A' }}>Recruiters</em><br />
              &amp; Employers.
            </h1>
            <p className="sans" style={{ fontSize: 17, color: '#6B6A7A', lineHeight: 1.75, maxWidth: 480, marginBottom: 40, fontWeight: 300 }}>
              RecSay clusters similar job descriptions from multiple employers into one unified role — so recruiters submit once and reach every company that needs that candidate.
            </p>
            <form onSubmit={handleSubmit} style={{ maxWidth: 440 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {['employer', 'recruiter'].map(r => (
                  <button key={r} type="button" onClick={() => setRole(r)} className="sans"
                    style={{ flex: 1, padding: 10, borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 500,
                      border: role === r ? '1.5px solid #1A1A2E' : '1.5px solid #D8D5CC',
                      background: role === r ? '#1A1A2E' : 'transparent',
                      color: role === r ? 'white' : '#6B6A7A', transition: 'all 0.2s', textTransform: 'capitalize' }}>
                    I am {r === 'employer' ? 'an' : 'a'} {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
              <div className="cta-row" style={{ display: 'flex', border: '1.5px solid #C5C2B8', borderRadius: 4, overflow: 'hidden' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  style={{ flex: 1, padding: '13px 16px', border: 'none', outline: 'none', fontSize: 15, background: 'white', color: '#1A1A2E', fontFamily: 'DM Sans' }} />
                <button type="submit" className="btn-gold" style={{ borderRadius: 0, padding: '13px 24px' }}>Join Waitlist</button>
              </div>
              {submitted
                ? <p className="sans" style={{ marginTop: 10, fontSize: 13, color: '#2D7D46', fontWeight: 500 }}>✓ You're on the list. We'll be in touch soon.</p>
                : <p className="sans" style={{ marginTop: 10, fontSize: 12, color: '#9896A8' }}>Join <strong style={{ color: '#6B6A7A' }}>{count}+</strong> recruiters &amp; employers already waiting. No spam.</p>}
            </form>
          </div>

          {/* CLUSTER VISUAL */}
          <div className="hero-visual fade-in" style={{ animationDelay: '0.2s' }}>
            <div style={{ background: 'white', borderRadius: 8, border: '1px solid #D8D5CC', boxShadow: '0 4px 40px rgba(26,26,46,0.10)', overflow: 'hidden' }}>
              <div style={{ background: '#1A1A2E', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div className="sans" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>Active Cluster</div>
                  <div className="sans" style={{ fontSize: 14, fontWeight: 500, color: 'white' }}>Python Developer · Senior · Remote</div>
                </div>
                <div style={{ background: '#C8922A', borderRadius: 3, padding: '4px 10px', fontSize: 11, color: 'white', fontFamily: 'DM Sans', fontWeight: 500 }}>LIVE</div>
              </div>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #D8D5CC' }}>
                <div className="sans" style={{ fontSize: 11, color: '#9896A8', marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>5 Employers matched</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['TechCorp','DataInc','Finvest','BuildAI','ScaleUp'].map(co => (
                    <span key={co} className="sans" style={{ background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: 3, padding: '5px 10px', fontSize: 12, color: '#3730A3', fontWeight: 500 }}>{co} ✓</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid #D8D5CC', display: 'flex', gap: 14, alignItems: 'center' }}>
                <div className="serif" style={{ fontSize: 38, fontWeight: 700, color: '#C8922A', lineHeight: 1 }}>78%</div>
                <div>
                  <div className="sans" style={{ fontSize: 13, fontWeight: 500, color: '#1A1A2E', marginBottom: 3 }}>Keyword Match</div>
                  <div className="sans" style={{ fontSize: 12, color: '#6B6A7A' }}>Python · Django · PostgreSQL · AWS · REST</div>
                </div>
              </div>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid #D8D5CC' }}>
                <div className="sans" style={{ fontSize: 11, color: '#9896A8', marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Recruiters working this</div>
                {[['Priya S.','TalentBridge',5],['Arjun M.','IndieRecruiter',5],['Neha K.','HireForce',5]].map(([name,org,n]) => (
                  <div key={name} className="sans" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderTop: '1px solid #E5E2D8' }}>
                    <div><span style={{ fontSize: 13, fontWeight: 500, color: '#1A1A2E' }}>{name}</span><span style={{ fontSize: 12, color: '#6B6A7A', marginLeft: 6 }}>· {org}</span></div>
                    <span className="sans" style={{ fontSize: 12, background: '#EFEDE6', border: '1px solid #D8D5CC', borderRadius: 3, padding: '3px 8px', color: '#6B6A7A', fontWeight: 500 }}>{n} candidates</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '14px 20px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {[['15','In Pipeline','#0F3460'],['6','Interviewing','#2D7D46'],['2','Offers Made','#C8922A']].map(([n,l,col],i) => (
                  <div key={l} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid #D8D5CC' : 'none' }}>
                    <div className="serif" style={{ fontSize: 26, fontWeight: 700, color: col, lineHeight: 1 }}>{n}</div>
                    <div className="sans" style={{ fontSize: 11, color: '#9896A8', marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <div style={{ borderTop: '1px solid #D8D5CC', borderBottom: '1px solid #D8D5CC', background: 'white', padding: '24px 52px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <span className="sans" style={{ fontSize: 11, color: '#9896A8', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Trusted by</span>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            <div style={{ display: 'flex', gap: 52, animation: 'scroll 22s linear infinite', width: 'max-content' }}>
              {['TechCorp Hiring','DataInc','TalentBridge','ScaleUp Labs','Finvest Group','HireForce','BuildAI','NovaTech',
                'TechCorp Hiring','DataInc','TalentBridge','ScaleUp Labs','Finvest Group','HireForce','BuildAI','NovaTech'].map((l,i) => (
                <span key={i} className="sans" style={{ fontSize: 14, color: '#9896A8', fontWeight: 500, whiteSpace: 'nowrap' }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '96px 52px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="sans" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8922A', marginBottom: 14 }}>The Process</div>
          <h2 className="serif" style={{ fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 600, lineHeight: 1.12, color: '#1A1A2E', marginBottom: 16 }}>From job description to hire, <em>intelligently.</em></h2>
          <p className="sans" style={{ fontSize: 16, color: '#6B6A7A', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>RecSay's algorithm handles the heavy lifting so your team focuses on relationships.</p>
        </div>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: '#D8D5CC', borderRadius: 8, overflow: 'hidden' }}>
          {steps.map((step, i) => (
            <div key={i} onClick={() => setActiveStep(i)} style={{ background: activeStep === i ? '#1A1A2E' : 'white', padding: '36px 28px', cursor: 'pointer', transition: 'background 0.3s' }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{step.icon}</div>
              <div className="sans" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8922A', marginBottom: 8, fontWeight: 500 }}>Step {i+1}</div>
              <h3 className="serif" style={{ fontSize: 18, fontWeight: 600, color: activeStep === i ? 'white' : '#1A1A2E', marginBottom: 10 }}>{step.title}</h3>
              <p className="sans" style={{ fontSize: 13, color: activeStep === i ? 'rgba(255,255,255,0.6)' : '#6B6A7A', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR WHO */}
      <div style={{ background: '#EFEDE6', borderTop: '1px solid #D8D5CC', borderBottom: '1px solid #D8D5CC' }}>
        <section style={{ padding: '96px 52px', maxWidth: 1240, margin: '0 auto' }} id="for-employers">
          <div style={{ marginBottom: 56 }}>
            <div className="sans" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8922A', marginBottom: 14 }}>Built for Both Sides</div>
            <h2 className="serif" style={{ fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 600, lineHeight: 1.12, color: '#1A1A2E' }}>Employers hire faster.<br />Recruiters earn more.</h2>
          </div>
          <div className="persona-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { id: 'for-employers', bg: '#1A1A2E', label: 'For Employers', title: 'Post once.\nReceive many.', desc: 'Upload your JD and let RecSay bring pre-qualified candidates from specialized recruiters — without managing 10 agencies.', features: employerFeatures, cta: 'Get started as Employer' },
              { id: 'for-recruiters', bg: '#0F3460', label: 'For Recruiters', title: 'Work one role.\nPlace at five companies.', desc: 'Stop reading 50 JDs that say the same thing. Submit once and reach every matched employer simultaneously.', features: recruiterFeatures, cta: 'Get started as Recruiter' },
            ].map(card => (
              <div key={card.id} style={{ background: 'white', borderRadius: 8, border: '1px solid #D8D5CC', overflow: 'hidden', boxShadow: '0 2px 20px rgba(26,26,46,0.06)' }}>
                <div style={{ background: card.bg, padding: '28px 32px' }}>
                  <div className="sans" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8A83A', marginBottom: 10 }}>{card.label}</div>
                  <h3 className="serif" style={{ fontSize: 28, fontWeight: 600, color: 'white', lineHeight: 1.15 }}>{card.title.split('\n').map((t,i) => <span key={i}>{t}{i===0&&<br/>}</span>)}</h3>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <p className="sans" style={{ fontSize: 15, color: '#6B6A7A', marginBottom: 28, lineHeight: 1.65 }}>{card.desc}</p>
                  <ul style={{ listStyle: 'none' }}>
                    {card.features.map(f => (
                      <li key={f} className="sans" style={{ display: 'flex', gap: 12, padding: '11px 0', borderTop: '1px solid #E5E2D8', fontSize: 14, color: '#6B6A7A', alignItems: 'flex-start' }}>
                        <span style={{ color: '#C8922A', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#waitlist" className="btn-gold" style={{ marginTop: 28, display: 'inline-block' }}>{card.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* STATS */}
      <section style={{ background: '#1A1A2E', padding: '64px 52px' }}>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', maxWidth: 1000, margin: '0 auto', gap: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 6, overflow: 'hidden' }}>
          {stats.map((s,i) => (
            <div key={i} style={{ background: '#1A1A2E', padding: '40px 32px', textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 48, fontWeight: 700, color: '#E8A83A', lineHeight: 1, marginBottom: 10, letterSpacing: '-1px' }}>{s.num}</div>
              <div className="sans" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '96px 52px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="sans" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8922A', marginBottom: 14 }}>Pricing</div>
          <h2 className="serif" style={{ fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 600, lineHeight: 1.12, color: '#1A1A2E', marginBottom: 12 }}>Simple, transparent pricing.</h2>
          <p className="sans" style={{ fontSize: 16, color: '#6B6A7A' }}>Start free. Scale when you're ready.</p>
        </div>
        <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[
            { name:'Basic', price:'Free', sub:'forever', desc:'Perfect for individual recruiters or small employers.', features:['3 active clusters','5 submissions/month','Basic dashboard','Email support'], cta:'Get started free', featured:false },
            { name:'Premium', price:'₹2,999', sub:'/month', desc:'For active recruiters and growing companies running multiple roles.', features:['Unlimited clusters','Unlimited submissions','Full analytics','Priority routing','Dedicated manager'], cta:'Start free trial', featured:true },
            { name:'Enterprise', price:'Custom', sub:'', desc:'For large organisations with high-volume hiring needs.', features:['Everything in Premium','White-label option','API access','Custom thresholds','SLA & support'], cta:'Contact us', featured:false },
          ].map(plan => (
            <div key={plan.name} style={{ background: plan.featured ? '#1A1A2E' : 'white', border: plan.featured ? '2px solid #C8922A' : '1px solid #D8D5CC', borderRadius: 8, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', boxShadow: plan.featured ? '0 8px 40px rgba(26,26,46,0.2)' : '0 2px 12px rgba(26,26,46,0.06)' }}>
              {plan.featured && <div className="sans" style={{ position: 'absolute', top: -1, right: 28, background: '#C8922A', color: 'white', fontSize: 11, fontWeight: 600, padding: '5px 14px', borderRadius: '0 0 6px 6px' }}>Most Popular</div>}
              <div>
                <div className="sans" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.featured ? '#E8A83A' : '#C8922A', marginBottom: 12 }}>{plan.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span className="serif" style={{ fontSize: 40, fontWeight: 700, color: plan.featured ? 'white' : '#1A1A2E', letterSpacing: '-1px', lineHeight: 1 }}>{plan.price}</span>
                  <span className="sans" style={{ fontSize: 14, color: plan.featured ? 'rgba(255,255,255,0.45)' : '#6B6A7A' }}>{plan.sub}</span>
                </div>
              </div>
              <p className="sans" style={{ fontSize: 14, color: plan.featured ? 'rgba(255,255,255,0.55)' : '#6B6A7A', lineHeight: 1.6 }}>{plan.desc}</p>
              <ul style={{ listStyle: 'none', flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} className="sans" style={{ display: 'flex', gap: 10, padding: '9px 0', borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.08)' : '#E5E2D8'}`, fontSize: 13, color: plan.featured ? 'rgba(255,255,255,0.7)' : '#6B6A7A', alignItems: 'center' }}>
                    <span style={{ color: '#E8A83A', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" style={{ display: 'block', textAlign: 'center', padding: 13, borderRadius: 4, fontFamily: 'DM Sans', fontSize: 14, fontWeight: 500, cursor: 'pointer', textDecoration: 'none', background: plan.featured ? '#C8922A' : 'transparent', color: plan.featured ? 'white' : '#1A1A2E', border: plan.featured ? '1.5px solid #C8922A' : '1.5px solid #C5C2B8', transition: 'all 0.2s' }}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div style={{ background: '#EFEDE6', borderTop: '1px solid #D8D5CC' }}>
        <section id="waitlist" style={{ padding: '100px 52px', textAlign: 'center' }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <div className="sans" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8922A', marginBottom: 14 }}>Early Access</div>
            <h2 className="serif" style={{ fontSize: 'clamp(36px,4vw,56px)', fontWeight: 700, lineHeight: 1.08, color: '#1A1A2E', marginBottom: 16 }}>Be first on<br /><em>the bridge.</em></h2>
            <p className="sans" style={{ fontSize: 16, color: '#6B6A7A', lineHeight: 1.7, marginBottom: 44 }}>RecSay is launching soon. Join early access — whether you're hiring or placing, we'll onboard you in the first batch.</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {['employer','recruiter'].map(r => (
                  <button key={r} type="button" onClick={() => setRole(r)} className="sans"
                    style={{ flex:1, padding:10, borderRadius:4, cursor:'pointer', fontSize:13, fontWeight:500, border: role===r ? '1.5px solid #1A1A2E' : '1.5px solid #D8D5CC', background: role===r ? '#1A1A2E' : 'transparent', color: role===r ? 'white' : '#6B6A7A', transition:'all 0.2s', textTransform:'capitalize' }}>
                    I am {r==='employer'?'an':'a'} {r.charAt(0).toUpperCase()+r.slice(1)}
                  </button>
                ))}
              </div>
              <div className="cta-row" style={{ display:'flex', border:'1.5px solid #C5C2B8', borderRadius:4, overflow:'hidden' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                  style={{ flex:1, padding:'13px 16px', border:'none', outline:'none', fontSize:15, background:'white', color:'#1A1A2E', fontFamily:'DM Sans' }} />
                <button type="submit" className="btn-gold" style={{ borderRadius:0, padding:'13px 22px' }}>Get Access →</button>
              </div>
              {submitted
                ? <p className="sans" style={{ marginTop:12, fontSize:13, color:'#2D7D46', fontWeight:500 }}>✓ You're in. We'll reach out when your access is ready.</p>
                : <p className="sans" style={{ marginTop:12, fontSize:12, color:'#9896A8' }}>No spam. Unsubscribe anytime. {count}+ people already joined.</p>}
            </form>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="sans" style={{ background:'#1A1A2E', padding:'40px 52px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:20 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:24, height:24, background:'#C8922A', borderRadius:3, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#1A1A2E', fontSize:12, fontFamily:'Playfair Display', fontWeight:700 }}>R</span>
          </div>
          <span style={{ fontSize:16, fontFamily:'Playfair Display', fontWeight:700, color:'white' }}>RecSay</span>
        </div>
        <div style={{ display:'flex', gap:28, flexWrap:'wrap' }}>
          {['How it works','For Employers','For Recruiters','Pricing','Privacy'].map(l => (
            <a key={l} href="#" style={{ fontSize:13, color:'rgba(255,255,255,0.4)', textDecoration:'none' }}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize:13, color:'rgba(255,255,255,0.3)' }}>© 2025 RecSay. All rights reserved.</p>
      </footer>
    </div>
  );
}