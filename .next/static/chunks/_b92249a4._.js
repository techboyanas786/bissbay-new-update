(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUpAnimation",
    ()=>CountUpAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const CountUpAnimation = (param)=>{
    let { end, start = 0, duration = 2, prefix, suffix = '', className = '' } = param;
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(start);
    const countRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: countRef,
        className: className,
        children: [
            prefix,
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js",
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
"[project]/src/app/resources/infographics/MetricCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js [app-client] (ecmascript)");
;
;
const MetricCard = (param)=>{
    let { title, value, prefix, percentage, suffix, icon, color = '', delay = 0, subtitle } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card !p-2 md:!p-6 group duration-300 transition-all animate-fade-in",
        style: {
            animationDelay: "".concat(delay, "s"),
            animationFillMode: 'forwards'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "!text-base font-medium mb-1",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full medium-icon",
                                style: {
                                    color: color
                                },
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                                lineNumber: 26,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground/70 mb-2",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                        lineNumber: 37,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountUpAnimation"], {
                                end: value,
                                prefix: prefix,
                                suffix: suffix,
                                className: "text-2xl font-bold text-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            percentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "metric-badge",
                                children: [
                                    percentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                                lineNumber: 50,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    percentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full transition-all duration-1000",
                            style: {
                                backgroundColor: color,
                                width: "".concat(percentage, "%"),
                                transitionDelay: "".concat(delay + 0.5, "s")
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                            lineNumber: 56,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                        lineNumber: 55,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/MetricCard.js",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/MetricCard.js",
        lineNumber: 15,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MetricCard;
const __TURBOPACK__default__export__ = MetricCard;
var _c;
__turbopack_context__.k.register(_c, "MetricCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/Donut1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$MetricCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/MetricCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Donut1() {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const regions = [
        {
            name: "APAC",
            audience: 27,
            suffix: ".1M",
            percentage: 24.0,
            color: "#ff4200"
        },
        {
            name: "EMEA",
            audience: 37,
            suffix: ".1M",
            percentage: 32.9,
            color: "#72bf44"
        },
        {
            name: "LATAM",
            audience: 23,
            percentage: 20.6,
            suffix: ".3M",
            color: "#7536f0"
        },
        {
            name: "North America",
            audience: 25,
            suffix: ".4M",
            percentage: 22.5,
            color: "#05b9f0"
        }
    ];
    const DonutChart = (param)=>{
        let { data, size = 300, strokeWidth = 40, selectedIndex, onSegmentClick } = param;
        _s1();
        const [hoveredSegment, setHoveredSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
        const radius = (size - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        let cumulativePercentage = 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: size,
                    height: size,
                    className: "transform -rotate-90",
                    style: {
                        pointerEvents: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: size / 2,
                            cy: size / 2,
                            r: radius,
                            fill: "none",
                            stroke: "hsl(var(--card-border))",
                            strokeWidth: strokeWidth,
                            style: {
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/Donut1.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        data.map((segment, index)=>{
                            const isSelected = selectedIndex !== null;
                            const isThisSelected = selectedIndex === index;
                            let segmentPercentage;
                            let strokeDasharray;
                            let strokeDashoffset;
                            if (isSelected) {
                                if (isThisSelected) {
                                    // This segment takes over the entire donut
                                    segmentPercentage = 1;
                                    strokeDasharray = "".concat(circumference, " ").concat(circumference);
                                    strokeDashoffset = 0;
                                } else {
                                    // Hide other segments
                                    segmentPercentage = 0;
                                    strokeDasharray = "0 ".concat(circumference);
                                    strokeDashoffset = 0;
                                }
                            } else {
                                // Normal state
                                segmentPercentage = segment.percentage / 100;
                                strokeDasharray = "".concat(segmentPercentage * circumference, " ").concat(circumference);
                                strokeDashoffset = -cumulativePercentage * circumference;
                            }
                            if (!isSelected) {
                                cumulativePercentage += segmentPercentage;
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: size / 2,
                                        cy: size / 2,
                                        r: radius,
                                        fill: "none",
                                        stroke: segment.color,
                                        strokeWidth: strokeWidth,
                                        strokeDasharray: strokeDasharray,
                                        strokeDashoffset: strokeDashoffset,
                                        strokeLinecap: "round",
                                        style: {
                                            pointerEvents: 'none'
                                        },
                                        initial: {
                                            strokeDasharray: "0 ".concat(circumference)
                                        },
                                        animate: {
                                            strokeDasharray,
                                            strokeDashoffset,
                                            opacity: isSelected && !isThisSelected ? 0 : 1
                                        },
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeInOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: size / 2,
                                        cy: size / 2,
                                        r: radius,
                                        fill: "none",
                                        stroke: "transparent",
                                        strokeWidth: strokeWidth + 10,
                                        strokeDasharray: strokeDasharray,
                                        strokeDashoffset: strokeDashoffset,
                                        style: {
                                            cursor: 'pointer',
                                            pointerEvents: isSelected && !isThisSelected ? 'none' : 'stroke',
                                            touchAction: 'none'
                                        },
                                        onPointerDown: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            if (typeof onSegmentClick === 'function') {
                                                onSegmentClick(index);
                                            }
                                        },
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, segment.name, true, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/Donut1.js",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none",
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.4
                    },
                    children: selectedIndex !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold mb-1 transition-transform duration-500",
                                style: {
                                    color: data[selectedIndex].color
                                },
                                children: [
                                    data[selectedIndex].value,
                                    "M+"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: data[selectedIndex].name
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground mt-1",
                                children: [
                                    data[selectedIndex].percentage,
                                    "% of total"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-primary mb-1 transition-transform duration-500",
                                children: "113M+"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: "Total Audience"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, selectedIndex !== null ? selectedIndex : 'total', false, {
                    fileName: "[project]/src/app/resources/infographics/Donut1.js",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                hoveredSegment !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border border-card-border rounded-xl px-4 py-2 shadow-lg z-10 transition-opacity duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-semibold",
                            children: data[hoveredSegment].name
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/Donut1.js",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                (data[hoveredSegment].value / 1000000).toFixed(1),
                                "M (",
                                data[hoveredSegment].percentage,
                                "%)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/resources/infographics/Donut1.js",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/Donut1.js",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/resources/infographics/Donut1.js",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    };
    _s1(DonutChart, "DF2oHnSZYRhjViIKBGp6fU3pS6w=");
    const handleCardClick = (index)=>{
        setSelectedRegion(selectedRegion === index ? null : index);
    };
    const handleClickOutside = ()=>{
        if (selectedRegion !== null) {
            setSelectedRegion(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-7xl mx-auto",
        onClick: handleClickOutside,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title !mb-0",
                        children: "Global Distribution"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/Donut1.js",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-center my-4 md:my-6",
                        children: "Our audience spans across four major regions with significant market penetration in each territory."
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/Donut1.js",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:flex-row flex-col justify-between items-center gap-4 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "block md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                                    data: regions.map((region)=>({
                                            name: region.name,
                                            value: region.audience,
                                            percentage: region.percentage,
                                            color: region.color
                                        })),
                                    size: 300,
                                    strokeWidth: 50,
                                    selectedIndex: selectedRegion,
                                    onSegmentClick: handleCardClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                                    data: regions.map((region)=>({
                                            name: region.name,
                                            value: region.audience,
                                            percentage: region.percentage,
                                            color: region.color
                                        })),
                                    size: 400,
                                    strokeWidth: 50,
                                    selectedIndex: selectedRegion,
                                    onSegmentClick: handleCardClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resources/infographics/Donut1.js",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full grid grid-cols-2 gap-4 md:gap-8",
                        children: regions.map((region, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleCardClick(index);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$MetricCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: region.name,
                                    value: region.audience,
                                    percentage: region.percentage,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-[30px] h-[30px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                        lineNumber: 253,
                                        columnNumber: 23
                                    }, void 0),
                                    color: region.color,
                                    suffix: region.suffix,
                                    delay: index * 0.1,
                                    subtitle: "Regional Market"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this)
                            }, region.name, false, {
                                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/Donut1.js",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/Donut1.js",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/Donut1.js",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s(Donut1, "tje2PHj3iLqb51wl8GEcF9jTgA8=");
_c = Donut1;
const __TURBOPACK__default__export__ = Donut1;
var _c;
__turbopack_context__.k.register(_c, "Donut1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/IndustryBreak1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$Root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/core/Root.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$util$2f$Percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/core/util/Percent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$render$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/core/render/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$XYChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$XYCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/charts/xy/XYCursor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$AxisRendererX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$CategoryAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/CategoryAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$AxisRendererY$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererY.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$ValueAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/ValueAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$series$2f$ColumnSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/.internal/charts/xy/series/ColumnSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f$themes$2f$Animated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@amcharts/amcharts5/themes/Animated.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function IndustryBreak1() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "IndustryBreak1.useLayoutEffect": ()=>{
            // Create root
            let root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$Root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].new("chartdiv");
            // Set themes
            root.setThemes([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f$themes$2f$Animated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].new(root)
            ]);
            // Create chart
            let chart = root.container.children.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$XYChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYChart"].new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX: true,
                paddingLeft: 0,
                paddingRight: 1
            }));
            // Add cursor
            let cursor = chart.set("cursor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$XYCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYCursor"].new(root, {}));
            cursor.lineY.set("visible", false);
            // X Axis
            let xRenderer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$AxisRendererX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisRendererX"].new(root, {
                minGridDistance: 30,
                minorGridEnabled: false
            });
            xRenderer.labels.template.setAll({
                rotation: -90,
                centerY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$util$2f$Percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p50"],
                centerX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$util$2f$Percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p100"],
                paddingRight: 15,
                fontFamily: "Quicksand"
            });
            xRenderer.grid.template.setAll({
                location: 1
            });
            let xAxis = chart.xAxes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$CategoryAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryAxis"].new(root, {
                maxDeviation: 0.3,
                categoryField: "country",
                renderer: xRenderer,
                tooltip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$render$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"].new(root, {})
            }));
            // Y Axis
            let yRenderer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$AxisRendererY$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxisRendererY"].new(root, {
                strokeOpacity: 0.1
            });
            let yAxis = chart.yAxes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$axes$2f$ValueAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueAxis"].new(root, {
                maxDeviation: 0.3,
                renderer: yRenderer
            }));
            // Series
            let series = chart.series.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$charts$2f$xy$2f$series$2f$ColumnSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColumnSeries"].new(root, {
                name: "Series 1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                categoryXField: "country",
                sequencedInterpolation: true,
                tooltip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$amcharts$2f$amcharts5$2f2e$internal$2f$core$2f$render$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"].new(root, {
                    labelText: "{valueY}"
                })
            }));
            series.columns.template.setAll({
                cornerRadiusTL: 5,
                cornerRadiusTR: 5,
                strokeOpacity: 0
            });
            series.columns.template.adapters.add("fill", {
                "IndustryBreak1.useLayoutEffect": (fill, target)=>chart.get("colors").getIndex(series.columns.indexOf(target))
            }["IndustryBreak1.useLayoutEffect"]);
            series.columns.template.adapters.add("stroke", {
                "IndustryBreak1.useLayoutEffect": (stroke, target)=>chart.get("colors").getIndex(series.columns.indexOf(target))
            }["IndustryBreak1.useLayoutEffect"]);
            // ✅ Industry data
            let data = [
                {
                    country: "Information Technology",
                    value: 30560000
                },
                {
                    country: "BFSI",
                    value: 20360000
                },
                {
                    country: "Healthcare & Life Sciences",
                    value: 12200000
                },
                {
                    country: " Industrial & Manufacturing",
                    value: 10150000
                },
                {
                    country: "Consumer Goods & Retail",
                    value: 8160000
                },
                {
                    country: "Hospitality & Travel",
                    value: 7120000
                },
                {
                    country: "Media & Marketing",
                    value: 6120000
                },
                {
                    country: "Energy & Utilities",
                    value: 5080000
                },
                {
                    country: "Government & Public Sector",
                    value: 4080000
                },
                {
                    country: "Professional Services",
                    value: 3040000
                },
                {
                    country: "Transportation & Logistics",
                    value: 2540000
                },
                {
                    country: "Construction & Engineering",
                    value: 2040000
                },
                {
                    country: "Agriculture & Environmental",
                    value: 1540000
                }
            ];
            xAxis.data.setAll(data);
            series.data.setAll(data);
            // Animations
            series.appear(1000);
            chart.appear(1000, 100);
            return ({
                "IndustryBreak1.useLayoutEffect": ()=>{
                    root.dispose(); // Cleanup on unmount
                }
            })["IndustryBreak1.useLayoutEffect"];
        }
    }["IndustryBreak1.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title !mb-0",
                        children: "Industry Distribution"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/IndustryBreak1.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-center my-4 md:my-6",
                        children: "Technology and finance sectors lead our audience composition with strong representation across diverse industries."
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/IndustryBreak1.js",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/IndustryBreak1.js",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "chartdiv",
                style: {
                    width: "100%",
                    height: "600px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/resources/infographics/IndustryBreak1.js",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/IndustryBreak1.js",
        lineNumber: 127,
        columnNumber: 7
    }, this);
}
_s(IndustryBreak1, "n7/vCynhJvM+pLkyL2DMQUF0odM=");
_c = IndustryBreak1;
const __TURBOPACK__default__export__ = IndustryBreak1;
var _c;
__turbopack_context__.k.register(_c, "IndustryBreak1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/Hero2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Hero2() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const stats = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
            label: "Global Regions",
            value: 4,
            color: "text-primary"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
            label: "Industries",
            value: 13,
            suffix: "+",
            color: "text-foreground"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            label: "Company Sizes",
            value: 7,
            color: "text-primary"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            label: "Departments",
            value: 10,
            suffix: "+",
            color: "text-foreground"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
            label: "Verified Companies",
            value: 5,
            suffix: "M+",
            color: "text-foreground"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-center",
                    children: [
                        "Audience Analytics",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary",
                            children: " Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/Hero2.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/Hero2.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "md:text-center text-left my-4 md:my-6",
                    children: "Visual insights into 113M+ global audience segments, industry trends, and organizational dynamics."
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/Hero2.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6",
                    children: [
                        stats.map((stat, index)=>{
                            const Icon = stat.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 md:p-6 hover-card h-full card border-1 border-gray-300 duration-300 transition-all hover:scale-103  hover:border-white rounded-2xl text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "medium-icon "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountUpAnimation"], {
                                            start: 0,
                                            className: "text-4xl font-bold !text-primary",
                                            end: stat.value,
                                            suffix: stat.suffix
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-primary my-1",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, stat.label, false, {
                                fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "md:hidden",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: stats.length * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "!p-2 hover-card h-full card border-1 !border-primary rounded-2xl text-center flex flex-col justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "medium-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "text-4xl font-bold text-black mb-1",
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-primary my-1 mb-2",
                                        children: "Have question about data?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            customClass: "transform transition-all duration-300 ease-in-out",
                                            variant: "primary",
                                            label: "Contact Us",
                                            onClick: ()=>router.push("/contact-us")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/resources/infographics/Hero2.js",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/Hero2.js",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/Hero2.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/resources/infographics/Hero2.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/infographics/Hero2.js",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Hero2, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Hero2;
const __TURBOPACK__default__export__ = Hero2;
var _c;
__turbopack_context__.k.register(_c, "Hero2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/TrafficMetrics.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrafficMetrics",
    ()=>TrafficMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$MetricCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/MetricCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/what-we-do/account-based-marketing/animation/CountUpAnimation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TrafficMetrics = ()=>{
    _s();
    const MetricCard2 = (param)=>{
        let { title, value, prefix, percentage, suffix, icon, color = "", delay = 0, subtitle } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hover:scale-105 !p-4 md:!p-6 card shadow-lg shadow-md border-3 border-[#FF4200] md:border-gray-100 md:hover:border-[#FF4200] transition-all duration-300 text-center",
            style: {
                animationDelay: "".concat(delay, "s"),
                animationFillMode: "forwards"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4",
                    children: [
                        icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-primary group-hover:scale-110 transition-transform duration-300",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 29,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs md:text-sm font-medium mb-1",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$what$2d$we$2d$do$2f$account$2d$based$2d$marketing$2f$animation$2f$CountUpAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountUpAnimation"], {
                                    end: value,
                                    prefix: prefix,
                                    suffix: suffix,
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 hover:scale-105 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                percentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "metric-badge",
                                    children: [
                                        percentage,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                                    lineNumber: 46,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs md:text-sm",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        percentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-secondary/50 rounded-full h-2 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-full transition-all duration-1000",
                                style: {
                                    backgroundColor: color,
                                    width: "".concat(percentage, "%"),
                                    transitionDelay: "".concat(delay + 0.5, "s")
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                                lineNumber: 56,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 55,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrafficMetrics.useEffect": ()=>{
            setIsVisible(true);
        }
    }["TrafficMetrics.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: 'hover:scale-3d !p-4 md:!p-6 card shadow-lg shadow-md border-3 border-[#FF4200] md:border-gray-200 md:hover:border-[#FF4200] transition-all duration-300 text-center"\n      }',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center mb-4 md:mb-6",
                children: "Engaged Audience, Extended Visits"
            }, void 0, false, {
                fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " justify-center items-centers grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard2, {
                        title: "Monthly Traffic",
                        value: "500",
                        suffix: "k",
                        subtitle: "Desktop Visitors",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 91,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard2, {
                        title: "Growth Trends",
                        value: "9",
                        prefix: "+",
                        suffix: ".5%",
                        subtitle: "Year-on-Year",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 100,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard2, {
                        title: "Pages per Visit",
                        value: "2",
                        suffix: ".2",
                        subtitle: "Average Engagement",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                            lineNumber: 108,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/TrafficMetrics.js",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TrafficMetrics, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = TrafficMetrics;
var _c;
__turbopack_context__.k.register(_c, "TrafficMetrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/DataCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataCard",
    ()=>DataCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DataCard = (param)=>{
    let { title, data, variant = "default" } = param;
    // Calculate totals
    const totalDataCount = data.reduce((sum, item)=>sum + (item.count || 0), 0);
    const totalPercentage = data.reduce((sum, item)=>sum + (item.percentage || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\n        overflow-hidden transition-all border p-4 md:p-6 rounded-xl duration-300 shadow-sm hover:shadow-lg\n        ".concat(variant === "highlighted" ? "border-primary bg-gradient-to-br from-background to-primary/5 shadow-lg" : "border-gray-100", "\n      "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "!text-xl !font-bold text-foreground flex justify-center",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/DataCard.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/resources/infographics/DataCard.js",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 md:space-y-4",
                children: [
                    data.slice(0, 10).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "!font-medium text-foreground truncate flex-1 mr-4",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground !font-semibold min-w-[80px] text-right",
                                                children: [
                                                    item.count ? (item.count / 1_000_000).toFixed(2) : "",
                                                    item.count ? "M" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!font-semibold !text-primary min-w-[50px] text-right",
                                                children: [
                                                    item.percentage.toFixed(2),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/src/app/resources/infographics/DataCard.js",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    data.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                "+",
                                data.length - 10,
                                " more categories"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/resources/infographics/DataCard.js",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/DataCard.js",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t pt-3 mt-3 flex justify-between items-center font-bold text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground !font-bold",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground !font-bold min-w-[80px] text-right",
                                        children: [
                                            totalDataCount === 0.0 ? "" : (totalDataCount / 1_000_000).toFixed(0),
                                            totalDataCount === 0.0 ? "" : "M"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "!text-primary !font-bold min-w-[50px] text-right",
                                        children: [
                                            totalPercentage.toFixed(0),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/resources/infographics/DataCard.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resources/infographics/DataCard.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/DataCard.js",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/DataCard.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DataCard;
var _c;
__turbopack_context__.k.register(_c, "DataCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/CompanySizePolarChart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanySizePolarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$chart$2f$chart$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/chart/chart.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/DataCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CompanySizePolarChart() {
    _s();
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [chartOptions, setChartOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const companySizes = [
        {
            range: "11-50",
            audience: 13500000,
            percentage: 11.95
        },
        {
            range: "51-200",
            audience: 11500000,
            percentage: 10.18
        },
        {
            range: "201-500",
            audience: 19500000,
            percentage: 17.26
        },
        {
            range: "501-1,000",
            audience: 16250000,
            percentage: 14.38
        },
        {
            range: "1,001-5,000",
            audience: 12500000,
            percentage: 11.06
        },
        {
            range: "5,001-10,000",
            audience: 17500000,
            percentage: 15.49
        },
        {
            range: "10,001+",
            audience: 22250000,
            percentage: 19.69
        }
    ];
    const companySizeEmployeesData = [
        {
            label: "11-50",
            count: 13500000,
            percentage: 11.95
        },
        {
            label: "51-200",
            count: 11500000,
            percentage: 10.18
        },
        {
            label: "201-500",
            count: 19500000,
            percentage: 17.26
        },
        {
            label: "501-1,000",
            count: 16250000,
            percentage: 14.38
        },
        {
            label: "1,001-5,000",
            count: 12500000,
            percentage: 11.06
        },
        {
            label: "5,001-10,000",
            count: 17500000,
            percentage: 15.49
        },
        {
            label: "10,000+ Employees",
            count: 22250000,
            percentage: 19.69
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanySizePolarChart.useEffect": ()=>{
            const checkMobile = {
                "CompanySizePolarChart.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1024);
                }
            }["CompanySizePolarChart.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "CompanySizePolarChart.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["CompanySizePolarChart.useEffect"];
        }
    }["CompanySizePolarChart.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanySizePolarChart.useEffect": ()=>{
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue("--text-color");
            const data = {
                labels: companySizes.map({
                    "CompanySizePolarChart.useEffect": (size)=>size.range
                }["CompanySizePolarChart.useEffect"]),
                datasets: [
                    {
                        label: "Company Size Audience",
                        data: companySizes.map({
                            "CompanySizePolarChart.useEffect": (size)=>size.audience
                        }["CompanySizePolarChart.useEffect"]),
                        backgroundColor: [
                            "#05b9f0",
                            "#5c6371",
                            "#7536f0",
                            "#72bf44",
                            "#1acfbf",
                            "#d6084d",
                            "#ff4200"
                        ]
                    }
                ]
            };
            const options = {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: isMobile ? "bottom" : "left",
                        labels: {
                            color: textColor,
                            font: {
                                size: isMobile ? 10 : 12
                            },
                            padding: isMobile ? 8 : 10,
                            boxWidth: isMobile ? 15 : 20
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: "#ffffff"
                        },
                        pointLabels: {
                            color: textColor,
                            font: {
                                size: isMobile ? 10 : 12
                            }
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            };
            setChartData(data);
            setChartOptions(options);
        }
    }["CompanySizePolarChart.useEffect"], [
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title text-center mb-12",
                children: "Company Size Distribution by Employees"
            }, void 0, false, {
                fileName: "[project]/src/app/resources/infographics/CompanySizePolarChart.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-4 md:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full min-h-[400px] md:min-h-[500px] overflow-x-auto flex-col items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$chart$2f$chart$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chart"], {
                            type: "polarArea",
                            data: chartData,
                            options: chartOptions,
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/CompanySizePolarChart.js",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/CompanySizePolarChart.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataCard"], {
                            title: "Company Size (Employees)",
                            data: companySizeEmployeesData,
                            totalCount: 113000000
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/CompanySizePolarChart.js",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/CompanySizePolarChart.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/CompanySizePolarChart.js",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/CompanySizePolarChart.js",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(CompanySizePolarChart, "FA9eBBnGYPGB1Bta1Dyo2LuV/a8=");
_c = CompanySizePolarChart;
var _c;
__turbopack_context__.k.register(_c, "CompanySizePolarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/SeniorityLevel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/DataCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function SeniorityLevel() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "SeniorityLevel.useEffect": ()=>{
            const checkMobile = {
                "SeniorityLevel.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1024);
                }
            }["SeniorityLevel.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "SeniorityLevel.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["SeniorityLevel.useEffect"];
        }
    }["SeniorityLevel.useEffect"], []);
    const seniorityLevels = [
        {
            label: "Mid-Level (Executives)",
            count: 22600000,
            percentage: 20
        },
        {
            label: "Manager Level",
            count: 30500000,
            percentage: 27
        },
        {
            label: "Director Level",
            count: 25950000,
            percentage: 23
        },
        {
            label: "Vice President (VP) Level",
            count: 16950000,
            percentage: 15
        },
        {
            label: "C-Level (Executive Leadership)",
            count: 11300000,
            percentage: 10
        },
        {
            label: "Board & Ownership",
            count: 5700000,
            percentage: 5
        }
    ];
    const chartData = {
        labels: seniorityLevels.map((item)=>item.label.split(' ')),
        datasets: [
            {
                label: 'Seniority Level',
                data: seniorityLevels.map((item)=>item.percentage),
                backgroundColor: '#ff4200',
                borderRadius: 4,
                borderWidth: 0,
                count: seniorityLevels.map((item)=>item.count)
            }
        ]
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: isMobile ? 20 : 10
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context)=>{
                        const count = seniorityLevels[context.dataIndex].count;
                        const percentage = context.raw;
                        const countInMillions = (count / 1000000).toFixed(2);
                        return "".concat(countInMillions, "M - ").concat(percentage.toFixed(2), "%");
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: 'Quicksand',
                        size: isMobile ? 9 : 12
                    },
                    maxRotation: isMobile ? 45 : 0,
                    minRotation: isMobile ? 45 : 0,
                    autoSkip: false,
                    padding: isMobile ? 4 : 8
                }
            },
            y: {
                beginAtZero: true,
                max: 30,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    font: {
                        family: 'Quicksand'
                    },
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        },
        animation: {
            duration: 1000
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title !mb-0 text-center",
                    children: "Seniority Level Breakdown"
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-center my-4 md:my-6",
                    children: "Representation across multiple leadership and management levels, from professionals to board executives."
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-4 md:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full overflow-x-auto h-[350px] md:h-[450px] lg:h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                data: chartData,
                                options: chartOptions
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataCard"], {
                            title: "Seniority Level",
                            data: seniorityLevels
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/infographics/SeniorityLevel.js",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(SeniorityLevel, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = SeniorityLevel;
const __TURBOPACK__default__export__ = SeniorityLevel;
var _c;
__turbopack_context__.k.register(_c, "SeniorityLevel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/DepartmentOverview.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3plus$2d$react$2f$es$2f$src$2f$Treemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Treemap$3e$__ = __turbopack_context__.i("[project]/node_modules/d3plus-react/es/src/Treemap.js [app-client] (ecmascript) <export default as Treemap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/DataCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DepartmentOverview() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DepartmentOverview.useEffect": ()=>{
            const checkMobile = {
                "DepartmentOverview.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1024);
                }
            }["DepartmentOverview.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "DepartmentOverview.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["DepartmentOverview.useEffect"];
        }
    }["DepartmentOverview.useEffect"], []);
    const Departmentdata = [
        {
            label: "IT & Engineering",
            value: 24.86,
            count: 24860000,
            percentage: 22
        },
        {
            label: "Finance & Accounting",
            value: 19.21,
            count: 19210000,
            percentage: 17
        },
        {
            label: "Human Resources",
            value: 13.56,
            count: 13560000,
            percentage: 12
        },
        {
            label: "Sales & Business Development",
            value: 13.56,
            count: 13560000,
            percentage: 12
        },
        {
            label: "Marketing & Public Relations",
            value: 10.17,
            count: 10170000,
            percentage: 9
        },
        {
            label: "Operations",
            value: 9.04,
            count: 9040000,
            percentage: 8
        },
        {
            label: "Healthcare",
            value: 7.91,
            count: 7910000,
            percentage: 7
        },
        {
            label: "Manufacturing & Engineering",
            value: 7.91,
            count: 7910000,
            percentage: 7
        },
        {
            label: "Legal & Compliance",
            value: 3.39,
            count: 3390000,
            percentage: 3
        },
        {
            label: "Facilities & Administration",
            value: 3.39,
            count: 3390000,
            percentage: 3
        }
    ];
    const colorMap = {
        "Finance & Accounting": "#ff4200",
        "IT & Engineering": "#72bf44",
        "Human Resources": "#7536f0",
        "Sales & Business Development": "#1acfbf",
        "Marketing & Public Relations": "#d9fa4f",
        "Healthcare": "#05b9f0",
        "Operations": "#1f2937",
        "Legal & Compliance": "#5c6371",
        "Manufacturing & Engineering": "#d6084d",
        "Facilities & Administration": "#ffa500"
    };
    const methods = {
        groupBy: "label",
        data: Departmentdata,
        label: (d)=>"".concat(d.label),
        size: (d)=>d.value,
        tooltipConfig: {
            title: (d)=>d.label,
            body: (d)=>"<div>\n          <strong>Audience:</strong> ".concat(d.value, "M<br/>\n          <strong>Percentage:</strong> ").concat(d.percentage, "%\n        </div>"),
            tbody: [],
            footer: false
        },
        shapeConfig: {
            fill: (d)=>colorMap[d.label] || "#ff4200",
            label: (d)=>"".concat(d.label),
            labelConfig: {
                fontSize: isMobile ? 9 : 12,
                fontWeight: "normal",
                fontColor: "#ffffff"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title text-center !mb-0",
                        children: "Department Distribution"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "my-4 md:my-6",
                        children: "IT & Engineering and Finance & Accounting our largest professional segments."
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
                lineNumber: 104,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-4 md:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-[350px] overflow-x-auto md:min-h-[450px] lg:min-h-[500px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3plus$2d$react$2f$es$2f$src$2f$Treemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Treemap$3e$__["Treemap"], {
                            config: methods
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
                            lineNumber: 116,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
                        lineNumber: 115,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataCard"], {
                        title: "Department Distribution",
                        data: Departmentdata
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
                        lineNumber: 118,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
                lineNumber: 114,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/DepartmentOverview.js",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
_s(DepartmentOverview, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = DepartmentOverview;
const __TURBOPACK__default__export__ = DepartmentOverview;
var _c;
__turbopack_context__.k.register(_c, "DepartmentOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/CompanySizePie.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ag$2d$charts$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ag-charts-react/dist/package/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/DataCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CompanySizePie() {
    _s();
    const companySizeRevenueData = [
        {
            label: "<$1 Million",
            percentage: 10.46
        },
        {
            label: "$1 Million - $9 Million",
            percentage: 11.26
        },
        {
            label: "$10 Million - $99 Million",
            percentage: 26.86
        },
        {
            label: "$100 Million - $499 Million",
            percentage: 15.22
        },
        {
            label: "$500 Million - $999 Million",
            percentage: 5.98
        },
        {
            label: "$1 Billion+ Annual Revenue",
            percentage: 30.22
        }
    ];
    const [chartOptions, setChartOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        data: [
            {
                category: "<$1M",
                companies: 2681506,
                percentage: 10.46
            },
            {
                category: "$1M - $9M",
                companies: 6337606,
                percentage: 11.26
            },
            {
                category: "$10M - $99M",
                companies: 11158846,
                percentage: 26.86
            },
            {
                category: "$100M - $499M",
                companies: 6324272,
                percentage: 15.22
            },
            {
                category: "$500M - $999M",
                companies: 2485597,
                percentage: 5.98
            },
            {
                category: "$1 Billion+",
                companies: 12553222,
                percentage: 30.22
            }
        ],
        series: [
            {
                type: "pie",
                angleKey: "percentage",
                labelKey: "category",
                fills: [
                    "#ff4200",
                    "#7536f0",
                    "#72bf44",
                    "#1acfbf",
                    "#d6084d",
                    "#5c6371"
                ],
                strokes: [
                    "#ffffff"
                ],
                strokeWidth: 0.7,
                calloutLabelKey: "category",
                sectorLabelKey: "percentage",
                sectorLabel: {
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: 8,
                    formatter: {
                        "CompanySizePie.useState": (param)=>{
                            let { datum } = param;
                            return "".concat(datum.percentage, "%");
                        }
                    }["CompanySizePie.useState"],
                    minRequiredAngle: 0
                },
                calloutLabel: {
                    enabled: false
                },
                tooltip: {
                    renderer: {
                        "CompanySizePie.useState": (param)=>{
                            let { datum } = param;
                            return {
                                title: datum.category,
                                data: [
                                    {
                                        label: "Percentage",
                                        value: "".concat(datum.percentage, "%")
                                    }
                                ]
                            };
                        }
                    }["CompanySizePie.useState"]
                },
                highlightStyle: {
                    item: {
                        strokeWidth: 0,
                        fillOpacity: 0.5
                    }
                }
            }
        ],
        legend: {
            enabled: true,
            position: "bottom",
            spacing: 20,
            item: {
                marker: {
                    shape: "circle",
                    size: 8
                },
                label: {
                    fontSize: 12,
                    color: "#374151"
                },
                paddingY: 4
            }
        },
        theme: {
            overrides: {
                common: {
                    background: {
                        fill: "transparent"
                    }
                }
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-center section-title !mb-0",
                        children: "Company Size Distribution by Revenue"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-center my-4 md:my-6",
                        children: "Distribution of companies across different revenue categories."
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ag$2d$charts$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgCharts"], {
                            className: "scale-110 md:scale-100 h-[500px]",
                            options: chartOptions
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DataCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataCard"], {
                            title: "Company Size (Revenue)",
                            data: companySizeRevenueData
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/infographics/CompanySizePie.js",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(CompanySizePie, "Y36gvS7zoFfzXThVozNhfEWRM/U=");
_c = CompanySizePie;
const __TURBOPACK__default__export__ = CompanySizePie;
var _c;
__turbopack_context__.k.register(_c, "CompanySizePie");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatusPopup.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const StatusPopup = (param)=>{
    let { status, title, message, onClose } = param;
    const isSuccess = status === "success";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e9bb0512c5708c3a" + " " + "fixed inset-0 flex items-center justify-center bg-black/50 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e9bb0512c5708c3a" + " " + "bg-white rounded-xl shadow-lg w-full max-w-sm p-6 text-center animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e9bb0512c5708c3a" + " " + "flex justify-center mb-4",
                        children: isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e9bb0512c5708c3a" + " " + "bg-green-100 p-4 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                className: "jsx-e9bb0512c5708c3a" + " " + "w-8 h-8 text-green-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M5 13l4 4L19 7",
                                    className: "jsx-e9bb0512c5708c3a"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatusPopup.jsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatusPopup.jsx",
                                lineNumber: 13,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatusPopup.jsx",
                            lineNumber: 12,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e9bb0512c5708c3a" + " " + "bg-red-100 p-4 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                className: "jsx-e9bb0512c5708c3a" + " " + "w-8 h-8 text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 18L18 6M6 6l12 12",
                                    className: "jsx-e9bb0512c5708c3a"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatusPopup.jsx",
                                    lineNumber: 32,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatusPopup.jsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatusPopup.jsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusPopup.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-e9bb0512c5708c3a" + " " + "text-xl font-semibold mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusPopup.jsx",
                        lineNumber: 39,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-e9bb0512c5708c3a" + " " + "text-gray-600 mb-6",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusPopup.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "jsx-e9bb0512c5708c3a" + " " + "px-4 py-2 rounded-xl font-medium text-white ".concat(isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"),
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusPopup.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StatusPopup.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e9bb0512c5708c3a",
                children: ".animate-fadeIn.jsx-e9bb0512c5708c3a{animation:.3s ease-in-out fadeInScale}@keyframes fadeInScale{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StatusPopup.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StatusPopup;
const __TURBOPACK__default__export__ = StatusPopup;
var _c;
__turbopack_context__.k.register(_c, "StatusPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/countries.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[[\"Afghanistan\",\"af\",\"93\"],[\"Albania\",\"al\",\"355\"],[\"Algeria\",\"dz\",\"213\"],[\"American Samoa\",\"as\",\"1\",1,[\"684\"]],[\"Andorra\",\"ad\",\"376\"],[\"Angola\",\"ao\",\"244\"],[\"Anguilla\",\"ai\",\"1\",1,[\"264\"]],[\"Antigua and Barbuda\",\"ag\",\"1\",1,[\"268\"]],[\"Argentina\",\"ar\",\"54\"],[\"Armenia\",\"am\",\"374\"],[\"Aruba\",\"aw\",\"297\"],[\"Australia\",\"au\",\"61\",0],[\"Austria\",\"at\",\"43\"],[\"Azerbaijan\",\"az\",\"994\"],[\"Bahamas\",\"bs\",\"1\",1,[\"242\"]],[\"Bahrain\",\"bh\",\"973\"],[\"Bangladesh\",\"bd\",\"880\"],[\"Barbados\",\"bb\",\"1\",1,[\"246\"]],[\"Belarus\",\"by\",\"375\"],[\"Belgium\",\"be\",\"32\"],[\"Belize\",\"bz\",\"501\"],[\"Benin\",\"bj\",\"229\"],[\"Bermuda\",\"bm\",\"1\",1,[\"441\"]],[\"Bhutan\",\"bt\",\"975\"],[\"Bolivia\",\"bo\",\"591\"],[\"Bosnia and Herzegovina\",\"ba\",\"387\"],[\"Botswana\",\"bw\",\"267\"],[\"Brazil\",\"br\",\"55\"],[\"British Indian Ocean Territory\",\"io\",\"246\"],[\"British Virgin Islands\",\"vg\",\"1\",1,[\"284\"]],[\"Brunei\",\"bn\",\"673\"],[\"Bulgaria\",\"bg\",\"359\"],[\"Burkina Faso\",\"bf\",\"226\"],[\"Burundi\",\"bi\",\"257\"],[\"Cambodia\",\"kh\",\"855\"],[\"Cameroon\",\"cm\",\"237\"],[\"Canada\",\"ca\",\"1\",1,[\"204\",\"226\",\"236\",\"249\",\"250\",\"289\",\"306\",\"343\",\"365\",\"387\",\"403\",\"416\",\"418\",\"431\",\"437\",\"438\",\"450\",\"506\",\"514\",\"519\",\"548\",\"579\",\"581\",\"587\",\"604\",\"613\",\"639\",\"647\",\"672\",\"705\",\"709\",\"742\",\"778\",\"780\",\"782\",\"807\",\"819\",\"825\",\"867\",\"873\",\"902\",\"905\"]],[\"Cape Verde\",\"cv\",\"238\"],[\"Caribbean Netherlands\",\"bq\",\"599\",1,[\"3\",\"4\",\"7\"]],[\"Cayman Islands\",\"ky\",\"1\",1,[\"345\"]],[\"Central African Republic\",\"cf\",\"236\"],[\"Chad\",\"td\",\"235\"],[\"Chile\",\"cl\",\"56\"],[\"China\",\"cn\",\"86\"],[\"Christmas Island\",\"cx\",\"61\",2,[\"89164\"]],[\"Cocos (Keeling) Islands\",\"cc\",\"61\",1,[\"89162\"]],[\"Colombia\",\"co\",\"57\"],[\"Comoros\",\"km\",\"269\"],[\"Congo (DRC)\",\"cd\",\"243\"],[\"Congo (Republic)\",\"cg\",\"242\"],[\"Cook Islands\",\"ck\",\"682\"],[\"Costa Rica\",\"cr\",\"506\"],[\"Côte d'Ivoire\",\"ci\",\"225\"],[\"Croatia\",\"hr\",\"385\"],[\"Cuba\",\"cu\",\"53\"],[\"Curaçao\",\"cw\",\"599\",0],[\"Cyprus\",\"cy\",\"357\"],[\"Czech Republic\",\"cz\",\"420\"],[\"Denmark\",\"dk\",\"45\"],[\"Djibouti\",\"dj\",\"253\"],[\"Dominica\",\"dm\",\"1\",1,[\"767\"]],[\"Dominican Republic\",\"do\",\"1\",2,[\"809\",\"829\",\"849\"]],[\"Ecuador\",\"ec\",\"593\"],[\"Egypt\",\"eg\",\"20\"],[\"El Salvador\",\"sv\",\"503\"],[\"Equatorial Guinea\",\"gq\",\"240\"],[\"Eritrea\",\"er\",\"291\"],[\"Estonia\",\"ee\",\"372\"],[\"Ethiopia\",\"et\",\"251\"],[\"Falkland Islands\",\"fk\",\"500\"],[\"Faroe Islands\",\"fo\",\"298\"],[\"Fiji\",\"fj\",\"679\"],[\"Finland\",\"fi\",\"358\",0],[\"France\",\"fr\",\"33\"],[\"French Guiana\",\"gf\",\"594\"],[\"French Polynesia\",\"pf\",\"689\"],[\"Gabon\",\"ga\",\"241\"],[\"Gambia\",\"gm\",\"220\"],[\"Georgia\",\"ge\",\"995\"],[\"Germany\",\"de\",\"49\"],[\"Ghana\",\"gh\",\"233\"],[\"Gibraltar\",\"gi\",\"350\"],[\"Greece\",\"gr\",\"30\"],[\"Greenland\",\"gl\",\"299\"],[\"Grenada\",\"gd\",\"1\",1,[\"473\"]],[\"Guadeloupe\",\"gp\",\"590\",0],[\"Guam\",\"gu\",\"1\",1,[\"671\"]],[\"Guatemala\",\"gt\",\"502\"],[\"Guernsey\",\"gg\",\"44\",1,[\"1481\",\"7781\",\"7839\",\"7911\"]],[\"Guinea\",\"gn\",\"224\"],[\"Guinea-Bissau\",\"gw\",\"245\"],[\"Guyana\",\"gy\",\"592\"],[\"Haiti\",\"ht\",\"509\"],[\"Honduras\",\"hn\",\"504\"],[\"Hong Kong\",\"hk\",\"852\"],[\"Hungary\",\"hu\",\"36\"],[\"Iceland\",\"is\",\"354\"],[\"India\",\"in\",\"91\"],[\"Indonesia\",\"id\",\"62\"],[\"Iran\",\"ir\",\"98\"],[\"Iraq\",\"iq\",\"964\"],[\"Ireland\",\"ie\",\"353\"],[\"Isle of Man\",\"im\",\"44\",2,[\"1624\",\"74576\",\"7524\",\"7924\",\"7624\"]],[\"Italy\",\"it\",\"39\",0],[\"Jamaica\",\"jm\",\"1\",1,[\"876\",\"658\"]],[\"Japan\",\"jp\",\"81\"],[\"Jersey\",\"je\",\"44\",3,[\"1534\",\"7509\",\"7700\",\"7797\",\"7829\",\"7937\"]],[\"Jordan\",\"jo\",\"962\"],[\"Kazakhstan\",\"kz\",\"7\",1,[\"33\",\"7\"]],[\"Kenya\",\"ke\",\"254\"],[\"Kiribati\",\"ki\",\"686\"],[\"Kosovo\",\"xk\",\"383\"],[\"Kuwait\",\"kw\",\"965\"],[\"Kyrgyzstan\",\"kg\",\"996\"],[\"Laos\",\"la\",\"856\"],[\"Latvia\",\"lv\",\"371\"],[\"Lebanon\",\"lb\",\"961\"],[\"Lesotho\",\"ls\",\"266\"],[\"Liberia\",\"lr\",\"231\"],[\"Libya\",\"ly\",\"218\"],[\"Liechtenstein\",\"li\",\"423\"],[\"Lithuania\",\"lt\",\"370\"],[\"Luxembourg\",\"lu\",\"352\"],[\"Macau\",\"mo\",\"853\"],[\"Macedonia\",\"mk\",\"389\"],[\"Madagascar\",\"mg\",\"261\"],[\"Malawi\",\"mw\",\"265\"],[\"Malaysia\",\"my\",\"60\"],[\"Maldives\",\"mv\",\"960\"],[\"Mali\",\"ml\",\"223\"],[\"Malta\",\"mt\",\"356\"],[\"Marshall Islands\",\"mh\",\"692\"],[\"Martinique\",\"mq\",\"596\"],[\"Mauritania\",\"mr\",\"222\"],[\"Mauritius\",\"mu\",\"230\"],[\"Mayotte\",\"yt\",\"262\",1,[\"269\",\"639\"]],[\"Mexico\",\"mx\",\"52\"],[\"Micronesia\",\"fm\",\"691\"],[\"Moldova\",\"md\",\"373\"],[\"Monaco\",\"mc\",\"377\"],[\"Mongolia\",\"mn\",\"976\"],[\"Montenegro\",\"me\",\"382\"],[\"Montserrat\",\"ms\",\"1\",1,[\"664\"]],[\"Morocco\",\"ma\",\"212\",0],[\"Mozambique\",\"mz\",\"258\"],[\"Myanmar\",\"mm\",\"95\"],[\"Namibia\",\"na\",\"264\"],[\"Nauru\",\"nr\",\"674\"],[\"Nepal\",\"np\",\"977\"],[\"Netherlands\",\"nl\",\"31\"],[\"New Caledonia\",\"nc\",\"687\"],[\"New Zealand\",\"nz\",\"64\"],[\"Nicaragua\",\"ni\",\"505\"],[\"Niger\",\"ne\",\"227\"],[\"Nigeria\",\"ng\",\"234\"],[\"Niue\",\"nu\",\"683\"],[\"Norfolk Island\",\"nf\",\"672\"],[\"North Korea\",\"kp\",\"850\"],[\"Northern Mariana Islands\",\"mp\",\"1\",1,[\"670\"]],[\"Norway\",\"no\",\"47\",0],[\"Oman\",\"om\",\"968\"],[\"Pakistan\",\"pk\",\"92\"],[\"Palau\",\"pw\",\"680\"],[\"Palestine\",\"ps\",\"970\"],[\"Panama\",\"pa\",\"507\"],[\"Papua New Guinea\",\"pg\",\"675\"],[\"Paraguay\",\"py\",\"595\"],[\"Peru\",\"pe\",\"51\"],[\"Philippines\",\"ph\",\"63\"],[\"Poland\",\"pl\",\"48\"],[\"Portugal\",\"pt\",\"351\"],[\"Puerto Rico\",\"pr\",\"1\",3,[\"787\",\"939\"]],[\"Qatar\",\"qa\",\"974\"],[\"Réunion\",\"re\",\"262\",0],[\"Romania\",\"ro\",\"40\"],[\"Russia\",\"ru\",\"7\",0],[\"Rwanda\",\"rw\",\"250\"],[\"Saint Barthélemy\",\"bl\",\"590\",1],[\"Saint Helena\",\"sh\",\"290\"],[\"Saint Kitts and Nevis\",\"kn\",\"1\",1,[\"869\"]],[\"Saint Lucia\",\"lc\",\"1\",1,[\"758\"]],[\"Saint Martin\",\"mf\",\"590\",2],[\"Saint Pierre and Miquelon\",\"pm\",\"508\"],[\"Saint Vincent and the Grenadines\",\"vc\",\"1\",1,[\"784\"]],[\"Samoa\",\"ws\",\"685\"],[\"San Marino\",\"sm\",\"378\"],[\"São Tomé and Príncipe\",\"st\",\"239\"],[\"Saudi Arabia\",\"sa\",\"966\"],[\"Senegal\",\"sn\",\"221\"],[\"Serbia\",\"rs\",\"381\"],[\"Seychelles\",\"sc\",\"248\"],[\"Sierra Leone\",\"sl\",\"232\"],[\"Singapore\",\"sg\",\"65\"],[\"Sint Maarten\",\"sx\",\"1\",1,[\"721\"]],[\"Slovakia\",\"sk\",\"421\"],[\"Slovenia\",\"si\",\"386\"],[\"Solomon Islands\",\"sb\",\"677\"],[\"Somalia\",\"so\",\"252\"],[\"South Africa\",\"za\",\"27\"],[\"South Korea\",\"kr\",\"82\"],[\"South Sudan\",\"ss\",\"211\"],[\"Spain\",\"es\",\"34\"],[\"Sri Lanka\",\"lk\",\"94\"],[\"Sudan\",\"sd\",\"249\"],[\"Suriname\",\"sr\",\"597\"],[\"Svalbard and Jan Mayen\",\"sj\",\"47\",1,[\"79\"]],[\"Swaziland\",\"sz\",\"268\"],[\"Sweden\",\"se\",\"46\"],[\"Switzerland\",\"ch\",\"41\"],[\"Syria\",\"sy\",\"963\"],[\"Taiwan\",\"tw\",\"886\"],[\"Tajikistan\",\"tj\",\"992\"],[\"Tanzania\",\"tz\",\"255\"],[\"Thailand\",\"th\",\"66\"],[\"Timor-Leste\",\"tl\",\"670\"],[\"Togo\",\"tg\",\"228\"],[\"Tokelau\",\"tk\",\"690\"],[\"Tonga\",\"to\",\"676\"],[\"Trinidad and Tobago\",\"tt\",\"1\",1,[\"868\"]],[\"Tunisia\",\"tn\",\"216\"],[\"Turkey\",\"tr\",\"90\"],[\"Turkmenistan\",\"tm\",\"993\"],[\"Turks and Caicos Islands\",\"tc\",\"1\",1,[\"649\"]],[\"Tuvalu\",\"tv\",\"688\"],[\"U.S. Virgin Islands\",\"vi\",\"1\",1,[\"340\"]],[\"Uganda\",\"ug\",\"256\"],[\"Ukraine\",\"ua\",\"380\"],[\"United Arab Emirates\",\"ae\",\"971\"],[\"United Kingdom\",\"gb\",\"44\",0],[\"United States\",\"us\",\"1\",0],[\"Uruguay\",\"uy\",\"598\"],[\"Uzbekistan\",\"uz\",\"998\"],[\"Vanuatu\",\"vu\",\"678\"],[\"Vatican City\",\"va\",\"39\",1,[\"06698\"]],[\"Venezuela\",\"ve\",\"58\"],[\"Vietnam\",\"vn\",\"84\"],[\"Wallis and Futuna\",\"wf\",\"681\"],[\"Western Sahara\",\"eh\",\"212\",1,[\"5288\",\"5289\"]],[\"Yemen\",\"ye\",\"967\"],[\"Zambia\",\"zm\",\"260\"],[\"Zimbabwe\",\"zw\",\"263\"],[\"Åland Islands\",\"ax\",\"358\",1,[\"18\"]]]"));}),
"[project]/src/components/BookingCalendar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusPopup.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/countries.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intl-tel-input/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-google-recaptcha/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$calendar$2f$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/calendar/calendar.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Universal time slots (8 AM to 6 PM - same for all regions)
const initialTimes = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM"
];
const extraTimes = [
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM"
];
// Simple timezone conversion - server handles the complex logic
const getISTPreview = (localTime, userTimezone)=>{
    // If user is in India, no conversion needed
    if (userTimezone === 'Asia/Kolkata') {
        return localTime;
    }
    // For other timezones, show a placeholder that will be calculated on server
    return "".concat(localTime, " (Local time - will be converted to IST");
};
const get24HourFormat = (time12Hour)=>{
    const [time, period] = time12Hour.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let adjustedHours = hours;
    if (period === 'PM' && hours !== 12) {
        adjustedHours += 12;
    } else if (period === 'AM' && hours === 12) {
        adjustedHours = 0;
    }
    return "".concat(adjustedHours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));
};
// Custom International Phone Input Component - Exact copy from ContactForm
function CustomIntlTelInput(param) {
    let { value, onChange, placeholder, defaultCountry, reset, isSubmitting } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCountry);
    const [phoneValue, setPhoneValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find({
                "CustomIntlTelInput.useEffect.country": (c)=>c[1] === (defaultCountry === null || defaultCountry === void 0 ? void 0 : defaultCountry.toLowerCase())
            }["CustomIntlTelInput.useEffect.country"]);
            if (country) {
                setSelectedCountry(country[1]);
                setPhoneValue("+".concat(country[2], " "));
            }
        }
    }["CustomIntlTelInput.useEffect"], [
        defaultCountry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            if (reset) {
                const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find({
                    "CustomIntlTelInput.useEffect.country": (c)=>c[1] === selectedCountry
                }["CustomIntlTelInput.useEffect.country"]);
                if (country) {
                    setPhoneValue("+".concat(country[2], " "));
                }
            }
        }
    }["CustomIntlTelInput.useEffect"], [
        reset,
        selectedCountry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            if (value === "") {
                const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find({
                    "CustomIntlTelInput.useEffect.country": (c)=>c[1] === selectedCountry
                }["CustomIntlTelInput.useEffect.country"]);
                if (country) {
                    setPhoneValue("+".concat(country[2], " "));
                }
            }
        }
    }["CustomIntlTelInput.useEffect"], [
        value,
        selectedCountry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                    setSearchTerm("");
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "CustomIntlTelInput.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["CustomIntlTelInput.useEffect"];
        }
    }["CustomIntlTelInput.useEffect"], []);
    const filteredCountries = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].filter((country)=>country[0].toLowerCase().includes(searchTerm.toLowerCase()) || country[2].includes(searchTerm));
    const handleCountrySelect = (country)=>{
        setSelectedCountry(country[1]);
        const dialCode = "+".concat(country[2]);
        const currentNumber = phoneValue.replace(/^\+\d+\s*/, "");
        const newValue = "".concat(dialCode, " ").concat(currentNumber);
        setPhoneValue(newValue);
        onChange(true, newValue, {
            iso2: country[1]
        }, newValue);
        setIsOpen(false);
        setSearchTerm("");
        setTimeout(()=>{
            var _inputRef_current;
            return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        }, 0);
    };
    const handleInputChange = (isValid, value, countryData, number)=>{
        const dialCode = countryData ? "+".concat(countryData.dialCode) : "";
        if (value && !value.startsWith(dialCode)) {
            const newValue = "".concat(dialCode, " ").concat(value.replace(/^\+\d+\s*/, ""));
            setPhoneValue(newValue);
            onChange(isValid, newValue, countryData, newValue);
        } else {
            setPhoneValue(value || dialCode);
            onChange(isValid, value, countryData, number);
        }
    };
    const toggleDropdown = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };
    const handlePhoneInputChange = (e)=>{
        let newValue = e.target.value;
        const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find((c)=>c[1] === selectedCountry);
        const dialCode = country ? "+".concat(country[2]) : "";
        // Remove any non-digit characters except the + sign at the beginning and spaces after dial code
        newValue = newValue.replace(/[^\d\s+]/g, '');
        if (!newValue.startsWith(dialCode)) {
            const cleanNumber = newValue.replace(/^\+\d+\s*/, "");
            // Only allow digits in the phone number part
            const numbersOnly = cleanNumber.replace(/\D/g, '');
            const finalValue = numbersOnly ? "".concat(dialCode, " ").concat(numbersOnly) : dialCode;
            setPhoneValue(finalValue);
            onChange(true, finalValue, {
                iso2: selectedCountry,
                dialCode: country[2]
            }, finalValue);
        } else {
            // Extract just the number part after dial code and ensure it's digits only
            const numberPart = newValue.replace(dialCode, '').trim().replace(/\D/g, '');
            const finalValue = numberPart ? "".concat(dialCode, " ").concat(numberPart) : dialCode;
            setPhoneValue(finalValue);
            onChange(true, finalValue, {
                iso2: selectedCountry,
                dialCode: country[2]
            }, finalValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "intl-tel-input-wrapper",
        ref: dropdownRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "intl-tel-input-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "custom-flag-dropdown",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "selected-flag",
                            onClick: toggleDropdown,
                            "aria-expanded": isOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fi fi-".concat(selectedCountry)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "arrow-icon",
                                    children: "▾"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingCalendar.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "country-list-dropdown",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-box",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        placeholder: "Search country...",
                                        className: "search-input",
                                        autoFocus: true,
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "country-list",
                                    children: [
                                        filteredCountries.map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "country-item",
                                                onClick: ()=>handleCountrySelect(country),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fi fi-".concat(country[1])
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "country-name",
                                                        children: country[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dial-code",
                                                        children: [
                                                            "+",
                                                            country[2]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, "".concat(country[1], "-").concat(index), true, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)),
                                        filteredCountries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "no-results",
                                            children: "No countries found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingCalendar.jsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingCalendar.jsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ref: inputRef,
                        preferredCountries: [
                            selectedCountry
                        ],
                        defaultCountry: selectedCountry,
                        excludeCountries: [
                            'il'
                        ],
                        value: phoneValue,
                        onPhoneNumberChange: handleInputChange,
                        fieldName: "phoneNumber",
                        separateDialCode: false,
                        formatOnDisplay: true,
                        nationalMode: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingCalendar.jsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingCalendar.jsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    value: phoneValue,
                    onChange: handlePhoneInputChange,
                    placeholder: placeholder,
                    className: "phone-input-field",
                    disabled: isSubmitting
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingCalendar.jsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingCalendar.jsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BookingCalendar.jsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(CustomIntlTelInput, "9JJlZnZk2xMM7+1ZiDtg2npRSws=");
_c = CustomIntlTelInput;
function BookingCalendar(param) {
    let { onClose, showPopup, onBookingComplete, contactData, resetTrigger } = param;
    _s1();
    // Set default date to tomorrow
    const getTomorrowDate = ()=>{
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    };
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getTomorrowDate());
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTimes[0]);
    const [selectedTimeIST, setSelectedTimeIST] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentTimeIndex, setCurrentTimeIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [userTimezone, setUserTimezone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Asia/Kolkata");
    const [userCountry, setUserCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("IN");
    const [timezoneLoading, setTimezoneLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: (contactData === null || contactData === void 0 ? void 0 : contactData.firstName) || "",
        lastName: (contactData === null || contactData === void 0 ? void 0 : contactData.lastName) || "",
        email: (contactData === null || contactData === void 0 ? void 0 : contactData.businessEmail) || "",
        phone: (contactData === null || contactData === void 0 ? void 0 : contactData.phoneNumber) || "",
        message: "",
        consent: false
    });
    // Detect user's timezone and country based on IP
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingCalendar.useEffect": ()=>{
            const detectLocation = {
                "BookingCalendar.useEffect.detectLocation": async ()=>{
                    try {
                        const controller = new AbortController();
                        const timeoutId = setTimeout({
                            "BookingCalendar.useEffect.detectLocation.timeoutId": ()=>controller.abort()
                        }["BookingCalendar.useEffect.detectLocation.timeoutId"], 3000);
                        const response = await Promise.race([
                            fetch("https://ipapi.co/json/", {
                                signal: controller.signal
                            }),
                            new Promise({
                                "BookingCalendar.useEffect.detectLocation": (_, reject)=>setTimeout({
                                        "BookingCalendar.useEffect.detectLocation": ()=>reject("timeout")
                                    }["BookingCalendar.useEffect.detectLocation"], 3000)
                            }["BookingCalendar.useEffect.detectLocation"])
                        ]);
                        clearTimeout(timeoutId);
                        const data = await response.json();
                        if (data.timezone) {
                            setUserTimezone(data.timezone);
                        } else {
                            // Fallback to browser timezone
                            setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
                        }
                        if (data.country_code) {
                            setUserCountry(data.country_code);
                        }
                    } catch (error) {
                        setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
                    } finally{
                        setTimezoneLoading(false);
                    }
                }
            }["BookingCalendar.useEffect.detectLocation"];
            detectLocation();
        }
    }["BookingCalendar.useEffect"], []);
    // Reset form when resetTrigger changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingCalendar.useEffect": ()=>{
            if (resetTrigger) {
                resetForm();
                setCurrentStep(1);
            }
        }
    }["BookingCalendar.useEffect"], [
        resetTrigger
    ]);
    // Update IST preview when timezone is detected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingCalendar.useEffect": ()=>{
            if (!timezoneLoading && userTimezone && selectedTime) {
                const istPreview = getISTPreview(selectedTime, userTimezone);
                setSelectedTimeIST(istPreview);
            }
        }
    }["BookingCalendar.useEffect"], [
        userTimezone,
        timezoneLoading,
        selectedTime,
        selectedDate
    ]);
    // Date utility functions
    const formatDate = (date)=>{
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return "".concat(months[date.getMonth()], " ").concat(date.getDate(), ", ").concat(date.getFullYear());
    };
    const formatDayOfWeek = (date)=>{
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return "".concat(days[date.getDay()], ", ").concat(months[date.getMonth()], " ").concat(date.getDate());
    };
    const handleDateChange = (e)=>{
        setSelectedDate(e.value);
        setCurrentTimeIndex(0);
        const today = new Date();
        const newSelectedDate = new Date(e.value);
        newSelectedDate.setHours(0, 0, 0, 0);
        const todayOnly = new Date(today);
        todayOnly.setHours(0, 0, 0, 0);
        if (newSelectedDate.getTime() === todayOnly.getTime()) {
            const currentHour = today.getHours();
            const availableToday = allTimes.filter((time)=>{
                const timeHour = get24HourFormat(time).split(':')[0];
                return parseInt(timeHour) > currentHour;
            });
            setSelectedTime(availableToday[0] || initialTimes[0]);
        } else {
            setSelectedTime(initialTimes[0]);
        }
    };
    // Function to disable past dates
    const disablePastDates = (date)=>{
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date <= today;
    };
    const handleTimeSelect = (time)=>{
        setSelectedTime(time);
    // IST time will be calculated in the useEffect
    };
    const handleInputChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const handlePhoneChange = (isValid, value, selectedCountryData, fullNumber)=>{
        setFormData((prev)=>({
                ...prev,
                phone: fullNumber || value || ""
            }));
    };
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetPhone, setResetPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verified, setVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFormValid = ()=>{
        return formData.firstName.trim() && formData.lastName.trim() && formData.email.trim() && formData.phone.trim() && formData.consent && verified;
    };
    const resetForm = ()=>{
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            consent: false
        });
        setVerified(false);
        setResetPhone(true);
        setTimeout(()=>setResetPhone(false), 100);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!isFormValid()) {
            return;
        }
        setIsSubmitting(true);
        const bookingData = {
            ...formData,
            selectedDate: selectedDate.toISOString().split('T')[0],
            selectedTime: selectedTime,
            userTimezone: userTimezone,
            userCountry: userCountry
        };
        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });
            let data;
            try {
                data = await response.json();
            } catch (jsonError) {
                throw new Error('Invalid response format from server');
            }
            if (response.ok) {
                // If onBookingComplete is provided (from ContactModal), use it
                if (onBookingComplete) {
                    onBookingComplete({
                        selectedDate: selectedDate.toISOString().split('T')[0],
                        selectedTime: selectedTime,
                        userTimezone: userTimezone,
                        userCountry: userCountry,
                        message: formData.message
                    });
                } else {
                    // Original behavior for standalone usage
                    // Show success popup
                    if (showPopup) {
                        showPopup({
                            status: 'success',
                            title: 'Booking Confirmed!',
                            message: 'Thank you for booking with us! We will contact you soon with further details.'
                        });
                    }
                    // Close the booking modal
                    if (onClose) {
                        onClose();
                    }
                    // Reset form and go back to step 1
                    setCurrentStep(1);
                    // Reset form data after a delay to avoid validation issues
                    setTimeout(()=>{
                        resetForm();
                    }, 100);
                }
            } else {
                // Show error popup
                if (showPopup) {
                    showPopup({
                        status: 'error',
                        title: 'Booking Failed',
                        message: data.error || "Server error (".concat(response.status, "): ").concat(data.message || 'Failed to submit booking')
                    });
                }
            }
        } catch (error) {
            // Show network error popup
            if (showPopup) {
                showPopup({
                    status: 'error',
                    title: 'Network Error',
                    message: "Network error: ".concat(error.message || 'Please check your connection and try again.')
                });
            }
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleNextStep = ()=>{
        setCurrentStep(2);
    };
    const handlePrevStep = ()=>{
        setCurrentStep(1);
    };
    const allTimes = [
        ...initialTimes,
        ...extraTimes
    ];
    const getFilteredTimes = ()=>{
        const today = new Date();
        const selectedDateOnly = new Date(selectedDate);
        selectedDateOnly.setHours(0, 0, 0, 0);
        const todayOnly = new Date(today);
        todayOnly.setHours(0, 0, 0, 0);
        if (selectedDateOnly.getTime() === todayOnly.getTime()) {
            const currentHour = today.getHours();
            return allTimes.filter((time)=>{
                const timeHour = get24HourFormat(time).split(':')[0];
                return parseInt(timeHour) > currentHour;
            });
        }
        return allTimes;
    };
    const getVisibleTimes = ()=>{
        const filteredTimes = getFilteredTimes();
        return filteredTimes.slice(currentTimeIndex, currentTimeIndex + 3);
    };
    const scrollLeft = ()=>{
        if (currentTimeIndex > 0) {
            setCurrentTimeIndex((prev)=>prev - 1);
        }
    };
    const scrollRight = ()=>{
        const filteredTimes = getFilteredTimes();
        if (currentTimeIndex < filteredTimes.length - 3) {
            setCurrentTimeIndex((prev)=>prev + 1);
        }
    };
    const visibleTimes = getVisibleTimes();
    const getTimezoneDisplayName = (timezone)=>{
        try {
            var _formatToParts_find;
            return ((_formatToParts_find = new Intl.DateTimeFormat('en', {
                timeZone: timezone,
                timeZoneName: 'long'
            }).formatToParts(new Date()).find((part)=>part.type === 'timeZoneName')) === null || _formatToParts_find === void 0 ? void 0 : _formatToParts_find.value) || timezone;
        } catch (error) {
            return timezone;
        }
    };
    // Client Details Form (Step 2)
    const renderClientDetailsForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 overflow-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "!text-lg font-semibold",
                                children: "Client Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                lineNumber: 543,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingCalendar.jsx",
                            lineNumber: 542,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "firstName",
                                                name: "firstName",
                                                placeholder: "First Name",
                                                value: formData.firstName,
                                                onChange: handleInputChange,
                                                className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 549,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "lastName",
                                                name: "lastName",
                                                placeholder: "Last Name",
                                                value: formData.lastName,
                                                onChange: handleInputChange,
                                                className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 562,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 561,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 548,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                placeholder: "Email",
                                                value: formData.email,
                                                onChange: handleInputChange,
                                                className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 577,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 576,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomIntlTelInput, {
                                                value: formData.phone,
                                                onChange: handlePhoneChange,
                                                placeholder: "Phone Number",
                                                defaultCountry: (userCountry === null || userCountry === void 0 ? void 0 : userCountry.toLowerCase()) || "in",
                                                reset: resetPhone,
                                                isSubmitting: isSubmitting
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 588,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 575,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "message",
                                        name: "message",
                                        placeholder: "Message (optional)",
                                        value: formData.message,
                                        onChange: handleInputChange,
                                        rows: "3",
                                        className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 600,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex mt-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 612,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingCalendar.jsx",
                            lineNumber: 547,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingCalendar.jsx",
                    lineNumber: 541,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 flex justify-between border-t border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    name: "consent",
                                    checked: formData.consent,
                                    onChange: handleInputChange,
                                    className: "accent-primary h-5 w-5 rounded-xl border border-gray-300 flex-shrink-0",
                                    required: true,
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 624,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Your consent matters to us*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 634,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 635,
                                            columnNumber: 13
                                        }, this),
                                        "I agree to Bissbay's",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/terms-of-use",
                                            className: "text-primary",
                                            children: "Terms of Use"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 636,
                                            columnNumber: 13
                                        }, this),
                                        " ",
                                        "and",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/policies/privacy-policy",
                                            target: "_blank",
                                            className: "text-primary",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 638,
                                            columnNumber: 13
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 633,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingCalendar.jsx",
                            lineNumber: 623,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "outlinegray",
                                    label: "Go back",
                                    customClass: "hover:!bg-[#1F2937] text-[#1F2937] hover:text-white hover:no-underline hover:border-2 hover:border-[#1F2937]",
                                    onClick: handlePrevStep,
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 644,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "submit",
                                    label: isSubmitting ? "Submitting..." : "Submit",
                                    disabled: !isFormValid() || isSubmitting,
                                    customClass: !isFormValid() || isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                    lineNumber: 651,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingCalendar.jsx",
                            lineNumber: 643,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingCalendar.jsx",
                    lineNumber: 622,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingCalendar.jsx",
            lineNumber: 540,
            columnNumber: 5
        }, this);
    // Calendar View (Step 1)
    const renderCalendarView = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-r border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "!text-lg font-semibold mb-4 text-left",
                                        children: "Pick your spot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 669,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-f0d41214bef201d5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$calendar$2f$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                value: selectedDate,
                                                onChange: handleDateChange,
                                                inline: true,
                                                minDate: new Date(),
                                                dateFormat: "yy-mm-dd",
                                                view: "date",
                                                selectOtherMonths: true,
                                                showOtherMonths: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 672,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                id: "f0d41214bef201d5",
                                                children: ".p-datepicker.p-component.p-datepicker-inline{width:400px!important;max-width:400px!important;overflow:hidden!important}.p-datepicker .p-datepicker-calendar-container{overflow:hidden!important}.p-datepicker .p-datepicker-calendar{width:100%!important;overflow:hidden!important}.p-datepicker .p-datepicker-calendar td{width:40px!important;height:40px!important;padding:4px!important}.p-datepicker .p-datepicker-calendar td span{width:32px!important;height:32px!important;margin:0!important;padding:0!important;line-height:32px!important}.scrollbar-hide.jsx-f0d41214bef201d5{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide.jsx-f0d41214bef201d5::-webkit-scrollbar{display:none}"
                                            }, void 0, false, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 671,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-4  flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-black mb-4 font-medium text-left",
                                        children: timezoneLoading ? "Detecting timezone..." : "Time zone: ".concat(getTimezoneDisplayName(userTimezone))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "!text-sm font-medium mb-3 text-gray-700",
                                        children: [
                                            "Availability for ",
                                            formatDayOfWeek(selectedDate)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: timezoneLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500",
                                            children: "Loading time slots..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 744,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: scrollLeft,
                                                    disabled: currentTimeIndex === 0,
                                                    className: "flex-shrink-0 bg-white shadow-md rounded-full p-2 transition-colors border border-gray-200 ".concat(currentTimeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronLeft"], {
                                                        size: 20,
                                                        className: "text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                                        lineNumber: 757,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex gap-2 justify-center",
                                                    children: visibleTimes.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleTimeSelect(time),
                                                            className: "flex-1 border px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ".concat(time === selectedTime ? "text-white" : "border-gray-300 text-gray-700"),
                                                            style: time === selectedTime ? {
                                                                backgroundColor: '#ff4200',
                                                                borderColor: '#ff4200'
                                                            } : {
                                                                borderColor: '#d1d5db',
                                                                color: '#374151'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                if (time !== selectedTime) {
                                                                    e.target.style.borderColor = '#ff4200';
                                                                    e.target.style.color = '#ff4200';
                                                                }
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                if (time !== selectedTime) {
                                                                    e.target.style.borderColor = '#d1d5db';
                                                                    e.target.style.color = '#374151';
                                                                }
                                                            },
                                                            children: time
                                                        }, time, false, {
                                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                                            lineNumber: 763,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                                    lineNumber: 761,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: scrollRight,
                                                    disabled: currentTimeIndex >= getFilteredTimes().length - 3,
                                                    className: "flex-shrink-0 bg-white shadow-md rounded-full p-2 transition-colors border border-gray-200 ".concat(currentTimeIndex >= getFilteredTimes().length - 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                                        size: 20,
                                                        className: "text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                                        lineNumber: 802,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BookingCalendar.jsx",
                                                    lineNumber: 793,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BookingCalendar.jsx",
                                            lineNumber: 746,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 742,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "!text-base font-semibold mb-3",
                                        children: "Service Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 810,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 p-3 rounded-lg text-center",
                                        style: {
                                            backgroundColor: 'rgba(255, 66, 0, 0.05)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "!text-base font-medium text-gray-800",
                                                children: "Free Consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 813,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-sm text-gray-600 mt-1",
                                                children: [
                                                    formatDate(selectedDate),
                                                    " at ",
                                                    selectedTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 814,
                                                columnNumber: 15
                                            }, this),
                                            selectedTime && selectedTimeIST && userCountry !== 'IN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-xs text-gray-500",
                                                children: [
                                                    "(",
                                                    selectedTimeIST,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 818,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-sm text-gray-600",
                                                children: "Virtual Meeting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 822,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-sm text-gray-600",
                                                children: "45 mins"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                                lineNumber: 823,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingCalendar.jsx",
                                        lineNumber: 812,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingCalendar.jsx",
                                lineNumber: 726,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingCalendar.jsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingCalendar.jsx",
                    lineNumber: 665,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-t border-gray-200 flex items-center justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Next",
                        onClick: handleNextStep
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingCalendar.jsx",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingCalendar.jsx",
                    lineNumber: 830,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingCalendar.jsx",
            lineNumber: 664,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full transition-opacity duration-300 ".concat(currentStep === 1 ? 'opacity-100' : 'opacity-0 hidden'),
                children: renderCalendarView()
            }, void 0, false, {
                fileName: "[project]/src/components/BookingCalendar.jsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full transition-opacity duration-300 ".concat(currentStep === 2 ? 'opacity-100' : 'opacity-0 hidden'),
                children: renderClientDetailsForm()
            }, void 0, false, {
                fileName: "[project]/src/components/BookingCalendar.jsx",
                lineNumber: 843,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookingCalendar.jsx",
        lineNumber: 839,
        columnNumber: 5
    }, this);
}
_s1(BookingCalendar, "4XvUXxgd9vooqi2IxjMt38Uz7dc=");
_c1 = BookingCalendar;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomIntlTelInput");
__turbopack_context__.k.register(_c1, "BookingCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BookingModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingButton",
    ()=>BookingButton,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingCalendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingCalendar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusPopup.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
const BookingModal = (param)=>{
    let { isOpen, onClose, buttonLabel = "Book Now" } = param;
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [popup, setPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resetCalendar, setResetCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle ESC key press to close modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingModal.useEffect": ()=>{
            const handleEsc = {
                "BookingModal.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape") handleClose();
                }
            }["BookingModal.useEffect.handleEsc"];
            if (isOpen) {
                document.addEventListener("keydown", handleEsc);
                // Prevent scrolling when modal is open
                document.body.style.overflow = "hidden";
                setMounted(true);
            }
            return ({
                "BookingModal.useEffect": ()=>{
                    document.removeEventListener("keydown", handleEsc);
                    document.body.style.overflow = "auto";
                }
            })["BookingModal.useEffect"];
        }
    }["BookingModal.useEffect"], [
        isOpen
    ]);
    // Handle close with form reset
    const handleClose = ()=>{
        setResetCalendar(true);
        setTimeout(()=>{
            setResetCalendar(false);
            onClose();
        }, 50);
    };
    // Close modal when clicking outside
    const handleBackdropClick = (e)=>{
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };
    const handlePopupClose = ()=>{
        setPopup(null);
    };
    const showPopup = (popupData)=>{
        setPopup(popupData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-[#00000060] backdrop-blur-sm transition-opacity",
                onClick: handleBackdropClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-4xl h-auto overflow-hidden bg-white rounded-xl shadow-xl transform transition-all duration-300 ".concat(mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
                            style: {
                                position: 'absolute',
                                top: '16px',
                                right: '16px'
                            },
                            "aria-label": "Close modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {
                                className: "text-gray-700",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingModal.jsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingModal.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingCalendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClose: handleClose,
                                showPopup: showPopup,
                                resetTrigger: resetCalendar
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingModal.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingModal.jsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingModal.jsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/BookingModal.jsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            popup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                status: popup.status,
                title: popup.title,
                message: popup.message,
                onClose: handlePopupClose
            }, void 0, false, {
                fileName: "[project]/src/components/BookingModal.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(BookingModal, "jcNUUqwgYRzcJk+Pa/3f7eJpDy0=");
_c = BookingModal;
const BookingButton = (param)=>{
    let { label = "Book Now", variant = "primary", customClass = "" } = param;
    _s1();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: label,
                variant: variant,
                customClass: customClass,
                onClick: ()=>setIsModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/components/BookingModal.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingModal, {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/BookingModal.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s1(BookingButton, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");
_c1 = BookingButton;
const __TURBOPACK__default__export__ = BookingModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "BookingModal");
__turbopack_context__.k.register(_c1, "BookingButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/request-proposal/Stepper.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step",
    ()=>Step,
    "default",
    ()=>Stepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
function Stepper(param) {
    let { children, initialStep = 1, onStepChange = ()=>{}, onFinalStepCompleted = ()=>{}, stepCircleContainerClassName = "", stepContainerClassName = "", contentClassName = "", footerClassName = "", backButtonProps = {}, nextButtonProps = {}, backButtonText = "Back", nextButtonText = "Continue", disableStepIndicators = false, renderStepIndicator, hideSubmitButton = false, ...rest } = param;
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStep);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const stepsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const totalSteps = stepsArray.length;
    const isCompleted = currentStep > totalSteps;
    const isLastStep = currentStep === totalSteps;
    const updateStep = (newStep)=>{
        setCurrentStep(newStep);
        if (newStep > totalSteps) onFinalStepCompleted();
        else onStepChange(newStep);
    };
    const handleBack = ()=>{
        if (currentStep > 1) {
            setDirection(1);
            setCurrentStep(currentStep - 1);
        }
    };
    const handleNext = ()=>{
        if (!isLastStep) {
            const proceed = onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(currentStep + 1); // Updated to check next step
            if (proceed === false) return;
            setDirection(-1);
            setCurrentStep(currentStep + 1);
        }
    };
    const handleComplete = ()=>{
        const proceed = onFinalStepCompleted === null || onFinalStepCompleted === void 0 ? void 0 : onFinalStepCompleted(currentStep);
        if (proceed === false) return;
        setDirection(1);
        updateStep(totalSteps + 1);
    };
    // Get the current step element
    const currentStepElement = stepsArray[currentStep - 1];
    // Check if the step's children is a function (render prop pattern) and preserve Step wrapper
    let stepContent = currentStepElement;
    if (currentStepElement && typeof currentStepElement.props.children === "function") {
        stepContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(currentStepElement, {
            children: currentStepElement.props.children({
                onComplete: handleComplete
            })
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-full items-center justify-center",
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-6xl ".concat(stepCircleContainerClassName),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepContentWrapper, {
                        isCompleted: isCompleted,
                        currentStep: currentStep,
                        direction: direction,
                        className: contentClassName,
                        children: stepContent
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    !isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(footerClassName),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 flex ".concat(currentStep !== 1 ? "justify-between" : "justify-end"),
                            children: [
                                currentStep !== 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBack,
                                    className: "px-3.5 py-1.5 text-white bg-gray-600 rounded-full font-medium tracking-tight transition hover:bg-gray-700 ".concat(currentStep === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"),
                                    "aria-label": "Go to previous step",
                                    ...backButtonProps,
                                    children: backButtonText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                !(isLastStep && hideSubmitButton) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: isLastStep ? handleComplete : handleNext,
                                    className: "px-3.5 py-1.5 text-white bg-primary rounded-full font-medium tracking-tight transition hover:bg-primary-dark",
                                    "aria-label": isLastStep ? "Submit form" : "Go to next step",
                                    ...nextButtonProps,
                                    children: isLastStep ? "Submit" : nextButtonText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-44 font-bold text-3xl text-primary",
                children: isCompleted ? '"Submission Successful. We will Get Back to You Shortly"' : ""
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Stepper, "u1gtuB8foRkyiUtDuJBTA7S/CTA=");
_c = Stepper;
function StepContentWrapper(param) {
    let { isCompleted, currentStep, direction, children, className } = param;
    _s1();
    const [parentHeight, setParentHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            position: "relative"
        },
        animate: {
            height: isCompleted ? 0 : parentHeight
        },
        transition: {
            type: "spring",
            duration: 0.4
        },
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            mode: "sync",
            custom: direction,
            children: !isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideTransition, {
                direction: direction,
                onHeightReady: (h)=>setParentHeight(h),
                children: children
            }, currentStep, false, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 173,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_s1(StepContentWrapper, "8nJUmvnv1Q4tl3zvDcDnUhXEVbk=");
_c1 = StepContentWrapper;
function SlideTransition(param) {
    let { children, direction, onHeightReady } = param;
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SlideTransition.useLayoutEffect": ()=>{
            if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
        }
    }["SlideTransition.useLayoutEffect"], [
        children,
        onHeightReady
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: containerRef,
        custom: direction,
        variants: stepVariants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
            duration: 0.4
        },
        style: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s2(SlideTransition, "JVErPvg7bZ6yLj50J4lCvDO7Tjk=");
_c2 = SlideTransition;
const stepVariants = {
    enter: (dir)=>({
            x: dir >= 0 ? "-100%" : "100%",
            opacity: 0
        }),
    center: {
        x: "0%",
        opacity: 1
    },
    exit: (dir)=>({
            x: dir >= 0 ? "50%" : "-50%",
            opacity: 0
        })
};
function Step(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 225,
        columnNumber: 10
    }, this);
}
_c3 = Step;
function StepIndicator(param) {
    let { step, currentStep, onClickStep, disableStepIndicators } = param;
    const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative cursor-pointer outline-none focus:outline-none",
        animate: status,
        initial: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: {
                inactive: {
                    scale: 1,
                    backgroundColor: "#222",
                    color: "#a3a3a3"
                },
                active: {
                    scale: 1,
                    backgroundColor: "#ff4200",
                    color: "#5227FF"
                },
                complete: {
                    scale: 1,
                    backgroundColor: "#ff4200",
                    color: "#3b82f6"
                }
            },
            transition: {
                duration: 0.3
            },
            className: "flex h-8 w-8 items-center justify-center rounded-full font-semibold",
            children: status === "complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                className: "h-4 w-4 text-white"
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 247,
                columnNumber: 11
            }, this) : status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 w-3 rounded-full bg-[#fff]"
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 249,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: step
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 251,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
            lineNumber: 237,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_c4 = StepIndicator;
function StepConnector(param) {
    let { isComplete } = param;
    const lineVariants = {
        incomplete: {
            width: 0,
            backgroundColor: ""
        },
        complete: {
            width: "100%",
            backgroundColor: "#ff4200"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute left-0 top-0 h-full",
            variants: lineVariants,
            initial: false,
            animate: isComplete ? "complete" : "incomplete",
            transition: {
                duration: 0.4
            }
        }, void 0, false, {
            fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
            lineNumber: 266,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_c5 = StepConnector;
function CheckIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
            initial: {
                pathLength: 0
            },
            animate: {
                pathLength: 1
            },
            transition: {
                delay: 0.1,
                type: "tween",
                ease: "easeOut",
                duration: 0.3
            },
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 13l4 4L19 7"
        }, void 0, false, {
            fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
            lineNumber: 286,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_c6 = CheckIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Stepper");
__turbopack_context__.k.register(_c1, "StepContentWrapper");
__turbopack_context__.k.register(_c2, "SlideTransition");
__turbopack_context__.k.register(_c3, "Step");
__turbopack_context__.k.register(_c4, "StepIndicator");
__turbopack_context__.k.register(_c5, "StepConnector");
__turbopack_context__.k.register(_c6, "CheckIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/request-proposal/MultiSelectField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const MultiSelectField = (param)=>{
    let { name, values = [], value = "", className, onChange, placeholder, options, required, isMulti = true, dropUp = false } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultiSelectField.useEffect": ()=>{
            const handleClickOutside = {
                "MultiSelectField.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["MultiSelectField.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "MultiSelectField.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["MultiSelectField.useEffect"];
        }
    }["MultiSelectField.useEffect"], []);
    const handleToggle = (e)=>{
        e.preventDefault();
        setIsOpen((prev)=>!prev);
    };
    const handleCheckboxChange = (option, checked)=>{
        const newValues = checked ? [
            ...values,
            option
        ] : values.filter((val)=>val !== option);
        onChange({
            target: {
                name,
                value: newValues
            }
        });
    };
    const handleSingleSelect = (option)=>{
        onChange({
            target: {
                name,
                value: option === placeholder ? "" : option
            }
        });
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: "button",
                className: "w-full border border-gray-300 font-semibold px-3 md:px-5 py-2 md:py-3 rounded-xl text-left focus:border-1 focus:border-primary focus:outline-none  ".concat(className),
                onClick: handleToggle,
                children: [
                    isMulti ? values.length > 0 ? values.join(", ") : placeholder : value || placeholder,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "float-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "10",
                            height: "10",
                            style: {
                                marginTop: "8px",
                                marginLeft: "10px",
                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease-in-out"
                            },
                            viewBox: "0 0 10 6",
                            fill: "#5C6371",
                            stroke: "#5c6371",
                            strokeWidth: "0.7",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M0.528514 0.528596C0.788864 0.268247 1.21097 0.268247 1.47132 0.528596L4.99992 4.05719L8.52851 0.528596C8.78886 0.268247 9.21097 0.268247 9.47132 0.528596C9.73167 0.788946 9.73167 1.21106 9.47132 1.47141L5.47132 5.47141C5.21097 5.73175 4.78886 5.73175 4.52851 5.47141L0.528514 1.47141C0.268165 1.21106 0.268165 0.788946 0.528514 0.528596Z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "multi-select-dropdown absolute z-[1000] bg-white border border-gray-300 rounded-xl max-h-80 overflow-auto mt-1 transition-all duration-200 ease-in-out ".concat(dropUp ? "bottom-full mb-1" : "top-full"),
                style: {
                    left: 0,
                    right: 0
                },
                children: isMulti ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 text-gray-400",
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                            lineNumber: 88,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        value: option,
                                        checked: values.includes(option),
                                        onChange: (e)=>handleCheckboxChange(option, e.target.checked),
                                        className: "accent-primary h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    option
                                ]
                            }, option, true, {
                                fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                                lineNumber: 92,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors duration-150",
                            onClick: ()=>handleSingleSelect(placeholder),
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                            lineNumber: 106,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150",
                                onClick: ()=>handleSingleSelect(option),
                                children: option
                            }, option, false, {
                                fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                                lineNumber: 113,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MultiSelectField, "EFQjaoBbmT4ZWKGfXKun1fSW8bA=");
_c = MultiSelectField;
const __TURBOPACK__default__export__ = MultiSelectField;
var _c;
__turbopack_context__.k.register(_c, "MultiSelectField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RequestProposalPopup.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intl-tel-input/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/countries.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusPopup.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/request-proposal/Stepper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/request-proposal/MultiSelectField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-google-recaptcha/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
// Reusable Input Component
const InputField = (param)=>{
    let { type = "text", name, value, onChange, placeholder, required, className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        name: name,
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        required: required,
        className: "w-full border border-gray-300 font-semibold px-3 md:px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none ".concat(className)
    }, void 0, false, {
        fileName: "[project]/src/components/RequestProposalPopup.jsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InputField;
function CustomIntlTelInput(param) {
    let { value, onChange, placeholder, defaultCountry } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCountry);
    const [phoneValue, setPhoneValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dropdownPosition, setDropdownPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find({
                "CustomIntlTelInput.useEffect.country": (c)=>c[1] === defaultCountry.toLowerCase()
            }["CustomIntlTelInput.useEffect.country"]);
            if (country) {
                setSelectedCountry(country[1]);
                const dialCode = "+".concat(country[2]);
                if (!value || value === "") {
                    const initialValue = "".concat(dialCode, " ");
                    setPhoneValue(initialValue);
                } else if (!value.startsWith("+")) {
                    setPhoneValue("".concat(dialCode, " ").concat(value));
                } else {
                    setPhoneValue(value);
                }
            }
        }
    }["CustomIntlTelInput.useEffect"], [
        defaultCountry,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            const handleClickOutside = {
                "CustomIntlTelInput.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                        setSearchTerm("");
                    }
                }
            }["CustomIntlTelInput.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "CustomIntlTelInput.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["CustomIntlTelInput.useEffect"];
        }
    }["CustomIntlTelInput.useEffect"], []);
    const filteredCountries = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].filter((country)=>country[0].toLowerCase().includes(searchTerm.toLowerCase()) || country[2].includes(searchTerm));
    const handleCountrySelect = (country)=>{
        const dialCode = "+".concat(country[2]);
        const currentNumber = phoneValue.replace(/^\+\d+\s*/, "");
        const newValue = "".concat(dialCode, " ").concat(currentNumber);
        setSelectedCountry(country[1]);
        setPhoneValue(newValue);
        const hasActualNumber = currentNumber.trim().length > 0;
        onChange(hasActualNumber, hasActualNumber ? newValue : "", {
            iso2: country[1],
            dialCode: country[2]
        }, hasActualNumber ? newValue : "", "");
        setIsOpen(false);
        setSearchTerm("");
        setTimeout(()=>{
            var _inputRef_current;
            return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        }, 0);
    };
    const handlePhoneInputChange = (e)=>{
        const newValue = e.target.value;
        const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find((c)=>c[1] === selectedCountry);
        const dialCode = country ? "+".concat(country[2]) : "";
        const finalValue = !newValue.startsWith(dialCode) ? "".concat(dialCode, " ").concat(newValue.replace(/^\+\d+\s*/, "")) : newValue;
        setPhoneValue(finalValue);
        const hasActualNumber = finalValue.replace(/[\s+()-]/g, "").length > dialCode.replace("+", "").length;
        onChange(hasActualNumber, hasActualNumber ? finalValue : "", {
            iso2: selectedCountry,
            dialCode: country === null || country === void 0 ? void 0 : country[2]
        }, hasActualNumber ? finalValue : "", "");
    };
    const handleIntlInputChange = (isValid, value, countryData, number, ext)=>{
        const dialCode = countryData ? "+".concat(countryData.dialCode) : "";
        const finalValue = value && !value.startsWith(dialCode) ? "".concat(dialCode, " ").concat(value.replace(/^\+\d+\s*/, "")) : value || "";
        setPhoneValue(finalValue);
        const hasActualNumber = finalValue.replace(/[\s+()-]/g, "").length > dialCode.replace("+", "").length;
        const validNumber = hasActualNumber && isValid;
        onChange(validNumber, validNumber ? finalValue === value ? value : finalValue : "", countryData, validNumber ? finalValue === value ? number : finalValue : "", ext);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "intl-tel-input-wrapper",
        ref: dropdownRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "intl-tel-input-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "custom-flag-dropdown",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: buttonRef,
                            type: "button",
                            className: "selected-flag",
                            onClick: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                if (!isOpen && buttonRef.current) {
                                    const rect = buttonRef.current.getBoundingClientRect();
                                    setDropdownPosition({
                                        top: rect.bottom + 4,
                                        left: rect.left
                                    });
                                }
                                setIsOpen(!isOpen);
                            },
                            "aria-expanded": isOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fi fi-".concat(selectedCountry)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "arrow-icon",
                                    children: "▾"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "country-list-dropdown",
                            style: {
                                top: "".concat(dropdownPosition.top, "px"),
                                left: "".concat(dropdownPosition.left, "px")
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-box",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        placeholder: "Search country...",
                                        className: "search-input",
                                        autoFocus: true,
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "country-list",
                                    children: [
                                        filteredCountries.map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "country-item",
                                                onClick: ()=>handleCountrySelect(country),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fi fi-".concat(country[1])
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "country-name",
                                                        children: country[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dial-code",
                                                        children: [
                                                            "+",
                                                            country[2]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, "".concat(country[1], "-").concat(index), true, {
                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)),
                                        !filteredCountries.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "no-results",
                                            children: "No countries found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ref: inputRef,
                        preferredCountries: [
                            selectedCountry
                        ],
                        defaultCountry: selectedCountry,
                        excludeCountries: [
                            "il"
                        ],
                        value: phoneValue,
                        onPhoneNumberChange: handleIntlInputChange,
                        fieldName: "phoneNumber",
                        separateDialCode: false,
                        formatOnDisplay: true,
                        nationalMode: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    value: phoneValue,
                    onChange: handlePhoneInputChange,
                    placeholder: placeholder,
                    className: "phone-input-field"
                }, void 0, false, {
                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RequestProposalPopup.jsx",
            lineNumber: 142,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RequestProposalPopup.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(CustomIntlTelInput, "BOnGgZwfZJliYR2wYZ4D+G4rhH0=");
_c1 = CustomIntlTelInput;
// Form configuration data
const GOALS = [
    "Improve lead conversion rates",
    "Expand into new markets/verticals",
    "Increase marketing generated pipeline",
    "Gain access to new accounts (ABM/ABX)"
];
const SELECT_OPTIONS = {
    icp: [
        "Yes",
        "No"
    ],
    region: [
        "APAC",
        "EMEA",
        "NAMER",
        "LATAM",
        "Others"
    ],
    level: [
        "C-suite",
        "Vice President",
        "Director",
        "Manager",
        "Staff"
    ],
    function: [
        "Finance",
        "IT",
        "Marketing",
        "Operations",
        "Sales"
    ],
    funnel: [
        "TOFU",
        "MOFU",
        "BOFU"
    ],
    timeline: [
        "< 3 months",
        "3-6 months",
        "6-12 months",
        "> 12 months"
    ]
};
function RequestProposalPopup(param) {
    let { isOpen, onClose } = param;
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        goals: [],
        ICP: "",
        funnel: [],
        quantity: "",
        region: [],
        level: [],
        function: [],
        timeline: "",
        firstName: "",
        lastName: "",
        jobTitle: "",
        company: "",
        email: "",
        phoneNumber: "",
        question: "",
        consent: false
    });
    const [defaultCountry, setDefaultCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("in");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [popup, setPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [verified, setVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stepperKey, setStepperKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestProposalPopup.useEffect": ()=>{
            const controller = new AbortController();
            Promise.race([
                fetch("https://ipapi.co/json/", {
                    signal: controller.signal
                }),
                new Promise({
                    "RequestProposalPopup.useEffect": (_, reject)=>setTimeout({
                            "RequestProposalPopup.useEffect": ()=>reject("timeout")
                        }["RequestProposalPopup.useEffect"], 3000)
                }["RequestProposalPopup.useEffect"])
            ]).then({
                "RequestProposalPopup.useEffect": (res)=>res.json()
            }["RequestProposalPopup.useEffect"]).then({
                "RequestProposalPopup.useEffect": (data)=>setDefaultCountry(data.country_code.toLowerCase())
            }["RequestProposalPopup.useEffect"]).catch({
                "RequestProposalPopup.useEffect": ()=>setDefaultCountry("in")
            }["RequestProposalPopup.useEffect"]);
            return ({
                "RequestProposalPopup.useEffect": ()=>controller.abort()
            })["RequestProposalPopup.useEffect"];
        }
    }["RequestProposalPopup.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestProposalPopup.useEffect": ()=>{
            const handleEscKey = {
                "RequestProposalPopup.useEffect.handleEscKey": (event)=>{
                    if (event.key === 'Escape' && isOpen) {
                        handleClose();
                    }
                }
            }["RequestProposalPopup.useEffect.handleEscKey"];
            if (isOpen) {
                document.addEventListener('keydown', handleEscKey);
            }
            return ({
                "RequestProposalPopup.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscKey);
                }
            })["RequestProposalPopup.useEffect"];
        }
    }["RequestProposalPopup.useEffect"], [
        isOpen
    ]);
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        if (name === "quantity") {
            const numericValue = value.replace(/[^0-9]/g, '');
            if (numericValue === '' || parseInt(numericValue) >= 0) {
                setFormData((prev)=>({
                        ...prev,
                        [name]: numericValue
                    }));
            }
            return;
        }
        setFormData((prev)=>({
                ...prev,
                [name]: type === "checkbox" && name !== "goals" ? checked : value
            }));
    };
    const handleMultiSelectChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleGoalChange = (goal, checked)=>{
        setFormData((prev)=>({
                ...prev,
                goals: checked ? [
                    ...prev.goals,
                    goal
                ] : prev.goals.filter((g)=>g !== goal)
            }));
    };
    const handlePhoneChange = (isValid, value, selectedCountryData, fullNumber, ext)=>{
        setFormData((prev)=>({
                ...prev,
                phoneNumber: value || ""
            }));
    };
    const validateStep1 = ()=>{
        if (formData.goals.length === 0) {
            setMessage("Please select at least one goal.");
            return false;
        }
        if (!formData.ICP) {
            setMessage("Please select whether you have your ICP/Buyer Persona ready.");
            return false;
        }
        if (formData.ICP === "Yes") {
            const atLeastOneSelected = formData.region.length > 0 || formData.level.length > 0 || formData.function.length > 0;
            if (!atLeastOneSelected) {
                setMessage("When ICP is 'Yes', please select at least one of: Region, Job Level, or Job Function.");
                return false;
            }
        }
        const hasAtLeastOne = formData.funnel.length > 0 || formData.timeline || formData.quantity;
        if (!hasAtLeastOne) {
            setMessage("Please fill at least one of: Funnel Stage, Timeline, or Quantity.");
            return false;
        }
        setMessage("");
        return true;
    };
    const validateStep2 = ()=>formData.firstName && formData.lastName && formData.jobTitle && formData.company && formData.email && formData.phoneNumber && formData.consent && verified;
    const getValidationErrors = ()=>{
        const errors = [];
        if (!formData.firstName) errors.push("First Name");
        if (!formData.lastName) errors.push("Last Name");
        if (!formData.jobTitle) errors.push("Job Title");
        if (!formData.company) errors.push("Company");
        if (!formData.email) errors.push("Email");
        if (!formData.phoneNumber) errors.push("Phone number");
        if (!formData.consent) errors.push("Consent checkbox");
        if (!verified) errors.push("ReCAPTCHA verification");
        if (errors.length > 0) {
            return "Please complete: ".concat(errors.join(", "));
        }
        return "";
    };
    const resetForm = ()=>{
        setFormData({
            goals: [],
            ICP: "",
            funnel: [],
            quantity: "",
            region: [],
            level: [],
            function: [],
            timeline: "",
            firstName: "",
            lastName: "",
            jobTitle: "",
            company: "",
            email: "",
            phoneNumber: "",
            consent: false
        });
        setVerified(false);
        setMessage("");
        setStepperKey((prev)=>prev + 1);
    };
    const handlePopupClose = ()=>{
        setPopup(null);
    };
    const handleSubmit = async (e, onComplete)=>{
        e.preventDefault();
        if (!validateStep2()) {
            setMessage(getValidationErrors());
            return;
        }
        setIsSubmitting(true);
        setMessage("");
        try {
            const response = await fetch("/api/requestproposal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                resetForm();
                setPopup({
                    status: "success",
                    title: "Success!",
                    message: "Thank you for your submission! We will get back to you soon."
                });
            } else {
                setPopup({
                    status: "error",
                    title: "Submission Failed",
                    message: data.error || "Something went wrong. Please try again."
                });
            }
        } catch (error) {
            setPopup({
                status: "error",
                title: "Network Error",
                message: "Please check your connection and try again."
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[1001] flex items-center justify-center bg-[#00000060] backdrop-blur-sm p-4",
        onClick: handleOverlayClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-md max-w-4xl w-full max-h-[85vh] overflow-y-auto overflow-hidden shadow-xl relative border-t-8 border-b-8 border-t-primary border-b-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "absolute text-gray-400 hover:text-gray-600 transition-colors z-50",
                        style: {
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        },
                        "aria-label": "Close modal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                lineNumber: 520,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 md:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg text-center mb-2",
                                        children: "Request Proposal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-center text-sm",
                                        children: "Tell us about your lead generation needs and get a customized proposal."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialStep: 1,
                                onStepChange: (step)=>{
                                    if (step === 2 && !validateStep1()) {
                                        return false;
                                    }
                                    setMessage("");
                                    return true;
                                },
                                onFinalStepCompleted: ()=>true,
                                backButtonText: "Previous",
                                nextButtonText: "Next",
                                hideSubmitButton: true,
                                hideProgressBar: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 md:mb-6 border px-3 md:px-5 py-3 rounded-xl border-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "!font-semibold mb-3",
                                                                children: "What are your main goals for purchasing leads?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 554,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                                children: GOALS.map((goal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                value: goal,
                                                                                checked: formData.goals.includes(goal),
                                                                                onChange: (e)=>handleGoalChange(goal, e.target.checked),
                                                                                className: "accent-primary h-5 w-5 rounded-xl border border-gray-300 flex-shrink-0",
                                                                                disabled: isSubmitting
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                                lineNumber: 560,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "md:!text-base !text-sm",
                                                                                children: goal
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                                lineNumber: 570,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, goal, true, {
                                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 557,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 553,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 md:mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            name: "ICP",
                                                            value: formData.ICP,
                                                            onChange: handleMultiSelectChange,
                                                            placeholder: "Ready with your ICP / Buyer Persona?",
                                                            options: SELECT_OPTIONS.icp,
                                                            required: true,
                                                            isMulti: false,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                            lineNumber: 576,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 575,
                                                        columnNumber: 17
                                                    }, this),
                                                    formData.ICP !== "No" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-6 mb-4 md:mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                name: "region",
                                                                values: formData.region,
                                                                onChange: handleMultiSelectChange,
                                                                placeholder: "Select Region",
                                                                options: SELECT_OPTIONS.region,
                                                                required: formData.ICP === "Yes",
                                                                isMulti: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                name: "level",
                                                                values: formData.level,
                                                                onChange: handleMultiSelectChange,
                                                                placeholder: "Select Job Level",
                                                                options: SELECT_OPTIONS.level,
                                                                required: formData.ICP === "Yes",
                                                                isMulti: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 599,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                name: "function",
                                                                values: formData.function,
                                                                onChange: handleMultiSelectChange,
                                                                placeholder: "Select Job Function",
                                                                options: SELECT_OPTIONS.function,
                                                                required: formData.ICP === "Yes",
                                                                isMulti: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 609,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 588,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-6 md:mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                name: "funnel",
                                                                values: formData.funnel,
                                                                onChange: handleMultiSelectChange,
                                                                placeholder: "Select Funnel Stage",
                                                                options: SELECT_OPTIONS.funnel,
                                                                required: true,
                                                                isMulti: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 622,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                name: "timeline",
                                                                value: formData.timeline,
                                                                onChange: handleMultiSelectChange,
                                                                placeholder: "Select Timeline",
                                                                options: SELECT_OPTIONS.timeline,
                                                                required: true,
                                                                isMulti: false,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 632,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                                type: "number",
                                                                name: "quantity",
                                                                value: formData.quantity,
                                                                onChange: handleChange,
                                                                placeholder: "Enter Quantity",
                                                                min: 0,
                                                                required: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 642,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 621,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                lineNumber: 551,
                                                columnNumber: 15
                                            }, this),
                                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-red-50 border-l-4 border-red-500 p-3 mt-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-700",
                                                    children: message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                    lineNumber: 656,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                lineNumber: 655,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                        lineNumber: 550,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step"], {
                                        children: (param)=>{
                                            let { onComplete } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: (e)=>handleSubmit(e, onComplete),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                                name: "firstName",
                                                                value: formData.firstName,
                                                                onChange: handleChange,
                                                                placeholder: "First Name",
                                                                required: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 668,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                                name: "lastName",
                                                                value: formData.lastName,
                                                                onChange: handleChange,
                                                                placeholder: "Last Name",
                                                                required: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 676,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                                type: "email",
                                                                name: "email",
                                                                value: formData.email,
                                                                onChange: handleChange,
                                                                placeholder: "Enter Business Email",
                                                                required: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 684,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomIntlTelInput, {
                                                                    value: formData.phoneNumber,
                                                                    onChange: handlePhoneChange,
                                                                    placeholder: "Enter phone number",
                                                                    defaultCountry: defaultCountry,
                                                                    disabled: isSubmitting
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                    lineNumber: 694,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 693,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                                name: "jobTitle",
                                                                value: formData.jobTitle,
                                                                onChange: handleChange,
                                                                placeholder: "Enter Job Title",
                                                                required: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 702,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                                name: "company",
                                                                value: formData.company,
                                                                onChange: handleChange,
                                                                placeholder: "Enter Company",
                                                                required: true,
                                                                disabled: isSubmitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                lineNumber: 710,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 667,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 md:mt-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "question",
                                                            value: formData.question || "",
                                                            onChange: handleChange,
                                                            placeholder: "Enter your question here",
                                                            rows: 3,
                                                            className: "w-full px-5 py-3 rounded-xl border focus:border-1 border-gray-300 font-semibold focus:border-primary focus:outline-none",
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                            lineNumber: 720,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 719,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 md:mt-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col md:flex-row md:items-center gap-4 md:justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 md:justify-start justify-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            name: "consent",
                                                                            checked: formData.consent,
                                                                            onChange: handleChange,
                                                                            className: "accent-primary h-5 w-5 rounded-xl border border-gray-300 mt-1 flex-shrink-0",
                                                                            required: true,
                                                                            disabled: isSubmitting
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                            lineNumber: 733,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Your consent matters to us*"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                                    lineNumber: 743,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                                    lineNumber: 746,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "I agree to Bissbay's",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "/terms-of-use",
                                                                                    className: "text-primary",
                                                                                    children: "Terms of Use"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                                    lineNumber: 747,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " ",
                                                                                "and",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "/policies/privacy-policy",
                                                                                    target: "_blank",
                                                                                    className: "text-primary",
                                                                                    children: "Policy"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                                    lineNumber: 751,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                            lineNumber: 742,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                    lineNumber: 732,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "md:w-[304px] h-[78px] flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                                        sitekey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                                                                        onChange: ()=>setVerified(true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                        lineNumber: 762,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                    lineNumber: 761,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    type: "submit",
                                                                    label: isSubmitting ? "Submitting..." : "Submit",
                                                                    disabled: !validateStep2() || isSubmitting,
                                                                    customClass: validateStep2() && !isSubmitting ? "cursor-pointer" : "!bg-gray-400 cursor-not-allowed"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                                    lineNumber: 767,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                            lineNumber: 731,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                        lineNumber: 730,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                                lineNumber: 666,
                                                columnNumber: 17
                                            }, this);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, stepperKey, true, {
                                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RequestProposalPopup.jsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            popup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                status: popup.status,
                message: "A precision-tailored proposal designed to deliver results is on its way.",
                onClose: handlePopupClose
            }, void 0, false, {
                fileName: "[project]/src/components/RequestProposalPopup.jsx",
                lineNumber: 788,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RequestProposalPopup.jsx",
        lineNumber: 496,
        columnNumber: 5
    }, this);
}
_s1(RequestProposalPopup, "TdhhsOinWlaSKMLebHyzKLBwXAk=");
_c2 = RequestProposalPopup;
const __TURBOPACK__default__export__ = RequestProposalPopup;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "InputField");
__turbopack_context__.k.register(_c1, "CustomIntlTelInput");
__turbopack_context__.k.register(_c2, "RequestProposalPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CTASection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RequestProposalPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RequestProposalPopup.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CTASection = (param)=>{
    let { title, subtitle, primaryButton = {
        label: 'Schedule Your Consultation',
        type: 'modal',
        modalType: 'booking' // 'booking' or 'proposal' when type is 'modal'
    }, secondaryButtons = [
        {
            label: 'LinkedIn',
            href: '/linkedin',
            icon: null,
            disabled: false
        },
        {
            label: 'Client Testimonials',
            href: '/testimonials',
            icon: null,
            disabled: false
        },
        {
            label: 'Resources',
            href: '/resources',
            icon: null,
            disabled: false
        }
    ], backgroundGradient = 'from-[#fd4100] to-[#d9ee4a]' } = param;
    _s();
    const [isBookingModalOpen, setIsBookingModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProposalModalOpen, setIsProposalModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "p-4 lg:p-12 bg-gradient-to-r ".concat(backgroundGradient, " relative overflow-hidden"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative z-10 mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " container relative z-10 max-w-7xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-[2.6rem] font-bold !text-white mb-4 lg:mb-6 animate-on-scroll",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/CTASection.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl max-w-7xl !text-white mb-6 lg:mb-8 animate-on-scroll",
                            style: {
                                animationDelay: '0.2s'
                            },
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/CTASection.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-on-scroll flex justify-center",
                            style: {
                                animationDelay: '0.3s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: primaryButton.label,
                                customClass: "!text-white group hover:!text-primary hover:!bg-white border-2 border-transparent font-medium border-white/30 hover:!border-transparent rounded-lg !bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.05] transform",
                                link: primaryButton.type === 'link' ? primaryButton.href : null,
                                target: primaryButton.target || '_self',
                                onClick: primaryButton.type === 'modal' ? ()=>{
                                    if (primaryButton.modalType === 'proposal') {
                                        setIsProposalModalOpen(true);
                                    } else {
                                        setIsBookingModalOpen(true);
                                    }
                                } : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/CTASection.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CTASection.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        secondaryButtons && secondaryButtons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 lg:mt-8 max-w-4xl mx-auto grid grid-cols-1 ".concat(secondaryButtons.length < 3 ? "md:grid-cols-2 w-fit mx-auto" : "md:grid-cols-3", " gap-4 lg:gap-6 animate-on-scroll"),
                            style: {
                                animationDelay: '0.4s'
                            },
                            children: secondaryButtons.map((button, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: button.label,
                                    icon: button.icon,
                                    disabled: button.disabled,
                                    link: !button.disabled && button.type !== 'modal' ? button.href : null,
                                    target: button.target || '_self',
                                    onClick: !button.disabled && button.type === 'modal' ? ()=>{
                                        if (button.modalType === 'proposal') {
                                            setIsProposalModalOpen(true);
                                        } else {
                                            setIsBookingModalOpen(true);
                                        }
                                    } : undefined,
                                    customClass: "!text-white group hover:!text-primary hover:!bg-white border-2 border-transparent font-medium border-white/30 hover:!border-transparent rounded-lg !bg-transparent transition-all duration-300 ease-in-out hover:scale-[1.05] transform ".concat(button.disabled ? 'cursor-not-allowed' : '')
                                }, index, false, {
                                    fileName: "[project]/src/components/CTASection.jsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CTASection.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CTASection.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CTASection.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isBookingModalOpen,
                onClose: ()=>setIsBookingModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/CTASection.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RequestProposalPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isProposalModalOpen,
                onClose: ()=>setIsProposalModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/CTASection.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CTASection.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CTASection, "DRw4/YUXHt69aJBnLh97ZYRtFjg=");
_c = CTASection;
const __TURBOPACK__default__export__ = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/CTA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CTASection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CTASection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function CTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CTASection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Ready to Connect with Our Audience?",
        subtitle: "Transform your sales and marketing strategy with our comprehensive B2B audience insights.",
        primaryButton: {
            label: 'Schedule Your Consultation',
            type: 'modal'
        },
        secondaryButtons: [
            {
                label: 'Request Proposal',
                type: 'modal',
                modalType: 'proposal'
            },
            {
                label: "Your ROI Calculator",
                href: "/resources/roi-calculator",
                target: '_blank',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                    className: "small-icon group-hover:!text-primary !text-white"
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/CTA.js",
                    lineNumber: 27,
                    columnNumber: 13
                }, void 0)
            }
        ]
    }, void 0, false, {
        fileName: "[project]/src/app/resources/infographics/CTA.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CTA;
const __TURBOPACK__default__export__ = CTA;
var _c;
__turbopack_context__.k.register(_c, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GeoChartClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeoChartClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
const GeoChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/MapComponent.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/MapComponent.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = GeoChart;
function GeoChartClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GeoChart, {}, void 0, false, {
        fileName: "[project]/src/components/GeoChartClient.js",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c1 = GeoChartClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "GeoChart");
__turbopack_context__.k.register(_c1, "GeoChartClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/MapSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GeoChartClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GeoChartClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$i18next$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-i18next/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MapSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('translation');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-auto items-center z-10 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-center mb-0 md:mb-6",
                    children: [
                        t('map.tagline'),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/infographics/MapSection.js",
                    lineNumber: 10,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GeoChartClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/MapSection.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "md:text-center text-left",
                    children: "Where global reach meets precise targeting, making every connection count."
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/MapSection.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex items-center justify-center gap-2 sm:gap-2 pr-0 sm:pr-4 z-20"
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/infographics/MapSection.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/resources/infographics/MapSection.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(MapSection, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = MapSection;
var _c;
__turbopack_context__.k.register(_c, "MapSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/resources/infographics/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$Donut1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/Donut1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$IndustryBreak1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/IndustryBreak1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$Hero2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/Hero2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$TrafficMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/TrafficMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$CompanySizePolarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/CompanySizePolarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$SeniorityLevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/SeniorityLevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DepartmentOverview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/DepartmentOverview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$CompanySizePie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/CompanySizePie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$CTA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/CTA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$MapSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/infographics/MapSection.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-8 flex flex-col gap-4 md:gap-12 mb-4 md:mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$MapSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-primary h-1 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$Hero2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$Donut1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$IndustryBreak1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$CompanySizePolarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$CompanySizePie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$SeniorityLevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$DepartmentOverview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$TrafficMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrafficMetrics"], {}, void 0, false, {
                        fileName: "[project]/src/app/resources/infographics/page.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/infographics/page.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$infographics$2f$CTA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/resources/infographics/page.js",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b92249a4._.js.map