(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/CaseStudiesPopup.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-google-recaptcha/lib/esm/index.js [app-client] (ecmascript) <locals>");
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
function CustomIntlTelInput(param) {
    let { value, onChange, placeholder, defaultCountry, reset } = param;
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
                "CustomIntlTelInput.useEffect.country": (c)=>c[1] === defaultCountry.toLowerCase()
            }["CustomIntlTelInput.useEffect.country"]);
            if (country) {
                setSelectedCountry(country[1]);
                const dialCode = "+".concat(country[2]);
                setPhoneValue(dialCode);
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
                    setPhoneValue("+".concat(country[2]));
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
                    setPhoneValue("+".concat(country[2]));
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
        const newValue = currentNumber ? "".concat(dialCode, " ").concat(currentNumber).trim() : dialCode;
        setPhoneValue(newValue);
        if (currentNumber.trim()) {
            onChange(true, newValue, {
                iso2: country[1]
            }, newValue);
        } else {
            onChange(false, "", {
                iso2: country[1]
            }, "");
        }
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
            const newValue = "".concat(dialCode, " ").concat(value.replace(/^\+\d+\s*/, "")).trim();
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
        const inputValue = e.target.value;
        const country = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$countries$2e$json__$28$json$29$__["default"].find((c)=>c[1] === selectedCountry);
        const dialCode = country ? "+".concat(country[2]) : "";
        const cleanedValue = inputValue.replace(/[^\d\s+]/g, '');
        if (!cleanedValue.startsWith(dialCode)) {
            const cleanNumber = cleanedValue.replace(/^\+\d+\s*/, "").replace(/\D/g, '');
            const finalValue = cleanNumber ? "".concat(dialCode, " ").concat(cleanNumber).trim() : dialCode;
            setPhoneValue(finalValue);
            const hasActualNumber = cleanNumber.trim().length > 0;
            onChange(hasActualNumber, hasActualNumber ? finalValue : "", {
                iso2: selectedCountry,
                dialCode: country[2]
            }, hasActualNumber ? finalValue : "");
        } else {
            const numberPart = cleanedValue.replace(dialCode, "").trim().replace(/\D/g, '');
            const newValue = numberPart ? "".concat(dialCode, " ").concat(numberPart) : dialCode;
            setPhoneValue(newValue);
            const hasActualNumber = numberPart.length > 0;
            onChange(hasActualNumber, hasActualNumber ? newValue : "", {
                iso2: selectedCountry,
                dialCode: country[2]
            }, hasActualNumber ? newValue : "");
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
                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "arrow-icon",
                                    children: "▾"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                            lineNumber: 126,
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
                                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                    lineNumber: 138,
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
                                                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "country-name",
                                                        children: country[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dial-code",
                                                        children: [
                                                            "+",
                                                            country[2]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, "".concat(country[1], "-").concat(index), true, {
                                                fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this)),
                                        filteredCountries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "no-results",
                                            children: "No countries found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                    lineNumber: 125,
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
                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    value: phoneValue,
                    onChange: handlePhoneInputChange,
                    placeholder: placeholder,
                    className: "phone-input-field"
                }, void 0, false, {
                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(CustomIntlTelInput, "9JJlZnZk2xMM7+1ZiDtg2npRSws=");
_c = CustomIntlTelInput;
function CaseStudiesPopup(param) {
    let { isOpen, onClose } = param;
    _s1();
    const [contactData, setContactData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        jobTitle: "",
        phoneNumber: "",
        businessEmail: "",
        companyName: "",
        question: "",
        consent: false
    });
    const [defaultCountry, setDefaultCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("in");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [popup, setPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resetPhone, setResetPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verified, setVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CaseStudiesPopup.useEffect": ()=>{
            const controller = new AbortController();
            Promise.race([
                fetch("https://ipapi.co/json/", {
                    signal: controller.signal
                }),
                new Promise({
                    "CaseStudiesPopup.useEffect": (_, reject)=>setTimeout({
                            "CaseStudiesPopup.useEffect": ()=>reject("timeout")
                        }["CaseStudiesPopup.useEffect"], 3000)
                }["CaseStudiesPopup.useEffect"])
            ]).then({
                "CaseStudiesPopup.useEffect": (res)=>res.json()
            }["CaseStudiesPopup.useEffect"]).then({
                "CaseStudiesPopup.useEffect": (data)=>setDefaultCountry(data.country_code.toLowerCase())
            }["CaseStudiesPopup.useEffect"]).catch({
                "CaseStudiesPopup.useEffect": ()=>setDefaultCountry("in")
            }["CaseStudiesPopup.useEffect"]);
            return ({
                "CaseStudiesPopup.useEffect": ()=>controller.abort()
            })["CaseStudiesPopup.useEffect"];
        }
    }["CaseStudiesPopup.useEffect"], []);
    // Handle ESC key press to close modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CaseStudiesPopup.useEffect": ()=>{
            const handleEsc = {
                "CaseStudiesPopup.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape") handleClose();
                }
            }["CaseStudiesPopup.useEffect.handleEsc"];
            if (isOpen) {
                document.addEventListener("keydown", handleEsc);
                // Prevent scrolling when modal is open
                document.body.style.overflow = "hidden";
            }
            return ({
                "CaseStudiesPopup.useEffect": ()=>{
                    document.removeEventListener("keydown", handleEsc);
                    document.body.style.overflow = "auto";
                }
            })["CaseStudiesPopup.useEffect"];
        }
    }["CaseStudiesPopup.useEffect"], [
        isOpen
    ]);
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setContactData((prev)=>({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const handlePhoneChange = (isValid, value, selectedCountryData, fullNumber)=>{
        setContactData((prev)=>({
                ...prev,
                phoneNumber: fullNumber || value || ""
            }));
    };
    const resetForm = ()=>{
        setContactData({
            firstName: "",
            lastName: "",
            jobTitle: "",
            phoneNumber: "",
            businessEmail: "",
            companyName: "",
            question: "",
            consent: false
        });
        setVerified(false);
        setResetPhone(true);
        setTimeout(()=>setResetPhone(false), 100);
    };
    const handlePopupClose = ()=>{
        setPopup(null);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/casestudies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            });
            const data = await response.json();
            if (response.ok) {
                resetForm();
                setPopup({
                    status: 'success',
                    title: 'Success!',
                    message: 'Thank you for your submission! We will get back to you soon.'
                });
                setTimeout(()=>{
                    onClose();
                }, 2000);
            } else {
                setPopup({
                    status: 'error',
                    title: 'Submission Failed',
                    message: data.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setPopup({
                status: 'error',
                title: 'Network Error',
                message: 'Please check your connection and try again.'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const isFormValid = ()=>{
        return contactData.firstName.trim() && contactData.lastName.trim() && contactData.businessEmail.trim() && contactData.phoneNumber.trim() && contactData.consent && verified;
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
                className: "bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative",
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
                                fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-6 pt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-xl text-center mb-2",
                                        children: "Explore Our Case Studies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-center",
                                        children: "Proven strategies. Real results. Learn how we help companies accelerate growth."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "firstName",
                                                    value: contactData.firstName,
                                                    onChange: handleChange,
                                                    placeholder: "First Name",
                                                    className: "w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                    required: true,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "lastName",
                                                    value: contactData.lastName,
                                                    onChange: handleChange,
                                                    placeholder: "Last Name",
                                                    className: "w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                    required: true,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 396,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "businessEmail",
                                                    value: contactData.businessEmail,
                                                    onChange: handleChange,
                                                    placeholder: "Business Email",
                                                    className: "w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                    required: true,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "companyName",
                                                    value: contactData.companyName,
                                                    onChange: handleChange,
                                                    placeholder: "Company Name",
                                                    className: "w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "jobTitle",
                                                    value: contactData.jobTitle,
                                                    onChange: handleChange,
                                                    placeholder: "Job Title",
                                                    className: "w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none",
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 430,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomIntlTelInput, {
                                                    value: contactData.phoneNumber,
                                                    onChange: handlePhoneChange,
                                                    placeholder: "Enter phone number",
                                                    defaultCountry: defaultCountry,
                                                    disabled: isSubmitting,
                                                    reset: resetPhone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 439,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "question",
                                            value: contactData.question,
                                            onChange: handleChange,
                                            placeholder: "Enter your question here",
                                            rows: 3,
                                            className: "w-full px-4 py-3 rounded-xl border focus:border-1 border-gray-300 font-semibold focus:border-primary focus:outline-none",
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                            lineNumber: 448,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                sitekey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                                                onChange: ()=>setVerified(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: !isFormValid() || isSubmitting,
                                                    className: "text-white font-semibold px-6 py-3 rounded-xl ".concat(isFormValid() && !isSubmitting ? "cursor-pointer bg-primary" : "cursor-not-allowed bg-gray-400"),
                                                    children: isSubmitting ? "Submitting..." : "Submit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            name: "consent",
                                                            checked: contactData.consent,
                                                            onChange: handleChange,
                                                            className: "accent-primary rounded-md border border-gray-300 w-5 h-5 flex-shrink-0 mt-0.5",
                                                            required: true,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                            lineNumber: 478,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold",
                                                                    children: "Your consent matters to us*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "I agree to Bissbay's",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "/terms-of-use",
                                                                    className: "text-primary",
                                                                    children: "Terms of Use"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 21
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
                                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                            lineNumber: 487,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                                    lineNumber: 477,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            popup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                status: popup.status,
                message: popup.message,
                onClose: handlePopupClose
            }, void 0, false, {
                fileName: "[project]/src/components/CaseStudiesPopup.jsx",
                lineNumber: 505,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CaseStudiesPopup.jsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s1(CaseStudiesPopup, "uY1wuPiUBjI91DsJ2mLJ5Eh8gmQ=");
_c1 = CaseStudiesPopup;
const __TURBOPACK__default__export__ = CaseStudiesPopup;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomIntlTelInput");
__turbopack_context__.k.register(_c1, "CaseStudiesPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MagicBento.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;
const cardData = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {}, void 0, false, {
            fileName: "[project]/src/components/MagicBento.jsx",
            lineNumber: 12,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#fff",
        title: "Zero Waste",
        description: "Focus resources on high-value accounts, not mass audiences."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {}, void 0, false, {
            fileName: "[project]/src/components/MagicBento.jsx",
            lineNumber: 18,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#fff",
        title: "Faster Wins",
        description: "Personalized campaigns drive quicker decisions in complex sales."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {}, void 0, false, {
            fileName: "[project]/src/components/MagicBento.jsx",
            lineNumber: 25,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#fff",
        title: "Stronger Loyalty",
        description: "Tailored experiences build lasting relationships"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"], {}, void 0, false, {
            fileName: "[project]/src/components/MagicBento.jsx",
            lineNumber: 31,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        color: "#fff",
        title: "Measurable ROI",
        description: "Directly track engagement, pipeline growth, and revenue impact."
    }
];
const createParticleElement = function(x, y) {
    let color = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_GLOW_COLOR;
    const el = document.createElement("div");
    el.className = "particle";
    el.style.cssText = "\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    background: rgba(".concat(color, ", 1);\n    box-shadow: 0 0 6px rgba(").concat(color, ", 0.6);\n    pointer-events: none;\n    z-index: 100;\n    left: ").concat(x, "px;\n    top: ").concat(y, "px;\n  ");
    return el;
};
const calculateSpotlightValues = (radius)=>({
        proximity: radius * 0.5,
        fadeDistance: radius * 0.75
    });
const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius)=>{
    const rect = card.getBoundingClientRect();
    const relativeX = (mouseX - rect.left) / rect.width * 100;
    const relativeY = (mouseY - rect.top) / rect.height * 100;
    card.style.setProperty("--glow-x", "".concat(relativeX, "%"));
    card.style.setProperty("--glow-y", "".concat(relativeY, "%"));
    card.style.setProperty("--glow-intensity", glow.toString());
    card.style.setProperty("--glow-radius", "".concat(radius, "px"));
};
const ParticleCard = (param)=>{
    let { children, className = "", disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = false, enableMagnetism = false } = param;
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const memoizedParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particlesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const magnetismAnimationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializeParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[initializeParticles]": ()=>{
            if (particlesInitialized.current || !cardRef.current) return;
            const { width, height } = cardRef.current.getBoundingClientRect();
            memoizedParticles.current = Array.from({
                length: particleCount
            }, {
                "ParticleCard.useCallback[initializeParticles]": ()=>createParticleElement(Math.random() * width, Math.random() * height, glowColor)
            }["ParticleCard.useCallback[initializeParticles]"]);
            particlesInitialized.current = true;
        }
    }["ParticleCard.useCallback[initializeParticles]"], [
        particleCount,
        glowColor
    ]);
    const clearAllParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[clearAllParticles]": ()=>{
            var _magnetismAnimationRef_current;
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
            (_magnetismAnimationRef_current = magnetismAnimationRef.current) === null || _magnetismAnimationRef_current === void 0 ? void 0 : _magnetismAnimationRef_current.kill();
            particlesRef.current.forEach({
                "ParticleCard.useCallback[clearAllParticles]": (particle)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(particle, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "back.in(1.7)",
                        onComplete: {
                            "ParticleCard.useCallback[clearAllParticles]": ()=>{
                                var _particle_parentNode;
                                (_particle_parentNode = particle.parentNode) === null || _particle_parentNode === void 0 ? void 0 : _particle_parentNode.removeChild(particle);
                            }
                        }["ParticleCard.useCallback[clearAllParticles]"]
                    });
                }
            }["ParticleCard.useCallback[clearAllParticles]"]);
            particlesRef.current = [];
        }
    }["ParticleCard.useCallback[clearAllParticles]"], []);
    const animateParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCard.useCallback[animateParticles]": ()=>{
            if (!cardRef.current || !isHoveredRef.current) return;
            if (!particlesInitialized.current) {
                initializeParticles();
            }
            memoizedParticles.current.forEach({
                "ParticleCard.useCallback[animateParticles]": (particle, index)=>{
                    const timeoutId = setTimeout({
                        "ParticleCard.useCallback[animateParticles].timeoutId": ()=>{
                            if (!isHoveredRef.current || !cardRef.current) return;
                            const clone = particle.cloneNode(true);
                            cardRef.current.appendChild(clone);
                            particlesRef.current.push(clone);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(clone, {
                                scale: 0,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 0.3,
                                ease: "back.out(1.7)"
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                x: (Math.random() - 0.5) * 100,
                                y: (Math.random() - 0.5) * 100,
                                rotation: Math.random() * 360,
                                duration: 2 + Math.random() * 2,
                                ease: "none",
                                repeat: -1,
                                yoyo: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(clone, {
                                opacity: 0.3,
                                duration: 1.5,
                                ease: "power2.inOut",
                                repeat: -1,
                                yoyo: true
                            });
                        }
                    }["ParticleCard.useCallback[animateParticles].timeoutId"], index * 100);
                    timeoutsRef.current.push(timeoutId);
                }
            }["ParticleCard.useCallback[animateParticles]"]);
        }
    }["ParticleCard.useCallback[animateParticles]"], [
        initializeParticles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleCard.useEffect": ()=>{
            if (disableAnimations || !cardRef.current) return;
            const element = cardRef.current;
            const handleMouseEnter = {
                "ParticleCard.useEffect.handleMouseEnter": ()=>{
                    isHoveredRef.current = true;
                    animateParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 5,
                            rotateY: 5,
                            duration: 0.3,
                            ease: "power2.out",
                            transformPerspective: 1000
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "ParticleCard.useEffect.handleMouseLeave": ()=>{
                    isHoveredRef.current = false;
                    clearAllParticles();
                    if (enableTilt) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                    if (enableMagnetism) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseLeave"];
            const handleMouseMove = {
                "ParticleCard.useEffect.handleMouseMove": (e)=>{
                    if (!enableTilt && !enableMagnetism) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    if (enableTilt) {
                        const rotateX = (y - centerY) / centerY * -10;
                        const rotateY = (x - centerX) / centerX * 10;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            rotateX,
                            rotateY,
                            duration: 0.1,
                            ease: "power2.out",
                            transformPerspective: 1000
                        });
                    }
                    if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;
                        magnetismAnimationRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(element, {
                            x: magnetX,
                            y: magnetY,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["ParticleCard.useEffect.handleMouseMove"];
            const handleClick = {
                "ParticleCard.useEffect.handleClick": (e)=>{
                    if (!clickEffect) return;
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                    const ripple = document.createElement("div");
                    ripple.style.cssText = "\n        position: absolute;\n        width: ".concat(maxDistance * 2, "px;\n        height: ").concat(maxDistance * 2, "px;\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(").concat(glowColor, ", 0.4) 0%, rgba(").concat(glowColor, ", 0.2) 30%, transparent 70%);\n        left: ").concat(x - maxDistance, "px;\n        top: ").concat(y - maxDistance, "px;\n        pointer-events: none;\n        z-index: 1000;\n      ");
                    element.appendChild(ripple);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ripple, {
                        scale: 0,
                        opacity: 1
                    }, {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        onComplete: {
                            "ParticleCard.useEffect.handleClick": ()=>ripple.remove()
                        }["ParticleCard.useEffect.handleClick"]
                    });
                }
            }["ParticleCard.useEffect.handleClick"];
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("click", handleClick);
            return ({
                "ParticleCard.useEffect": ()=>{
                    isHoveredRef.current = false;
                    element.removeEventListener("mouseenter", handleMouseEnter);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                    element.removeEventListener("mousemove", handleMouseMove);
                    element.removeEventListener("click", handleClick);
                    clearAllParticles();
                }
            })["ParticleCard.useEffect"];
        }
    }["ParticleCard.useEffect"], [
        animateParticles,
        clearAllParticles,
        disableAnimations,
        enableTilt,
        enableMagnetism,
        clickEffect,
        glowColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "".concat(className, " relative overflow-hidden"),
        style: {
            ...style,
            position: "relative",
            overflow: "hidden"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/MagicBento.jsx",
        lineNumber: 316,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticleCard, "8H+Z7UUSOy00JZLTsdrtDvxLl+c=");
_c = ParticleCard;
const GlobalSpotlight = (param)=>{
    let { gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR } = param;
    _s1();
    const spotlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInsideSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSpotlight.useEffect": ()=>{
            if (disableAnimations || !(gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) || !enabled) return;
            const spotlight = document.createElement("div");
            spotlight.className = "global-spotlight";
            spotlight.style.cssText = "\n      position: fixed;\n      width: 800px;\n      height: 800px;\n      border-radius: 50%;\n      pointer-events: none;\n      background: radial-gradient(circle,\n        rgba(".concat(glowColor, ", 0.15) 0%,\n        rgba(").concat(glowColor, ", 0.08) 15%,\n        rgba(").concat(glowColor, ", 0.04) 25%,\n        rgba(").concat(glowColor, ", 0.02) 40%,\n        rgba(").concat(glowColor, ", 0.01) 65%,\n        transparent 70%\n      );\n      z-index: 200;\n      opacity: 0;\n      transform: translate(-50%, -50%);\n      mix-blend-mode: screen;\n    ");
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;
            const handleMouseMove = {
                "GlobalSpotlight.useEffect.handleMouseMove": (e)=>{
                    if (!spotlightRef.current || !gridRef.current) return;
                    const section = gridRef.current.closest(".bento-section");
                    const rect = section === null || section === void 0 ? void 0 : section.getBoundingClientRect();
                    const mouseInside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
                    isInsideSection.current = mouseInside || false;
                    const cards = gridRef.current.querySelectorAll(".card");
                    if (!mouseInside) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                        cards.forEach({
                            "GlobalSpotlight.useEffect.handleMouseMove": (card)=>{
                                card.style.setProperty("--glow-intensity", "0");
                            }
                        }["GlobalSpotlight.useEffect.handleMouseMove"]);
                        return;
                    }
                    const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                    let minDistance = Infinity;
                    cards.forEach({
                        "GlobalSpotlight.useEffect.handleMouseMove": (card)=>{
                            const cardElement = card;
                            const cardRect = cardElement.getBoundingClientRect();
                            const centerX = cardRect.left + cardRect.width / 2;
                            const centerY = cardRect.top + cardRect.height / 2;
                            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                            const effectiveDistance = Math.max(0, distance);
                            minDistance = Math.min(minDistance, effectiveDistance);
                            let glowIntensity = 0;
                            if (effectiveDistance <= proximity) {
                                glowIntensity = 1;
                            } else if (effectiveDistance <= fadeDistance) {
                                glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                            }
                            updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                        }
                    }["GlobalSpotlight.useEffect.handleMouseMove"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                        left: e.clientX,
                        top: e.clientY,
                        duration: 0.1,
                        ease: "power2.out"
                    });
                    const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? (fadeDistance - minDistance) / (fadeDistance - proximity) * 0.8 : 0;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                        opacity: targetOpacity,
                        duration: targetOpacity > 0 ? 0.2 : 0.5,
                        ease: "power2.out"
                    });
                }
            }["GlobalSpotlight.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "GlobalSpotlight.useEffect.handleMouseLeave": ()=>{
                    var _gridRef_current;
                    isInsideSection.current = false;
                    (_gridRef_current = gridRef.current) === null || _gridRef_current === void 0 ? void 0 : _gridRef_current.querySelectorAll(".card").forEach({
                        "GlobalSpotlight.useEffect.handleMouseLeave": (card)=>{
                            card.style.setProperty("--glow-intensity", "0");
                        }
                    }["GlobalSpotlight.useEffect.handleMouseLeave"]);
                    if (spotlightRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(spotlightRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }["GlobalSpotlight.useEffect.handleMouseLeave"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "GlobalSpotlight.useEffect": ()=>{
                    var _spotlightRef_current_parentNode, _spotlightRef_current;
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                    (_spotlightRef_current = spotlightRef.current) === null || _spotlightRef_current === void 0 ? void 0 : (_spotlightRef_current_parentNode = _spotlightRef_current.parentNode) === null || _spotlightRef_current_parentNode === void 0 ? void 0 : _spotlightRef_current_parentNode.removeChild(spotlightRef.current);
                }
            })["GlobalSpotlight.useEffect"];
        }
    }["GlobalSpotlight.useEffect"], [
        gridRef,
        disableAnimations,
        enabled,
        spotlightRadius,
        glowColor
    ]);
    return null;
};
_s1(GlobalSpotlight, "T4X9HpgVM7a5ZqCd6QjO7E5uETY=");
_c1 = GlobalSpotlight;
const BentoCardGrid = (param)=>{
    let { children, gridRef } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bento-section grid gap-2 w-full select-none relative",
        style: {
            fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"
        },
        ref: gridRef,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/MagicBento.jsx",
        lineNumber: 472,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = BentoCardGrid;
const useMobileDetection = ()=>{
    _s2();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobileDetection.useEffect": ()=>{
            const checkMobile = {
                "useMobileDetection.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
            }["useMobileDetection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "useMobileDetection.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["useMobileDetection.useEffect"];
        }
    }["useMobileDetection.useEffect"], []);
    return isMobile;
};
_s2(useMobileDetection, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
const MagicBento = (param)=>{
    let { textAutoHide = true, enableStars = true, enableSpotlight = true, enableBorderGlow = true, data = cardData, disableAnimations = false, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, particleCount = DEFAULT_PARTICLE_COUNT, enableTilt = false, glowColor = DEFAULT_GLOW_COLOR, clickEffect = true, enableMagnetism = true } = param;
    _s3();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n          .bento-section {\n            --glow-x: 50%;\n            --glow-y: 50%;\n            --glow-intensity: 0;\n            --glow-radius: 200px;\n            --glow-color: ".concat(glowColor, ";\n            --border-color: #392e4e;\n            --background-dark: #060010;\n            --white: hsl(0, 0%, 100%);\n            --purple-primary: rgba(132, 0, 255, 1);\n            --purple-glow: rgba(132, 0, 255, 0.2);\n            --purple-border: rgba(132, 0, 255, 0.8);\n          }\n          \n          .card-responsive {\n            grid-template-columns: 1fr;\n            margin: 0 auto;\n            \n          }\n          \n          @media (min-width: 600px) {\n            .card-responsive {\n              grid-template-columns: repeat(2, 1fr);\n            }\n          }\n          \n          @media (min-width: 1024px) {\n            .card-responsive {\n              grid-template-columns: repeat(4, 1fr);\n            }\n            \n            \n          }\n          \n          .card--border-glow::after {\n            content: '';\n            position: absolute;\n            inset: 0;\n            padding: 6px;\n            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),\n                rgba(").concat(glowColor, ", calc(var(--glow-intensity) * 0.8)) 0%,\n                rgba(").concat(glowColor, ", calc(var(--glow-intensity) * 0.4)) 30%,\n                transparent 60%);\n            border-radius: inherit;\n            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n            mask-composite: subtract;\n            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n            -webkit-mask-composite: xor;\n            pointer-events: none;\n            transition: opacity 0.3s ease;\n            z-index: 1;\n          }\n          \n          .card--border-glow:hover::after {\n            opacity: 1;\n          }\n          \n          .card--border-glow:hover {\n            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(").concat(glowColor, ", 0.2);\n          }\n          \n          .particle::before {\n            content: '';\n            position: absolute;\n            top: -2px;\n            left: -2px;\n            right: -2px;\n            bottom: -2px;\n            background: rgba(").concat(glowColor, ", 0.2);\n            border-radius: 50%;\n            z-index: -1;\n          }\n          \n          .particle-container:hover {\n            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(").concat(glowColor, ", 0.2);\n          }\n          \n          .text-clamp-1 {\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 1;\n            line-clamp: 1;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          }\n          \n          .text-clamp-2 {\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n            line-clamp: 2;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          }\n          \n          @media (max-width: 599px) {\n            .card-responsive {\n              grid-template-columns: 1fr;\n              margin: 0 auto;\n             \n            }\n            \n            .card-responsive .card {\n              width: 100%;\n             \n            }\n          }\n        ")
            }, void 0, false, {
                fileName: "[project]/src/components/MagicBento.jsx",
                lineNumber: 517,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            enableSpotlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalSpotlight, {
                gridRef: gridRef,
                disableAnimations: shouldDisableAnimations,
                enabled: enableSpotlight,
                spotlightRadius: spotlightRadius,
                glowColor: glowColor
            }, void 0, false, {
                fileName: "[project]/src/components/MagicBento.jsx",
                lineNumber: 630,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BentoCardGrid, {
                gridRef: gridRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-responsive grid gap-4 lg:gap-6",
                    children: data.map((card, index)=>{
                        const baseClassName = "card flex flex-col justify-between  max-w-full !p-4 font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ".concat(enableBorderGlow ? "card--border-glow" : "");
                        const cardStyle = {
                            backgroundColor: "#fff" || "var(--background-dark)",
                            borderColor: "var(--border-color)",
                            color: "var(--white)",
                            "--glow-x": "50%",
                            "--glow-y": "50%",
                            "--glow-intensity": "0",
                            "--glow-radius": "200px"
                        };
                        if (enableStars) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleCard, {
                                className: baseClassName,
                                style: cardStyle,
                                disableAnimations: shouldDisableAnimations,
                                particleCount: particleCount,
                                glowColor: glowColor,
                                enableTilt: enableTilt,
                                clickEffect: clickEffect,
                                enableMagnetism: enableMagnetism,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: " mb-2 ".concat(textAutoHide ? "text-clamp-1" : ""),
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MagicBento.jsx",
                                        lineNumber: 669,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "".concat(textAutoHide ? "text-clamp-2" : ""),
                                        children: card.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MagicBento.jsx",
                                        lineNumber: 672,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/MagicBento.jsx",
                                lineNumber: 658,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: baseClassName,
                            style: cardStyle,
                            ref: (el)=>{
                                if (!el) return;
                                const handleMouseMove = (e)=>{
                                    if (shouldDisableAnimations) return;
                                    const rect = el.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;
                                    if (enableTilt) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                            rotateX: 5,
                                            rotateY: 5,
                                            duration: 0.1,
                                            ease: "power2.out",
                                            transformPerspective: 1000
                                        });
                                    }
                                    if (enableMagnetism) {
                                        const magnetX = (x - centerX) * 0.05;
                                        const magnetY = (y - centerY) * 0.05;
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                            x: magnetX,
                                            y: magnetY,
                                            duration: 0.3,
                                            ease: "power2.out"
                                        });
                                    }
                                };
                                const handleMouseLeave = ()=>{
                                    if (shouldDisableAnimations) return;
                                    if (enableTilt) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                            rotateX: 0,
                                            rotateY: 0,
                                            duration: 0.3,
                                            ease: "power2.out"
                                        });
                                    }
                                    if (enableMagnetism) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                            x: 0,
                                            y: 0,
                                            duration: 0.3,
                                            ease: "power2.out"
                                        });
                                    }
                                };
                                const handleClick = (e)=>{
                                    if (!clickEffect || shouldDisableAnimations) return;
                                    const rect = el.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                                    const ripple = document.createElement("div");
                                    ripple.style.cssText = "\n                      position: absolute;\n                      width: ".concat(maxDistance * 2, "px;\n                      height: ").concat(maxDistance * 2, "px;\n                      border-radius: 50%;\n                      background: radial-gradient(circle, rgba(").concat(glowColor, ", 0.4) 0%, rgba(").concat(glowColor, ", 0.2) 30%, transparent 70%);\n                      left: ").concat(x - maxDistance, "px;\n                      top: ").concat(y - maxDistance, "px;\n                      pointer-events: none;\n                      z-index: 1000;\n                    ");
                                    el.appendChild(ripple);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ripple, {
                                        scale: 0,
                                        opacity: 1
                                    }, {
                                        scale: 1,
                                        opacity: 0,
                                        duration: 0.8,
                                        ease: "power2.out",
                                        onComplete: ()=>ripple.remove()
                                    });
                                };
                                el.addEventListener("mousemove", handleMouseMove);
                                el.addEventListener("mouseleave", handleMouseLeave);
                                el.addEventListener("click", handleClick);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card__content flex flex-col justify-between items-start relative text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row justify-start items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-primary",
                                                children: card.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MagicBento.jsx",
                                                lineNumber: 795,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MagicBento.jsx",
                                                lineNumber: 796,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MagicBento.jsx",
                                        lineNumber: 794,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "".concat(textAutoHide ? "text-clamp-2" : ""),
                                        children: card.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MagicBento.jsx",
                                        lineNumber: 798,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MagicBento.jsx",
                                lineNumber: 793,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/src/components/MagicBento.jsx",
                            lineNumber: 680,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/MagicBento.jsx",
                    lineNumber: 640,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/MagicBento.jsx",
                lineNumber: 639,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s3(MagicBento, "XUa7xZJiDL4EXgyb7a00zBxNt6w=", false, function() {
    return [
        useMobileDetection
    ];
});
_c3 = MagicBento;
const __TURBOPACK__default__export__ = MagicBento;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ParticleCard");
__turbopack_context__.k.register(_c1, "GlobalSpotlight");
__turbopack_context__.k.register(_c2, "BentoCardGrid");
__turbopack_context__.k.register(_c3, "MagicBento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/what-we-do/demand-generation/Hero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaseStudiesPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CaseStudiesPopup.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MagicBento$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MagicBento.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Hero = ()=>{
    _s();
    const [isCaseStudiesOpen, setIsCaseStudiesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const benefits = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/TARGET.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 36,
                height: 36
            }, void 0, false, {
                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Proactive Targeting",
            description: "Predictive intent signals identify in-market prospects."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/sales.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 36,
                height: 36
            }, void 0, false, {
                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Align sales & marketing",
            description: "Seamless lead handoffs drive higher conversions."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/SUSTAINABLE.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 36,
                height: 36
            }, void 0, false, {
                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Extended Lead Nurture",
            description: "Keep your brand top of mind until buyers are ready."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Icons/SCALING.svg",
                alt: "Revenue Stagnation",
                className: "flex-shrink-0",
                width: 36,
                height: 36
            }, void 0, false, {
                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Maximize ROI",
            description: "Cut wasted spend and double down on what works."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-1/2 mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "group",
                                        children: [
                                            "Your End-to-End",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative",
                                                children: [
                                                    " ",
                                                    "Demand Generation"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            "Powerhouse"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "my-4 lg:my-6 !text-primary transition-colors duration-300",
                                        style: {
                                            animationDelay: "0.2s"
                                        },
                                        children: "Ignite Demand Accelerate Growth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "lg:!text-[1.125rem] lg:!leading-relaxed mb-6 lg:mb-8 lg:!font-semibold !text-[#5C6371]",
                                        children: [
                                            "Growth isn't accidental, it's engineered.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "At BISSBAY, we don't just generate leads; we build high-performance revenue engines that transform interest into real pipeline and closed deals."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 animate-on-scroll",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                customClass: " transform transition-all duration-300 ease-in-out",
                                                variant: "primary",
                                                label: "Schedule Your Consultation",
                                                onClick: ()=>setIsModalOpen(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "outline",
                                                customClass: " transform transition-all duration-300 ease-in-out ",
                                                label: "View Case Studies",
                                                onClick: ()=>setIsCaseStudiesOpen(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-100 lg:w-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    initial: {
                                        opacity: 0,
                                        x: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.2
                                    },
                                    className: "hero-gradient rounded-3xl p-4 md:p-8 relative mt-6 md:mt-0 h-[300px] md:h-[500px]",
                                    style: {
                                        maxWidth: "624px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-8 left-4 md:top-1/4 md:left-1/4 bg-white p-2 md:p-6 rounded-xl shadow-lg",
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -10,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        repeat: Infinity,
                                                        duration: 4,
                                                        ease: "easeInOut"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                                                            size: 24,
                                                            className: "md:!w-12 md:!h-12 text-primary mb-1 md:mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 w-12 md:h-2 md:w-20 bg-gray-200 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-primary",
                                                                initial: {
                                                                    width: 0
                                                                },
                                                                animate: {
                                                                    width: "100%"
                                                                },
                                                                transition: {
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    repeatType: "reverse"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-28 right-4 md:top-1/2 md:right-1/4 bg-white p-2 md:p-6 rounded-xl shadow-lg",
                                                    animate: {
                                                        y: [
                                                            0,
                                                            10,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        repeat: Infinity,
                                                        duration: 4.5,
                                                        ease: "easeInOut",
                                                        delay: 0.5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            size: 24,
                                                            className: "md:!w-12 md:!h-12 text-primary mb-1 md:mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 w-12 md:h-2 md:w-20 bg-gray-200 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-primary",
                                                                initial: {
                                                                    width: 0
                                                                },
                                                                animate: {
                                                                    width: "100%"
                                                                },
                                                                transition: {
                                                                    duration: 2.5,
                                                                    repeat: Infinity,
                                                                    repeatType: "reverse"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 169,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-20 left-4 md:bottom-1/4 md:left-1/3 bg-white p-2 md:p-6 rounded-xl shadow-lg",
                                                    animate: {
                                                        y: [
                                                            0,
                                                            8,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        repeat: Infinity,
                                                        duration: 5,
                                                        ease: "easeInOut",
                                                        delay: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                            size: 24,
                                                            className: "md:!w-12 md:!h-12 text-primary mb-1 md:mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 w-12 md:h-2 md:w-20 bg-gray-200 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-primary",
                                                                initial: {
                                                                    width: 0
                                                                },
                                                                animate: {
                                                                    width: "100%"
                                                                },
                                                                transition: {
                                                                    duration: 3,
                                                                    repeat: Infinity,
                                                                    repeatType: "reverse"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                                lineNumber: 198,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-8 rounded-full shadow-xl",
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.05,
                                                            1
                                                        ]
                                                    },
                                                    transition: {
                                                        repeat: Infinity,
                                                        duration: 3,
                                                        ease: "easeInOut"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                        size: 32,
                                                        className: "md:!w-16 md:!h-16 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute inset-0 w-full h-full",
                                                    style: {
                                                        zIndex: -1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M180,150 Q250,120 320,250",
                                                            stroke: "#FF4200",
                                                            strokeWidth: "2",
                                                            fill: "none",
                                                            initial: {
                                                                pathLength: 0,
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                pathLength: 1,
                                                                opacity: 0.3
                                                            },
                                                            transition: {
                                                                duration: 2
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M400,180 Q350,220 320,250",
                                                            stroke: "#FF4200",
                                                            strokeWidth: "2",
                                                            fill: "none",
                                                            initial: {
                                                                pathLength: 0,
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                pathLength: 1,
                                                                opacity: 0.3
                                                            },
                                                            transition: {
                                                                duration: 2,
                                                                delay: 0.5
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M250,350 Q280,300 320,250",
                                                            stroke: "#FF4200",
                                                            strokeWidth: "2",
                                                            fill: "none",
                                                            initial: {
                                                                pathLength: 0,
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                pathLength: 1,
                                                                opacity: 0.3
                                                            },
                                                            transition: {
                                                                duration: 2,
                                                                delay: 1
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                            lineNumber: 245,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 lg:mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MagicBento$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            textAutoHide: false,
                            enableStars: false,
                            enableSpotlight: true,
                            enableBorderGlow: true,
                            enableTilt: true,
                            enableMagnetism: true,
                            clickEffect: true,
                            spotlightRadius: 300,
                            particleCount: 12,
                            glowColor: "255,66,0",
                            data: benefits
                        }, void 0, false, {
                            fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                            lineNumber: 262,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                        lineNumber: 261,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                lineNumber: 277,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaseStudiesPopup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCaseStudiesOpen,
                onClose: ()=>setIsCaseStudiesOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/what-we-do/demand-generation/Hero.js",
                lineNumber: 281,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Hero, "Atrcj+rd/8lrDlnVoAGlbMfIwB4=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4c728eb5._.js.map