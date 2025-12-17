module.exports = [
"[project]/src/app/resources/request-proposal/Stepper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step",
    ()=>Step,
    "default",
    ()=>Stepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Stepper({ children, initialStep = 1, onStepChange = ()=>{}, onFinalStepCompleted = ()=>{}, stepCircleContainerClassName = "", stepContainerClassName = "", contentClassName = "", footerClassName = "", backButtonProps = {}, nextButtonProps = {}, backButtonText = "Back", nextButtonText = "Continue", disableStepIndicators = false, renderStepIndicator, hideSubmitButton = false, ...rest }) {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialStep);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const stepsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
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
            const proceed = onStepChange?.(currentStep + 1); // Updated to check next step
            if (proceed === false) return;
            setDirection(-1);
            setCurrentStep(currentStep + 1);
        }
    };
    const handleComplete = ()=>{
        const proceed = onFinalStepCompleted?.(currentStep);
        if (proceed === false) return;
        setDirection(1);
        updateStep(totalSteps + 1);
    };
    // Get the current step element
    const currentStepElement = stepsArray[currentStep - 1];
    // Check if the step's children is a function (render prop pattern) and preserve Step wrapper
    let stepContent = currentStepElement;
    if (currentStepElement && typeof currentStepElement.props.children === "function") {
        stepContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(currentStepElement, {
            children: currentStepElement.props.children({
                onComplete: handleComplete
            })
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-full items-center justify-center",
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mx-auto w-full max-w-6xl ${stepCircleContainerClassName}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepContentWrapper, {
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
                    !isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${footerClassName}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `pt-4 flex ${currentStep !== 1 ? "justify-between" : "justify-end"}`,
                            children: [
                                currentStep !== 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBack,
                                    className: `px-3.5 py-1.5 text-white bg-gray-600 rounded-full font-medium tracking-tight transition hover:bg-gray-700 ${currentStep === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}`,
                                    "aria-label": "Go to previous step",
                                    ...backButtonProps,
                                    children: backButtonText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                !(isLastStep && hideSubmitButton) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function StepContentWrapper({ isCompleted, currentStep, direction, children, className }) {
    const [parentHeight, setParentHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            mode: "sync",
            custom: direction,
            children: !isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideTransition, {
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
function SlideTransition({ children, direction, onHeightReady }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
    }, [
        children,
        onHeightReady
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
function Step({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
        lineNumber: 225,
        columnNumber: 10
    }, this);
}
function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
    const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative cursor-pointer outline-none focus:outline-none",
        animate: status,
        initial: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: status === "complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                className: "h-4 w-4 text-white"
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 247,
                columnNumber: 11
            }, this) : status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 w-3 rounded-full bg-[#fff]"
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Stepper.jsx",
                lineNumber: 249,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function StepConnector({ isComplete }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
function CheckIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
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
}),
"[project]/public/countries.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[[\"Afghanistan\",\"af\",\"93\"],[\"Albania\",\"al\",\"355\"],[\"Algeria\",\"dz\",\"213\"],[\"American Samoa\",\"as\",\"1\",1,[\"684\"]],[\"Andorra\",\"ad\",\"376\"],[\"Angola\",\"ao\",\"244\"],[\"Anguilla\",\"ai\",\"1\",1,[\"264\"]],[\"Antigua and Barbuda\",\"ag\",\"1\",1,[\"268\"]],[\"Argentina\",\"ar\",\"54\"],[\"Armenia\",\"am\",\"374\"],[\"Aruba\",\"aw\",\"297\"],[\"Australia\",\"au\",\"61\",0],[\"Austria\",\"at\",\"43\"],[\"Azerbaijan\",\"az\",\"994\"],[\"Bahamas\",\"bs\",\"1\",1,[\"242\"]],[\"Bahrain\",\"bh\",\"973\"],[\"Bangladesh\",\"bd\",\"880\"],[\"Barbados\",\"bb\",\"1\",1,[\"246\"]],[\"Belarus\",\"by\",\"375\"],[\"Belgium\",\"be\",\"32\"],[\"Belize\",\"bz\",\"501\"],[\"Benin\",\"bj\",\"229\"],[\"Bermuda\",\"bm\",\"1\",1,[\"441\"]],[\"Bhutan\",\"bt\",\"975\"],[\"Bolivia\",\"bo\",\"591\"],[\"Bosnia and Herzegovina\",\"ba\",\"387\"],[\"Botswana\",\"bw\",\"267\"],[\"Brazil\",\"br\",\"55\"],[\"British Indian Ocean Territory\",\"io\",\"246\"],[\"British Virgin Islands\",\"vg\",\"1\",1,[\"284\"]],[\"Brunei\",\"bn\",\"673\"],[\"Bulgaria\",\"bg\",\"359\"],[\"Burkina Faso\",\"bf\",\"226\"],[\"Burundi\",\"bi\",\"257\"],[\"Cambodia\",\"kh\",\"855\"],[\"Cameroon\",\"cm\",\"237\"],[\"Canada\",\"ca\",\"1\",1,[\"204\",\"226\",\"236\",\"249\",\"250\",\"289\",\"306\",\"343\",\"365\",\"387\",\"403\",\"416\",\"418\",\"431\",\"437\",\"438\",\"450\",\"506\",\"514\",\"519\",\"548\",\"579\",\"581\",\"587\",\"604\",\"613\",\"639\",\"647\",\"672\",\"705\",\"709\",\"742\",\"778\",\"780\",\"782\",\"807\",\"819\",\"825\",\"867\",\"873\",\"902\",\"905\"]],[\"Cape Verde\",\"cv\",\"238\"],[\"Caribbean Netherlands\",\"bq\",\"599\",1,[\"3\",\"4\",\"7\"]],[\"Cayman Islands\",\"ky\",\"1\",1,[\"345\"]],[\"Central African Republic\",\"cf\",\"236\"],[\"Chad\",\"td\",\"235\"],[\"Chile\",\"cl\",\"56\"],[\"China\",\"cn\",\"86\"],[\"Christmas Island\",\"cx\",\"61\",2,[\"89164\"]],[\"Cocos (Keeling) Islands\",\"cc\",\"61\",1,[\"89162\"]],[\"Colombia\",\"co\",\"57\"],[\"Comoros\",\"km\",\"269\"],[\"Congo (DRC)\",\"cd\",\"243\"],[\"Congo (Republic)\",\"cg\",\"242\"],[\"Cook Islands\",\"ck\",\"682\"],[\"Costa Rica\",\"cr\",\"506\"],[\"Côte d'Ivoire\",\"ci\",\"225\"],[\"Croatia\",\"hr\",\"385\"],[\"Cuba\",\"cu\",\"53\"],[\"Curaçao\",\"cw\",\"599\",0],[\"Cyprus\",\"cy\",\"357\"],[\"Czech Republic\",\"cz\",\"420\"],[\"Denmark\",\"dk\",\"45\"],[\"Djibouti\",\"dj\",\"253\"],[\"Dominica\",\"dm\",\"1\",1,[\"767\"]],[\"Dominican Republic\",\"do\",\"1\",2,[\"809\",\"829\",\"849\"]],[\"Ecuador\",\"ec\",\"593\"],[\"Egypt\",\"eg\",\"20\"],[\"El Salvador\",\"sv\",\"503\"],[\"Equatorial Guinea\",\"gq\",\"240\"],[\"Eritrea\",\"er\",\"291\"],[\"Estonia\",\"ee\",\"372\"],[\"Ethiopia\",\"et\",\"251\"],[\"Falkland Islands\",\"fk\",\"500\"],[\"Faroe Islands\",\"fo\",\"298\"],[\"Fiji\",\"fj\",\"679\"],[\"Finland\",\"fi\",\"358\",0],[\"France\",\"fr\",\"33\"],[\"French Guiana\",\"gf\",\"594\"],[\"French Polynesia\",\"pf\",\"689\"],[\"Gabon\",\"ga\",\"241\"],[\"Gambia\",\"gm\",\"220\"],[\"Georgia\",\"ge\",\"995\"],[\"Germany\",\"de\",\"49\"],[\"Ghana\",\"gh\",\"233\"],[\"Gibraltar\",\"gi\",\"350\"],[\"Greece\",\"gr\",\"30\"],[\"Greenland\",\"gl\",\"299\"],[\"Grenada\",\"gd\",\"1\",1,[\"473\"]],[\"Guadeloupe\",\"gp\",\"590\",0],[\"Guam\",\"gu\",\"1\",1,[\"671\"]],[\"Guatemala\",\"gt\",\"502\"],[\"Guernsey\",\"gg\",\"44\",1,[\"1481\",\"7781\",\"7839\",\"7911\"]],[\"Guinea\",\"gn\",\"224\"],[\"Guinea-Bissau\",\"gw\",\"245\"],[\"Guyana\",\"gy\",\"592\"],[\"Haiti\",\"ht\",\"509\"],[\"Honduras\",\"hn\",\"504\"],[\"Hong Kong\",\"hk\",\"852\"],[\"Hungary\",\"hu\",\"36\"],[\"Iceland\",\"is\",\"354\"],[\"India\",\"in\",\"91\"],[\"Indonesia\",\"id\",\"62\"],[\"Iran\",\"ir\",\"98\"],[\"Iraq\",\"iq\",\"964\"],[\"Ireland\",\"ie\",\"353\"],[\"Isle of Man\",\"im\",\"44\",2,[\"1624\",\"74576\",\"7524\",\"7924\",\"7624\"]],[\"Italy\",\"it\",\"39\",0],[\"Jamaica\",\"jm\",\"1\",1,[\"876\",\"658\"]],[\"Japan\",\"jp\",\"81\"],[\"Jersey\",\"je\",\"44\",3,[\"1534\",\"7509\",\"7700\",\"7797\",\"7829\",\"7937\"]],[\"Jordan\",\"jo\",\"962\"],[\"Kazakhstan\",\"kz\",\"7\",1,[\"33\",\"7\"]],[\"Kenya\",\"ke\",\"254\"],[\"Kiribati\",\"ki\",\"686\"],[\"Kosovo\",\"xk\",\"383\"],[\"Kuwait\",\"kw\",\"965\"],[\"Kyrgyzstan\",\"kg\",\"996\"],[\"Laos\",\"la\",\"856\"],[\"Latvia\",\"lv\",\"371\"],[\"Lebanon\",\"lb\",\"961\"],[\"Lesotho\",\"ls\",\"266\"],[\"Liberia\",\"lr\",\"231\"],[\"Libya\",\"ly\",\"218\"],[\"Liechtenstein\",\"li\",\"423\"],[\"Lithuania\",\"lt\",\"370\"],[\"Luxembourg\",\"lu\",\"352\"],[\"Macau\",\"mo\",\"853\"],[\"Macedonia\",\"mk\",\"389\"],[\"Madagascar\",\"mg\",\"261\"],[\"Malawi\",\"mw\",\"265\"],[\"Malaysia\",\"my\",\"60\"],[\"Maldives\",\"mv\",\"960\"],[\"Mali\",\"ml\",\"223\"],[\"Malta\",\"mt\",\"356\"],[\"Marshall Islands\",\"mh\",\"692\"],[\"Martinique\",\"mq\",\"596\"],[\"Mauritania\",\"mr\",\"222\"],[\"Mauritius\",\"mu\",\"230\"],[\"Mayotte\",\"yt\",\"262\",1,[\"269\",\"639\"]],[\"Mexico\",\"mx\",\"52\"],[\"Micronesia\",\"fm\",\"691\"],[\"Moldova\",\"md\",\"373\"],[\"Monaco\",\"mc\",\"377\"],[\"Mongolia\",\"mn\",\"976\"],[\"Montenegro\",\"me\",\"382\"],[\"Montserrat\",\"ms\",\"1\",1,[\"664\"]],[\"Morocco\",\"ma\",\"212\",0],[\"Mozambique\",\"mz\",\"258\"],[\"Myanmar\",\"mm\",\"95\"],[\"Namibia\",\"na\",\"264\"],[\"Nauru\",\"nr\",\"674\"],[\"Nepal\",\"np\",\"977\"],[\"Netherlands\",\"nl\",\"31\"],[\"New Caledonia\",\"nc\",\"687\"],[\"New Zealand\",\"nz\",\"64\"],[\"Nicaragua\",\"ni\",\"505\"],[\"Niger\",\"ne\",\"227\"],[\"Nigeria\",\"ng\",\"234\"],[\"Niue\",\"nu\",\"683\"],[\"Norfolk Island\",\"nf\",\"672\"],[\"North Korea\",\"kp\",\"850\"],[\"Northern Mariana Islands\",\"mp\",\"1\",1,[\"670\"]],[\"Norway\",\"no\",\"47\",0],[\"Oman\",\"om\",\"968\"],[\"Pakistan\",\"pk\",\"92\"],[\"Palau\",\"pw\",\"680\"],[\"Palestine\",\"ps\",\"970\"],[\"Panama\",\"pa\",\"507\"],[\"Papua New Guinea\",\"pg\",\"675\"],[\"Paraguay\",\"py\",\"595\"],[\"Peru\",\"pe\",\"51\"],[\"Philippines\",\"ph\",\"63\"],[\"Poland\",\"pl\",\"48\"],[\"Portugal\",\"pt\",\"351\"],[\"Puerto Rico\",\"pr\",\"1\",3,[\"787\",\"939\"]],[\"Qatar\",\"qa\",\"974\"],[\"Réunion\",\"re\",\"262\",0],[\"Romania\",\"ro\",\"40\"],[\"Russia\",\"ru\",\"7\",0],[\"Rwanda\",\"rw\",\"250\"],[\"Saint Barthélemy\",\"bl\",\"590\",1],[\"Saint Helena\",\"sh\",\"290\"],[\"Saint Kitts and Nevis\",\"kn\",\"1\",1,[\"869\"]],[\"Saint Lucia\",\"lc\",\"1\",1,[\"758\"]],[\"Saint Martin\",\"mf\",\"590\",2],[\"Saint Pierre and Miquelon\",\"pm\",\"508\"],[\"Saint Vincent and the Grenadines\",\"vc\",\"1\",1,[\"784\"]],[\"Samoa\",\"ws\",\"685\"],[\"San Marino\",\"sm\",\"378\"],[\"São Tomé and Príncipe\",\"st\",\"239\"],[\"Saudi Arabia\",\"sa\",\"966\"],[\"Senegal\",\"sn\",\"221\"],[\"Serbia\",\"rs\",\"381\"],[\"Seychelles\",\"sc\",\"248\"],[\"Sierra Leone\",\"sl\",\"232\"],[\"Singapore\",\"sg\",\"65\"],[\"Sint Maarten\",\"sx\",\"1\",1,[\"721\"]],[\"Slovakia\",\"sk\",\"421\"],[\"Slovenia\",\"si\",\"386\"],[\"Solomon Islands\",\"sb\",\"677\"],[\"Somalia\",\"so\",\"252\"],[\"South Africa\",\"za\",\"27\"],[\"South Korea\",\"kr\",\"82\"],[\"South Sudan\",\"ss\",\"211\"],[\"Spain\",\"es\",\"34\"],[\"Sri Lanka\",\"lk\",\"94\"],[\"Sudan\",\"sd\",\"249\"],[\"Suriname\",\"sr\",\"597\"],[\"Svalbard and Jan Mayen\",\"sj\",\"47\",1,[\"79\"]],[\"Swaziland\",\"sz\",\"268\"],[\"Sweden\",\"se\",\"46\"],[\"Switzerland\",\"ch\",\"41\"],[\"Syria\",\"sy\",\"963\"],[\"Taiwan\",\"tw\",\"886\"],[\"Tajikistan\",\"tj\",\"992\"],[\"Tanzania\",\"tz\",\"255\"],[\"Thailand\",\"th\",\"66\"],[\"Timor-Leste\",\"tl\",\"670\"],[\"Togo\",\"tg\",\"228\"],[\"Tokelau\",\"tk\",\"690\"],[\"Tonga\",\"to\",\"676\"],[\"Trinidad and Tobago\",\"tt\",\"1\",1,[\"868\"]],[\"Tunisia\",\"tn\",\"216\"],[\"Turkey\",\"tr\",\"90\"],[\"Turkmenistan\",\"tm\",\"993\"],[\"Turks and Caicos Islands\",\"tc\",\"1\",1,[\"649\"]],[\"Tuvalu\",\"tv\",\"688\"],[\"U.S. Virgin Islands\",\"vi\",\"1\",1,[\"340\"]],[\"Uganda\",\"ug\",\"256\"],[\"Ukraine\",\"ua\",\"380\"],[\"United Arab Emirates\",\"ae\",\"971\"],[\"United Kingdom\",\"gb\",\"44\",0],[\"United States\",\"us\",\"1\",0],[\"Uruguay\",\"uy\",\"598\"],[\"Uzbekistan\",\"uz\",\"998\"],[\"Vanuatu\",\"vu\",\"678\"],[\"Vatican City\",\"va\",\"39\",1,[\"06698\"]],[\"Venezuela\",\"ve\",\"58\"],[\"Vietnam\",\"vn\",\"84\"],[\"Wallis and Futuna\",\"wf\",\"681\"],[\"Western Sahara\",\"eh\",\"212\",1,[\"5288\",\"5289\"]],[\"Yemen\",\"ye\",\"967\"],[\"Zambia\",\"zm\",\"260\"],[\"Zimbabwe\",\"zw\",\"263\"],[\"Åland Islands\",\"ax\",\"358\",1,[\"18\"]]]"));}),
"[project]/src/app/resources/request-proposal/MultiSelectField.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const MultiSelectField = ({ name, values = [], value = "", className, onChange, placeholder, options, required, isMulti = true, dropUp = false })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: "button",
                className: `w-full border border-gray-300 font-semibold px-3 md:px-5 py-2 md:py-3 rounded-xl text-left focus:border-1 focus:border-primary focus:outline-none  ${className}`,
                onClick: handleToggle,
                children: [
                    isMulti ? values.length > 0 ? values.join(", ") : placeholder : value || placeholder,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "float-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `multi-select-dropdown absolute z-[1000] bg-white border border-gray-300 rounded-xl max-h-80 overflow-auto mt-1 transition-all duration-200 ease-in-out ${dropUp ? "bottom-full mb-1" : "top-full"}`,
                style: {
                    left: 0,
                    right: 0
                },
                children: isMulti ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 text-gray-400",
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                            lineNumber: 88,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors duration-150",
                            onClick: ()=>handleSingleSelect(placeholder),
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/src/app/resources/request-proposal/MultiSelectField.js",
                            lineNumber: 106,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = MultiSelectField;
}),
"[project]/src/components/StatusPopup.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const StatusPopup = ({ status, title, message, onClose })=>{
    const isSuccess = status === "success";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e9bb0512c5708c3a" + " " + "fixed inset-0 flex items-center justify-center bg-black/50 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e9bb0512c5708c3a" + " " + "bg-white rounded-xl shadow-lg w-full max-w-sm p-6 text-center animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e9bb0512c5708c3a" + " " + "flex justify-center mb-4",
                        children: isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e9bb0512c5708c3a" + " " + "bg-green-100 p-4 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                className: "jsx-e9bb0512c5708c3a" + " " + "w-8 h-8 text-green-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e9bb0512c5708c3a" + " " + "bg-red-100 p-4 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                className: "jsx-e9bb0512c5708c3a" + " " + "w-8 h-8 text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-e9bb0512c5708c3a" + " " + "text-xl font-semibold mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusPopup.jsx",
                        lineNumber: 39,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-e9bb0512c5708c3a" + " " + "text-gray-600 mb-6",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusPopup.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "jsx-e9bb0512c5708c3a" + " " + `px-4 py-2 rounded-xl font-medium text-white ${isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = StatusPopup;
}),
"[project]/src/app/resources/request-proposal/Form.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/request-proposal/Stepper.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-google-recaptcha/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/countries.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intl-tel-input/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/request-proposal/MultiSelectField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusPopup.jsx [app-ssr] (ecmascript)");
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
// Add loading skeleton component
const LoadingSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-gray-200 rounded w-1/3 mb-8"
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-32 bg-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                        lineNumber: 18,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-14 bg-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                        lineNumber: 19,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-4 md:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-14 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                lineNumber: 21,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-14 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                lineNumber: 22,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-14 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                lineNumber: 23,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                        lineNumber: 20,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/request-proposal/Form.js",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Reusable Input Component
const InputField = ({ type = "text", name, value, onChange, placeholder, required, className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        name: name,
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        required: required,
        className: `w-full border border-gray-300 font-semibold px-3 md:px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none ${className}`
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Form.js",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function CustomIntlTelInput({ value, onChange, placeholder, defaultCountry }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultCountry);
    const [phoneValue, setPhoneValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find((c)=>c[1] === defaultCountry.toLowerCase());
        if (country) {
            setSelectedCountry(country[1]);
            const dialCode = `+${country[2]}`;
            if (!value || value === "") {
                const initialValue = `${dialCode} `;
                setPhoneValue(initialValue);
            } else if (!value.startsWith("+")) {
                setPhoneValue(`${dialCode} ${value}`);
            } else {
                setPhoneValue(value);
            }
        }
    }, [
        defaultCountry,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const filteredCountries = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].filter((country)=>country[0].toLowerCase().includes(searchTerm.toLowerCase()) || country[2].includes(searchTerm));
    const handleCountrySelect = (country)=>{
        const dialCode = `+${country[2]}`;
        const currentNumber = phoneValue.replace(/^\+\d+\s*/, "");
        const newValue = `${dialCode} ${currentNumber}`;
        setSelectedCountry(country[1]);
        setPhoneValue(newValue);
        const hasActualNumber = currentNumber.trim().length > 0;
        onChange(hasActualNumber, hasActualNumber ? newValue : "", {
            iso2: country[1],
            dialCode: country[2]
        }, hasActualNumber ? newValue : "", "");
        setIsOpen(false);
        setSearchTerm("");
        setTimeout(()=>inputRef.current?.focus(), 0);
    };
    const handlePhoneInputChange = (e)=>{
        const newValue = e.target.value;
        const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find((c)=>c[1] === selectedCountry);
        const dialCode = country ? `+${country[2]}` : "";
        const finalValue = !newValue.startsWith(dialCode) ? `${dialCode} ${newValue.replace(/^\+\d+\s*/, "")}` : newValue;
        setPhoneValue(finalValue);
        const hasActualNumber = finalValue.replace(/[\s+()-]/g, "").length > dialCode.replace("+", "").length;
        onChange(hasActualNumber, hasActualNumber ? finalValue : "", {
            iso2: selectedCountry,
            dialCode: country?.[2]
        }, hasActualNumber ? finalValue : "", "");
    };
    const handleIntlInputChange = (isValid, value, countryData, number, ext)=>{
        const dialCode = countryData ? `+${countryData.dialCode}` : "";
        const finalValue = value && !value.startsWith(dialCode) ? `${dialCode} ${value.replace(/^\+\d+\s*/, "")}` : value || "";
        setPhoneValue(finalValue);
        const hasActualNumber = finalValue.replace(/[\s+()-]/g, "").length > dialCode.replace("+", "").length;
        const validNumber = hasActualNumber && isValid;
        onChange(validNumber, validNumber ? finalValue === value ? value : finalValue : "", countryData, validNumber ? finalValue === value ? number : finalValue : "", ext);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "intl-tel-input-wrapper",
        ref: dropdownRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "intl-tel-input-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "custom-flag-dropdown",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "selected-flag",
                            onClick: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                setIsOpen(!isOpen);
                            },
                            "aria-expanded": isOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `fi fi-${selectedCountry}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "arrow-icon",
                                    children: "▾"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "country-list-dropdown",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-box",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        placeholder: "Search country...",
                                        className: "search-input",
                                        autoFocus: true,
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "country-list",
                                    children: [
                                        filteredCountries.map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "country-item",
                                                onClick: ()=>handleCountrySelect(country),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `fi fi-${country[1]}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "country-name",
                                                        children: country[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dial-code",
                                                        children: [
                                                            "+",
                                                            country[2]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, `${country[1]}-${index}`, true, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)),
                                        !filteredCountries.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "no-results",
                                            children: "No countries found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    value: phoneValue,
                    onChange: handlePhoneInputChange,
                    placeholder: placeholder,
                    className: "phone-input-field"
                }, void 0, false, {
                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/resources/request-proposal/Form.js",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/Form.js",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
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
function RequestProposalForm() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [verified, setVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [popup, setPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stepperKey, setStepperKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [defaultCountry, setDefaultCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("in");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    // Fetch country code based on IP address
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controller = new AbortController();
        Promise.race([
            fetch("https://ipapi.co/json/", {
                signal: controller.signal
            }),
            new Promise((_, reject)=>setTimeout(()=>reject("timeout"), 3000))
        ]).then((res)=>res.json()).then((data)=>setDefaultCountry(data.country_code.toLowerCase())).catch(()=>setDefaultCountry("in"));
        return ()=>controller.abort();
    }, []);
    // Simulate component initialization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 100);
        return ()=>clearTimeout(timer);
    }, []);
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
            return `Please complete: ${errors.join(", ")}`;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full transition-all duration-300 ",
        children: [
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingSkeleton, {}, void 0, false, {
                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                    lineNumber: 478,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                lineNumber: 477,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fade-in rounded-md px-2 md:px-6 p-4 md:p-6 shadow-xl border-b-6 transition-all duration-300 border-t-6 border-b-gray-500 border-t-primary max-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[#5C6371] font-semibold text-center mb-4 md:mb-6",
                        children: "Request a Proposal Today"
                    }, void 0, false, {
                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Step"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 md:mb-6 border px-3 md:px-5 py-3 rounded-xl border-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "!font-semibold mb-3",
                                                        children: "What are your main goals for purchasing leads?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 505,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                        children: GOALS.map((goal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        value: goal,
                                                                        checked: formData.goals.includes(goal),
                                                                        onChange: (e)=>handleGoalChange(goal, e.target.checked),
                                                                        className: "accent-primary h-5 w-5 rounded-xl border border-gray-300 flex-shrink-0",
                                                                        disabled: isSubmitting
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                        lineNumber: 511,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "md:!text-base !text-sm",
                                                                        children: goal
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                        lineNumber: 521,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, goal, true, {
                                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                lineNumber: 510,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 508,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 504,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 md:mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "ICP",
                                                    value: formData.ICP,
                                                    onChange: handleMultiSelectChange,
                                                    placeholder: "Ready with your ICP / Buyer Persona?",
                                                    options: SELECT_OPTIONS.icp,
                                                    required: true,
                                                    isMulti: false,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 526,
                                                columnNumber: 17
                                            }, this),
                                            formData.ICP !== "No" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-6 mb-4 md:mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        name: "region",
                                                        values: formData.region,
                                                        onChange: handleMultiSelectChange,
                                                        placeholder: "Select Region",
                                                        options: SELECT_OPTIONS.region,
                                                        required: formData.ICP === "Yes",
                                                        isMulti: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 540,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        name: "level",
                                                        values: formData.level,
                                                        onChange: handleMultiSelectChange,
                                                        placeholder: "Select Job Level",
                                                        options: SELECT_OPTIONS.level,
                                                        required: formData.ICP === "Yes",
                                                        isMulti: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 550,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        name: "function",
                                                        values: formData.function,
                                                        onChange: handleMultiSelectChange,
                                                        placeholder: "Select Job Function",
                                                        options: SELECT_OPTIONS.function,
                                                        required: formData.ICP === "Yes",
                                                        isMulti: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 560,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-6 md:mb-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        name: "funnel",
                                                        values: formData.funnel,
                                                        onChange: handleMultiSelectChange,
                                                        placeholder: "Select Funnel Stage",
                                                        options: SELECT_OPTIONS.funnel,
                                                        required: true,
                                                        isMulti: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 573,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$MultiSelectField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        name: "timeline",
                                                        value: formData.timeline,
                                                        onChange: handleMultiSelectChange,
                                                        placeholder: "Select Timeline",
                                                        options: SELECT_OPTIONS.timeline,
                                                        required: true,
                                                        isMulti: false,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 583,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        type: "number",
                                                        name: "quantity",
                                                        value: formData.quantity,
                                                        onChange: handleChange,
                                                        placeholder: "Enter Quantity",
                                                        min: 0,
                                                        required: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 593,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                        lineNumber: 502,
                                        columnNumber: 15
                                    }, this),
                                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-50 border-l-4 border-red-500 p-3 mt-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-700",
                                            children: message
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                            lineNumber: 607,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                        lineNumber: 606,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                lineNumber: 501,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Stepper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Step"], {
                                children: ({ onComplete })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>handleSubmit(e, onComplete),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        name: "firstName",
                                                        value: formData.firstName,
                                                        onChange: handleChange,
                                                        placeholder: "First Name",
                                                        required: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 619,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        name: "lastName",
                                                        value: formData.lastName,
                                                        onChange: handleChange,
                                                        placeholder: "Last Name",
                                                        required: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 627,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        type: "email",
                                                        name: "email",
                                                        value: formData.email,
                                                        onChange: handleChange,
                                                        placeholder: "Enter Business Email",
                                                        required: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 635,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomIntlTelInput, {
                                                            value: formData.phoneNumber,
                                                            onChange: handlePhoneChange,
                                                            placeholder: "Enter phone number",
                                                            defaultCountry: defaultCountry,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                            lineNumber: 645,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 644,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        name: "jobTitle",
                                                        value: formData.jobTitle,
                                                        onChange: handleChange,
                                                        placeholder: "Enter Job Title",
                                                        required: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        name: "company",
                                                        value: formData.company,
                                                        onChange: handleChange,
                                                        placeholder: "Enter Company",
                                                        required: true,
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                        lineNumber: 661,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 618,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 md:mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "question",
                                                    value: formData.question || "",
                                                    onChange: handleChange,
                                                    placeholder: "Enter your question here",
                                                    rows: 3,
                                                    className: "w-full px-5 py-3 rounded-xl border focus:border-1 border-gray-300 font-semibold focus:border-primary focus:outline-none",
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                    lineNumber: 671,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 670,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 md:mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row md:items-center gap-4 md:justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 md:justify-start justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    name: "consent",
                                                                    checked: formData.consent,
                                                                    onChange: handleChange,
                                                                    className: "accent-primary h-5 w-5 rounded-xl border border-gray-300 mt-1 flex-shrink-0",
                                                                    required: true,
                                                                    disabled: isSubmitting
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                    lineNumber: 684,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold",
                                                                            children: "Your consent matters to us*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                            lineNumber: 694,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                            lineNumber: 697,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "I agree to Bissbay's",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "/terms-of-use",
                                                                            className: "text-primary",
                                                                            children: "Terms of Use"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                            lineNumber: 698,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " ",
                                                                        "and",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "/policies/privacy-policy",
                                                                            target: "_blank",
                                                                            className: "text-primary",
                                                                            children: "Policy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                            lineNumber: 702,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                    lineNumber: 693,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                            lineNumber: 683,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:w-[304px] h-[78px] flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                                sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                                                                onChange: ()=>setVerified(true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                                lineNumber: 713,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            type: "submit",
                                                            label: isSubmitting ? "Submitting..." : "Submit",
                                                            disabled: !validateStep2() || isSubmitting,
                                                            customClass: validateStep2() && !isSubmitting ? "cursor-pointer" : "!bg-gray-400 cursor-not-allowed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                            lineNumber: 718,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                    lineNumber: 682,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                                lineNumber: 681,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                        lineNumber: 617,
                                        columnNumber: 17
                                    }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                                lineNumber: 615,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stepperKey, true, {
                        fileName: "[project]/src/app/resources/request-proposal/Form.js",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                lineNumber: 481,
                columnNumber: 9
            }, this),
            popup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                status: popup.status,
                message: "A precision-tailored proposal designed to deliver results is on its way.",
                onClose: handlePopupClose
            }, void 0, false, {
                fileName: "[project]/src/app/resources/request-proposal/Form.js",
                lineNumber: 739,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/resources/request-proposal/Form.js",
        lineNumber: 475,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = RequestProposalForm;
}),
"[project]/src/app/resources/request-proposal/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/resources/request-proposal/Form.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function RequestProposal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:min-h-screen flex justify-center items-start md:items-center pb-6 md:pb-0 p-4 md:p-0 pt-[115px] md:pt-0 mx-auto max-w-4xl p-x md:px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$resources$2f$request$2d$proposal$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/resources/request-proposal/page.js",
            lineNumber: 8,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/resources/request-proposal/page.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = RequestProposal;
}),
];

//# sourceMappingURL=_1855f0e0._.js.map