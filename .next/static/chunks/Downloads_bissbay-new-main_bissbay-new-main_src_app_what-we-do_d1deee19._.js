(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUpAnimation",
    ()=>CountUpAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const CountUpAnimation = (param)=>{
    let { end, start = 0, duration = 2, prefix, suffix = '', className = '' } = param;
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(start);
    const countRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const easeOutQuad = (t)=>t * (2 - t);
    const animateCount = ()=>{
        let startTimestamp = null;
        const step = (timestamp)=>{
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easedProgress = easeOutQuad(progress);
            setCount(Math.floor(easedProgress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUpAnimation.useEffect": ()=>{
            // Set up intersection observer
            observerRef.current = new IntersectionObserver({
                "CountUpAnimation.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        animateCount();
                        // Unobserve after animation starts
                        if (observerRef.current && countRef.current) {
                            observerRef.current.unobserve(countRef.current);
                        }
                    }
                }
            }["CountUpAnimation.useEffect"], {
                threshold: 0.1
            });
            if (countRef.current) {
                observerRef.current.observe(countRef.current);
            }
            return ({
                "CountUpAnimation.useEffect": ()=>{
                    if (observerRef.current && countRef.current) {
                        observerRef.current.unobserve(countRef.current);
                    }
                }
            })["CountUpAnimation.useEffect"];
        }
    }["CountUpAnimation.useEffect"], [
        end,
        start,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: countRef,
        className: className,
        children: [
            prefix,
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js",
        lineNumber: 60,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CountUpAnimation, "pqmmRtE04yegoSYBkF+GnooFhwM=");
_c = CountUpAnimation;
var _c;
__turbopack_context__.k.register(_c, "CountUpAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const resultsData = [
    {
        end: 30,
        suffix: "%",
        title: "Higher Lead Conversion",
        description: "For data-driven ads using AI-powered targeting.",
        delay: "delay-1"
    },
    {
        end: 2.5,
        suffix: "x",
        title: "ROAS Improvement",
        description: "For e-commerce brands leveraging retail media.",
        delay: "delay-2"
    },
    {
        end: 40,
        suffix: "%",
        title: "Faster Sales Cycles",
        description: "For B2B SaaS clients with intent-led ABM campaigns.",
        delay: "delay-3"
    }
];
const ResultsSection = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsSection.useEffect": ()=>{
            var _sectionRef_current;
            observerRef.current = new IntersectionObserver({
                "ResultsSection.useEffect": (entries)=>{
                    entries.forEach({
                        "ResultsSection.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                var _observerRef_current;
                                entry.target.classList.add("animated");
                                (_observerRef_current = observerRef.current) === null || _observerRef_current === void 0 ? void 0 : _observerRef_current.unobserve(entry.target);
                            }
                        }
                    }["ResultsSection.useEffect"]);
                }
            }["ResultsSection.useEffect"], {
                threshold: 0.1
            });
            const elements = ((_sectionRef_current = sectionRef.current) === null || _sectionRef_current === void 0 ? void 0 : _sectionRef_current.querySelectorAll(".animate-on-scroll")) || [];
            elements.forEach({
                "ResultsSection.useEffect": (el)=>{
                    var _observerRef_current;
                    return (_observerRef_current = observerRef.current) === null || _observerRef_current === void 0 ? void 0 : _observerRef_current.observe(el);
                }
            }["ResultsSection.useEffect"]);
            return ({
                "ResultsSection.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                }
            })["ResultsSection.useEffect"];
        }
    }["ResultsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white text-white relative",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-8xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center transition-all duration-800 transform",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title !mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "Proven Results: "
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Real Impact, Real ROI"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "my-4 md:my-6",
                            children: "Our data-driven strategies deliver measurable growth across industries and channels."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8",
                    children: resultsData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hover:scale-105 card backdrop-blur-sm border border-white/10 hover-card text-black fade-in ".concat(item.delay),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountUpAnimation"], {
                                            end: item.end,
                                            duration: 2,
                                            suffix: item.suffix,
                                            className: "text-5xl font-bold text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-xl font-bold text-center mb-2",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-center",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
            lineNumber: 59,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Results.js",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ResultsSection, "8HijMRg35ouaQ9tuwLIPffw9f7g=");
_c = ResultsSection;
const __TURBOPACK__default__export__ = ResultsSection;
var _c;
__turbopack_context__.k.register(_c, "ResultsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_bissbay-new-main_bissbay-new-main_src_app_what-we-do_d1deee19._.js.map