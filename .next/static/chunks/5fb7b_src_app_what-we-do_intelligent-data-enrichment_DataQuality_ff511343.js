(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AnimatedCard = (param)=>{
    let { heading = "Default Heading", paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.", className = "", icon, isAutoAnimated = false, animationDelay = 0, isActive = false, onCardClick, cardIndex } = param;
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
        className: "bg-white flex hover-card justify-center rounded-2xl p-4 md:p-6 items-center overflow-hidden relative shadow-lg group ".concat(className, " ").concat(isMobile ? 'cursor-pointer' : ''),
        onMouseEnter: ()=>!isMobile && setIsHovered(true),
        onMouseLeave: ()=>!isMobile && setIsHovered(false),
        onClick: handleCardClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bg-white/10 backdrop-blur-xl",
                style: {
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-2xl z-10 text-primary bg-white w-full h-full flex flex-col justify-center items-center text-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform absolute ".concat(shouldShowContent ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"),
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "!font-semibold leading-tight !text-[#1F2937]",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ".concat(shouldShowContent ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0", " space-y-3 lg:px-5 px-2"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 leading-relaxed",
                            style: {
                                lineHeight: "normal"
                            },
                            children: paragraph
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedCard, "MEKZd4VfQv4MQGvY43HRzyVqe2s=");
_c = AnimatedCard;
const DataQuality = ()=>{
    _s1();
    const [domLoaded, setDomLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animateCards, setAnimateCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCardIndex, setActiveCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const steps = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/Personalization.svg",
                alt: "Define Goals",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 108,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Hyper-Personalization",
            description: "Target with precision by layering behavioral, transactional, and intent data for focused engagement."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/CUSTOMERUNDERSTANDING.svg",
                alt: "Define Goals",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 122,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Unified Customer View",
            description: "Create complete customer profiles by merging CRM data, web activity, and external insights."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/Artificial-Intelligence.svg",
                alt: "Define Goals",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 136,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Intelligent Segmentation",
            description: "Group prospects based on buying signals across industries to identify active opportunities."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/SUSTAINABLE.svg",
                alt: "Define Goals",
                className: "flex-shrink-0",
                width: 48,
                height: 48
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 150,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Revenue Acceleration",
            description: "Convert more leads with clean data that drives personalized, timely customer interactions."
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataQuality.useEffect": ()=>{
            setDomLoaded(true);
        }
    }["DataQuality.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataQuality.useEffect": ()=>{
            if (!domLoaded || hasAnimated) return;
            const observer = new IntersectionObserver({
                "DataQuality.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting && !hasAnimated) {
                        setAnimateCards(true);
                        setHasAnimated(true);
                    }
                }
            }["DataQuality.useEffect"], {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "DataQuality.useEffect": ()=>{
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            })["DataQuality.useEffect"];
        }
    }["DataQuality.useEffect"], [
        domLoaded,
        hasAnimated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataQuality.useEffect": ()=>{
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };
            const observer = new IntersectionObserver({
                "DataQuality.useEffect": (entries)=>{
                    entries.forEach({
                        "DataQuality.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("animated");
                                if (entry.target.classList.contains("animate-fade-in")) {
                                    entry.target.classList.add("opacity-100");
                                }
                            }
                        }
                    }["DataQuality.useEffect"]);
                }
            }["DataQuality.useEffect"], options);
            observerRefs.current.forEach({
                "DataQuality.useEffect": (ref)=>{
                    if (ref) observer.observe(ref);
                }
            }["DataQuality.useEffect"]);
            return ({
                "DataQuality.useEffect": ()=>{
                    observerRefs.current.forEach({
                        "DataQuality.useEffect": (ref)=>{
                            if (ref) observer.unobserve(ref);
                        }
                    }["DataQuality.useEffect"]);
                }
            })["DataQuality.useEffect"];
        }
    }["DataQuality.useEffect"], []);
    const addToRefs = (el)=>{
        if (el && !observerRefs.current.includes(el)) {
            observerRefs.current.push(el);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: addToRefs,
                className: "animate-fade-in text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "!mb-0 section-title",
                    children: [
                        "Why Data Quality Determines",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary",
                            children: "Business Success"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                            lineNumber: 234,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                    lineNumber: 232,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 231,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: addToRefs,
                className: "animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-center  my-4 md:my-6",
                    children: [
                        "Data is the foundation of every customer interaction.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                            lineNumber: 241,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Yet, incomplete, inaccurate, or siloed data can sabotage even the most sophisticated strategies."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                    lineNumber: 239,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 238,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: addToRefs,
                        className: "observer-element animate-fade-in ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "metric-card p-8 rounded-lg bg-white shadow-xl hover:border-b-6 border-t-6 transition-all duration-300 border-b-6 border-white hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4 md:mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                            className: "medium-icon !text-[#d6084d]"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "relative text-2xl text-center font-bold animate-on-scroll",
                                            children: "Bad Data Costs You"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "!text-[#d6084c] small-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Wasted ad spend targeting unqualified leads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "!text-[#d6084c] small-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Low engagement due to irrelevant messaging"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "!text-[#d6084c] small-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Missed opportunities with high-intent prospects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "!text-[#d6084c] small-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Damaged brand reputation from poor personalization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                            lineNumber: 249,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: addToRefs,
                        className: "observer-element animate-fade-in delay-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "metric-card p-8 rounded-lg bg-white shadow-xl hover:border-b-6 border-t-6 transition-all duration-300 border-b-6 border-white hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4 md:mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "medium-icon !text-bissbay-green"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-2xl relative text-center font-bold animate-on-scroll",
                                            children: "Great Data Accelerates Growth"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bullet-point !bg-bissbay-green mt-2 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Hyper-personalized outreach that resonates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bullet-point !bg-bissbay-green mt-2 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Optimized decision-making across channels"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 316,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bullet-point !bg-bissbay-green mt-2 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Scalable, predictable revenue generation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 324,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bullet-point !bg-bissbay-green mt-2 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "Enhanced customer experiences driving loyalty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                        lineNumber: 332,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                            lineNumber: 297,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                        lineNumber: 293,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 247,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-center  my-4 md:my-6",
                children: "BISSBAY bridges the gap, ensuring your data is clean, enriched, and primed for action."
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            domLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 lg:px-36 mb-4 lg:mb-12",
                children: steps.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCard, {
                            heading: card.title,
                            paragraph: card.description,
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
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                            lineNumber: 346,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                        lineNumber: 345,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 343,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: addToRefs,
                className: "observer-element animate-fade-in delay-300 mt-9 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "!font-semibold text-center",
                    children: [
                        "BISSBAY turns raw data into a",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary",
                            children: "strategic advantage"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                            lineNumber: 369,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                    lineNumber: 367,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
                lineNumber: 363,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/app/what-we-do/intelligent-data-enrichment/DataQuality.js",
        lineNumber: 230,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DataQuality, "OV4qruhm2a9/wDoXo7ksVffSRL4=");
_c1 = DataQuality;
const __TURBOPACK__default__export__ = DataQuality;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCard");
__turbopack_context__.k.register(_c1, "DataQuality");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=5fb7b_src_app_what-we-do_intelligent-data-enrichment_DataQuality_ff511343.js.map