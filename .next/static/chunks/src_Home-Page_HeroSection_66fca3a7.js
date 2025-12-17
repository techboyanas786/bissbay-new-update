(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/Home-Page/HeroSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$audiences$2f$information$2d$technology$2f$globe3$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/audiences/information-technology/globe3.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$i18next$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-i18next/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoLoop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogoLoop.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$typeWriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/typeWriter.jsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const Lottie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Lottie;
;
;
const images = [
    {
        src: "/logos/AutoDesk.png",
        alt: "AutoDesk"
    },
    {
        src: "/logos/Asker_HCG.png",
        alt: "Asker HCG"
    },
    {
        src: "/logos/BeyondTrust_logo.png",
        alt: "BeyondTrust"
    },
    {
        src: "/logos/Digital_Realty.png",
        alt: "Digital Realty"
    },
    {
        src: "/logos/Iron_Mountain.png",
        alt: "Iron Mountain"
    },
    {
        src: "/logos/NetApp.png",
        alt: "NetApp"
    },
    {
        src: "/logos/pax8-logo.png",
        alt: "Pax8"
    },
    {
        src: "/SVGLogos/8x8.svg",
        alt: "8x8"
    },
    {
        src: "/SVGLogos/acquia.svg",
        alt: "Adobe"
    },
    {
        src: "/logos/Adobe.png",
        alt: "Alibaba"
    },
    {
        src: "/SVGLogos/alibaba.svg",
        alt: "Atos"
    },
    {
        src: "/SVGLogos/amazon.svg",
        alt: "Aviva"
    },
    {
        src: "/SVGLogos/arcticwolf.svg",
        alt: "Dell"
    },
    {
        src: "/SVGLogos/atos.svg",
        alt: "Equnix"
    },
    {
        src: "/logos/Aviva.png",
        alt: "Amazon"
    },
    {
        src: "/SVGLogos/bae-systems-logo.svg",
        alt: "Acquia"
    },
    {
        src: "/SVGLogos/bitdefender.svg",
        alt: "AWN"
    },
    {
        src: "/SVGLogos/bosch.svg",
        alt: "BAE Systems"
    },
    {
        src: "/SVGLogos/box.svg",
        alt: "Bitdefender"
    },
    {
        src: "/SVGLogos/cloudflare.svg",
        alt: "Box"
    },
    {
        src: "/SVGLogos/commvault.svg",
        alt: "Bosch"
    },
    {
        src: "/SVGLogos/criteo.svg",
        alt: "Cloudflare"
    },
    {
        src: "/SVGLogos/dell.svg",
        alt: "Commvault"
    },
    {
        src: "/SVGLogos/telekom.svg",
        alt: "Criteo"
    },
    {
        src: "/SVGLogos/equinix-logo.svg",
        alt: "Deutsche Telekom"
    },
    {
        src: "/SVGLogos/google.svg",
        alt: "Google"
    },
    {
        src: "/SVGLogos/hewlett-packard-enterprise.svg",
        alt: "Hewlett Packard"
    },
    {
        src: "/logos/Hitachi_logo.png",
        alt: "Hitachi"
    },
    {
        src: "/SVGLogos/ibm.svg",
        alt: "IBM"
    },
    {
        src: "/SVGLogos/intel.svg",
        alt: "Intel"
    },
    {
        src: "/SVGLogos/microsoft.svg",
        alt: "Microsoft"
    },
    {
        src: "/SVGLogos/ntt-data.svg",
        alt: "NTT"
    },
    {
        src: "/SVGLogos/oracle.svg",
        alt: "Oracle"
    },
    {
        src: "/SVGLogos/red-hat-logo.svg",
        alt: "Red Hat"
    },
    {
        src: "/SVGLogos/rohde-schwarz.svg",
        alt: "Rohde"
    },
    {
        src: "/SVGLogos/sap.svg",
        alt: "SAP Signavio"
    },
    {
        src: "/logos/Siemens-logo.png",
        alt: "Siemens"
    },
    {
        src: "/SVGLogos/ukg.svg",
        alt: "UKG"
    },
    {
        src: "/SVGLogos/verizon.svg",
        alt: "Verizon"
    },
    {
        src: "/SVGLogos/vmware.svg",
        alt: "VMware"
    },
    {
        src: "/SVGLogos/workday-logo.svg",
        alt: "Workday"
    },
    {
        src: "/SVGLogos/zoho.svg",
        alt: "ZOHO"
    }
];
function HeroSection(param) {
    let { overlayComplete } = param;
    _s();
    const [taglineAnimationPhase, setTaglineAnimationPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [introOverlayActive, setIntroOverlayActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showRegularTagline, setShowRegularTagline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mainContentVisible, setMainContentVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollDisabled, setScrollDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTypewriter, setShowTypewriter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('translation');
    const NAVBAR_HEIGHT = 80;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (overlayComplete) {
                setShowTypewriter(true);
            }
        }
    }["HeroSection.useEffect"], [
        overlayComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (showTypewriter) {
                // Phase 0 -> 1 & 2: Typewriter completes and immediately start moving up
                const typewriterTimer = setTimeout({
                    "HeroSection.useEffect.typewriterTimer": ()=>{
                        setTaglineAnimationPhase(1);
                        // Start moving up immediately
                        setTimeout({
                            "HeroSection.useEffect.typewriterTimer": ()=>{
                                setTaglineAnimationPhase(2);
                            }
                        }["HeroSection.useEffect.typewriterTimer"], 0);
                    }
                }["HeroSection.useEffect.typewriterTimer"], 3500);
                // Phase 2 -> 3: Heading reaches final position, start showing regular tagline
                const showRegularTimer = setTimeout({
                    "HeroSection.useEffect.showRegularTimer": ()=>{
                        setShowRegularTagline(true);
                        setTaglineAnimationPhase(3);
                    }
                }["HeroSection.useEffect.showRegularTimer"], 4700); // Reduced delay for better sync
                // Phase 3 -> 4: Hide overlay and show main content
                const hideOverlayTimer = setTimeout({
                    "HeroSection.useEffect.hideOverlayTimer": ()=>{
                        setIntroOverlayActive(false);
                        setMainContentVisible(true);
                        setTaglineAnimationPhase(4);
                    }
                }["HeroSection.useEffect.hideOverlayTimer"], 4800); // Slightly delayed after regular tagline appears
                const enableScrollTimer = setTimeout({
                    "HeroSection.useEffect.enableScrollTimer": ()=>{
                        setScrollDisabled(false);
                    }
                }["HeroSection.useEffect.enableScrollTimer"], 6000);
                return ({
                    "HeroSection.useEffect": ()=>{
                        clearTimeout(typewriterTimer);
                        clearTimeout(showRegularTimer);
                        clearTimeout(hideOverlayTimer);
                        clearTimeout(enableScrollTimer);
                    }
                })["HeroSection.useEffect"];
            } else {
                setTaglineAnimationPhase(0);
                setIntroOverlayActive(true);
                setShowRegularTagline(false);
                setMainContentVisible(false);
            }
        }
    }["HeroSection.useEffect"], [
        showTypewriter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const preventDefault = {
                "HeroSection.useEffect.preventDefault": (e)=>e.preventDefault()
            }["HeroSection.useEffect.preventDefault"];
            if (scrollDisabled) {
                window.addEventListener('wheel', preventDefault, {
                    passive: false
                });
                window.addEventListener('touchmove', preventDefault, {
                    passive: false
                });
                window.addEventListener('keydown', {
                    "HeroSection.useEffect": (e)=>{
                        if ([
                            32,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38,
                            39,
                            40
                        ].includes(e.keyCode)) {
                            e.preventDefault();
                        }
                    }
                }["HeroSection.useEffect"]);
            } else {
                window.removeEventListener('wheel', preventDefault);
                window.removeEventListener('touchmove', preventDefault);
            }
            return ({
                "HeroSection.useEffect": ()=>{
                    window.removeEventListener('wheel', preventDefault);
                    window.removeEventListener('touchmove', preventDefault);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        scrollDisabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "934e4985cf94c32",
                children: ".hero-intro-overlay.jsx-934e4985cf94c32{z-index:20;opacity:1;pointer-events:auto;background-color:#fff;justify-content:center;align-items:center;width:100%;height:100vh;transition:opacity .6s ease-out;display:flex;position:fixed;top:0;left:0}.hero-intro-overlay.hide.jsx-934e4985cf94c32{opacity:0;pointer-events:none}.hero-heading.jsx-934e4985cf94c32{color:#1f2937;font-family:Quicksand,sans-serif;font-size:3rem;font-weight:600;line-height:1.25}.tagline-h1-wrapper.jsx-934e4985cf94c32{text-align:center;width:90%;transition:all 1s cubic-bezier(.25,.46,.45,.94);transform:translateY(0)}.tagline-h1-wrapper.phase-2.jsx-934e4985cf94c32{transform:translateY(calc(139px - 50vh))}@media screen and (max-width:767px){.hero-heading.jsx-934e4985cf94c32{font-size:2rem}.tagline-h1-wrapper.phase-2.jsx-934e4985cf94c32{transform:translateY(calc(149px - 50vh))}}.regular-tagline-h1.jsx-934e4985cf94c32{text-align:center;opacity:0;z-index:19;width:100%;position:absolute;top:20px;left:49.85%;transform:translate(-50%)}.regular-tagline-h1.show.jsx-934e4985cf94c32{opacity:1}.main-content-wrapper.jsx-934e4985cf94c32{opacity:0;width:100%;transition:opacity 1s ease-out .2s,transform 1s ease-out .2s;transform:translateY(30px)}.main-content-wrapper.show.jsx-934e4985cf94c32{opacity:1;transform:translateY(0)}.hero-intro-overlay.phase-3.jsx-934e4985cf94c32{opacity:.7}.logo-item.jsx-934e4985cf94c32{justify-content:center;align-items:center;margin:0 2rem;display:flex}.logo-image.jsx-934e4985cf94c32{object-fit:contain;filter:grayscale();max-height:100%;transition:all .3s}.logo-image.jsx-934e4985cf94c32:hover{filter:grayscale(0%);transform:scale(1.1)}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: ("TURBOPACK compile-time truthy", 1) ? window.innerWidth >= 1024 // large screen (lg)
                     ? 'calc(100vh - 110px)' : window.innerWidth >= 820 && window.innerWidth < 1024 // iPad Pro
                     ? 'calc(80vh - 110px)' : 'auto' : "TURBOPACK unreachable"
                },
                className: "jsx-934e4985cf94c32" + " " + "w-full flex flex-col justify-between relative",
                children: [
                    introOverlayActive && showTypewriter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-934e4985cf94c32" + " " + "hero-intro-overlay\n                        ".concat(taglineAnimationPhase >= 2 ? 'phase-2' : '', "\n                        ").concat(taglineAnimationPhase >= 3 ? 'phase-3' : '', "\n                        ").concat(taglineAnimationPhase >= 4 ? 'hide' : '', "\n                    "),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-934e4985cf94c32" + " " + "tagline-h1-wrapper ".concat(taglineAnimationPhase >= 2 ? 'phase-2' : ''),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$typeWriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: [
                                    "".concat(t('hero.tagline.part1'), " ").concat(t('hero.tagline.highlight1'), " ").concat(t('hero.tagline.part2'), " ").concat(t('hero.tagline.highlight2'))
                                ],
                                as: "h1",
                                typingSpeed: 65,
                                initialDelay: 0,
                                pauseDuration: 1000,
                                deletingSpeed: 10,
                                loop: false,
                                className: "group !tracking-normal !font-bold lg:!font-semibold !text-black",
                                style: {
                                    fontSize: window.innerWidth < 768 ? '2rem' : '3rem',
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 600,
                                    color: '#1F2937',
                                    lineHeight: 1.25
                                },
                                showCursor: true,
                                cursorCharacter: "",
                                cursorClassName: "!text-black",
                                cursorBlinkDuration: 0.2,
                                textColors: [
                                    "#000000"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                lineNumber: 259,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/Home-Page/HeroSection.js",
                            lineNumber: 258,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/Home-Page/HeroSection.js",
                        lineNumber: 253,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-934e4985cf94c32" + " " + "w-full container mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                minHeight: '80px'
                            },
                            className: "jsx-934e4985cf94c32" + " " + "w-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-934e4985cf94c32" + " " + "regular-tagline-h1 hero-heading !tracking-normal group !font-bold lg:!font-semibold leading-tight ".concat(showRegularTagline ? 'show' : '', "\n                        "),
                                children: [
                                    t('hero.tagline.part1'),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-934e4985cf94c32" + " " + "relative inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-934e4985cf94c32" + " " + "rounded-xl lg:group-hover:text-primary transition-colors duration-300 ",
                                            children: t('hero.tagline.highlight1')
                                        }, void 0, false, {
                                            fileName: "[project]/src/Home-Page/HeroSection.js",
                                            lineNumber: 292,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Home-Page/HeroSection.js",
                                        lineNumber: 291,
                                        columnNumber: 29
                                    }, this),
                                    ' ',
                                    t('hero.tagline.part2'),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-934e4985cf94c32" + " " + "relative inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-934e4985cf94c32" + " " + "rounded-xl lg:group-hover:text-primary transition-colors duration-300 ",
                                            children: t('hero.tagline.highlight2')
                                        }, void 0, false, {
                                            fileName: "[project]/src/Home-Page/HeroSection.js",
                                            lineNumber: 298,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Home-Page/HeroSection.js",
                                        lineNumber: 297,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                lineNumber: 288,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/Home-Page/HeroSection.js",
                            lineNumber: 287,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/Home-Page/HeroSection.js",
                        lineNumber: 286,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-934e4985cf94c32" + " " + "w-full container mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-934e4985cf94c32" + " " + "main-content-wrapper mx-auto grid place-content-center ".concat(mainContentVisible ? 'show' : ''),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-934e4985cf94c32" + " " + "flex flex-col-reverse md:flex-row justify-between items-center 2xl:h-[500px] gap-4 sm:gap-6 lg:gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-934e4985cf94c32" + " " + "w-full lg:w-1/2 p-0 md:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-934e4985cf94c32" + " " + "2xl:!text-[40px]",
                                                children: [
                                                    t('hero.description1'),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                        className: "jsx-934e4985cf94c32"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/Home-Page/HeroSection.js",
                                                        lineNumber: 312,
                                                        columnNumber: 61
                                                    }, this),
                                                    t('hero.description2'),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                        className: "jsx-934e4985cf94c32"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/Home-Page/HeroSection.js",
                                                        lineNumber: 313,
                                                        columnNumber: 61
                                                    }, this),
                                                    t('hero.description3')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                                lineNumber: 311,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "jsx-934e4985cf94c32" + " " + "!text-[#5C6371] text-sm sm:text-base md:text-lg leading-relaxed max-w-full my-4 sm:my-6 md:my-8",
                                                children: t('hero.description4')
                                            }, void 0, false, {
                                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                                lineNumber: 317,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-934e4985cf94c32" + " " + "w-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactButton"], {
                                                    label: t('hero.button'),
                                                    variant: "primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/Home-Page/HeroSection.js",
                                                    lineNumber: 322,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                                lineNumber: 321,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Home-Page/HeroSection.js",
                                        lineNumber: 310,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-934e4985cf94c32" + " " + "w-full lg:w-1/2 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lottie, {
                                            animationData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$audiences$2f$information$2d$technology$2f$globe3$2e$json__$28$json$29$__["default"],
                                            className: "w-full md:scale-125 h-full max-w-lg",
                                            loop: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/Home-Page/HeroSection.js",
                                            lineNumber: 330,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Home-Page/HeroSection.js",
                                        lineNumber: 329,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                lineNumber: 309,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/Home-Page/HeroSection.js",
                            lineNumber: 308,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/Home-Page/HeroSection.js",
                        lineNumber: 307,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-934e4985cf94c32" + " " + "full-bleed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "jsx-934e4985cf94c32" + " " + "text-xs sm:text-sm text-gray-500 text-center pb-2 sm:pb-4",
                                children: t('hero.description5')
                            }, void 0, false, {
                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                lineNumber: 338,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-934e4985cf94c32" + " " + "py-4 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        overflow: 'hidden'
                                    },
                                    className: "jsx-934e4985cf94c32",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoLoop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        logos: images,
                                        speed: 60,
                                        direction: "left",
                                        logoHeight: 35,
                                        gap: 60,
                                        hoverSpeed: 30,
                                        scaleOnHover: true,
                                        fadeOut: true,
                                        fadeOutColor: "#ffffff",
                                        ariaLabel: "Technology partners"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Home-Page/HeroSection.js",
                                        lineNumber: 344,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/Home-Page/HeroSection.js",
                                    lineNumber: 343,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/Home-Page/HeroSection.js",
                                lineNumber: 342,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Home-Page/HeroSection.js",
                        lineNumber: 337,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Home-Page/HeroSection.js",
                lineNumber: 239,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(HeroSection, "VMAnA0VcoGpohgNTQMq9KDvEWSY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = HeroSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "Lottie");
__turbopack_context__.k.register(_c1, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_Home-Page_HeroSection_66fca3a7.js.map