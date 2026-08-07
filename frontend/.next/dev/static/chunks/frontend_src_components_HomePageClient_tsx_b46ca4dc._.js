(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/HomePageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function HomePageClient({ featuredEssentials }) {
    _s();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const handleAddToCart = (e, product)=>{
        e.preventDefault();
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    };
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        style: {
            padding: '0 24px',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    position: 'relative',
                    minHeight: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '40px 0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '10%',
                            left: '10%',
                            width: '300px',
                            height: '300px',
                            background: 'var(--primary-glow)',
                            filter: 'blur(100px)',
                            borderRadius: '50%',
                            zIndex: -1,
                            opacity: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '10%',
                            right: '10%',
                            width: '300px',
                            height: '300px',
                            background: 'hsla(190, 100%, 65%, 0.2)',
                            filter: 'blur(100px)',
                            borderRadius: '50%',
                            zIndex: -1,
                            opacity: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: "visible",
                        variants: containerVariants,
                        style: {
                            textAlign: 'center',
                            maxWidth: '800px',
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '6px 16px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '999px',
                                    border: '1px solid var(--border)',
                                    marginBottom: '24px',
                                    color: 'var(--primary)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        },
                                        children: "The #1 Campus Delivery App"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                variants: itemVariants,
                                style: {
                                    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                                    lineHeight: 1.1,
                                    marginBottom: '24px',
                                    letterSpacing: '-0.03em'
                                },
                                children: [
                                    "Your Essentials,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 70,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Delivered Instantly."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: itemVariants,
                                style: {
                                    color: 'var(--muted)',
                                    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                                    maxWidth: '600px',
                                    margin: '0 auto 40px',
                                    lineHeight: 1.6
                                },
                                children: "Skip the late-night store runs. From midnight snacks to project supplies, we deliver right to your hostel or PG room in minutes."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                style: {
                                    display: 'flex',
                                    gap: '16px',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        className: "btn btn-primary",
                                        style: {
                                            fontSize: '1.1rem',
                                            padding: '16px 40px',
                                            borderRadius: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 80,
                                                columnNumber: 29
                                            }, this),
                                            "Start Ordering Now"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#how-it-works",
                                        className: "btn btn-ghost",
                                        style: {
                                            fontSize: '1.1rem',
                                            padding: '16px 40px',
                                            borderRadius: '12px',
                                            background: 'rgba(255,255,255,0.03)'
                                        },
                                        children: "Learn More"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "how-it-works",
                style: {
                    margin: '100px 0'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: '60px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: '2.5rem',
                                        marginBottom: '16px'
                                    },
                                    children: "How it Works"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'var(--muted)',
                                        fontSize: '1.1rem'
                                    },
                                    children: "Three simple steps to get what you need, when you need it."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '32px'
                            },
                            children: [
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 105,
                                        columnNumber: 37
                                    }, this),
                                    title: "1. Select Items",
                                    desc: "Browse our curated catalog of snacks, drinks, and daily student essentials."
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 106,
                                        columnNumber: 37
                                    }, this),
                                    title: "2. Secure Payment",
                                    desc: "Pay instantly via UPI or choose Cash on Delivery at your convenience."
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 107,
                                        columnNumber: 37
                                    }, this),
                                    title: "3. Fast Delivery",
                                    desc: "Sit back while our student delivery partners bring your order directly to your room."
                                }
                            ].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        y: -10
                                    },
                                    style: {
                                        padding: '32px',
                                        background: 'rgba(255,255,255,0.02)',
                                        borderRadius: '24px',
                                        border: '1px solid var(--border)',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '64px',
                                                height: '64px',
                                                margin: '0 auto 24px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: 'var(--primary-glow)',
                                                borderRadius: '16px',
                                                color: 'var(--primary)'
                                            },
                                            children: step.icon
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                            lineNumber: 114,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '1.3rem',
                                                marginBottom: '12px'
                                            },
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--muted)',
                                                lineHeight: 1.6
                                            },
                                            children: step.desc
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                    lineNumber: 109,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    margin: '140px 0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '60px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '2.5rem',
                                    marginBottom: '16px'
                                },
                                children: "Explore Categories"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--muted)',
                                    fontSize: '1.1rem'
                                },
                                children: "Everything you need for campus life in one place."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '24px'
                        },
                        children: [
                            {
                                emoji: '🍟',
                                name: 'Midnight Snacks',
                                path: '/products?category=snacks',
                                color: 'rgba(255, 150, 50, 0.1)'
                            },
                            {
                                emoji: '🥤',
                                name: 'Cool Drinks',
                                path: '/products?category=drinks',
                                color: 'rgba(50, 150, 255, 0.1)'
                            },
                            {
                                emoji: '🧴',
                                name: 'Daily Essentials',
                                path: '/products?category=essentials',
                                color: 'rgba(50, 255, 150, 0.1)'
                            },
                            {
                                emoji: '📓',
                                name: 'Stationery',
                                path: '/products?category=stationery',
                                color: 'rgba(200, 50, 255, 0.1)'
                            }
                        ].map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: cat.path,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.03,
                                        boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '200px',
                                        background: 'var(--card-bg)',
                                        borderRadius: '24px',
                                        border: '1px solid var(--border)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: cat.color,
                                                zIndex: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                            lineNumber: 145,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '4rem',
                                                marginBottom: '16px',
                                                zIndex: 1
                                            },
                                            children: cat.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                            lineNumber: 146,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                zIndex: 1,
                                                fontSize: '1.2rem',
                                                fontWeight: 600
                                            },
                                            children: cat.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                            lineNumber: 147,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                    lineNumber: 140,
                                    columnNumber: 29
                                }, this)
                            }, i, false, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    margin: '140px 0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginBottom: '40px',
                            flexWrap: 'wrap',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '2.5rem',
                                            margin: '0 0 8px 0'
                                        },
                                        children: "Trending Essentials"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 158,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'var(--muted)',
                                            margin: 0
                                        },
                                        children: "Stock up on what everyone's buying."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 159,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 157,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products?category=Daily Essentials",
                                style: {
                                    color: 'var(--primary)',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    "View Full Catalog ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 162,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "24px"
                        },
                        children: featuredEssentials.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: i * 0.1
                                },
                                whileHover: {
                                    y: -5
                                },
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "16px",
                                    background: 'var(--card-bg)',
                                    borderRadius: '24px',
                                    border: '1px solid var(--border)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/products/${product.id}`,
                                        style: {
                                            flex: 1,
                                            textDecoration: 'none',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        },
                                        children: [
                                            product.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: "180px",
                                                    width: "100%",
                                                    borderRadius: "16px",
                                                    marginBottom: "20px",
                                                    overflow: "hidden",
                                                    background: "#111",
                                                    position: 'relative'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: product.imageUrl,
                                                    alt: product.name,
                                                    fill: true,
                                                    style: {
                                                        objectFit: "cover"
                                                    },
                                                    className: "hover-zoom"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 179,
                                                columnNumber: 37
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: "180px",
                                                    background: "rgba(255,255,255,0.02)",
                                                    borderRadius: "16px",
                                                    marginBottom: "20px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "4rem"
                                                },
                                                children: "📦"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 189,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: "1.2rem",
                                                    marginBottom: "8px",
                                                    color: '#fff'
                                                },
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 193,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem",
                                                    flex: 1,
                                                    marginBottom: "20px",
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                },
                                                children: product.description || "Premium campus product specifically curated for your daily dorm needs."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 194,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            borderTop: '1px solid var(--border)',
                                            paddingTop: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "1.3rem",
                                                    fontWeight: "bold",
                                                    color: "#fff"
                                                },
                                                children: [
                                                    "₹",
                                                    product.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 200,
                                                columnNumber: 33
                                            }, this),
                                            product.stock !== null && product.stock !== undefined && product.stock > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>handleAddToCart(e, product),
                                                style: {
                                                    background: 'var(--primary)',
                                                    color: '#000',
                                                    border: 'none',
                                                    borderRadius: '12px',
                                                    padding: '10px 16px',
                                                    fontWeight: 'bold',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    transition: 'transform 0.2s'
                                                },
                                                onMouseDown: (e)=>e.currentTarget.style.transform = 'scale(0.95)',
                                                onMouseUp: (e)=>e.currentTarget.style.transform = 'scale(1)',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Add"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 202,
                                                columnNumber: 37
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    color: '#ff4d4d',
                                                    background: 'rgba(255,0,0,0.1)',
                                                    padding: '6px 12px',
                                                    borderRadius: '8px',
                                                    fontWeight: 'bold'
                                                },
                                                children: "Out of Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 211,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 199,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 168,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    margin: '140px 0 80px',
                    padding: '60px 0',
                    borderTop: '1px dashed var(--border)',
                    borderBottom: '1px dashed var(--border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '60px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '2.5rem',
                                    marginBottom: '16px'
                                },
                                children: "Loved by Campus."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--muted)',
                                    fontSize: '1.1rem'
                                },
                                children: "See what 500+ students are saying about Campus Cart."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '24px'
                        },
                        children: [
                            {
                                name: "Rahul S.",
                                sub: "B.Tech Student",
                                text: "Saved me during finals week. Ordered caffeine and snacks at 2 AM and it arrived in 15 mins. Lifesavers!"
                            },
                            {
                                name: "Priya M.",
                                sub: "PG Accomodation",
                                text: "Super clean UI and incredibly fast delivery. It feels like magic having a mini-mart right in my pocket."
                            },
                            {
                                name: "Arjun K.",
                                sub: "M.Sc Student",
                                text: "Fair prices and literally zero hassle. It's the only app I use for hostel supplies now. 10/10."
                            }
                        ].map((review, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: i * 0.15
                                },
                                style: {
                                    padding: '32px',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '24px',
                                    border: '1px solid var(--border)',
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--primary)',
                                            fontSize: '1.5rem',
                                            marginBottom: '16px'
                                        },
                                        children: "★★★★★"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 240,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '1.1rem',
                                            lineHeight: 1.6,
                                            color: '#e0e0e0',
                                            marginBottom: '24px'
                                        },
                                        children: [
                                            "“",
                                            review.text,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 241,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    background: 'var(--primary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#000',
                                                    fontWeight: 'bold'
                                                },
                                                children: review.name.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 243,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '0.95rem'
                                                        },
                                                        children: review.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: 'var(--muted)',
                                                            fontSize: '0.85rem'
                                                        },
                                                        children: review.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                                lineNumber: 246,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                        lineNumber: 242,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                                lineNumber: 232,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 226,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    margin: '100px 0',
                    textAlign: 'center',
                    padding: '80px 24px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '32px',
                    border: '1px solid var(--border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '3rem',
                            marginBottom: '24px'
                        },
                        children: "Ready to simplify campus life?"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--muted)',
                            fontSize: '1.2rem',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            margin: '0 auto 40px'
                        },
                        children: "Join the rest of the campus and get your first order delivered directly to your door today."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 259,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/register",
                        className: "btn btn-primary",
                        style: {
                            fontSize: '1.1rem',
                            padding: '16px 48px',
                            borderRadius: '12px'
                        },
                        children: "Create Free Account"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                        lineNumber: 262,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/HomePageClient.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/HomePageClient.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_s(HomePageClient, "YPx5musMedcmtt2OkzMtHcKllYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = HomePageClient;
var _c;
__turbopack_context__.k.register(_c, "HomePageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_HomePageClient_tsx_b46ca4dc._.js.map