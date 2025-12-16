(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AnimatedCard = (param)=>{
    let { heading = "Default Heading", paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.", className = "", width = "w-full", height = "h-72", icon, isAutoAnimated = false, animationDelay = 0, isActive = false, onCardClick, cardIndex } = param;
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClicked, setIsClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCard.useEffect": ()=>{
            const checkMobile = {
                "AnimatedCard.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["AnimatedCard.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "AnimatedCard.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["AnimatedCard.useEffect"];
        }
    }["AnimatedCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCard.useEffect": ()=>{
            if (isAutoAnimated) {
                const timer = setTimeout({
                    "AnimatedCard.useEffect.timer": ()=>{
                        setIsAutoPlaying(true);
                        setTimeout({
                            "AnimatedCard.useEffect.timer": ()=>{
                                setIsAutoPlaying(false);
                            }
                        }["AnimatedCard.useEffect.timer"], 2000);
                    }
                }["AnimatedCard.useEffect.timer"], animationDelay);
                return ({
                    "AnimatedCard.useEffect": ()=>clearTimeout(timer)
                })["AnimatedCard.useEffect"];
            }
        }
    }["AnimatedCard.useEffect"], [
        isAutoAnimated,
        animationDelay
    ]);
    const shouldShowContent = isHovered || isAutoPlaying || isMobile && isActive;
    const handleCardClick = ()=>{
        if (isMobile && onCardClick) {
            onCardClick(cardIndex);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(width, " ").concat(height, " bg-white flex justify-center rounded-xl items-center overflow-hidden relative shadow-lg group ").concat(className, " ").concat(isMobile ? 'cursor-pointer' : ''),
        onMouseEnter: ()=>!isMobile && setIsHovered(true),
        onMouseLeave: ()=>!isMobile && setIsHovered(false),
        onClick: handleCardClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute h-86 bg-white/10 backdrop-blur-xl",
                style: {
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-xl z-10 bg-white w-full h-full p-4 md:p-6 flex flex-col justify-center items-center text-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform h-auto md:h-[45%] mx-4 md:mx-6 absolute ".concat(shouldShowContent ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'),
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "!font-semibold leading-tight !text-[#1F2937]",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ".concat(shouldShowContent ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0', " space-y-3 px-2 md:px-6"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 leading-relaxed",
                            style: {
                                lineHeight: "normal"
                            },
                            children: paragraph
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedCard, "zhyDXfi5mywWFyDpGtOUslLZUeg=");
_c = AnimatedCard;
const BissbayAdvantage = ()=>{
    _s1();
    const [domLoaded, setDomLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animateCards, setAnimateCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCardIndex, setActiveCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BissbayAdvantage.useEffect": ()=>{
            setDomLoaded(true);
        }
    }["BissbayAdvantage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BissbayAdvantage.useEffect": ()=>{
            if (!domLoaded || hasAnimated) return;
            const observer = new IntersectionObserver({
                "BissbayAdvantage.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting && !hasAnimated) {
                        setAnimateCards(true);
                        setHasAnimated(true);
                    }
                }
            }["BissbayAdvantage.useEffect"], {
                threshold: 0.3,
                rootMargin: "0px 0px -100px 0px"
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "BissbayAdvantage.useEffect": ()=>{
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            })["BissbayAdvantage.useEffect"];
        }
    }["BissbayAdvantage.useEffect"], [
        domLoaded,
        hasAnimated
    ]);
    const steps = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/IDENTIFY.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 127,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Audit Insights",
            description: "Uncover data-backed opportunities with precision-driven analysis."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/planning.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 141,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Strategic Planning",
            description: "Develop tailored strategies built for measurable business outcomes."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/Personalization.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 154,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Seamless Execution",
            description: "Flawlessly implement campaigns across channels for maximum impact."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/Technology.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Continuous Optimization",
            description: "Refine and enhance strategies with real-time performance data."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/Faster.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 182,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Scalable Growth",
            description: "Expand your digital presence with scalable, ROI-driven solutions."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/bulb.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 196,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Innovation-First Approach",
            description: "Leverage advanced technologies and creative strategies to stay ahead."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title !mb-0",
                        children: "The BISSBAY Advantage: Data-Driven. Performance-Proven."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                        lineNumber: 213,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "my-4 md:my-6",
                        children: "Our proven 6-step process transforms your digital presence and drives measurable results."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                        lineNumber: 216,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            domLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto lg:gap-6",
                children: steps.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 hover:border-2 hover:border-primary border-transparent rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCard, {
                            heading: card.title,
                            paragraph: card.description,
                            icon: card.icon,
                            className: "h-[250px]",
                            isAutoAnimated: animateCards,
                            animationDelay: index * 300,
                            isActive: activeCardIndex === index,
                            onCardClick: (cardIndex)=>{
                                console.log('onCardClick called with:', cardIndex, 'current activeCardIndex:', activeCardIndex);
                                setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
                            },
                            cardIndex: index
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                            lineNumber: 226,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                        lineNumber: 225,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 223,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-4 md:mt-6 text-center",
                children: "We dont just follow trends; We set them."
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
                lineNumber: 244,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/digital-advertising/Advantages.js",
        lineNumber: 211,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(BissbayAdvantage, "JsJMGK6v0sJMubpPJjf6p4l9flM=");
_c1 = BissbayAdvantage;
const __TURBOPACK__default__export__ = BissbayAdvantage;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCard");
__turbopack_context__.k.register(_c1, "BissbayAdvantage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=c7728_bissbay-new-main_src_app_what-we-do_digital-advertising_Advantages_6b6b7b88.js.map