(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/StatusPopup.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$public$2f$countries$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/public/countries.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/react-intl-tel-input/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/react-google-recaptcha/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$primereact$2f$calendar$2f$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/primereact/calendar/calendar.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
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
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCountry);
    const [phoneValue, setPhoneValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            const country = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$public$2f$countries$2e$json__$28$json$29$__["default"].find({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            if (reset) {
                const country = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$public$2f$countries$2e$json__$28$json$29$__["default"].find({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomIntlTelInput.useEffect": ()=>{
            if (value === "") {
                const country = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$public$2f$countries$2e$json__$28$json$29$__["default"].find({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    const filteredCountries = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$public$2f$countries$2e$json__$28$json$29$__["default"].filter((country)=>country[0].toLowerCase().includes(searchTerm.toLowerCase()) || country[2].includes(searchTerm));
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
        const country = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$public$2f$countries$2e$json__$28$json$29$__["default"].find((c)=>c[1] === selectedCountry);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "intl-tel-input-wrapper",
        ref: dropdownRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "intl-tel-input-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "custom-flag-dropdown",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "selected-flag",
                            onClick: toggleDropdown,
                            "aria-expanded": isOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fi fi-".concat(selectedCountry)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "arrow-icon",
                                    children: "▾"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "country-list-dropdown",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-box",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        placeholder: "Search country...",
                                        className: "search-input",
                                        autoFocus: true,
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "country-list",
                                    children: [
                                        filteredCountries.map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "country-item",
                                                onClick: ()=>handleCountrySelect(country),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fi fi-".concat(country[1])
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "country-name",
                                                        children: country[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dial-code",
                                                        children: [
                                                            "+",
                                                            country[2]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, "".concat(country[1], "-").concat(index), true, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)),
                                        filteredCountries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "no-results",
                                            children: "No countries found"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$intl$2d$tel$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    value: phoneValue,
                    onChange: handlePhoneInputChange,
                    placeholder: placeholder,
                    className: "phone-input-field",
                    disabled: isSubmitting
                }, void 0, false, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
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
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getTomorrowDate());
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTimes[0]);
    const [selectedTimeIST, setSelectedTimeIST] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentTimeIndex, setCurrentTimeIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [userTimezone, setUserTimezone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Asia/Kolkata");
    const [userCountry, setUserCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("IN");
    const [timezoneLoading, setTimezoneLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: (contactData === null || contactData === void 0 ? void 0 : contactData.firstName) || "",
        lastName: (contactData === null || contactData === void 0 ? void 0 : contactData.lastName) || "",
        email: (contactData === null || contactData === void 0 ? void 0 : contactData.businessEmail) || "",
        phone: (contactData === null || contactData === void 0 ? void 0 : contactData.phoneNumber) || "",
        message: "",
        consent: false
    });
    // Detect user's timezone and country based on IP
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetPhone, setResetPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verified, setVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const renderClientDetailsForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 overflow-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "!text-lg font-semibold",
                                children: "Client Details"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                lineNumber: 543,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                            lineNumber: 542,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "firstName",
                                                name: "firstName",
                                                placeholder: "First Name",
                                                value: formData.firstName,
                                                onChange: handleInputChange,
                                                className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 549,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "lastName",
                                                name: "lastName",
                                                placeholder: "Last Name",
                                                value: formData.lastName,
                                                onChange: handleInputChange,
                                                className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 562,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 561,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 548,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                placeholder: "Email",
                                                value: formData.email,
                                                onChange: handleInputChange,
                                                className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 577,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 576,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomIntlTelInput, {
                                                value: formData.phone,
                                                onChange: handlePhoneChange,
                                                placeholder: "Phone Number",
                                                defaultCountry: (userCountry === null || userCountry === void 0 ? void 0 : userCountry.toLowerCase()) || "in",
                                                reset: resetPhone,
                                                isSubmitting: isSubmitting
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 588,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 575,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "message",
                                        name: "message",
                                        placeholder: "Message (optional)",
                                        value: formData.message,
                                        onChange: handleInputChange,
                                        rows: "3",
                                        className: "w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 600,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex mt-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 612,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                            lineNumber: 547,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                    lineNumber: 541,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 flex justify-between border-t border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    name: "consent",
                                    checked: formData.consent,
                                    onChange: handleInputChange,
                                    className: "accent-primary h-5 w-5 rounded-xl border border-gray-300 flex-shrink-0",
                                    required: true,
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 624,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Your consent matters to us*"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 634,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 635,
                                            columnNumber: 13
                                        }, this),
                                        "I agree to Bissbay's",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/terms-of-use",
                                            className: "text-primary",
                                            children: "Terms of Use"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 636,
                                            columnNumber: 13
                                        }, this),
                                        " ",
                                        "and",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/policies/privacy-policy",
                                            target: "_blank",
                                            className: "text-primary",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 638,
                                            columnNumber: 13
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 633,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                            lineNumber: 623,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "outlinegray",
                                    label: "Go back",
                                    customClass: "hover:!bg-[#1F2937] text-[#1F2937] hover:text-white hover:no-underline hover:border-2 hover:border-[#1F2937]",
                                    onClick: handlePrevStep,
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 644,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "submit",
                                    label: isSubmitting ? "Submitting..." : "Submit",
                                    disabled: !isFormValid() || isSubmitting,
                                    customClass: !isFormValid() || isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                    lineNumber: 651,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                            lineNumber: 643,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                    lineNumber: 622,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
            lineNumber: 540,
            columnNumber: 5
        }, this);
    // Calendar View (Step 1)
    const renderCalendarView = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-r border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "!text-lg font-semibold mb-4 text-left",
                                        children: "Pick your spot"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 669,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-f0d41214bef201d5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$primereact$2f$calendar$2f$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                value: selectedDate,
                                                onChange: handleDateChange,
                                                inline: true,
                                                minDate: new Date(),
                                                dateFormat: "yy-mm-dd",
                                                view: "date",
                                                selectOtherMonths: true,
                                                showOtherMonths: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 672,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                id: "f0d41214bef201d5",
                                                children: ".p-datepicker.p-component.p-datepicker-inline{width:400px!important;max-width:400px!important;overflow:hidden!important}.p-datepicker .p-datepicker-calendar-container{overflow:hidden!important}.p-datepicker .p-datepicker-calendar{width:100%!important;overflow:hidden!important}.p-datepicker .p-datepicker-calendar td{width:40px!important;height:40px!important;padding:4px!important}.p-datepicker .p-datepicker-calendar td span{width:32px!important;height:32px!important;margin:0!important;padding:0!important;line-height:32px!important}.scrollbar-hide.jsx-f0d41214bef201d5{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide.jsx-f0d41214bef201d5::-webkit-scrollbar{display:none}"
                                            }, void 0, false, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 671,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-4  flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-black mb-4 font-medium text-left",
                                        children: timezoneLoading ? "Detecting timezone..." : "Time zone: ".concat(getTimezoneDisplayName(userTimezone))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "!text-sm font-medium mb-3 text-gray-700",
                                        children: [
                                            "Availability for ",
                                            formatDayOfWeek(selectedDate)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: timezoneLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500",
                                            children: "Loading time slots..."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 744,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: scrollLeft,
                                                    disabled: currentTimeIndex === 0,
                                                    className: "flex-shrink-0 bg-white shadow-md rounded-full p-2 transition-colors border border-gray-200 ".concat(currentTimeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronLeft"], {
                                                        size: 20,
                                                        className: "text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                        lineNumber: 757,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex gap-2 justify-center",
                                                    children: visibleTimes.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                            lineNumber: 763,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                    lineNumber: 761,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: scrollRight,
                                                    disabled: currentTimeIndex >= getFilteredTimes().length - 3,
                                                    className: "flex-shrink-0 bg-white shadow-md rounded-full p-2 transition-colors border border-gray-200 ".concat(currentTimeIndex >= getFilteredTimes().length - 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                                        size: 20,
                                                        className: "text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                        lineNumber: 802,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                    lineNumber: 793,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                            lineNumber: 746,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 742,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "!text-base font-semibold mb-3",
                                        children: "Service Details"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 810,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 p-3 rounded-lg text-center",
                                        style: {
                                            backgroundColor: 'rgba(255, 66, 0, 0.05)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "!text-base font-medium text-gray-800",
                                                children: "Free Consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 813,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-sm text-gray-600 mt-1",
                                                children: [
                                                    formatDate(selectedDate),
                                                    " at ",
                                                    selectedTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 814,
                                                columnNumber: 15
                                            }, this),
                                            selectedTime && selectedTimeIST && userCountry !== 'IN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-xs text-gray-500",
                                                children: [
                                                    "(",
                                                    selectedTimeIST,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 818,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-sm text-gray-600",
                                                children: "Virtual Meeting"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 822,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "!text-sm text-gray-600",
                                                children: "45 mins"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                                lineNumber: 823,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                        lineNumber: 812,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                                lineNumber: 726,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                    lineNumber: 665,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-t border-gray-200 flex items-center justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Next",
                        onClick: handleNextStep
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                    lineNumber: 830,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
            lineNumber: 664,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full transition-opacity duration-300 ".concat(currentStep === 1 ? 'opacity-100' : 'opacity-0 hidden'),
                children: renderCalendarView()
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full transition-opacity duration-300 ".concat(currentStep === 2 ? 'opacity-100' : 'opacity-0 hidden'),
                children: renderClientDetailsForm()
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
                lineNumber: 843,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx",
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
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingButton",
    ()=>BookingButton,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$BookingCalendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingCalendar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/StatusPopup.jsx [app-client] (ecmascript)");
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
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [popup, setPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resetCalendar, setResetCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle ESC key press to close modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-[#00000060] backdrop-blur-sm transition-opacity",
                onClick: handleBackdropClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-4xl h-auto overflow-hidden bg-white rounded-xl shadow-xl transform transition-all duration-300 ".concat(mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
                            style: {
                                position: 'absolute',
                                top: '16px',
                                right: '16px'
                            },
                            "aria-label": "Close modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {
                                className: "text-gray-700",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$BookingCalendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClose: handleClose,
                                showPopup: showPopup,
                                resetTrigger: resetCalendar
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            popup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                status: popup.status,
                title: popup.title,
                message: popup.message,
                onClose: handlePopupClose
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
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
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: label,
                variant: variant,
                customClass: customClass,
                onClick: ()=>setIsModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingModal, {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx",
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
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SolutionSection1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2d$i18next$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next-i18next/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/components/BookingModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AnimatedCard = (param)=>{
    let { heading = "", paragraph = "", className = "", width = "w-full", height = "h-86", icon, isAutoAnimated = false, animationDelay = 0, isActive = false, onCardClick, cardIndex } = param;
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
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-xl z-10 bg-white w-full h-full md:p-6 p-4 flex flex-col justify-center items-center text-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform h-[45%] mx-4 md:mx-6 absolute ".concat(shouldShowContent ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"),
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "!font-semibold leading-tight !text-[#1F2937]",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ".concat(shouldShowContent ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0", " space-y-3 px-2 md:px-6"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "leading-relaxed ",
                            style: {
                                lineHeight: "normal"
                            },
                            children: paragraph
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedCard, "zhyDXfi5mywWFyDpGtOUslLZUeg=");
_c = AnimatedCard;
function SolutionSection1() {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])("translation");
    const [domLoaded, setDomLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
            heading: "Defining Clear Goals",
            paragraph: "We analyze your growth targets and past performance to craft a strategic roadmap that aligns with your business vision-ensuring measurable success.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/DEFINE.svg",
                alt: "Defining Clear Goals",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Pinpointing Your Ideal Customers",
            paragraph: "Through data-driven research, we identify your Ideal Customer Profile (ICP) and key-decision makers, so you focus on the right prospects from day one.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/PINPOINT.svg",
                alt: "Pinpointing Your Ideal Customers",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Sharpening Positioning & Messaging",
            paragraph: "By working closely with your sales team, we uncover real customer pain points and craft compelling, conversion-driven messaging that resonates and builds trust.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/SHARPENING.svg",
                alt: "Sharpening Positioning & Messaging",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 174,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Creating Impactful, Lead-Generating Content",
            paragraph: "From thought leadership to sales-driven assets, we develop high-value content that engages, nurtures, and positions you as a trusted industry leader.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/IMPACTFUL.svg",
                alt: "Creating Impactful Content",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 189,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Activating the Right Channels",
            paragraph: "Your audience is actively searching for solutions. We position you where it matters most, capturing immediate opportunities and establishing a consistent demand-generation system.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/ACTIVATING.svg",
                alt: "Activating the Right Channels",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 203,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Data-Driven Transparency and Trust",
            paragraph: "Data powers everything we do and drives smarter decisions. With unified access across teams, we enable fast, informed collaboration. Our commitment to transparency isn't just a value; it's a catalyst for sustainable growth. ",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/DATA_DRIVEN.svg",
                alt: "Data-Driven Transparency",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 217,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Testing, Refining & Scaling for Maximum ROI",
            paragraph: "Marketing isn't static. We continuously test, optimize, and scale campaigns, refining creative, messaging, and targeting to accelerate conversions and revenue growth.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/ROI.svg",
                alt: "Testing, Refining & Scaling for Maximum ROI",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        },
        {
            heading: "Cultivating Collaborative Innovation",
            paragraph: "We believe the best solutions are built together. By co-creating strategies with our clients, we solve real-world challenges and spark meaningful innovation across industries.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/INTELLIGENCE_AI.svg",
                alt: "Cultivating Collaborative Innovation",
                width: 48,
                height: 48,
                style: {
                    width: '3rem',
                    height: '3rem'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 245,
                columnNumber: 9
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-4 md:pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-4 lg:mb-6 !font-semibold text-center",
                            children: "Executing your go-to-market with precision and purpose, while we handle the challenges for you."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    domLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-4 gap-3 lg:gap-6",
                        children: cardData.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 hover:border-2 hover:border-primary border-transparent rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCard, {
                                    heading: card.heading,
                                    paragraph: card.paragraph,
                                    icon: card.icon,
                                    className: "!h-[320px] md:h-[300px]",
                                    isAutoAnimated: animateCards,
                                    animationDelay: index * 300,
                                    isActive: activeCardIndex === index,
                                    onCardClick: (cardIndex)=>{
                                        setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
                                    },
                                    cardIndex: index
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("center", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Book a Call",
                        onClick: ()=>setIsModalOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$components$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isModalOpen,
                        onClose: ()=>setIsModalOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bissbay-new-main/bissbay-new-main/src/Home-Page/solutionSection2.js",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
_s1(SolutionSection1, "6xUL3Yh8LYlH/IfEik0WroAXJ9Y=", false, function() {
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

//# sourceMappingURL=Downloads_bissbay-new-main_bissbay-new-main_src_10c6f311._.js.map