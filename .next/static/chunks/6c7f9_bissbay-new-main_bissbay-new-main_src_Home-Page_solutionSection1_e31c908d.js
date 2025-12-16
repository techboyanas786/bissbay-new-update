(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SolutionSection1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2d$i18next$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next-i18next/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AnimatedCard = (param)=>{
    let { heading = "Default Heading", paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.", paragraph2 = "Default second paragraph.", className = "", width = "w-full", height = "h-72", icon, isAutoAnimated = false, animationDelay = 0, isActive = false, onCardClick, cardIndex } = param;
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
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-xl z-10 bg-white w-full h-full p-4 md:p-6 flex flex-col justify-center items-center text-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform h-[45%] mx-4 md:mx-6 absolute ".concat(shouldShowContent ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'),
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "!font-semibold leading-tight !text-[#1F2937]",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ".concat(shouldShowContent ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0', " space-y-3 px-2 md:px-6"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 leading-relaxed",
                                style: {
                                    lineHeight: "normal"
                                },
                                children: paragraph
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "leading-relaxed",
                                style: {
                                    lineHeight: "normal"
                                },
                                children: paragraph2
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedCard, "zhyDXfi5mywWFyDpGtOUslLZUeg=");
_c = AnimatedCard;
function SolutionSection1() {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('translation');
    const [domLoaded, setDomLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animateCards, setAnimateCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCardIndex, setActiveCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolutionSection1.useEffect": ()=>{
            setDomLoaded(true);
        }
    }["SolutionSection1.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolutionSection1.useEffect": ()=>{
            if (!domLoaded || hasAnimated) return;
            const observer = new IntersectionObserver({
                "SolutionSection1.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting && !hasAnimated) {
                        setAnimateCards(true);
                        setHasAnimated(true);
                    }
                }
            }["SolutionSection1.useEffect"], {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "SolutionSection1.useEffect": ()=>{
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            })["SolutionSection1.useEffect"];
        }
    }["SolutionSection1.useEffect"], [
        domLoaded,
        hasAnimated
    ]);
    const getTranslation = (key, fallback)=>{
        try {
            return t(key) || fallback;
        } catch (error) {
            console.error('Translation error for key "'.concat(key, '":'), error);
            return fallback;
        }
    };
    const cardData = [
        {
            heading: "Revenue Stagnation",
            paragraph: "Stalled revenue growth is limiting your expansion.",
            paragraph2: "Let's break through this plateau.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/STAGNATION.svg",
                alt: "Revenue Stagnation",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Slow Deal Closure",
            paragraph: "Your sales cycle is dragging, delaying revenue and costing you valuable opportunities.",
            paragraph2: "We help you close faster.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/SLOW DEAL.svg",
                alt: "Slow Deal Closure",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Misaligned Teams",
            paragraph: "When sales and marketing don't align, leads slip through the cracks.",
            paragraph2: "Alignment is the key to unlocking growth.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/MISALIGNED.svg",
                alt: "Misaligned Teams",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 174,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Internal Constraints and Bottlenecks",
            paragraph: "Operational inefficiencies are holding you back.",
            paragraph2: "Let's remove roadblocks and scale faster.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/SCALING.svg",
                alt: "Internal Constraints",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Inconsistent Lead Quality",
            paragraph: "Unqualified leads are draining resources.",
            paragraph2: "It's time to attract the right prospects and boost conversions.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/INCONSISTENT.svg",
                alt: "Inconsistent Lead Quality",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        },
        {
            heading: " Frustrating Vendor Experiences",
            paragraph: "If past vendors let you down, it's time to work with a team that delivers real, measurable results.",
            paragraph2: "You need better ones.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/FRUSTRATING.svg",
                alt: "Frustrating Vendor Experiences",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 216,
                columnNumber: 9
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center lg:mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 lg:mb-6 !font-semibold text-center 2xl:!text-[40px]",
                        children: getTranslation('solutions.tagline1')
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "relative",
                        children: getTranslation('solutions.tagline4')
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4 lg:mb-6 text-center",
                        children: getTranslation('solutions.description2')
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            domLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto lg:gap-6",
                children: cardData.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 hover:border-2 hover:border-primary border-transparent rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCard, {
                            heading: card.heading,
                            paragraph: card.paragraph,
                            paragraph2: card.paragraph2,
                            icon: card.icon,
                            className: "h-[250px]",
                            isAutoAnimated: animateCards,
                            animationDelay: index * 300,
                            isActive: activeCardIndex === index,
                            onCardClick: (cardIndex)=>{
                                setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
                            },
                            cardIndex: index
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                            lineNumber: 244,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                        lineNumber: 243,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
                lineNumber: 241,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection1.js",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_s1(SolutionSection1, "1C/04XPmW8oHlePNhQHJusftlN0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = SolutionSection1;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCard");
__turbopack_context__.k.register(_c1, "SolutionSection1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=6c7f9_bissbay-new-main_bissbay-new-main_src_Home-Page_solutionSection1_e31c908d.js.map