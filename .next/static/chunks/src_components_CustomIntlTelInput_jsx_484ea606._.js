(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CustomIntlTelInput.jsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_libphonenumber-js-utils_dist_libphonenumber_d2bcd317.js",
  "static/chunks/node_modules_684c1aa5._.js",
  "static/chunks/_fb47d149._.js",
  {
    "path": "static/chunks/node_modules_93e36cc9._.css",
    "included": [
      "[project]/node_modules/react-intl-tel-input/dist/main.css [app-client] (css)",
      "[project]/node_modules/flag-icons/css/flag-icons.min.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_react-intl-tel-input_dist_main_css_bad6b30c._.single.css",
      "static/chunks/node_modules_flag-icons_css_flag-icons_min_css_bad6b30c._.single.css"
    ]
  },
  "static/chunks/src_components_CustomIntlTelInput_jsx_2c769d76._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/components/CustomIntlTelInput.jsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);