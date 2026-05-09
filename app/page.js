'use client';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('employer');
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // count animation
    let n = 0;
    const t = setInterval(() => { n += 9; if (n >= 340) { setCount(340); clearInterval(t); } else setCount(n); }, 14);
    // scroll
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    // step auto-cycle
    const st = setInterval(() => setActiveStep(s => (s + 1) % 4), 3000);
    return () => { clearInterval(t); clearInterval(st); window.removeEventListener('scroll', onScroll); };
  }, []);

  // Intersection observer for reveal
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setCount(c => c + 1);
    setEmail('');
  };

  const steps = [
    { n: '01', icon: '📋', title: 'Employer posts JD', desc: 'Upload job description, set role type, required tech stack and seniority level.', color: '#FF6B35' },
    { n: '02', icon: '⬡', title: 'AI clusters similar JDs', desc: 'Our algorithm extracts keywords and groups JDs with 70%+ match into one unified cluster.', color: '#7B2FFF' },
    { n: '03', icon: '👤', title: 'Recruiter submits once', desc: 'Recruiter sees one clean card per cluster. One submission reaches all matched employers.', color: '#00D4AA' },
    { n: '04', icon: '🔁', title: 'Pipeline auto-shifts', desc: 'Hired? Loop closes. Rejected? Candidate shifts automatically to the next matched employer.', color: '#FF3CAC' },
  ];

  const features = [
    { icon: '⬡', title: 'JD Clustering Engine', desc: 'Cosine similarity algorithm groups 5 employer JDs into 1 unified role card. Zero noise.', color: '#7B2FFF', bg: '#F0EBFF' },
    { icon: '🔍', title: 'Keyword Extraction', desc: '300+ tech terms. In-house NLP algorithm. No API dependency. Completely free to run.', color: '#FF6B35', bg: '#FFF0EB' },
    { icon: '🔁', title: 'Auto Pipeline Routing', desc: 'When a candidate is rejected, the system auto-routes them to the next eligible employer.', color: '#00D4AA', bg: '#E6FFF9' },
    { icon: '📊', title: 'Smart Dashboards', desc: 'Real-time stats, pipeline charts, placement rates for both employers and recruiters.', color: '#FF3CAC', bg: '#FFE6F5' },
    { icon: '🚀', title: 'Role-based Access', desc: 'Employers and recruiters see completely different interfaces tailored to their workflow.', color: '#FFB800', bg: '#FFFBE6' },
    { icon: '🔒', title: 'Secure Auth', desc: 'Supabase-powered authentication. Role-based routing on login. Zero friction signup.', color: '#0066FF', bg: '#E6F0FF' },
  ];

  const testimonials = [
    { quote: 'RecSay cut our sourcing time by 60%. One JD, five companies. It\'s magic.', name: 'Sarah Jenkins', role: 'Talent Lead, Scale.ai', color: '#7B2FFF' },
    { quote: 'As an independent recruiter, placing at 5 companies with one submission changed everything.', name: 'Arjun Mehta', role: 'Founder, TechRecruit', color: '#FF6B35' },
    { quote: 'The clustering accuracy is scary good. It knows Python at Fintech ≠ Python at Gaming.', name: 'Marcus Thorne', role: 'CHRO, FinEdge', color: '#00D4AA' },
  ];

  const plans = [
    { name: 'Starter', price: 'Free', sub: 'forever', features: ['3 active clusters', '5 submissions/month', 'Basic dashboard', 'Email support'], cta: 'Start free', featured: false },
    { name: 'Professional', price: '₹2,999', sub: '/month', features: ['Unlimited clusters', 'Unlimited submissions', 'Full analytics', 'Priority routing', 'Dedicated manager'], cta: 'Start free trial', featured: true },
    { name: 'Enterprise', price: 'Custom', sub: '', features: ['White-label option', 'API access', 'Custom thresholds', 'SLA & support', 'On-premise option'], cta: 'Contact us', featured: false },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0A0A0A', color: '#F0EDE6', overflowX: 'hidden', cursor: 'default' }}>
      

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 52px', height: 64,
        background: scrollY > 40 ? 'rgba(10,10,10,0.95)' : 'transparent',
        borderBottom: scrollY > 40 ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrollY > 40 ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/RecSaySymbol.png" alt="RecSay" style={{ width: 70, height: 70, objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(123,47,255,0.6))' }} onError={e => { e.target.style.display='none'; }} />
          <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 20, fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>RecSay</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['How it works', 'Features', 'Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="nav-link">{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="/login" className="btn-ghost" style={{ padding: '9px 20px', fontSize: 13 }}>Sign in</a>
          <a href="/register" className="btn-primary" style={{ padding: '9px 20px', fontSize: 13 }}>Get started free</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section" ref={heroRef} style={{ padding: '130px 52px 80px', maxWidth: 1280, margin: '0 auto', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

        {/* BIG BG GLOW */}
        <div style={{ position: 'fixed', top: '10%', left: '30%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,47,255,0.15) 0%, transparent 70%)', pointerEvents: 'none', animation: 'glow 4s ease-in-out infinite' }} />
        <div style={{ position: 'fixed', top: '40%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)', pointerEvents: 'none', animation: 'glow 6s ease-in-out infinite 2s' }} />

        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', width: '100%' }}>

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(123,47,255,0.15)', border: '1px solid rgba(123,47,255,0.3)', borderRadius: 99, padding: '6px 14px', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7B2FFF', display: 'inline-block', animation: 'blink 2s infinite' }} />
              <span style={{ fontSize: 12, color: '#C084FC', fontWeight: 500, letterSpacing: '0.06em' }}>Now in early access</span>
            </div>

            <h1 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(44px, 5vw, 76px)', fontWeight: 800, lineHeight: 1.02, letterSpacing: '-2px', color: 'white', marginBottom: 24 }}>
              One JD.<br />
              <span style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF3CAC 50%, #7B2FFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Five Companies.
              </span><br />
              Zero Waste.
            </h1>

            <p style={{ fontSize: 18, color: 'rgba(240,237,230,0.6)', lineHeight: 1.72, maxWidth: 460, marginBottom: 40, fontWeight: 300 }}>
              RecSay clusters similar job descriptions from multiple employers into one role — so recruiters submit once and every matched company receives the best candidates.
            </p>

            {/* Form */}
            <div style={{ maxWidth: 440 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {['employer', 'recruiter'].map(r => (
                  <button key={r} onClick={() => setRole(r)} style={{
                    flex: 1, padding: '10px', borderRadius: 8, border: 'none', cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
                    background: role === r ? 'white' : 'rgba(255,255,255,0.06)',
                    color: role === r ? '#0A0A0A' : 'rgba(240,237,230,0.5)',
                    transition: 'all 0.2s', textTransform: 'capitalize',
                  }}>
                    I&apos;m {r === 'employer' ? 'an' : 'a'} {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, overflow: 'hidden' }}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(123,47,255,0.6)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your work email"
                  style={{ flex: 1, padding: '14px 18px', background: 'transparent', border: 'none', outline: 'none', color: 'white', fontFamily: "'DM Sans', sans-serif", fontSize: 15 }} />
                <button type="submit" className="btn-primary" style={{ borderRadius: '0 8px 8px 0', padding: '14px 22px' }}>
                  Join waitlist →
                </button>
              </form>
              {submitted
                ? <p style={{ marginTop: 10, fontSize: 13, color: '#00D4AA', fontWeight: 500 }}>✓ You&apos;re in. We&apos;ll reach out soon.</p>
                : <p style={{ marginTop: 10, fontSize: 12, color: 'rgba(240,237,230,0.35)' }}>{count}+ people already joined. No spam.</p>
              }
            </div>
          </div>

          {/* RIGHT — LIVE DEMO CARD */}
          <div className="demo-col float" style={{ position: 'relative' }}>
            {/* Decorative ring */}
            <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', border: '1px solid rgba(123,47,255,0.2)', animation: 'spin-slow 20s linear infinite' }}>
              <div style={{ position: 'absolute', top: -4, left: '50%', width: 8, height: 8, borderRadius: '50%', background: '#7B2FFF', marginLeft: -4 }} />
            </div>

            <div className="demo-card">
              <div className="demo-header">
                <div className="dot" style={{ background: '#FF5F57' }} />
                <div className="dot" style={{ background: '#FEBC2E' }} />
                <div className="dot" style={{ background: '#28C840' }} />
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 8 }}>RecSay — Live Cluster</span>
              </div>
              <div style={{ padding: 20 }}>
                {/* Cluster header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Active Cluster</div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: 'white' }}>Python Developer · Senior · Remote</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(0,212,170,0.12)', border: '1px solid rgba(0,212,170,0.3)', borderRadius: 99, padding: '4px 10px' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00D4AA', display: 'inline-block', animation: 'blink 2s infinite' }} />
                    <span style={{ fontSize: 10, color: '#00D4AA', fontWeight: 600 }}>LIVE</span>
                  </div>
                </div>

                {/* Companies */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>5 employers matched</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {['TechCorp','DataInc','Finvest','BuildAI','ScaleUp'].map(co => (
                      <span key={co} style={{ background: 'rgba(123,47,255,0.15)', border: '1px solid rgba(123,47,255,0.3)', borderRadius: 4, padding: '4px 9px', fontSize: 11, fontWeight: 600, color: '#C084FC' }}>{co} ✓</span>
                    ))}
                  </div>
                </div>

                {/* Match score */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 14px', marginBottom: 14 }}>
                  <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 32, fontWeight: 800, color: '#7B2FFF', lineHeight: 1 }}>78%</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: 2 }}>Keyword match</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Python · Django · PostgreSQL · AWS</div>
                  </div>
                </div>

                {/* Recruiters */}
                <div style={{ marginBottom: 14 }}>
                  {[['Priya S.', 'TalentBridge', 5], ['Arjun M.', 'IndieRecruiter', 5]].map(([n, o, c]) => (
                    <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: 12 }}>
                      <span style={{ color: 'rgba(255,255,255,0.6)' }}>{n} · <span style={{ color: 'rgba(255,255,255,0.35)' }}>{o}</span></span>
                      <span style={{ color: '#C084FC', fontWeight: 600 }}>{c} candidates</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {[['10', 'Pipeline', '#7B2FFF'], ['4', 'Interviews', '#00D4AA'], ['1', 'Offer', '#FF6B35']].map(([n, l, col]) => (
                    <div key={l} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px', textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: col, lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 3 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div style={{ position: 'absolute', top: -16, left: -16, background: '#FF6B35', borderRadius: 10, padding: '8px 14px', fontSize: 12, fontWeight: 700, color: 'white', boxShadow: '0 8px 24px rgba(255,107,53,0.4)', animation: 'float 3s ease-in-out infinite 0.5s' }}>
              +5 employers matched
            </div>
            <div style={{ position: 'absolute', bottom: 24, right: -20, background: '#00D4AA', borderRadius: 10, padding: '8px 14px', fontSize: 12, fontWeight: 700, color: '#0A0A0A', boxShadow: '0 8px 24px rgba(0,212,170,0.4)', animation: 'float 4s ease-in-out infinite 1s' }}>
              1 candidate → 5 companies
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '18px 0', overflow: 'hidden', background: 'rgba(123,47,255,0.05)' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', width: 'max-content', gap: 60 }}>
          {['JD Clustering','Cosine Similarity','Pipeline Routing','Smart Matching','Auto Shift','Zero Duplicates','5× Reach','Keyword Extraction','Recruiter Intelligence','Employer Network',
            'JD Clustering','Cosine Similarity','Pipeline Routing','Smart Matching','Auto Shift','Zero Duplicates','5× Reach','Keyword Extraction','Recruiter Intelligence','Employer Network'].map((t, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 500, color: i % 3 === 0 ? '#7B2FFF' : i % 3 === 1 ? '#FF6B35' : 'rgba(240,237,230,0.25)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              {i % 5 === 0 ? '⬡' : '·'} {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="section-pad" style={{ padding: '120px 52px', maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7B2FFF', marginBottom: 16 }}>The Process</div>
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-1.5px', color: 'white', maxWidth: 600 }}>
            From job description<br />to hire — <span style={{ color: '#7B2FFF' }}>intelligently.</span>
          </h2>
        </div>

        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {steps.map((step, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setActiveStep(i)}
            >
              <div style={{
                background: activeStep === i ? step.color : '#111',
                border: `1px solid ${activeStep === i ? step.color : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 16, padding: '28px 24px', cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: activeStep === i ? 'scale(1.02)' : 'scale(1)',
                boxShadow: activeStep === i ? `0 20px 60px ${step.color}40` : 'none',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: activeStep === i ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)', marginBottom: 16 }}>{step.n}</div>
                <div style={{ fontSize: 26, marginBottom: 14 }}>{step.icon}</div>
                <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: 'white', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: activeStep === i ? 'rgba(255,255,255,0.75)' : 'rgba(240,237,230,0.4)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{ background: 'rgba(123,47,255,0.08)', borderTop: '1px solid rgba(123,47,255,0.15)', borderBottom: '1px solid rgba(123,47,255,0.15)', padding: '60px 52px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 16, overflow: 'hidden' }}>
          {[['5×', 'More employer reach per submission'], ['70%', 'Keyword match triggers a cluster'], ['0', 'Duplicate candidates per company'], ['∞', 'Pipeline — no candidate wasted']].map(([n, l], i) => (
            <div key={i} className="reveal" style={{ background: '#0A0A0A', padding: '40px 24px', textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
              <div style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 52, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, marginBottom: 8, color: i === 0 ? '#FF6B35' : i === 1 ? '#7B2FFF' : i === 2 ? '#00D4AA' : '#FF3CAC' }}>{n}</div>
              <div style={{ fontSize: 13, color: 'rgba(240,237,230,0.4)', lineHeight: 1.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="section-pad" style={{ padding: '120px 52px', maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B35', marginBottom: 16 }}>Built different</div>
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-1.5px', color: 'white' }}>
            Everything you need.<br />Nothing you don&apos;t.
          </h2>
        </div>
        <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {features.map((f, i) => (
            <div key={i} className={`feat-card reveal reveal-delay-${(i % 4) + 1}`}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: `${f.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: 'white', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(240,237,230,0.45)', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOR WHO ── */}
      <section style={{ padding: '0 52px 120px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Employer */}
          <div className="reveal" style={{ background: 'linear-gradient(135deg, #1A0A3C 0%, #2D1060 100%)', border: '1px solid rgba(123,47,255,0.3)', borderRadius: 24, overflow: 'hidden' }}>
            <div style={{ padding: '40px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(192,132,252,0.7)', marginBottom: 12 }}>For Employers</div>
              <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 34, fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: 16 }}>Post once.<br />Receive many.</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 28 }}>Upload your JD and let RecSay bring pre-qualified candidates from a network of specialized recruiters — without managing 10 agencies.</p>
              <ul style={{ listStyle: 'none', marginBottom: 32 }}>
                {['Company profile + verified details', 'Tech & non-tech hiring tracks', 'Zero duplicate candidates', 'Real-time hiring dashboard'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, padding: '9px 0', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                    <span style={{ color: '#7B2FFF', fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/register" className="btn-primary">Get started as Employer →</a>
            </div>
          </div>
          {/* Recruiter */}
          <div className="reveal reveal-delay-2" style={{ background: 'linear-gradient(135deg, #1A1A0A 0%, #2D2010 100%)', border: '1px solid rgba(255,107,53,0.3)', borderRadius: 24, overflow: 'hidden' }}>
            <div style={{ padding: '40px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,107,53,0.7)', marginBottom: 12 }}>For Recruiters</div>
              <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 34, fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: 16 }}>Work one role.<br />Place at five.</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 28 }}>Stop reading 50 JDs that say the same thing. RecSay clusters them so one strong candidate submission reaches all matched employers simultaneously.</p>
              <ul style={{ listStyle: 'none', marginBottom: 32 }}>
                {['Work solo or under any consultancy', 'Clustered JD view — one card per role', 'Submit once, reach 5 companies', 'Earnings & placement analytics'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, padding: '9px 0', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                    <span style={{ color: '#FF6B35', fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/register" className="btn-primary" style={{ background: '#FF6B35' }}>Get started as Recruiter →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '0 52px 120px', maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00D4AA', marginBottom: 16 }}>Social proof</div>
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-1.5px', color: 'white' }}>
            What early users say.
          </h2>
        </div>
        <div className="testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-card reveal reveal-delay-${i + 1}`} style={{ borderTop: `3px solid ${t.color}` }}>
              <div style={{ fontSize: 40, color: t.color, fontFamily: 'serif', lineHeight: 1, marginBottom: 16 }}>&ldquo;</div>
              <p style={{ fontSize: 15, color: 'rgba(240,237,230,0.7)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{t.name}</div>
              <div style={{ fontSize: 12, color: 'rgba(240,237,230,0.4)', marginTop: 3 }}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '0 52px 120px', maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF3CAC', marginBottom: 16 }}>Pricing</div>
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-1.5px', color: 'white' }}>
            Simple pricing.<br />No surprises.
          </h2>
        </div>
        <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {plans.map((plan, i) => (
            <div key={i} className={`plan-card reveal reveal-delay-${i + 1}`} style={{
              background: plan.featured ? 'linear-gradient(135deg, #1A0A3C, #3D1A78)' : '#111',
              border: plan.featured ? '1px solid rgba(123,47,255,0.5)' : '1px solid rgba(255,255,255,0.07)',
              transform: plan.featured ? 'scale(1.03)' : 'scale(1)',
              boxShadow: plan.featured ? '0 24px 60px rgba(123,47,255,0.25)' : 'none',
            }}>
              {plan.featured && <div style={{ background: 'linear-gradient(90deg, #7B2FFF, #FF3CAC)', color: 'white', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', padding: '6px 14px', borderRadius: '0 0 10px 10px', display: 'inline-block', marginBottom: 8 }}>MOST POPULAR</div>}
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: plan.featured ? '#C084FC' : 'rgba(240,237,230,0.4)', marginBottom: 12 }}>{plan.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 44, fontWeight: 800, color: 'white', letterSpacing: '-1px', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontSize: 14, color: 'rgba(240,237,230,0.4)' }}>{plan.sub}</span>
                </div>
              </div>
              <ul style={{ listStyle: 'none', flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, padding: '9px 0', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: 13, color: 'rgba(240,237,230,0.6)' }}>
                    <span style={{ color: plan.featured ? '#C084FC' : '#7B2FFF', fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/register" style={{
                display: 'block', textAlign: 'center', padding: '13px', borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.2s',
                background: plan.featured ? 'linear-gradient(135deg, #7B2FFF, #FF3CAC)' : 'transparent',
                color: plan.featured ? 'white' : 'rgba(240,237,230,0.6)',
                border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.12)',
                boxShadow: plan.featured ? '0 8px 24px rgba(123,47,255,0.3)' : 'none',
              }}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: '0 52px 140px' }}>
        <div className="reveal" style={{ maxWidth: 900, margin: '0 auto', background: 'linear-gradient(135deg, #1A0A3C 0%, #0A0A0A 50%, #1A0A14 100%)', border: '1px solid rgba(123,47,255,0.2)', borderRadius: 32, padding: '80px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,47,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <img src="/RecSaySymbol.png" alt="RecSay" style={{ width: 64, height: 64, objectFit: 'contain', marginBottom: 24, filter: 'drop-shadow(0 0 20px rgba(123,47,255,0.5))' }} onError={e => e.target.style.display='none'} />
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-2px', color: 'white', lineHeight: 1.05, marginBottom: 16 }}>
            Be first on<br /><span style={{ background: 'linear-gradient(135deg, #FF6B35, #FF3CAC, #7B2FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>the bridge.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(240,237,230,0.5)', marginBottom: 44, lineHeight: 1.65 }}>
            RecSay is launching soon. Join early access — whether you&apos;re hiring or placing, we&apos;ll onboard you in the first batch.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/register?role=employer" className="btn-primary" style={{ background: '#7B2FFF', padding: '14px 32px', fontSize: 15 }}>Join as Employer</a>
            <a href="/register?role=recruiter" className="btn-ghost" style={{ padding: '14px 32px', fontSize: 15 }}>Join as Recruiter</a>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(240,237,230,0.25)' }}>{count}+ people already on the waitlist</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 52px' }}>
        <div className="footer-grid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/RecSaySymbol.png" alt="RecSay" style={{ width: 22, height: 22, objectFit: 'contain' }} onError={e => e.target.style.display='none'} />
            <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: 'white' }}>RecSay</span>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {['How it works', 'Features', 'Pricing', 'Login', 'Register'].map(l => (
              <a key={l} href={l === 'Login' ? '/login' : l === 'Register' ? '/register' : `#${l.toLowerCase().replace(/ /g,'-')}`}
                style={{ fontSize: 13, color: 'rgba(240,237,230,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(240,237,230,0.8)'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,237,230,0.35)'}
              >{l}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'rgba(240,237,230,0.2)' }}>© 2025 RecSay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}