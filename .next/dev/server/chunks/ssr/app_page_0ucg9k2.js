module.exports = [
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('employer');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let n = 0;
        const t = setInterval(()=>{
            n += 6;
            if (n >= 340) {
                setCount(340);
                clearInterval(t);
            } else setCount(n);
        }, 16);
        return ()=>clearInterval(t);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setInterval(()=>setActiveStep((s)=>(s + 1) % 4), 2800);
        return ()=>clearInterval(t);
    }, []);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!email || !email.includes('@')) return;
        setSubmitted(true);
        setEmail('');
    };
    const steps = [
        {
            icon: '📋',
            title: 'Employer Posts JD',
            desc: 'Upload job description and specify role requirements'
        },
        {
            icon: '⬡',
            title: 'AI Clusters JDs',
            desc: 'Algorithm groups similar JDs from multiple employers'
        },
        {
            icon: '👤',
            title: 'Recruiter Submits',
            desc: 'One submission reaches all matched companies'
        },
        {
            icon: '🔁',
            title: 'Pipeline Routes',
            desc: 'Candidates auto-shift to next company if rejected'
        }
    ];
    const employerFeatures = [
        'Company profile with verified hiring details',
        'Tech & non-tech hiring tracks',
        'Batch candidates per role, zero duplicates',
        'Real-time hiring dashboard',
        'Auto-routed pipeline candidates'
    ];
    const recruiterFeatures = [
        'Work solo or under any consultancy',
        'Clustered JD view — one card per role type',
        'Submit once, reach multiple companies',
        'Earnings & placement analytics',
        'Real-time candidate stage alerts'
    ];
    const stats = [
        {
            num: '5×',
            label: 'More employer reach per submission'
        },
        {
            num: '70%',
            label: 'Keyword match triggers a cluster'
        },
        {
            num: '0',
            label: 'Duplicate candidates per company'
        },
        {
            num: '∞',
            label: 'Pipeline — no candidate wasted'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "'DM Sans', sans-serif",
            background: '#F5F3FF',
            color: '#1A0A3C',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 52px',
                    height: 64,
                    background: scrolled ? 'rgba(245,243,255,0.95)' : 'transparent',
                    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    transition: 'all 0.3s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/RecSaySymbol.png",
                                alt: "RecSay Logo",
                                style: {
                                    width: 32,
                                    height: 32,
                                    objectFit: 'contain'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "serif",
                                style: {
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'var(--dark)',
                                    letterSpacing: '-0.3px'
                                },
                                children: "RecSay"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-links",
                        style: {
                            display: 'flex',
                            gap: 36,
                            alignItems: 'center'
                        },
                        children: [
                            'How it works',
                            'For Employers',
                            'For Recruiters',
                            'Pricing'
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${l.toLowerCase().replace(/ /g, '-')}`,
                                style: {
                                    fontSize: 14,
                                    color: 'var(--muted)',
                                    textDecoration: 'none',
                                    fontFamily: 'DM Sans',
                                    transition: 'color 0.2s'
                                },
                                onMouseEnter: (e)=>e.target.style.color = 'var(--purple)',
                                onMouseLeave: (e)=>e.target.style.color = 'var(--muted)',
                                children: l
                            }, l, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#waitlist",
                                className: "btn-outline",
                                style: {
                                    padding: '9px 20px',
                                    fontSize: 13
                                },
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#waitlist",
                                className: "btn-purple",
                                style: {
                                    padding: '9px 20px',
                                    fontSize: 13
                                },
                                children: "Request Access"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero-section",
                style: {
                    padding: '120px 52px 80px',
                    maxWidth: 1240,
                    margin: '0 auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-grid",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 460px',
                        gap: 72,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow sans",
                                    children: "Recruitment Intelligence Platform"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "serif",
                                    style: {
                                        fontSize: 'clamp(44px,5.5vw,72px)',
                                        fontWeight: 700,
                                        lineHeight: 1.04,
                                        letterSpacing: '-1.5px',
                                        color: 'var(--dark)',
                                        marginBottom: 24
                                    },
                                    children: [
                                        "The Smarter Bridge",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, this),
                                        "Between",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: 'var(--grad)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            },
                                            children: "Recruiters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        "& Employers."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sans",
                                    style: {
                                        fontSize: 17,
                                        color: 'var(--muted)',
                                        lineHeight: 1.75,
                                        maxWidth: 480,
                                        marginBottom: 40,
                                        fontWeight: 300
                                    },
                                    children: "RecSay clusters similar job descriptions from multiple employers into one unified role — so recruiters submit once and reach every company that needs that candidate."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    style: {
                                        maxWidth: 440
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 8,
                                                marginBottom: 12
                                            },
                                            children: [
                                                'employer',
                                                'recruiter'
                                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setRole(r),
                                                    className: "sans",
                                                    style: {
                                                        flex: 1,
                                                        padding: 10,
                                                        borderRadius: 6,
                                                        cursor: 'pointer',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        border: role === r ? '1.5px solid var(--purple)' : '1.5px solid var(--border)',
                                                        background: role === r ? 'var(--grad)' : 'white',
                                                        color: role === r ? 'white' : 'var(--muted)',
                                                        transition: 'all 0.2s',
                                                        textTransform: 'capitalize',
                                                        boxShadow: role === r ? '0 2px 12px rgba(123,47,255,0.25)' : 'none'
                                                    },
                                                    children: [
                                                        "I am ",
                                                        r === 'employer' ? 'an' : 'a',
                                                        " ",
                                                        r.charAt(0).toUpperCase() + r.slice(1)
                                                    ]
                                                }, r, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cta-row",
                                            style: {
                                                display: 'flex',
                                                border: '1.5px solid var(--border2)',
                                                borderRadius: 6,
                                                overflow: 'hidden',
                                                background: 'white'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: "Enter your work email",
                                                    style: {
                                                        flex: 1,
                                                        padding: '13px 16px',
                                                        border: 'none',
                                                        outline: 'none',
                                                        fontSize: 15,
                                                        background: 'transparent',
                                                        color: 'var(--dark)',
                                                        fontFamily: 'DM Sans'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn-purple",
                                                    style: {
                                                        borderRadius: '0 4px 4px 0',
                                                        padding: '13px 22px',
                                                        boxShadow: 'none'
                                                    },
                                                    children: "Join Waitlist"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sans",
                                            style: {
                                                marginTop: 10,
                                                fontSize: 13,
                                                color: '#5B21B6',
                                                fontWeight: 500
                                            },
                                            children: "✓ You're on the list. We'll be in touch soon."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sans",
                                            style: {
                                                marginTop: 10,
                                                fontSize: 12,
                                                color: 'var(--muted2)'
                                            },
                                            children: [
                                                "Join ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: 'var(--muted)'
                                                    },
                                                    children: [
                                                        count,
                                                        "+"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 233,
                                                    columnNumber: 108
                                                }, this),
                                                " recruiters & employers already waiting. No spam."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-visual fade-in",
                            style: {
                                animationDelay: '0.2s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'white',
                                    borderRadius: 12,
                                    border: '1px solid var(--border)',
                                    boxShadow: '0 8px 48px rgba(123,47,255,0.12)',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'linear-gradient(135deg,#2D1660 0%,#7B2FFF 100%)',
                                            padding: '16px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 10,
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase',
                                                            color: 'rgba(255,255,255,0.5)',
                                                            marginBottom: 4
                                                        },
                                                        children: "Active Cluster"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            color: 'white'
                                                        },
                                                        children: "Python Developer · Senior · Remote"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'rgba(255,255,255,0.2)',
                                                    borderRadius: 4,
                                                    padding: '4px 10px',
                                                    fontSize: 11,
                                                    color: 'white',
                                                    fontFamily: 'DM Sans',
                                                    fontWeight: 500,
                                                    backdropFilter: 'blur(8px)',
                                                    border: '1px solid rgba(255,255,255,0.25)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            display: 'inline-block',
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: '50%',
                                                            background: '#A3FF6F',
                                                            marginRight: 5,
                                                            animation: 'pulse 2s infinite'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this),
                                                    "LIVE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 20px',
                                            borderBottom: '1px solid var(--border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sans",
                                                style: {
                                                    fontSize: 11,
                                                    color: 'var(--muted2)',
                                                    marginBottom: 10,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "5 Employers matched"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: 6
                                                },
                                                children: [
                                                    'TechCorp',
                                                    'DataInc',
                                                    'Finvest',
                                                    'BuildAI',
                                                    'ScaleUp'
                                                ].map((co)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sans",
                                                        style: {
                                                            background: 'var(--purple4)',
                                                            border: '1px solid var(--border)',
                                                            borderRadius: 4,
                                                            padding: '5px 10px',
                                                            fontSize: 12,
                                                            color: 'var(--purple)',
                                                            fontWeight: 500
                                                        },
                                                        children: [
                                                            co,
                                                            " ✓"
                                                        ]
                                                    }, co, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 20px',
                                            borderBottom: '1px solid var(--border)',
                                            display: 'flex',
                                            gap: 14,
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "serif",
                                                style: {
                                                    fontSize: 38,
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    background: 'var(--grad)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                },
                                                children: "78%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 13,
                                                            fontWeight: 500,
                                                            color: 'var(--dark)',
                                                            marginBottom: 3
                                                        },
                                                        children: "Keyword Match"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 12,
                                                            color: 'var(--muted)'
                                                        },
                                                        children: "Python · Django · PostgreSQL · AWS · REST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 265,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 20px',
                                            borderBottom: '1px solid var(--border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sans",
                                                style: {
                                                    fontSize: 11,
                                                    color: 'var(--muted2)',
                                                    marginBottom: 8,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Recruiters working this"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                [
                                                    'Priya S.',
                                                    'TalentBridge',
                                                    5
                                                ],
                                                [
                                                    'Arjun M.',
                                                    'IndieRecruiter',
                                                    5
                                                ],
                                                [
                                                    'Neha K.',
                                                    'HireForce',
                                                    5
                                                ]
                                            ].map(([name, org, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sans",
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '7px 0',
                                                        borderTop: '1px solid var(--lavender)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 13,
                                                                        fontWeight: 500,
                                                                        color: 'var(--dark)'
                                                                    },
                                                                    children: name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 274,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 12,
                                                                        color: 'var(--muted)',
                                                                        marginLeft: 6
                                                                    },
                                                                    children: [
                                                                        "· ",
                                                                        org
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 275,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sans",
                                                            style: {
                                                                fontSize: 12,
                                                                background: 'var(--purple4)',
                                                                border: '1px solid var(--border)',
                                                                borderRadius: 4,
                                                                padding: '3px 8px',
                                                                color: 'var(--purple)',
                                                                fontWeight: 500
                                                            },
                                                            children: [
                                                                n,
                                                                " candidates"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 277,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, name, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 20px',
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(3,1fr)'
                                        },
                                        children: [
                                            [
                                                '15',
                                                'In Pipeline',
                                                'var(--dark2)'
                                            ],
                                            [
                                                '6',
                                                'Interviewing',
                                                '#166534'
                                            ],
                                            [
                                                '2',
                                                'Offers Made',
                                                'var(--purple)'
                                            ]
                                        ].map(([n, l, col], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    borderRight: i < 2 ? '1px solid var(--border)' : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "serif",
                                                        style: {
                                                            fontSize: 26,
                                                            fontWeight: 700,
                                                            color: col,
                                                            lineHeight: 1
                                                        },
                                                        children: n
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--muted2)',
                                                            marginTop: 3
                                                        },
                                                        children: l
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, l, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    background: 'white',
                    padding: '22px 52px',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 40
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sans",
                            style: {
                                fontSize: 11,
                                color: 'var(--muted2)',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            },
                            children: "Trusted by"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                overflow: 'hidden',
                                flex: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 52,
                                    animation: 'scroll 22s linear infinite',
                                    width: 'max-content'
                                },
                                children: [
                                    'TechCorp Hiring',
                                    'DataInc',
                                    'TalentBridge',
                                    'ScaleUp Labs',
                                    'Finvest Group',
                                    'HireForce',
                                    'BuildAI',
                                    'NovaTech',
                                    'TechCorp Hiring',
                                    'DataInc',
                                    'TalentBridge',
                                    'ScaleUp Labs',
                                    'Finvest Group',
                                    'HireForce',
                                    'BuildAI',
                                    'NovaTech'
                                ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sans",
                                        style: {
                                            fontSize: 14,
                                            color: 'var(--muted2)',
                                            fontWeight: 500,
                                            whiteSpace: 'nowrap'
                                        },
                                        children: l
                                    }, i, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "how-it-works",
                style: {
                    padding: '96px 52px',
                    maxWidth: 1240,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 60
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow sans",
                                style: {
                                    justifyContent: 'center'
                                },
                                children: "The Process"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title serif",
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    "From job description to hire,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 314,
                                        columnNumber: 108
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "intelligently."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 314,
                                        columnNumber: 114
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-sub sans",
                                style: {
                                    maxWidth: 480,
                                    margin: '0 auto'
                                },
                                children: "RecSay's algorithm handles the heavy lifting so your team focuses on relationships."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "steps-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4,1fr)',
                            gap: 2,
                            background: 'var(--border)',
                            borderRadius: 12,
                            overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(123,47,255,0.08)'
                        },
                        children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActiveStep(i),
                                style: {
                                    background: activeStep === i ? 'linear-gradient(135deg,#2D1660,#7B2FFF)' : 'white',
                                    padding: '36px 28px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 28,
                                            marginBottom: 16
                                        },
                                        children: step.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sans",
                                        style: {
                                            fontSize: 11,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: activeStep === i ? 'var(--purple3)' : 'var(--purple)',
                                            marginBottom: 8,
                                            fontWeight: 500
                                        },
                                        children: [
                                            "Step ",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "serif",
                                        style: {
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: activeStep === i ? 'white' : 'var(--dark)',
                                            marginBottom: 10
                                        },
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            fontSize: 13,
                                            color: activeStep === i ? 'rgba(255,255,255,0.65)' : 'var(--muted)',
                                            lineHeight: 1.6
                                        },
                                        children: step.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--lavender)',
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '96px 52px',
                        maxWidth: 1240,
                        margin: '0 auto'
                    },
                    id: "for-employers",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 56
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow sans",
                                    children: "Built for Both Sides"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title serif",
                                    children: [
                                        "Employers hire faster.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 337,
                                            columnNumber: 71
                                        }, this),
                                        "Recruiters earn more."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "persona-grid",
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 24
                            },
                            children: [
                                {
                                    id: 'for-employers',
                                    grad: 'linear-gradient(135deg,#1A0A3C,#7B2FFF)',
                                    label: 'For Employers',
                                    title: 'Post once.\nReceive many.',
                                    desc: 'Upload your JD and let RecSay bring pre-qualified candidates from specialized recruiters — without managing 10 agencies.',
                                    features: employerFeatures,
                                    cta: 'Get started as Employer'
                                },
                                {
                                    id: 'for-recruiters',
                                    grad: 'linear-gradient(135deg,#2D1660,#9B5FFF)',
                                    label: 'For Recruiters',
                                    title: 'Work one role.\nPlace at five companies.',
                                    desc: 'Stop reading 50 JDs that say the same thing. Submit once and reach every matched employer simultaneously.',
                                    features: recruiterFeatures,
                                    cta: 'Get started as Recruiter'
                                }
                            ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'white',
                                        borderRadius: 12,
                                        border: '1px solid var(--border)',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 24px rgba(123,47,255,0.08)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: card.grad,
                                                padding: '28px 32px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sans",
                                                    style: {
                                                        fontSize: 11,
                                                        letterSpacing: '0.12em',
                                                        textTransform: 'uppercase',
                                                        color: 'var(--purple3)',
                                                        marginBottom: 10
                                                    },
                                                    children: card.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "serif",
                                                    style: {
                                                        fontSize: 28,
                                                        fontWeight: 600,
                                                        color: 'white',
                                                        lineHeight: 1.15
                                                    },
                                                    children: card.title.split('\n').map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                t,
                                                                i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 348,
                                                                    columnNumber: 83
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 348,
                                                            columnNumber: 58
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '28px 32px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "sans",
                                                    style: {
                                                        fontSize: 15,
                                                        color: 'var(--muted)',
                                                        marginBottom: 28,
                                                        lineHeight: 1.65
                                                    },
                                                    children: card.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 352,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: 'none'
                                                    },
                                                    children: card.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "sans",
                                                            style: {
                                                                display: 'flex',
                                                                gap: 12,
                                                                padding: '11px 0',
                                                                borderTop: '1px solid var(--lavender)',
                                                                fontSize: 14,
                                                                color: 'var(--muted)',
                                                                alignItems: 'flex-start'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--purple)',
                                                                        fontWeight: 700,
                                                                        flexShrink: 0
                                                                    },
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 356,
                                                                    columnNumber: 25
                                                                }, this),
                                                                f
                                                            ]
                                                        }, f, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 355,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#waitlist",
                                                    className: "btn-purple",
                                                    style: {
                                                        marginTop: 28,
                                                        display: 'inline-block'
                                                    },
                                                    children: card.cta
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, card.id, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: 'linear-gradient(135deg,#1A0A3C 0%,#2D1660 50%,#7B2FFF 100%)',
                    padding: '72px 52px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stats-grid",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        maxWidth: 1000,
                        margin: '0 auto',
                        gap: 1,
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: 10,
                        overflow: 'hidden'
                    },
                    children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'rgba(255,255,255,0.04)',
                                padding: '40px 32px',
                                textAlign: 'center',
                                backdropFilter: 'blur(8px)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "serif",
                                    style: {
                                        fontSize: 50,
                                        fontWeight: 700,
                                        lineHeight: 1,
                                        marginBottom: 10,
                                        letterSpacing: '-1.5px',
                                        background: 'linear-gradient(135deg,white,var(--purple3))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    },
                                    children: s.num
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sans",
                                    style: {
                                        fontSize: 13,
                                        color: 'rgba(255,255,255,0.55)',
                                        lineHeight: 1.5
                                    },
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 370,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "pricing",
                style: {
                    padding: '96px 52px',
                    maxWidth: 1240,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 56
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow sans",
                                style: {
                                    justifyContent: 'center'
                                },
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title serif",
                                style: {
                                    textAlign: 'center'
                                },
                                children: "Simple, transparent pricing."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-sub sans",
                                style: {
                                    textAlign: 'center'
                                },
                                children: "Start free. Scale when you're ready."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plans-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3,1fr)',
                            gap: 20
                        },
                        children: [
                            {
                                name: 'Basic',
                                price: 'Free',
                                sub: 'forever',
                                desc: 'For individual recruiters or small employers testing the platform.',
                                features: [
                                    '3 active clusters',
                                    '5 submissions/month',
                                    'Basic dashboard',
                                    'Email support'
                                ],
                                cta: 'Get started free',
                                featured: false
                            },
                            {
                                name: 'Premium',
                                price: '₹2,999',
                                sub: '/month',
                                desc: 'For active recruiters and growing companies running multiple roles.',
                                features: [
                                    'Unlimited clusters',
                                    'Unlimited submissions',
                                    'Full analytics',
                                    'Priority routing',
                                    'Dedicated manager'
                                ],
                                cta: 'Start free trial',
                                featured: true
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                sub: '',
                                desc: 'For large organisations with high-volume hiring needs.',
                                features: [
                                    'Everything in Premium',
                                    'White-label option',
                                    'API access',
                                    'Custom thresholds',
                                    'SLA & support'
                                ],
                                cta: 'Contact us',
                                featured: false
                            }
                        ].map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: plan.featured ? 'linear-gradient(160deg,#1A0A3C,#7B2FFF)' : 'white',
                                    border: plan.featured ? '2px solid var(--purple2)' : '1px solid var(--border)',
                                    borderRadius: 12,
                                    padding: '36px 32px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 24,
                                    position: 'relative',
                                    boxShadow: plan.featured ? '0 12px 48px rgba(123,47,255,0.3)' : '0 2px 16px rgba(123,47,255,0.06)',
                                    transform: plan.featured ? 'translateY(-6px)' : 'none'
                                },
                                children: [
                                    plan.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sans",
                                        style: {
                                            position: 'absolute',
                                            top: -1,
                                            right: 28,
                                            background: 'var(--grad)',
                                            color: 'white',
                                            fontSize: 11,
                                            fontWeight: 600,
                                            padding: '5px 14px',
                                            borderRadius: '0 0 8px 8px'
                                        },
                                        children: "Most Popular"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 402,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sans",
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    letterSpacing: '0.1em',
                                                    textTransform: 'uppercase',
                                                    color: plan.featured ? 'var(--purple3)' : 'var(--purple)',
                                                    marginBottom: 12
                                                },
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'baseline',
                                                    gap: 4
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "serif",
                                                        style: {
                                                            fontSize: 40,
                                                            fontWeight: 700,
                                                            lineHeight: 1,
                                                            letterSpacing: '-1px',
                                                            color: plan.featured ? 'white' : 'var(--dark)'
                                                        },
                                                        children: plan.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 14,
                                                            color: plan.featured ? 'rgba(255,255,255,0.45)' : 'var(--muted)'
                                                        },
                                                        children: plan.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            fontSize: 14,
                                            color: plan.featured ? 'rgba(255,255,255,0.6)' : 'var(--muted)',
                                            lineHeight: 1.6
                                        },
                                        children: plan.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: 'none',
                                            flex: 1
                                        },
                                        children: plan.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "sans",
                                                style: {
                                                    display: 'flex',
                                                    gap: 10,
                                                    padding: '9px 0',
                                                    borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.1)' : 'var(--lavender)'}`,
                                                    fontSize: 13,
                                                    color: plan.featured ? 'rgba(255,255,255,0.75)' : 'var(--muted)',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: plan.featured ? 'var(--purple3)' : 'var(--purple)',
                                                            fontWeight: 700,
                                                            flexShrink: 0
                                                        },
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 414,
                                                        columnNumber: 21
                                                    }, this),
                                                    f
                                                ]
                                            }, f, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 413,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#waitlist",
                                        className: plan.featured ? 'btn-purple' : 'btn-outline',
                                        style: {
                                            display: 'block',
                                            textAlign: 'center',
                                            borderRadius: 6
                                        },
                                        children: plan.cta
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, plan.name, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--lavender)',
                    borderTop: '1px solid var(--border)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "waitlist",
                    style: {
                        padding: '100px 52px',
                        textAlign: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 560,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/RecSaySymbol.png",
                                alt: "RecSay",
                                style: {
                                    width: 64,
                                    height: 64,
                                    objectFit: 'contain',
                                    marginBottom: 24
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow sans",
                                style: {
                                    justifyContent: 'center'
                                },
                                children: "Early Access"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "serif",
                                style: {
                                    fontSize: 'clamp(36px,4vw,58px)',
                                    fontWeight: 700,
                                    lineHeight: 1.08,
                                    color: 'var(--dark)',
                                    marginBottom: 16
                                },
                                children: [
                                    "Be first on",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 432,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        style: {
                                            background: 'var(--grad)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        },
                                        children: "the bridge."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 432,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sans",
                                style: {
                                    fontSize: 16,
                                    color: 'var(--muted)',
                                    lineHeight: 1.7,
                                    marginBottom: 44
                                },
                                children: "RecSay is launching soon. Join early access — whether you're hiring or placing, we'll onboard you in the first batch."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                style: {
                                    maxWidth: 420,
                                    margin: '0 auto'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            marginBottom: 12
                                        },
                                        children: [
                                            'employer',
                                            'recruiter'
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setRole(r),
                                                className: "sans",
                                                style: {
                                                    flex: 1,
                                                    padding: 10,
                                                    borderRadius: 6,
                                                    cursor: 'pointer',
                                                    fontSize: 13,
                                                    fontWeight: 500,
                                                    border: role === r ? '1.5px solid var(--purple)' : '1.5px solid var(--border2)',
                                                    background: role === r ? 'var(--grad)' : 'white',
                                                    color: role === r ? 'white' : 'var(--muted)',
                                                    transition: 'all 0.2s',
                                                    textTransform: 'capitalize',
                                                    boxShadow: role === r ? '0 2px 12px rgba(123,47,255,0.25)' : 'none'
                                                },
                                                children: [
                                                    "I am ",
                                                    r === 'employer' ? 'an' : 'a',
                                                    " ",
                                                    r.charAt(0).toUpperCase() + r.slice(1)
                                                ]
                                            }, r, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 440,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cta-row",
                                        style: {
                                            display: 'flex',
                                            border: '1.5px solid var(--border2)',
                                            borderRadius: 6,
                                            overflow: 'hidden',
                                            background: 'white'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                placeholder: "your@email.com",
                                                style: {
                                                    flex: 1,
                                                    padding: '13px 16px',
                                                    border: 'none',
                                                    outline: 'none',
                                                    fontSize: 15,
                                                    background: 'transparent',
                                                    color: 'var(--dark)',
                                                    fontFamily: 'DM Sans'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 447,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn-purple",
                                                style: {
                                                    borderRadius: '0 4px 4px 0',
                                                    padding: '13px 22px',
                                                    boxShadow: 'none'
                                                },
                                                children: "Get Access →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 446,
                                        columnNumber: 15
                                    }, this),
                                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            marginTop: 12,
                                            fontSize: 13,
                                            color: '#5B21B6',
                                            fontWeight: 500
                                        },
                                        children: "✓ You're in. We'll reach out when your access is ready."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 452,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            marginTop: 12,
                                            fontSize: 12,
                                            color: 'var(--muted2)'
                                        },
                                        children: [
                                            "No spam. Unsubscribe anytime. ",
                                            count,
                                            "+ people already joined."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 453,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 426,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "sans",
                style: {
                    background: 'linear-gradient(135deg,#1A0A3C,#2D1660)',
                    padding: '40px 52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/RecSaySymbol.png",
                                alt: "RecSay",
                                style: {
                                    width: 28,
                                    height: 28,
                                    objectFit: 'contain'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "serif",
                                style: {
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: 'white'
                                },
                                children: "RecSay"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 28,
                            flexWrap: 'wrap'
                        },
                        children: [
                            'How it works',
                            'For Employers',
                            'For Recruiters',
                            'Pricing',
                            'Privacy'
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                style: {
                                    fontSize: 13,
                                    color: 'rgba(255,255,255,0.4)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    fontFamily: 'DM Sans'
                                },
                                onMouseEnter: (e)=>e.target.style.color = 'rgba(255,255,255,0.85)',
                                onMouseLeave: (e)=>e.target.style.color = 'rgba(255,255,255,0.4)',
                                children: l
                            }, l, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 467,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 13,
                            color: 'rgba(255,255,255,0.3)',
                            fontFamily: 'DM Sans'
                        },
                        children: "© 2025 RecSay. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_page_0ucg9k2.js.map