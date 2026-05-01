(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Home() {
    _s();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('employer');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const onScroll = {
                "Home.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Home.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let n = 0;
            const t = setInterval({
                "Home.useEffect.t": ()=>{
                    n += 7;
                    if (n >= 340) {
                        setCount(340);
                        clearInterval(t);
                    } else setCount(n);
                }
            }["Home.useEffect.t"], 18);
            return ({
                "Home.useEffect": ()=>clearInterval(t)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const t = setInterval({
                "Home.useEffect.t": ()=>setActiveStep({
                        "Home.useEffect.t": (s)=>(s + 1) % 4
                    }["Home.useEffect.t"])
            }["Home.useEffect.t"], 2800);
            return ({
                "Home.useEffect": ()=>clearInterval(t)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "Georgia, 'Times New Roman', serif",
            background: '#F7F6F2',
            color: '#1A1A2E',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sans",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 52px',
                    height: 64,
                    background: scrolled ? 'rgba(247,246,242,0.97)' : 'transparent',
                    borderBottom: scrolled ? '1px solid #D8D5CC' : '1px solid transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    transition: 'all 0.3s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 28,
                                    height: 28,
                                    background: '#1A1A2E',
                                    borderRadius: 4,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#C8922A',
                                        fontSize: 14,
                                        fontFamily: 'Playfair Display',
                                        fontWeight: 700
                                    },
                                    children: "R"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 18,
                                    fontFamily: 'Playfair Display',
                                    fontWeight: 700,
                                    color: '#1A1A2E'
                                },
                                children: "RecSay"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${l.toLowerCase().replace(/ /g, '-')}`,
                                style: {
                                    fontSize: 14,
                                    color: '#6B6A7A',
                                    textDecoration: 'none',
                                    fontFamily: 'DM Sans'
                                },
                                children: l
                            }, l, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#waitlist",
                                className: "btn-outline",
                                style: {
                                    padding: '9px 20px',
                                    fontSize: 13
                                },
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#waitlist",
                                className: "btn-gold",
                                style: {
                                    padding: '9px 20px',
                                    fontSize: 13
                                },
                                children: "Request Access"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '120px 52px 80px',
                    maxWidth: 1240,
                    margin: '0 auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-grid",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 480px',
                        gap: 72,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sans",
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 500,
                                        letterSpacing: '0.16em',
                                        textTransform: 'uppercase',
                                        color: '#C8922A',
                                        marginBottom: 14
                                    },
                                    children: "Recruitment Intelligence Platform"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "serif",
                                    style: {
                                        fontSize: 'clamp(44px,5vw,70px)',
                                        fontWeight: 700,
                                        lineHeight: 1.06,
                                        letterSpacing: '-1px',
                                        color: '#1A1A2E',
                                        marginBottom: 24
                                    },
                                    children: [
                                        "The Smarter Bridge",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 153,
                                            columnNumber: 33
                                        }, this),
                                        "Between ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            style: {
                                                color: '#C8922A'
                                            },
                                            children: "Recruiters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 154,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 154,
                                            columnNumber: 71
                                        }, this),
                                        "& Employers."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sans",
                                    style: {
                                        fontSize: 17,
                                        color: '#6B6A7A',
                                        lineHeight: 1.75,
                                        maxWidth: 480,
                                        marginBottom: 40,
                                        fontWeight: 300
                                    },
                                    children: "RecSay clusters similar job descriptions from multiple employers into one unified role — so recruiters submit once and reach every company that needs that candidate."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    style: {
                                        maxWidth: 440
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 8,
                                                marginBottom: 12
                                            },
                                            children: [
                                                'employer',
                                                'recruiter'
                                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setRole(r),
                                                    className: "sans",
                                                    style: {
                                                        flex: 1,
                                                        padding: 10,
                                                        borderRadius: 4,
                                                        cursor: 'pointer',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        border: role === r ? '1.5px solid #1A1A2E' : '1.5px solid #D8D5CC',
                                                        background: role === r ? '#1A1A2E' : 'transparent',
                                                        color: role === r ? 'white' : '#6B6A7A',
                                                        transition: 'all 0.2s',
                                                        textTransform: 'capitalize'
                                                    },
                                                    children: [
                                                        "I am ",
                                                        r === 'employer' ? 'an' : 'a',
                                                        " ",
                                                        r.charAt(0).toUpperCase() + r.slice(1)
                                                    ]
                                                }, r, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cta-row",
                                            style: {
                                                display: 'flex',
                                                border: '1.5px solid #C5C2B8',
                                                borderRadius: 4,
                                                overflow: 'hidden'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        background: 'white',
                                                        color: '#1A1A2E',
                                                        fontFamily: 'DM Sans'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn-gold",
                                                    style: {
                                                        borderRadius: 0,
                                                        padding: '13px 24px'
                                                    },
                                                    children: "Join Waitlist"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sans",
                                            style: {
                                                marginTop: 10,
                                                fontSize: 13,
                                                color: '#2D7D46',
                                                fontWeight: 500
                                            },
                                            children: "✓ You're on the list. We'll be in touch soon."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sans",
                                            style: {
                                                marginTop: 10,
                                                fontSize: 12,
                                                color: '#9896A8'
                                            },
                                            children: [
                                                "Join ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: '#6B6A7A'
                                                    },
                                                    children: [
                                                        count,
                                                        "+"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 180,
                                                    columnNumber: 102
                                                }, this),
                                                " recruiters & employers already waiting. No spam."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-visual fade-in",
                            style: {
                                animationDelay: '0.2s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'white',
                                    borderRadius: 8,
                                    border: '1px solid #D8D5CC',
                                    boxShadow: '0 4px 40px rgba(26,26,46,0.10)',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#1A1A2E',
                                            padding: '16px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 10,
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase',
                                                            color: 'rgba(255,255,255,0.45)',
                                                            marginBottom: 4
                                                        },
                                                        children: "Active Cluster"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            color: 'white'
                                                        },
                                                        children: "Python Developer · Senior · Remote"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#C8922A',
                                                    borderRadius: 3,
                                                    padding: '4px 10px',
                                                    fontSize: 11,
                                                    color: 'white',
                                                    fontFamily: 'DM Sans',
                                                    fontWeight: 500
                                                },
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '16px 20px',
                                            borderBottom: '1px solid #D8D5CC'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sans",
                                                style: {
                                                    fontSize: 11,
                                                    color: '#9896A8',
                                                    marginBottom: 10,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "5 Employers matched"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                ].map((co)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sans",
                                                        style: {
                                                            background: '#EEF2FF',
                                                            border: '1px solid #C7D2FE',
                                                            borderRadius: 3,
                                                            padding: '5px 10px',
                                                            fontSize: 12,
                                                            color: '#3730A3',
                                                            fontWeight: 500
                                                        },
                                                        children: [
                                                            co,
                                                            " ✓"
                                                        ]
                                                    }, co, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 20px',
                                            borderBottom: '1px solid #D8D5CC',
                                            display: 'flex',
                                            gap: 14,
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "serif",
                                                style: {
                                                    fontSize: 38,
                                                    fontWeight: 700,
                                                    color: '#C8922A',
                                                    lineHeight: 1
                                                },
                                                children: "78%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 13,
                                                            fontWeight: 500,
                                                            color: '#1A1A2E',
                                                            marginBottom: 3
                                                        },
                                                        children: "Keyword Match"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 12,
                                                            color: '#6B6A7A'
                                                        },
                                                        children: "Python · Django · PostgreSQL · AWS · REST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 20px',
                                            borderBottom: '1px solid #D8D5CC'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sans",
                                                style: {
                                                    fontSize: 11,
                                                    color: '#9896A8',
                                                    marginBottom: 10,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Recruiters working this"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 210,
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
                                            ].map(([name, org, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sans",
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '7px 0',
                                                        borderTop: '1px solid #E5E2D8'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 13,
                                                                        fontWeight: 500,
                                                                        color: '#1A1A2E'
                                                                    },
                                                                    children: name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 213,
                                                                    columnNumber: 26
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 12,
                                                                        color: '#6B6A7A',
                                                                        marginLeft: 6
                                                                    },
                                                                    children: [
                                                                        "· ",
                                                                        org
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 213,
                                                                    columnNumber: 105
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sans",
                                                            style: {
                                                                fontSize: 12,
                                                                background: '#EFEDE6',
                                                                border: '1px solid #D8D5CC',
                                                                borderRadius: 3,
                                                                padding: '3px 8px',
                                                                color: '#6B6A7A',
                                                                fontWeight: 500
                                                            },
                                                            children: [
                                                                n,
                                                                " candidates"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, name, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 20px',
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(3,1fr)'
                                        },
                                        children: [
                                            [
                                                '15',
                                                'In Pipeline',
                                                '#0F3460'
                                            ],
                                            [
                                                '6',
                                                'Interviewing',
                                                '#2D7D46'
                                            ],
                                            [
                                                '2',
                                                'Offers Made',
                                                '#C8922A'
                                            ]
                                        ].map(([n, l, col], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    borderRight: i < 2 ? '1px solid #D8D5CC' : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 11,
                                                            color: '#9896A8',
                                                            marginTop: 3
                                                        },
                                                        children: l
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, l, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: '1px solid #D8D5CC',
                    borderBottom: '1px solid #D8D5CC',
                    background: 'white',
                    padding: '24px 52px',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 40
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sans",
                            style: {
                                fontSize: 11,
                                color: '#9896A8',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            },
                            children: "Trusted by"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                overflow: 'hidden',
                                flex: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sans",
                                        style: {
                                            fontSize: 14,
                                            color: '#9896A8',
                                            fontWeight: 500,
                                            whiteSpace: 'nowrap'
                                        },
                                        children: l
                                    }, i, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "how-it-works",
                style: {
                    padding: '96px 52px',
                    maxWidth: 1240,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 60
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sans",
                                style: {
                                    fontSize: 11,
                                    fontWeight: 500,
                                    letterSpacing: '0.16em',
                                    textTransform: 'uppercase',
                                    color: '#C8922A',
                                    marginBottom: 14
                                },
                                children: "The Process"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "serif",
                                style: {
                                    fontSize: 'clamp(30px,3.5vw,46px)',
                                    fontWeight: 600,
                                    lineHeight: 1.12,
                                    color: '#1A1A2E',
                                    marginBottom: 16
                                },
                                children: [
                                    "From job description to hire, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "intelligently."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 250,
                                        columnNumber: 181
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sans",
                                style: {
                                    fontSize: 16,
                                    color: '#6B6A7A',
                                    lineHeight: 1.7,
                                    maxWidth: 480,
                                    margin: '0 auto'
                                },
                                children: "RecSay's algorithm handles the heavy lifting so your team focuses on relationships."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "steps-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4,1fr)',
                            gap: 2,
                            background: '#D8D5CC',
                            borderRadius: 8,
                            overflow: 'hidden'
                        },
                        children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActiveStep(i),
                                style: {
                                    background: activeStep === i ? '#1A1A2E' : 'white',
                                    padding: '36px 28px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 28,
                                            marginBottom: 16
                                        },
                                        children: step.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sans",
                                        style: {
                                            fontSize: 11,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: '#C8922A',
                                            marginBottom: 8,
                                            fontWeight: 500
                                        },
                                        children: [
                                            "Step ",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "serif",
                                        style: {
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: activeStep === i ? 'white' : '#1A1A2E',
                                            marginBottom: 10
                                        },
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            fontSize: 13,
                                            color: activeStep === i ? 'rgba(255,255,255,0.6)' : '#6B6A7A',
                                            lineHeight: 1.6
                                        },
                                        children: step.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#EFEDE6',
                    borderTop: '1px solid #D8D5CC',
                    borderBottom: '1px solid #D8D5CC'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '96px 52px',
                        maxWidth: 1240,
                        margin: '0 auto'
                    },
                    id: "for-employers",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 56
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sans",
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 500,
                                        letterSpacing: '0.16em',
                                        textTransform: 'uppercase',
                                        color: '#C8922A',
                                        marginBottom: 14
                                    },
                                    children: "Built for Both Sides"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "serif",
                                    style: {
                                        fontSize: 'clamp(30px,3.5vw,46px)',
                                        fontWeight: 600,
                                        lineHeight: 1.12,
                                        color: '#1A1A2E'
                                    },
                                    children: [
                                        "Employers hire faster.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 270,
                                            columnNumber: 157
                                        }, this),
                                        "Recruiters earn more."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "persona-grid",
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 24
                            },
                            children: [
                                {
                                    id: 'for-employers',
                                    bg: '#1A1A2E',
                                    label: 'For Employers',
                                    title: 'Post once.\nReceive many.',
                                    desc: 'Upload your JD and let RecSay bring pre-qualified candidates from specialized recruiters — without managing 10 agencies.',
                                    features: employerFeatures,
                                    cta: 'Get started as Employer'
                                },
                                {
                                    id: 'for-recruiters',
                                    bg: '#0F3460',
                                    label: 'For Recruiters',
                                    title: 'Work one role.\nPlace at five companies.',
                                    desc: 'Stop reading 50 JDs that say the same thing. Submit once and reach every matched employer simultaneously.',
                                    features: recruiterFeatures,
                                    cta: 'Get started as Recruiter'
                                }
                            ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'white',
                                        borderRadius: 8,
                                        border: '1px solid #D8D5CC',
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 20px rgba(26,26,46,0.06)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: card.bg,
                                                padding: '28px 32px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sans",
                                                    style: {
                                                        fontSize: 11,
                                                        letterSpacing: '0.12em',
                                                        textTransform: 'uppercase',
                                                        color: '#E8A83A',
                                                        marginBottom: 10
                                                    },
                                                    children: card.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "serif",
                                                    style: {
                                                        fontSize: 28,
                                                        fontWeight: 600,
                                                        color: 'white',
                                                        lineHeight: 1.15
                                                    },
                                                    children: card.title.split('\n').map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                t,
                                                                i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 280,
                                                                    columnNumber: 179
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 280,
                                                            columnNumber: 154
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '28px 32px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "sans",
                                                    style: {
                                                        fontSize: 15,
                                                        color: '#6B6A7A',
                                                        marginBottom: 28,
                                                        lineHeight: 1.65
                                                    },
                                                    children: card.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: 'none'
                                                    },
                                                    children: card.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "sans",
                                                            style: {
                                                                display: 'flex',
                                                                gap: 12,
                                                                padding: '11px 0',
                                                                borderTop: '1px solid #E5E2D8',
                                                                fontSize: 14,
                                                                color: '#6B6A7A',
                                                                alignItems: 'flex-start'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: '#C8922A',
                                                                        fontWeight: 700,
                                                                        flexShrink: 0
                                                                    },
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 287,
                                                                    columnNumber: 25
                                                                }, this),
                                                                f
                                                            ]
                                                        }, f, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 286,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#waitlist",
                                                    className: "btn-gold",
                                                    style: {
                                                        marginTop: 28,
                                                        display: 'inline-block'
                                                    },
                                                    children: card.cta
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, card.id, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: '#1A1A2E',
                    padding: '64px 52px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stats-grid",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        maxWidth: 1000,
                        margin: '0 auto',
                        gap: 1,
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 6,
                        overflow: 'hidden'
                    },
                    children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#1A1A2E',
                                padding: '40px 32px',
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "serif",
                                    style: {
                                        fontSize: 48,
                                        fontWeight: 700,
                                        color: '#E8A83A',
                                        lineHeight: 1,
                                        marginBottom: 10,
                                        letterSpacing: '-1px'
                                    },
                                    children: s.num
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sans",
                                    style: {
                                        fontSize: 13,
                                        color: 'rgba(255,255,255,0.5)',
                                        lineHeight: 1.5
                                    },
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "pricing",
                style: {
                    padding: '96px 52px',
                    maxWidth: 1240,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 56
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sans",
                                style: {
                                    fontSize: 11,
                                    fontWeight: 500,
                                    letterSpacing: '0.16em',
                                    textTransform: 'uppercase',
                                    color: '#C8922A',
                                    marginBottom: 14
                                },
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "serif",
                                style: {
                                    fontSize: 'clamp(30px,3.5vw,46px)',
                                    fontWeight: 600,
                                    lineHeight: 1.12,
                                    color: '#1A1A2E',
                                    marginBottom: 12
                                },
                                children: "Simple, transparent pricing."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sans",
                                style: {
                                    fontSize: 16,
                                    color: '#6B6A7A'
                                },
                                children: "Start free. Scale when you're ready."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                desc: 'Perfect for individual recruiters or small employers.',
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
                        ].map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: plan.featured ? '#1A1A2E' : 'white',
                                    border: plan.featured ? '2px solid #C8922A' : '1px solid #D8D5CC',
                                    borderRadius: 8,
                                    padding: '36px 32px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 24,
                                    position: 'relative',
                                    boxShadow: plan.featured ? '0 8px 40px rgba(26,26,46,0.2)' : '0 2px 12px rgba(26,26,46,0.06)'
                                },
                                children: [
                                    plan.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sans",
                                        style: {
                                            position: 'absolute',
                                            top: -1,
                                            right: 28,
                                            background: '#C8922A',
                                            color: 'white',
                                            fontSize: 11,
                                            fontWeight: 600,
                                            padding: '5px 14px',
                                            borderRadius: '0 0 6px 6px'
                                        },
                                        children: "Most Popular"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 325,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sans",
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    letterSpacing: '0.1em',
                                                    textTransform: 'uppercase',
                                                    color: plan.featured ? '#E8A83A' : '#C8922A',
                                                    marginBottom: 12
                                                },
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'baseline',
                                                    gap: 4
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "serif",
                                                        style: {
                                                            fontSize: 40,
                                                            fontWeight: 700,
                                                            color: plan.featured ? 'white' : '#1A1A2E',
                                                            letterSpacing: '-1px',
                                                            lineHeight: 1
                                                        },
                                                        children: plan.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sans",
                                                        style: {
                                                            fontSize: 14,
                                                            color: plan.featured ? 'rgba(255,255,255,0.45)' : '#6B6A7A'
                                                        },
                                                        children: plan.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            fontSize: 14,
                                            color: plan.featured ? 'rgba(255,255,255,0.55)' : '#6B6A7A',
                                            lineHeight: 1.6
                                        },
                                        children: plan.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: 'none',
                                            flex: 1
                                        },
                                        children: plan.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "sans",
                                                style: {
                                                    display: 'flex',
                                                    gap: 10,
                                                    padding: '9px 0',
                                                    borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.08)' : '#E5E2D8'}`,
                                                    fontSize: 13,
                                                    color: plan.featured ? 'rgba(255,255,255,0.7)' : '#6B6A7A',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#E8A83A',
                                                            fontWeight: 700,
                                                            flexShrink: 0
                                                        },
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this),
                                                    f
                                                ]
                                            }, f, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#waitlist",
                                        style: {
                                            display: 'block',
                                            textAlign: 'center',
                                            padding: 13,
                                            borderRadius: 4,
                                            fontFamily: 'DM Sans',
                                            fontSize: 14,
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            background: plan.featured ? '#C8922A' : 'transparent',
                                            color: plan.featured ? 'white' : '#1A1A2E',
                                            border: plan.featured ? '1.5px solid #C8922A' : '1.5px solid #C5C2B8',
                                            transition: 'all 0.2s'
                                        },
                                        children: plan.cta
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, plan.name, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#EFEDE6',
                    borderTop: '1px solid #D8D5CC'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "waitlist",
                    style: {
                        padding: '100px 52px',
                        textAlign: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 560,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sans",
                                style: {
                                    fontSize: 11,
                                    fontWeight: 500,
                                    letterSpacing: '0.16em',
                                    textTransform: 'uppercase',
                                    color: '#C8922A',
                                    marginBottom: 14
                                },
                                children: "Early Access"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "serif",
                                style: {
                                    fontSize: 'clamp(36px,4vw,56px)',
                                    fontWeight: 700,
                                    lineHeight: 1.08,
                                    color: '#1A1A2E',
                                    marginBottom: 16
                                },
                                children: [
                                    "Be first on",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 352,
                                        columnNumber: 162
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "the bridge."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 352,
                                        columnNumber: 168
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sans",
                                style: {
                                    fontSize: 16,
                                    color: '#6B6A7A',
                                    lineHeight: 1.7,
                                    marginBottom: 44
                                },
                                children: "RecSay is launching soon. Join early access — whether you're hiring or placing, we'll onboard you in the first batch."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                style: {
                                    maxWidth: 420,
                                    margin: '0 auto'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            marginBottom: 12
                                        },
                                        children: [
                                            'employer',
                                            'recruiter'
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setRole(r),
                                                className: "sans",
                                                style: {
                                                    flex: 1,
                                                    padding: 10,
                                                    borderRadius: 4,
                                                    cursor: 'pointer',
                                                    fontSize: 13,
                                                    fontWeight: 500,
                                                    border: role === r ? '1.5px solid #1A1A2E' : '1.5px solid #D8D5CC',
                                                    background: role === r ? '#1A1A2E' : 'transparent',
                                                    color: role === r ? 'white' : '#6B6A7A',
                                                    transition: 'all 0.2s',
                                                    textTransform: 'capitalize'
                                                },
                                                children: [
                                                    "I am ",
                                                    r === 'employer' ? 'an' : 'a',
                                                    " ",
                                                    r.charAt(0).toUpperCase() + r.slice(1)
                                                ]
                                            }, r, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cta-row",
                                        style: {
                                            display: 'flex',
                                            border: '1.5px solid #C5C2B8',
                                            borderRadius: 4,
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                    background: 'white',
                                                    color: '#1A1A2E',
                                                    fontFamily: 'DM Sans'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn-gold",
                                                style: {
                                                    borderRadius: 0,
                                                    padding: '13px 22px'
                                                },
                                                children: "Get Access →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            marginTop: 12,
                                            fontSize: 13,
                                            color: '#2D7D46',
                                            fontWeight: 500
                                        },
                                        children: "✓ You're in. We'll reach out when your access is ready."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 369,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sans",
                                        style: {
                                            marginTop: 12,
                                            fontSize: 12,
                                            color: '#9896A8'
                                        },
                                        children: [
                                            "No spam. Unsubscribe anytime. ",
                                            count,
                                            "+ people already joined."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 370,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 349,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "sans",
                style: {
                    background: '#1A1A2E',
                    padding: '40px 52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 24,
                                    height: 24,
                                    background: '#C8922A',
                                    borderRadius: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#1A1A2E',
                                        fontSize: 12,
                                        fontFamily: 'Playfair Display',
                                        fontWeight: 700
                                    },
                                    children: "R"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 16,
                                    fontFamily: 'Playfair Display',
                                    fontWeight: 700,
                                    color: 'white'
                                },
                                children: "RecSay"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                style: {
                                    fontSize: 13,
                                    color: 'rgba(255,255,255,0.4)',
                                    textDecoration: 'none'
                                },
                                children: l
                            }, l, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 13,
                            color: 'rgba(255,255,255,0.3)'
                        },
                        children: "© 2025 RecSay. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 377,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Home, "Z69dKvbQvcSsI4i8octxwoMohY4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_0~f0lgw.js.map