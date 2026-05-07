'use client';
import { useState, useEffect, useRef } from 'react';


const C = {
  deep:    '#12082E',
  purple:  '#7B2FFF',
  purple2: '#9B5FFF',
  lav:     '#C084FC',
  lav2:    '#E0BFFF',
  bg:      '#F8F6FF',
  border:  '#DDD6FF',
  border2: '#C4B8FF',
  muted:   '#5A4880',
  muted2:  '#8B7AAE',
  text:    '#1E0F45',
  grad:    'linear-gradient(135deg,#7B2FFF 0%,#C084FC 100%)',
};

function useScrollFade() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.classList.add('vis');
      el.querySelectorAll('.bar-fill[data-w]').forEach(b => { b.style.width = b.dataset.w + '%'; });
      el.querySelectorAll('.donut-ring[data-pct]').forEach(ring => {
        const circ = 2 * Math.PI * 48;
        const pct = parseFloat(ring.dataset.pct);
        ring.style.strokeDasharray = circ;
        ring.style.strokeDashoffset = circ - (pct / 100) * circ;
      });
      obs.disconnect();
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RH({ children }) {
  return <div className="rh">{children}</div>;
}

// ── SIDEBAR
function Sidebar({ open, onClose }) {
  const skills = [
    { label:'JD Clustering',    pct:94 },
    { label:'AI Matching',      pct:88 },
    { label:'Pipeline Auto',    pct:96 },
    { label:'Keyword Extract',  pct:91 },
    { label:'Multi-Co Routing', pct:87 },
  ];
  const barsRef = useRef([]);
  useEffect(() => {
    const t = setTimeout(() => {
      barsRef.current.forEach((el, i) => { if (el) el.style.width = skills[i].pct + '%'; });
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const [active, setActive] = useState('summary');
  useEffect(() => {
    const ids = ['summary','competencies','experience','stats','projects','pricing','references'];
    const h = () => {
      const y = window.pageYOffset + 100;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navItems = [
    ['summary','Summary'],['competencies','How It Works'],['experience','Live Clusters'],
    ['stats','Achievements'],['projects','Solutions'],['pricing','Plans'],['references','References'],
  ];

  return (
    <aside className={`sidebar${open ? ' open' : ''}`}>
      {/* noise + glow via ::before ::after in globals.css */}
      <div className="sidebar-identity">
        <div className="logo-row">
          <img src="/RecSaySymbol.png" alt="RecSay" className="logo-img"
            onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
          <div className="logo-fallback" style={{ display:'none' }}>R</div>
          <span className="logo-name">RecSay</span>
        </div>
        <div className="logo-tagline">Recruitment Intelligence Platform</div>
        <div className="sidebar-divider" />
      </div>

      <nav className="sidebar-nav">
        {navItems.map(([id, label]) => (
          <a key={id} href={"/login"} className={`nav-item${active===id?' active':''}`} onClick={onClose}>
            <span className="nav-line" />{label}
          </a>
        ))}
      </nav>

      <div className="sidebar-contact">
        <div className="contact-item">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Join Waitlist
        </div>
        <div className="contact-item">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
          </svg>
          recsay.com
        </div>
        <a href="/register" className="btn-access">Request Early Access</a>
        <div className="live-badge">
          <span className="live-dot" />
          Now accepting signups
        </div>
      </div>

      <div className="sidebar-skills">
        <div className="skills-label">Platform Capabilities</div>
        {skills.map((s, i) => (
          <div key={s.label} className="skill-item">
            <div className="skill-top">
              <span>{s.label}</span>
              <span className="skill-pct">{s.pct}%</span>
            </div>
            <div className="skill-track">
              <div className="skill-fill" ref={el => barsRef.current[i] = el} />
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-stats">
        {[['340+','Early signups'],['5×','Placement reach'],['70%','Match threshold']].map(([n,d]) => (
          <div key={n} className="stat-row">
            <div className="stat-num-big">{n}</div>
            <div className="stat-desc">{d}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ── SUMMARY
function SummarySection() {
  const ref = useScrollFade();
  const [role, setRole] = useState('emp');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(340);

  const submit = () => {
    if (!email || !email.includes('@')) {
      document.getElementById('emailIn').style.outline = '2px solid #EF4444';
      setTimeout(() => { document.getElementById('emailIn').style.outline = ''; }, 1500);
      return;
    }
    setSubmitted(true);
    setCount(c => c + 1);
    setEmail('');
  };

  return (
    <section ref={ref} id="summary" className="section-gap fu">
      <RH>Professional Summary</RH>
      <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,5.5vw,72px)', fontWeight:700, lineHeight:1.04, letterSpacing:'-1px', color:C.text, marginBottom:24 }}>
        The Smarter Bridge<br />
        Between{' '}
        <span style={{ background:C.grad, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontStyle:'italic' }}>
          Recruiters
        </span>
        <br />&amp; Employers.
      </h1>
      <p style={{ fontSize:17, color:C.muted, lineHeight:1.75, maxWidth:600, marginBottom:28, fontWeight:300 }}>
        RecSay clusters similar job descriptions from multiple employers into one unified role — so recruiters submit once and reach every company that needs that candidate. Zero waste. Infinite pipeline.
      </p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:36 }}>
        {['#AI-Powered','#JD-Clustering','#Zero-Waste-Pipeline','#Multi-Company-Routing'].map(t => (
          <span key={t} style={{ padding:'6px 14px', borderRadius:99, background:'#EDE9FF', border:`1px solid ${C.border2}`, fontSize:11, fontWeight:600, color:C.purple }}>{t}</span>
        ))}
      </div>
      <div className="wl-form">
        <div className="role-toggle">
          <button id="roleEmp" className={`role-btn${role==='emp'?' on':''}`} onClick={() => setRole('emp')}>I&apos;m an Employer</button>
          <button id="roleRec" className={`role-btn${role==='rec'?' on':''}`} onClick={() => setRole('rec')}>I&apos;m a Recruiter</button>
        </div>
        <div className="email-row">
          <input id="emailIn" type="email" value={email} onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key==='Enter' && submit()}
            placeholder="Enter your work email" />
          <button onClick={submit}>Join Waitlist →</button>
        </div>
        {submitted
          ? <p className="form-success" style={{ display:'block' }}>✓ You&apos;re on the list. We&apos;ll be in touch soon.</p>
          : <p className="form-note">Join <strong id="cnt">{count}</strong>+ recruiters &amp; employers already waiting. No spam.</p>
        }
      </div>
    </section>
  );
}

// ── COMPETENCIES
function CompetenciesSection() {
  const ref = useScrollFade();
  const comps = [
    { num:'01', icon:'📋', title:'JD Ingestion',     desc:'Employer uploads or pastes JD. System specifies tech/non-tech track, required skills, seniority.', tag:'Employer Action', tagBg:'#EEF0FF', tagColor:'#4338CA' },
    { num:'02', icon:'⬡',  title:'Cluster Engine',   desc:'AI extracts keywords, compares all JDs using cosine similarity. 70%+ match groups into one unified cluster.', tag:'AI Step', tagBg:'#EDE9FF', tagColor:'#7B2FFF' },
    { num:'03', icon:'👤', title:'Candidate Routing', desc:'Recruiter sees one clean cluster card. Submits once — instantly reaches all matched employers.', tag:'Recruiter Action', tagBg:'#F0FDF4', tagColor:'#166534' },
    { num:'04', icon:'🔁', title:'Pipeline Shift',    desc:'Hired candidates close the loop. Rejected ones auto-route to the next matched employer. Zero waste.', tag:'Automated', tagBg:'#FFF7ED', tagColor:'#C2410C' },
  ];
  return (
    <section ref={ref} id="competencies" className="section-gap fu">
      <RH>Core Competencies</RH>
      <div className="comp-grid">
        {comps.map(c => (
          <div key={c.num} className="comp-card">
            <div className="comp-num">{c.num}</div>
            <div className="comp-icon">{c.icon}</div>
            <div className="comp-title">{c.title}</div>
            <div className="comp-desc">{c.desc}</div>
            <span className="comp-tag" style={{ background:c.tagBg, color:c.tagColor }}>{c.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── EXPERIENCE
function ExperienceSection() {
  const ref = useScrollFade();
  const dimClusters = [
    { role:'React Developer — Full Stack Hybrid', cos:'Growfast · NovaTech · Axiom Labs', pct:'82%', status:'Filling', detail:'3 employers · 9 candidates in review · 1 offer pending' },
    { role:'Data Analyst — Mid-level Remote',     cos:'FinEdge · InsightCo · Quantix · Datamind', pct:'75%', status:'Filling', detail:'4 employers · 12 candidates submitted · interviews starting' },
  ];
  return (
    <section ref={ref} id="experience" className="section-gap fu">
      <RH>Experience — Live Clusters</RH>

      <div className="cluster-entry">
        <div className="cluster-entry-dot" />
        <div className="cluster-top">
          <div>
            <div className="cluster-role">Python Developer — Senior Remote</div>
            <div className="cluster-co">TechCorp · DataInc · Finvest · BuildAI · ScaleUp</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
            <span className="match-chip"><span className="pulsedot" />78% match</span>
            <span className="cluster-date">Active Now</span>
          </div>
        </div>
        <div className="cluster-pills">
          {['Python','Django','PostgreSQL','AWS','REST APIs'].map(p => <span key={p} className="c-pill">{p}</span>)}
        </div>
        <ul className="cluster-bullets">
          {['5 employers matched under one unified JD cluster — 78% keyword overlap','15 candidates currently in pipeline distributed across all companies','6 actively interviewing · 2 offers extended · 0 duplicates','Submitted by 3 recruiters — TalentBridge, IndieRecruiter, HireForce'].map(b => (
            <li key={b}><span>·</span>{b}</li>
          ))}
        </ul>
      </div>

      {dimClusters.map(cl => (
        <div key={cl.role} className="cluster-entry dim">
          <div className="cluster-entry-dot dim" />
          <div className="cluster-top">
            <div>
              <div className="cluster-role">{cl.role}</div>
              <div className="cluster-co">{cl.cos}</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
              <span className="match-chip"><span className="pulsedot grey" />{cl.pct} match</span>
              <span className="cluster-date">{cl.status}</span>
            </div>
          </div>
          <ul className="cluster-bullets">
            <li><span>·</span>{cl.detail}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}

// ── STATS
function StatsSection() {
  const ref = useScrollFade();
  const circ = 2 * Math.PI * 48;
  const donuts = [{ pct:94, label:'Cluster Hit Rate' },{ pct:88, label:'Placement Rate' },{ pct:96, label:'Pipeline Efficiency' }];
  const bars = [{ name:'Engineering',pct:85,val:142 },{ name:'Marketing',pct:60,val:89 },{ name:'Design',pct:42,val:56 },{ name:'Leadership',pct:52,val:34 },{ name:'Contract',pct:70,val:78 }];
  return (
    <section ref={ref} id="stats" className="section-gap fu">
      <RH>Achievements &amp; Metrics</RH>
      <div className="big-stats">
        {[['5×','More employer reach per submission'],['70%','Keyword match triggers a cluster'],['0','Duplicate candidates per company'],['∞','Pipeline — no candidate wasted']].map(([n,l]) => (
          <div key={n} className="big-stat">
            <div className="big-num">{n}</div>
            <div className="big-lbl">{l}</div>
          </div>
        ))}
      </div>
      <div className="donuts-row">
        {donuts.map(d => (
          <div key={d.label} className="donut-wrap">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <defs>
                <linearGradient id={`dg${d.pct}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7B2FFF"/><stop offset="100%" stopColor="#C084FC"/>
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="48" fill="none" stroke="#EDE9FF" strokeWidth="10"/>
              <circle cx="60" cy="60" r="48" fill="none" stroke={`url(#dg${d.pct})`} strokeWidth="10"
                strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ}
                className="donut-ring" data-pct={d.pct}
                transform="rotate(-90 60 60)"
                style={{ transition:'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)' }}
              />
              <text x="60" y="65" textAnchor="middle"
                style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, fill:'#7B2FFF' }}>
                {d.pct}%
              </text>
            </svg>
            <div className="donut-lbl">{d.label}</div>
          </div>
        ))}
      </div>
      <div className="bars-section">
        <div className="bars-label">Roles Closed This Month — by Category</div>
        {bars.map(b => (
          <div key={b.name} className="bar-row">
            <div className="bar-name">{b.name}</div>
            <div className="bar-track"><div className="bar-fill" data-w={b.pct} /></div>
            <div className="bar-val">{b.val}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PROJECTS
function ProjectsSection() {
  const ref = useScrollFade();
  const projects = [
    { headStyle:'background:linear-gradient(135deg,#12082E,#3D1A78)', sublabel:'Employer Portal', title:'Post once.\nReceive many.', desc:'Upload your JD and receive pre-qualified candidates from a network of specialized recruiters — without managing 10 agencies.', features:['Company profile with verified hiring details','Tech & non-tech hiring tracks','Batch candidates per role, zero duplicates','Real-time hiring dashboard','Auto-routed pipeline candidates'], cta:'Get Started as Employer →', solid:false },
    { headStyle:'background:linear-gradient(135deg,#7B2FFF,#C084FC)',  sublabel:'Recruiter Dashboard', title:'Work one role.\nPlace at five.', desc:'Stop reading 50 JDs that say the same thing. Submit once and reach every matched employer simultaneously.', features:['Work solo or under any consultancy','Clustered JD view — one card per role','Submit once, reach multiple companies','Earnings & placement analytics','Real-time candidate stage alerts'], cta:'Get Started as Recruiter →', solid:true },
  ];
  return (
    <section ref={ref} id="projects" className="section-gap fu">
      <RH>Key Projects &amp; Solutions</RH>
      <div className="proj-grid">
        {projects.map(p => (
          <div key={p.sublabel} className="proj-card">
            <div className="proj-head" style={{ background: p.solid ? 'linear-gradient(135deg,#7B2FFF,#C084FC)' : 'linear-gradient(135deg,#12082E,#3D1A78)' }}>
              <div className="proj-sublabel">{p.sublabel}</div>
              <div className="proj-title">{p.title.split('\n').map((t,i)=><span key={i}>{t}{i===0&&<br/>}</span>)}</div>
            </div>
            <div className="proj-body">
              <p className="proj-desc">{p.desc}</p>
              <ul className="proj-features">
                {p.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
              </ul>
              <a href="/register" className={`proj-btn${p.solid?' solid':''}`}>{p.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PRICING
function PricingSection() {
  const ref = useScrollFade();
  const plans = [
    { name:'Starter',      price:'Free',   issued:'₹0/month',  icon:'🎓', feat:false, desc:'For individuals testing the platform.',         features:['3 active clusters','5 submissions/month','Basic dashboard','Email support'], cta:'Enroll Now' },
    { name:'Professional', price:'₹2,999', issued:'per month', icon:'⭐', feat:true,  desc:'For active recruiters and growing companies.',  features:['Unlimited clusters','Unlimited submissions','Full analytics','Priority routing','Dedicated manager'], cta:'Get Certified' },
    { name:'Enterprise',   price:'Custom', issued:'tailored',  icon:'🏢', feat:false, desc:'For large organisations with high-volume needs.',features:['White-label option','API access','Custom thresholds','SLA & dedicated support'], cta:'Contact Sales' },
  ];
  return (
    <section ref={ref} id="pricing" className="section-gap fu">
      <RH>Certifications &amp; Plans</RH>
      <div className="plans-grid">
        {plans.map(p => (
          <div key={p.name} className={`plan-card${p.feat?' feat':''}`}>
            {p.feat && <div className="plan-badge">MOST POPULAR</div>}
            <div className="plan-icon" style={{ background: p.feat ? 'rgba(192,132,252,0.15)' : '#EDE9FF' }}>{p.icon}</div>
            <div className="plan-name" style={{ color: p.feat ? C.lav : C.muted }}>{p.name}</div>
            <div>
              <div className="plan-price" style={{ color: p.feat ? 'white' : C.text }}>{p.price}</div>
              <div className="plan-issued" style={{ color: p.feat ? C.lav : C.muted2 }}>Issued by RecSay · {p.issued}</div>
            </div>
            <div className="plan-desc" style={{ color: p.feat ? 'rgba(224,191,255,0.7)' : C.muted }}>{p.desc}</div>
            <ul className="plan-feats" style={{ color: p.feat ? 'rgba(224,191,255,0.75)' : C.muted }}>
              {p.features.map(f => (
                <li key={f} style={{ borderTopColor: p.feat ? 'rgba(221,214,255,0.15)' : C.border }}>
                  <span style={{ color: p.feat ? C.lav : C.purple }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button className="plan-cta" style={p.feat
              ? { background:C.grad, color:'white', boxShadow:'0 4px 16px rgba(123,47,255,0.35)', border:'none' }
              : { border:`1.5px solid ${C.border2}`, color:C.purple, background:'transparent' }}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── REFERENCES
function ReferencesSection() {
  const ref = useScrollFade();
  const refs = [
    { quote:'The clustering feature changed how we source. We close roles in days now, not weeks.', name:'Sarah Jenkins', role:'Talent Lead, Scale.ai' },
    { quote:'RecSay acts like a force multiplier for our boutique agency. The AI matching is scary accurate.', name:'Arjun Mehta', role:'Founder, TechRecruit' },
    { quote:'A premium tool for premium hiring. The dashboard feels like a high-end product for data-driven teams.', name:'Marcus Thorne', role:'CHRO, FinEdge' },
  ];
  return (
    <section ref={ref} id="references" className="section-gap fu">
      <RH>References</RH>
      <div className="ref-grid">
        {refs.map(r => (
          <div key={r.name} className="ref-card">
            <div className="ref-quote">&ldquo;{r.quote}&rdquo;</div>
            <div className="ref-name">{r.name}</div>
            <div className="ref-role">{r.role}</div>
            <div className="ref-avail">Available upon request</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── ROOT
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <button id="navToggle" className="mobile-nav-toggle" onClick={() => setSidebarOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
      <div id="overlay" className={`sidebar-overlay${sidebarOpen?' show':''}`} onClick={() => setSidebarOpen(false)} />
      <div className="layout">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="main">
          <SummarySection />
          <CompetenciesSection />
          <ExperienceSection />
          <StatsSection />
          <ProjectsSection />
          <PricingSection />
          <ReferencesSection />
        </main>
      </div>
    </>
  );
}