'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
      n += 6;
      if (n >= 340) { setCount(340); clearInterval(t); }
      else setCount(n);
    }, 16);
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
    { icon: '📋', title: 'Employer Posts JD',  desc: 'Upload job description and specify role requirements' },
    { icon: '⬡',  title: 'AI Clusters JDs',    desc: 'Algorithm groups similar JDs from multiple employers' },
    { icon: '👤', title: 'Recruiter Submits',   desc: 'One submission reaches all matched companies' },
    { icon: '🔁', title: 'Pipeline Routes',     desc: 'Candidates auto-shift to next company if rejected' },
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F5F3FF', color: '#1A0A3C', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        :root {
          --purple:    #7B2FFF;
          --purple2:   #9B5FFF;
          --purple3:   #C084FC;
          --purple4:   #EDE9FF;
          --purple5:   #F5F3FF;
          --dark:      #1A0A3C;
          --dark2:     #2D1660;
          --lavender:  #E9E3FF;
          --border:    #D6CCFF;
          --border2:   #C4B8FF;
          --muted:     #6B5A9A;
          --muted2:    #9B8EC4;
          --white:     #FFFFFF;
          --grad: linear-gradient(135deg, #7B2FFF 0%, #C084FC 100%);
        }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .sans  { font-family: 'DM Sans', sans-serif; }
        .fade-in { animation: fadeIn 0.7s ease both; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
        .btn-purple {
          background: var(--grad); color: white;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          padding: 13px 28px; border-radius: 6px; border: none; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: opacity 0.2s, transform 0.15s;
          box-shadow: 0 4px 20px rgba(123,47,255,0.35);
        }
        .btn-purple:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-outline {
          background: transparent; color: var(--purple);
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          padding: 12px 28px; border-radius: 6px; border: 1.5px solid var(--border2);
          cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.2s;
        }
        .btn-outline:hover { border-color: var(--purple); background: var(--purple4); }
        .eyebrow {
          font-size: 11px; font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--purple); margin-bottom: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .eyebrow::before { content:''; width: 20px; height: 1.5px; background: var(--purple); border-radius: 2px; }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px,3.5vw,48px); font-weight: 700;
          line-height: 1.1; letter-spacing: -0.5px; color: var(--dark);
          margin-bottom: 16px;
        }
        .section-sub {
          font-size: 16px; color: var(--muted); line-height: 1.72; font-weight: 300;
        }
        /* scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--purple5); }
        ::-webkit-scrollbar-thumb { background: var(--purple3); border-radius: 3px; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .persona-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .plans-grid { grid-template-columns: 1fr !important; max-width: 400px; margin: 0 auto; }
          .nav-links { display: none !important; }
          .cta-row { flex-direction: column !important; }
          nav { padding: 0 24px !important; }
          .hero-section { padding: 110px 24px 70px !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 52px', height: 64,
        background: scrolled ? 'rgba(245,243,255,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        {/* LOGO — replace src with your actual logo path */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="/RecSaySymbol.png"
            alt="RecSay Logo"
            style={{ width: 32, height: 32, objectFit: 'contain' }}
          />
          <span className="serif" style={{ fontSize: 20, fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.3px' }}>RecSay</span>
        </div>

        <div className="nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {['How it works', 'For Employers', 'For Recruiters', 'Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
              style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', fontFamily: 'DM Sans', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--purple)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#waitlist" className="btn-outline" style={{ padding: '9px 20px', fontSize: 13 }}>Sign in</a>
          <a href="#waitlist" className="btn-purple" style={{ padding: '9px 20px', fontSize: 13 }}>Request Access</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section" style={{ padding: '120px 52px 80px', maxWidth: 1240, margin: '0 auto' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: 72, alignItems: 'center' }}>

          {/* LEFT */}
          <div className="fade-in">
            <div className="eyebrow sans">Recruitment Intelligence Platform</div>
            <h1 className="serif" style={{ fontSize: 'clamp(44px,5.5vw,72px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-1.5px', color: 'var(--dark)', marginBottom: 24 }}>
              The Smarter Bridge<br />
              Between{' '}
              <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Recruiters
              </span>
              <br />&amp; Employers.
            </h1>
            <p className="sans" style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 480, marginBottom: 40, fontWeight: 300 }}>
              RecSay clusters similar job descriptions from multiple employers into one unified role — so recruiters submit once and reach every company that needs that candidate.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} style={{ maxWidth: 440 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {['employer', 'recruiter'].map(r => (
                  <button key={r} type="button" onClick={() => setRole(r)} className="sans"
                    style={{
                      flex: 1, padding: 10, borderRadius: 6, cursor: 'pointer',
                      fontSize: 13, fontWeight: 500,
                      border: role === r ? '1.5px solid var(--purple)' : '1.5px solid var(--border)',
                      background: role === r ? 'var(--grad)' : 'white',
                      color: role === r ? 'white' : 'var(--muted)',
                      transition: 'all 0.2s', textTransform: 'capitalize',
                      boxShadow: role === r ? '0 2px 12px rgba(123,47,255,0.25)' : 'none',
                    }}>
                    I am {r === 'employer' ? 'an' : 'a'} {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
              <div className="cta-row" style={{ display: 'flex', border: '1.5px solid var(--border2)', borderRadius: 6, overflow: 'hidden', background: 'white' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  style={{ flex: 1, padding: '13px 16px', border: 'none', outline: 'none', fontSize: 15, background: 'transparent', color: 'var(--dark)', fontFamily: 'DM Sans' }} />
                <button type="submit" className="btn-purple" style={{ borderRadius: '0 4px 4px 0', padding: '13px 22px', boxShadow: 'none' }}>
                  Join Waitlist
                </button>
              </div>
              {submitted
                ? <p className="sans" style={{ marginTop: 10, fontSize: 13, color: '#5B21B6', fontWeight: 500 }}>✓ You're on the list. We'll be in touch soon.</p>
                : <p className="sans" style={{ marginTop: 10, fontSize: 12, color: 'var(--muted2)' }}>Join <strong style={{ color: 'var(--muted)' }}>{count}+</strong> recruiters &amp; employers already waiting. No spam.</p>
              }
            </form>
          </div>

          {/* CLUSTER VISUAL */}
          <div className="hero-visual fade-in" style={{ animationDelay: '0.2s' }}>
            <div style={{ background: 'white', borderRadius: 12, border: '1px solid var(--border)', boxShadow: '0 8px 48px rgba(123,47,255,0.12)', overflow: 'hidden' }}>
              {/* header */}
              <div style={{ background: 'linear-gradient(135deg,#2D1660 0%,#7B2FFF 100%)', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div className="sans" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Active Cluster</div>
                  <div className="sans" style={{ fontSize: 14, fontWeight: 500, color: 'white' }}>Python Developer · Senior · Remote</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 4, padding: '4px 10px', fontSize: 11, color: 'white', fontFamily: 'DM Sans', fontWeight: 500, backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#A3FF6F', marginRight: 5, animation: 'pulse 2s infinite' }}></span>LIVE
                </div>
              </div>
              {/* pills */}
              <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
                <div className="sans" style={{ fontSize: 11, color: 'var(--muted2)', marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>5 Employers matched</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['TechCorp','DataInc','Finvest','BuildAI','ScaleUp'].map(co => (
                    <span key={co} className="sans" style={{ background: 'var(--purple4)', border: '1px solid var(--border)', borderRadius: 4, padding: '5px 10px', fontSize: 12, color: 'var(--purple)', fontWeight: 500 }}>{co} ✓</span>
                  ))}
                </div>
              </div>
              {/* match */}
              <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', gap: 14, alignItems: 'center' }}>
                <div className="serif" style={{ fontSize: 38, fontWeight: 700, lineHeight: 1, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>78%</div>
                <div>
                  <div className="sans" style={{ fontSize: 13, fontWeight: 500, color: 'var(--dark)', marginBottom: 3 }}>Keyword Match</div>
                  <div className="sans" style={{ fontSize: 12, color: 'var(--muted)' }}>Python · Django · PostgreSQL · AWS · REST</div>
                </div>
              </div>
              {/* recruiters */}
              <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
                <div className="sans" style={{ fontSize: 11, color: 'var(--muted2)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Recruiters working this</div>
                {[['Priya S.','TalentBridge',5],['Arjun M.','IndieRecruiter',5],['Neha K.','HireForce',5]].map(([name,org,n]) => (
                  <div key={name} className="sans" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderTop: '1px solid var(--lavender)' }}>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--dark)' }}>{name}</span>
                      <span style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 6 }}>· {org}</span>
                    </div>
                    <span className="sans" style={{ fontSize: 12, background: 'var(--purple4)', border: '1px solid var(--border)', borderRadius: 4, padding: '3px 8px', color: 'var(--purple)', fontWeight: 500 }}>{n} candidates</span>
                  </div>
                ))}
              </div>
              {/* stats */}
              <div style={{ padding: '14px 20px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {[['15','In Pipeline','var(--dark2)'],['6','Interviewing','#166534'],['2','Offers Made','var(--purple)']].map(([n,l,col],i) => (
                  <div key={l} style={{ textAlign: 'center', borderRight: i<2 ? '1px solid var(--border)' : 'none' }}>
                    <div className="serif" style={{ fontSize: 26, fontWeight: 700, color: col, lineHeight: 1 }}>{n}</div>
                    <div className="sans" style={{ fontSize: 11, color: 'var(--muted2)', marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white', padding: '22px 52px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <span className="sans" style={{ fontSize: 11, color: 'var(--muted2)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Trusted by</span>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            <div style={{ display: 'flex', gap: 52, animation: 'scroll 22s linear infinite', width: 'max-content' }}>
              {['TechCorp Hiring','DataInc','TalentBridge','ScaleUp Labs','Finvest Group','HireForce','BuildAI','NovaTech',
                'TechCorp Hiring','DataInc','TalentBridge','ScaleUp Labs','Finvest Group','HireForce','BuildAI','NovaTech'].map((l,i) => (
                <span key={i} className="sans" style={{ fontSize: 14, color: 'var(--muted2)', fontWeight: 500, whiteSpace: 'nowrap' }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '96px 52px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="eyebrow sans" style={{ justifyContent: 'center' }}>The Process</div>
          <h2 className="section-title serif" style={{ textAlign: 'center' }}>From job description to hire,<br /><em>intelligently.</em></h2>
          <p className="section-sub sans" style={{ maxWidth: 480, margin: '0 auto' }}>RecSay's algorithm handles the heavy lifting so your team focuses on relationships.</p>
        </div>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'var(--border)', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(123,47,255,0.08)' }}>
          {steps.map((step, i) => (
            <div key={i} onClick={() => setActiveStep(i)} style={{
              background: activeStep === i ? 'linear-gradient(135deg,#2D1660,#7B2FFF)' : 'white',
              padding: '36px 28px', cursor: 'pointer', transition: 'background 0.3s',
            }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{step.icon}</div>
              <div className="sans" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: activeStep === i ? 'var(--purple3)' : 'var(--purple)', marginBottom: 8, fontWeight: 500 }}>Step {i+1}</div>
              <h3 className="serif" style={{ fontSize: 18, fontWeight: 600, color: activeStep === i ? 'white' : 'var(--dark)', marginBottom: 10 }}>{step.title}</h3>
              <p className="sans" style={{ fontSize: 13, color: activeStep === i ? 'rgba(255,255,255,0.65)' : 'var(--muted)', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR WHO */}
      <div style={{ background: 'var(--lavender)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <section style={{ padding: '96px 52px', maxWidth: 1240, margin: '0 auto' }} id="for-employers">
          <div style={{ marginBottom: 56 }}>
            <div className="eyebrow sans">Built for Both Sides</div>
            <h2 className="section-title serif">Employers hire faster.<br />Recruiters earn more.</h2>
          </div>
          <div className="persona-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { id:'for-employers', grad:'linear-gradient(135deg,#1A0A3C,#7B2FFF)', label:'For Employers', title:'Post once.\nReceive many.', desc:'Upload your JD and let RecSay bring pre-qualified candidates from specialized recruiters — without managing 10 agencies.', features: employerFeatures, cta:'Get started as Employer' },
              { id:'for-recruiters', grad:'linear-gradient(135deg,#2D1660,#9B5FFF)', label:'For Recruiters', title:'Work one role.\nPlace at five companies.', desc:'Stop reading 50 JDs that say the same thing. Submit once and reach every matched employer simultaneously.', features: recruiterFeatures, cta:'Get started as Recruiter' },
            ].map(card => (
              <div key={card.id} style={{ background: 'white', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(123,47,255,0.08)' }}>
                <div style={{ background: card.grad, padding: '28px 32px' }}>
                  <div className="sans" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--purple3)', marginBottom: 10 }}>{card.label}</div>
                  <h3 className="serif" style={{ fontSize: 28, fontWeight: 600, color: 'white', lineHeight: 1.15 }}>
                    {card.title.split('\n').map((t,i) => <span key={i}>{t}{i===0&&<br/>}</span>)}
                  </h3>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <p className="sans" style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 28, lineHeight: 1.65 }}>{card.desc}</p>
                  <ul style={{ listStyle: 'none' }}>
                    {card.features.map(f => (
                      <li key={f} className="sans" style={{ display: 'flex', gap: 12, padding: '11px 0', borderTop: '1px solid var(--lavender)', fontSize: 14, color: 'var(--muted)', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--purple)', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#waitlist" className="btn-purple" style={{ marginTop: 28, display: 'inline-block' }}>{card.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* STATS */}
      <section style={{ background: 'linear-gradient(135deg,#1A0A3C 0%,#2D1660 50%,#7B2FFF 100%)', padding: '72px 52px' }}>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', maxWidth: 1000, margin: '0 auto', gap: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 10, overflow: 'hidden' }}>
          {stats.map((s,i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', padding: '40px 32px', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
              <div className="serif" style={{ fontSize: 50, fontWeight: 700, lineHeight: 1, marginBottom: 10, letterSpacing: '-1.5px', background: 'linear-gradient(135deg,white,var(--purple3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.num}</div>
              <div className="sans" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '96px 52px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow sans" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2 className="section-title serif" style={{ textAlign: 'center' }}>Simple, transparent pricing.</h2>
          <p className="section-sub sans" style={{ textAlign: 'center' }}>Start free. Scale when you're ready.</p>
        </div>
        <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[
            { name:'Basic', price:'Free', sub:'forever', desc:'For individual recruiters or small employers testing the platform.', features:['3 active clusters','5 submissions/month','Basic dashboard','Email support'], cta:'Get started free', featured:false },
            { name:'Premium', price:'₹2,999', sub:'/month', desc:'For active recruiters and growing companies running multiple roles.', features:['Unlimited clusters','Unlimited submissions','Full analytics','Priority routing','Dedicated manager'], cta:'Start free trial', featured:true },
            { name:'Enterprise', price:'Custom', sub:'', desc:'For large organisations with high-volume hiring needs.', features:['Everything in Premium','White-label option','API access','Custom thresholds','SLA & support'], cta:'Contact us', featured:false },
          ].map(plan => (
            <div key={plan.name} style={{
              background: plan.featured ? 'linear-gradient(160deg,#1A0A3C,#7B2FFF)' : 'white',
              border: plan.featured ? '2px solid var(--purple2)' : '1px solid var(--border)',
              borderRadius: 12, padding: '36px 32px',
              display: 'flex', flexDirection: 'column', gap: 24,
              position: 'relative',
              boxShadow: plan.featured ? '0 12px 48px rgba(123,47,255,0.3)' : '0 2px 16px rgba(123,47,255,0.06)',
              transform: plan.featured ? 'translateY(-6px)' : 'none',
            }}>
              {plan.featured && <div className="sans" style={{ position:'absolute', top:-1, right:28, background:'var(--grad)', color:'white', fontSize:11, fontWeight:600, padding:'5px 14px', borderRadius:'0 0 8px 8px' }}>Most Popular</div>}
              <div>
                <div className="sans" style={{ fontSize:12, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color: plan.featured ? 'var(--purple3)' : 'var(--purple)', marginBottom:12 }}>{plan.name}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:4 }}>
                  <span className="serif" style={{ fontSize:40, fontWeight:700, lineHeight:1, letterSpacing:'-1px', color: plan.featured ? 'white' : 'var(--dark)' }}>{plan.price}</span>
                  <span className="sans" style={{ fontSize:14, color: plan.featured ? 'rgba(255,255,255,0.45)' : 'var(--muted)' }}>{plan.sub}</span>
                </div>
              </div>
              <p className="sans" style={{ fontSize:14, color: plan.featured ? 'rgba(255,255,255,0.6)' : 'var(--muted)', lineHeight:1.6 }}>{plan.desc}</p>
              <ul style={{ listStyle:'none', flex:1 }}>
                {plan.features.map(f => (
                  <li key={f} className="sans" style={{ display:'flex', gap:10, padding:'9px 0', borderTop:`1px solid ${plan.featured ? 'rgba(255,255,255,0.1)' : 'var(--lavender)'}`, fontSize:13, color: plan.featured ? 'rgba(255,255,255,0.75)' : 'var(--muted)', alignItems:'center' }}>
                    <span style={{ color: plan.featured ? 'var(--purple3)' : 'var(--purple)', fontWeight:700, flexShrink:0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className={plan.featured ? 'btn-purple' : 'btn-outline'} style={{ display:'block', textAlign:'center', borderRadius:6 }}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div style={{ background: 'var(--lavender)', borderTop: '1px solid var(--border)' }}>
        <section id="waitlist" style={{ padding: '100px 52px', textAlign: 'center' }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            {/* big logo in CTA */}
            <img src="/RecSaySymbol.png" alt="RecSay" style={{ width: 64, height: 64, objectFit: 'contain', marginBottom: 24 }} />
            <div className="eyebrow sans" style={{ justifyContent: 'center' }}>Early Access</div>
            <h2 className="serif" style={{ fontSize: 'clamp(36px,4vw,58px)', fontWeight: 700, lineHeight: 1.08, color: 'var(--dark)', marginBottom: 16 }}>
              Be first on<br /><em style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>the bridge.</em>
            </h2>
            <p className="sans" style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 44 }}>
              RecSay is launching soon. Join early access — whether you're hiring or placing, we'll onboard you in the first batch.
            </p>
            <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {['employer','recruiter'].map(r => (
                  <button key={r} type="button" onClick={() => setRole(r)} className="sans"
                    style={{ flex:1, padding:10, borderRadius:6, cursor:'pointer', fontSize:13, fontWeight:500, border: role===r ? '1.5px solid var(--purple)' : '1.5px solid var(--border2)', background: role===r ? 'var(--grad)' : 'white', color: role===r ? 'white' : 'var(--muted)', transition:'all 0.2s', textTransform:'capitalize', boxShadow: role===r ? '0 2px 12px rgba(123,47,255,0.25)' : 'none' }}>
                    I am {r==='employer'?'an':'a'} {r.charAt(0).toUpperCase()+r.slice(1)}
                  </button>
                ))}
              </div>
              <div className="cta-row" style={{ display:'flex', border:'1.5px solid var(--border2)', borderRadius:6, overflow:'hidden', background:'white' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                  style={{ flex:1, padding:'13px 16px', border:'none', outline:'none', fontSize:15, background:'transparent', color:'var(--dark)', fontFamily:'DM Sans' }} />
                <button type="submit" className="btn-purple" style={{ borderRadius:'0 4px 4px 0', padding:'13px 22px', boxShadow:'none' }}>Get Access →</button>
              </div>
              {submitted
                ? <p className="sans" style={{ marginTop:12, fontSize:13, color:'#5B21B6', fontWeight:500 }}>✓ You're in. We'll reach out when your access is ready.</p>
                : <p className="sans" style={{ marginTop:12, fontSize:12, color:'var(--muted2)' }}>No spam. Unsubscribe anytime. {count}+ people already joined.</p>}
            </form>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="sans" style={{ background:'linear-gradient(135deg,#1A0A3C,#2D1660)', padding:'40px 52px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:20 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <img src="/RecSaySymbol.png" alt="RecSay" style={{ width:28, height:28, objectFit:'contain' }} />
          <span className="serif" style={{ fontSize:18, fontWeight:700, color:'white' }}>RecSay</span>
        </div>
        <div style={{ display:'flex', gap:28, flexWrap:'wrap' }}>
          {['How it works','For Employers','For Recruiters','Pricing','Privacy'].map(l => (
            <a key={l} href="#" style={{ fontSize:13, color:'rgba(255,255,255,0.4)', textDecoration:'none', transition:'color 0.2s', fontFamily:'DM Sans' }}
              onMouseEnter={e => e.target.style.color='rgba(255,255,255,0.85)'}
              onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.4)'}
            >{l}</a>
          ))}
        </div>
        <p style={{ fontSize:13, color:'rgba(255,255,255,0.3)', fontFamily:'DM Sans' }}>© 2025 RecSay. All rights reserved.</p>
      </footer>
    </div>
  );
}