(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MapComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data,
    "default",
    ()=>GeoChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$charts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-google-charts/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const formatNumber = (num)=>{
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
    }
    return num.toString();
};
const countryData = [
    {
        name: "Aruba",
        code: "aw",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Afghanistan",
        code: "af",
        count: 44000,
        date: "Jan, 2025"
    },
    {
        name: "Angola",
        code: "ao",
        count: 85800,
        date: "Jan, 2025"
    },
    {
        name: "Anguilla",
        code: "ai",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Åland Islands",
        code: "ax",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Albania",
        code: "al",
        count: 47300,
        date: "Jan, 2025"
    },
    {
        name: "Andorra",
        code: "ad",
        count: 5280,
        date: "Jan, 2025"
    },
    {
        name: "United Arab Emirates",
        code: "ae",
        count: 770000,
        date: "Jan, 2025"
    },
    {
        name: "Argentina",
        code: "ar",
        count: 1540000,
        date: "Jan, 2025"
    },
    {
        name: "Armenia",
        code: "am",
        count: 37400,
        date: "Jan, 2025"
    },
    {
        name: "American Samoa",
        code: "as",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Antarctica",
        code: "aq",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "French Southern Territories",
        code: "tf",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Antigua and Barbuda",
        code: "ag",
        count: 3960,
        date: "Jan, 2025"
    },
    {
        name: "Australia",
        code: "au",
        count: 2000000,
        date: "Jan, 2025"
    },
    {
        name: "Austria",
        code: "at",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Azerbaijan",
        code: "az",
        count: 79200,
        date: "Jan, 2025"
    },
    {
        name: "Burundi",
        code: "bi",
        count: 8800,
        date: "Jan, 2025"
    },
    {
        name: "Belgium",
        code: "be",
        count: 550000,
        date: "Jan, 2025"
    },
    {
        name: "Benin",
        code: "bj",
        count: 40700,
        date: "Jan, 2025"
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        code: "bq",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Burkina Faso",
        code: "bf",
        count: 37400,
        date: "Jan, 2025"
    },
    {
        name: "Bangladesh",
        code: "bd",
        count: 550000,
        date: "Jan, 2025"
    },
    {
        name: "Bulgaria",
        code: "bg",
        count: 96800,
        date: "Jan, 2025"
    },
    {
        name: "Bahrain",
        code: "bh",
        count: 53900,
        date: "Jan, 2025"
    },
    {
        name: "Bahamas",
        code: "bs",
        count: 18700,
        date: "Jan, 2025"
    },
    {
        name: "Bosnia and Herzegovina",
        code: "ba",
        count: 39600,
        date: "Jan, 2025"
    },
    {
        name: "Saint Barthélemy",
        code: "bl",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Belarus",
        code: "by",
        count: 69300,
        date: "Jan, 2025"
    },
    {
        name: "Belize",
        code: "bz",
        count: 8800,
        date: "Jan, 2025"
    },
    {
        name: "Bermuda",
        code: "bm",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Bolivia",
        code: "bo",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Brazil",
        code: "br",
        count: 6000000,
        date: "Jan, 2025"
    },
    {
        name: "Barbados",
        code: "bb",
        count: 14300,
        date: "Jan, 2025"
    },
    {
        name: "Brunei Darussalam",
        code: "bn",
        count: 12100,
        date: "Jan, 2025"
    },
    {
        name: "Bhutan",
        code: "bt",
        count: 10010,
        date: "Jan, 2025"
    },
    {
        name: "Bouvet Island",
        code: "bv",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Botswana",
        code: "bw",
        count: 40700,
        date: "Jan, 2025"
    },
    {
        name: "Central African Republic",
        code: "cf",
        count: 10890,
        date: "Jan, 2025"
    },
    {
        name: "Canada",
        code: "ca",
        count: 4000000,
        date: "Jan, 2025"
    },
    {
        name: "Cocos (Keeling) Islands",
        code: "cc",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Switzerland",
        code: "ch",
        count: 550000,
        date: "Jan, 2025"
    },
    {
        name: "Chile",
        code: "cl",
        count: 1000000,
        date: "Jan, 2025"
    },
    {
        name: "China",
        code: "cn",
        count: 5000000,
        date: "Jan, 2025"
    },
    {
        name: "Côte d'Ivoire",
        code: "ci",
        count: 7480,
        date: "Jan, 2025"
    },
    {
        name: "Cameroon",
        code: "cm",
        count: 180000,
        date: "Jan, 2025"
    },
    {
        name: "Congo",
        code: "cd",
        count: 60500,
        date: "Jan, 2025"
    },
    {
        name: "Congo",
        code: "cg",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Cook Islands",
        code: "ck",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Colombia",
        code: "co",
        count: 1000000,
        date: "Jan, 2025"
    },
    {
        name: "Comoros",
        code: "km",
        count: 6050,
        date: "Jan, 2025"
    },
    {
        name: "Cabo Verde",
        code: "cv",
        count: 55000,
        date: "Jan, 2025"
    },
    {
        name: "Costa Rica",
        code: "cr",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Cuba",
        code: "cu",
        count: 34100,
        date: "Jan, 2025"
    },
    {
        name: "Curaçao",
        code: "cw",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Christmas Island",
        code: "cx",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Cayman Islands",
        code: "ky",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Cyprus",
        code: "cy",
        count: 49500,
        date: "Jan, 2025"
    },
    {
        name: "Czechia",
        code: "cz",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Germany",
        code: "de",
        count: 2500000,
        date: "Jan, 2025"
    },
    {
        name: "Djibouti",
        code: "dj",
        count: 6820,
        date: "Jan, 2025"
    },
    {
        name: "Dominica",
        code: "dm",
        count: 2200,
        date: "Jan, 2025"
    },
    {
        name: "Denmark",
        code: "dk",
        count: 330000,
        date: "Jan, 2025"
    },
    {
        name: "Dominican Republic",
        code: "do",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Algeria",
        code: "dz",
        count: 330000,
        date: "Jan, 2025"
    },
    {
        name: "Ecuador",
        code: "ec",
        count: 440000,
        date: "Jan, 2025"
    },
    {
        name: "Egypt",
        code: "eg",
        count: 1000000,
        date: "Jan, 2025"
    },
    {
        name: "Eritrea",
        code: "er",
        count: 7150,
        date: "Jan, 2025"
    },
    {
        name: "Western Sahara",
        code: "eh",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Spain",
        code: "es",
        count: 2000000,
        date: "Jan, 2025"
    },
    {
        name: "Estonia",
        code: "ee",
        count: 38500,
        date: "Jan, 2025"
    },
    {
        name: "Ethiopia",
        code: "et",
        count: 96800,
        date: "Jan, 2025"
    },
    {
        name: "Finland",
        code: "fi",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Fiji",
        code: "fj",
        count: 23100,
        date: "Jan, 2025"
    },
    {
        name: "Falkland Islands (Malvinas)",
        code: "fk",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "France",
        code: "fr",
        count: 3000000,
        date: "Jan, 2025"
    },
    {
        name: "Faroe Islands",
        code: "fo",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Micronesia",
        code: "fm",
        count: 1045,
        date: "Jan, 2025"
    },
    {
        name: "Gabon",
        code: "ga",
        count: 23100,
        date: "Jan, 2025"
    },
    {
        name: "United Kingdom",
        code: "gb",
        count: 4000000,
        date: "Jan, 2025"
    },
    {
        name: "Georgia",
        code: "ge",
        count: 57200,
        date: "Jan, 2025"
    },
    {
        name: "Guernsey",
        code: "gg",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Ghana",
        code: "gh",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Gibraltar",
        code: "gi",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Guinea",
        code: "gn",
        count: 24200,
        date: "Jan, 2025"
    },
    {
        name: "Guadeloupe",
        code: "gp",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Gambia",
        code: "gm",
        count: 10890,
        date: "Jan, 2025"
    },
    {
        name: "Guinea-Bissau",
        code: "gw",
        count: 2200,
        date: "Jan, 2025"
    },
    {
        name: "Equatorial Guinea",
        code: "gq",
        count: 3190,
        date: "Jan, 2025"
    },
    {
        name: "Greece",
        code: "gr",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Grenada",
        code: "gd",
        count: 3850,
        date: "Jan, 2025"
    },
    {
        name: "Greenland",
        code: "gl",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Guatemala",
        code: "gt",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "French Guiana",
        code: "gf",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Guam",
        code: "gu",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Guyana",
        code: "gy",
        count: 13200,
        date: "Jan, 2025"
    },
    {
        name: "Hong Kong",
        code: "hk",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Heard Island and McDonald Islands",
        code: "hm",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Honduras",
        code: "hn",
        count: 69300,
        date: "Jan, 2025"
    },
    {
        name: "Croatia",
        code: "hr",
        count: 79200,
        date: "Jan, 2025"
    },
    {
        name: "Haiti",
        code: "ht",
        count: 29700,
        date: "Jan, 2025"
    },
    {
        name: "Hungary",
        code: "hu",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Indonesia",
        code: "id",
        count: 4000000,
        date: "Jan, 2025"
    },
    {
        name: "Isle of Man",
        code: "im",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "India",
        code: "in",
        count: 12000000,
        date: "Jan, 2025"
    },
    {
        name: "British Indian Ocean Territory",
        code: "io",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Ireland",
        code: "ie",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Iran",
        code: "ir",
        count: 440000,
        date: "Jan, 2025"
    },
    {
        name: "Iraq",
        code: "iq",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Iceland",
        code: "is",
        count: 22000,
        date: "Jan, 2025"
    },
    {
        name: "Palestine",
        code: "ps",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Italy",
        code: "it",
        count: 2000000,
        date: "Jan, 2025"
    },
    {
        name: "Jamaica",
        code: "jm",
        count: 64900,
        date: "Jan, 2025"
    },
    {
        name: "Jersey",
        code: "je",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Jordan",
        code: "jo",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Japan",
        code: "jp",
        count: 330000,
        date: "Jan, 2025"
    },
    {
        name: "Kazakhstan",
        code: "kz",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Kenya",
        code: "ke",
        count: 440000,
        date: "Jan, 2025"
    },
    {
        name: "Kyrgyzstan",
        code: "kg",
        count: 22000,
        date: "Jan, 2025"
    },
    {
        name: "Cambodia",
        code: "kh",
        count: 99000,
        date: "Jan, 2025"
    },
    {
        name: "Kiribati",
        code: "ki",
        count: 8250,
        date: "Jan, 2025"
    },
    {
        name: "Saint Kitts and Nevis",
        code: "kn",
        count: 2090,
        date: "Jan, 2025"
    },
    {
        name: "Korea",
        code: "kr",
        count: 330000,
        date: "Jan, 2025"
    },
    {
        name: "Kuwait",
        code: "kw",
        count: 81400,
        date: "Jan, 2025"
    },
    {
        name: "Laos",
        code: "la",
        count: 10340,
        date: "Jan, 2025"
    },
    {
        name: "Lebanon",
        code: "lb",
        count: 89100,
        date: "Jan, 2025"
    },
    {
        name: "Liberia",
        code: "lr",
        count: 14300,
        date: "Jan, 2025"
    },
    {
        name: "Libya",
        code: "ly",
        count: 41800,
        date: "Jan, 2025"
    },
    {
        name: "Saint Lucia",
        code: "lc",
        count: 6050,
        date: "Jan, 2025"
    },
    {
        name: "Liechtenstein",
        code: "li",
        count: 2200,
        date: "Jan, 2025"
    },
    {
        name: "Sri Lanka",
        code: "lk",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Lesotho",
        code: "ls",
        count: 11000,
        date: "Jan, 2025"
    },
    {
        name: "Lithuania",
        code: "lt",
        count: 64900,
        date: "Jan, 2025"
    },
    {
        name: "Luxembourg",
        code: "lu",
        count: 35200,
        date: "Jan, 2025"
    },
    {
        name: "Latvia",
        code: "lv",
        count: 50600,
        date: "Jan, 2025"
    },
    {
        name: "Macao",
        code: "mo",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Saint Martin (French part)",
        code: "mf",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Morocco",
        code: "ma",
        count: 440000,
        date: "Jan, 2025"
    },
    {
        name: "Monaco",
        code: "mc",
        count: 4840,
        date: "Jan, 2025"
    },
    {
        name: "Moldova",
        code: "md",
        count: 36300,
        date: "Jan, 2025"
    },
    {
        name: "Madagascar",
        code: "mg",
        count: 39600,
        date: "Jan, 2025"
    },
    {
        name: "Maldives",
        code: "mv",
        count: 16500,
        date: "Jan, 2025"
    },
    {
        name: "Mexico",
        code: "mx",
        count: 3000000,
        date: "Jan, 2025"
    },
    {
        name: "Marshall Islands",
        code: "mh",
        count: 825,
        date: "Jan, 2025"
    },
    {
        name: "North Macedonia",
        code: "mk",
        count: 35200,
        date: "Jan, 2025"
    },
    {
        name: "Mali",
        code: "ml",
        count: 34100,
        date: "Jan, 2025"
    },
    {
        name: "Malta",
        code: "mt",
        count: 33000,
        date: "Jan, 2025"
    },
    {
        name: "Myanmar",
        code: "mm",
        count: 64900,
        date: "Jan, 2025"
    },
    {
        name: "Montenegro",
        code: "me",
        count: 13200,
        date: "Jan, 2025"
    },
    {
        name: "Mongolia",
        code: "mn",
        count: 27500,
        date: "Jan, 2025"
    },
    {
        name: "Northern Mariana Islands",
        code: "mp",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Mozambique",
        code: "mz",
        count: 57200,
        date: "Jan, 2025"
    },
    {
        name: "Mauritania",
        code: "mr",
        count: 12100,
        date: "Jan, 2025"
    },
    {
        name: "Montserrat",
        code: "ms",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Martinique",
        code: "mq",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Mauritius",
        code: "mu",
        count: 45100,
        date: "Jan, 2025"
    },
    {
        name: "Malawi",
        code: "mw",
        count: 31900,
        date: "Jan, 2025"
    },
    {
        name: "Malaysia",
        code: "my",
        count: 880000,
        date: "Jan, 2025"
    },
    {
        name: "Mayotte",
        code: "yt",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Namibia",
        code: "na",
        count: 39600,
        date: "Jan, 2025"
    },
    {
        name: "New Caledonia",
        code: "nc",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Niger",
        code: "ne",
        count: 13200,
        date: "Jan, 2025"
    },
    {
        name: "Norfolk Island",
        code: "nf",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Nigeria",
        code: "ng",
        count: 880000,
        date: "Jan, 2025"
    },
    {
        name: "Nicaragua",
        code: "ni",
        count: 58300,
        date: "Jan, 2025"
    },
    {
        name: "Niue",
        code: "nu",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Netherlands",
        code: "nl",
        count: 1210000,
        date: "Jan, 2025"
    },
    {
        name: "Norway",
        code: "no",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Nepal",
        code: "np",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Nauru",
        code: "nr",
        count: 220,
        date: "Jan, 2025"
    },
    {
        name: "New Zealand",
        code: "nz",
        count: 220000,
        date: "Jan, 2025"
    },
    {
        name: "Oman",
        code: "om",
        count: 78100,
        date: "Jan, 2025"
    },
    {
        name: "Pakistan",
        code: "pk",
        count: 1000000,
        date: "Jan, 2025"
    },
    {
        name: "Panama",
        code: "pa",
        count: 106700,
        date: "Jan, 2025"
    },
    {
        name: "Pitcairn",
        code: "pn",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Peru",
        code: "pe",
        count: 990000,
        date: "Jan, 2025"
    },
    {
        name: "Philippines",
        code: "ph",
        count: 1650000,
        date: "Jan, 2025"
    },
    {
        name: "Palau",
        code: "pw",
        count: 605,
        date: "Jan, 2025"
    },
    {
        name: "Papua New Guinea",
        code: "pg",
        count: 38500,
        date: "Jan, 2025"
    },
    {
        name: "Poland",
        code: "pl",
        count: 660000,
        date: "Jan, 2025"
    },
    {
        name: "Puerto Rico",
        code: "pr",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Korea",
        code: "kp",
        count: 330,
        date: "Jan, 2025"
    },
    {
        name: "Portugal",
        code: "pt",
        count: 440000,
        date: "Jan, 2025"
    },
    {
        name: "Paraguay",
        code: "py",
        count: 83600,
        date: "Jan, 2025"
    },
    {
        name: "Palestine",
        code: "ps",
        count: 35200,
        date: "Jan, 2025"
    },
    {
        name: "French Polynesia",
        code: "pf",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Qatar",
        code: "qa",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Réunion",
        code: "re",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Romania",
        code: "ro",
        count: 330000,
        date: "Jan, 2025"
    },
    {
        name: "Russian Federation",
        code: "ru",
        count: 770000,
        date: "Jan, 2025"
    },
    {
        name: "Rwanda",
        code: "rw",
        count: 39600,
        date: "Jan, 2025"
    },
    {
        name: "Saudi Arabia",
        code: "sa",
        count: 880000,
        date: "Jan, 2025"
    },
    {
        name: "Sudan",
        code: "sd",
        count: 45100,
        date: "Jan, 2025"
    },
    {
        name: "Senegal",
        code: "sn",
        count: 93500,
        date: "Jan, 2025"
    },
    {
        name: "Singapore",
        code: "sg",
        count: 330000,
        date: "Jan, 2025"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        code: "gs",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Saint Helena",
        code: "sh",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Svalbard and Jan Mayen",
        code: "sj",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Solomon Islands",
        code: "sb",
        count: 2420,
        date: "Jan, 2025"
    },
    {
        name: "Sierra Leone",
        code: "sl",
        count: 14300,
        date: "Jan, 2025"
    },
    {
        name: "El Salvador",
        code: "sv",
        count: 77000,
        date: "Jan, 2025"
    },
    {
        name: "San Marino",
        code: "sm",
        count: 1320,
        date: "Jan, 2025"
    },
    {
        name: "Somalia",
        code: "so",
        count: 26400,
        date: "Jan, 2025"
    },
    {
        name: "Saint Pierre and Miquelon",
        code: "pm",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Serbia",
        code: "rs",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "South Sudan",
        code: "ss",
        count: 9020,
        date: "Jan, 2025"
    },
    {
        name: "Sao Tome and Principe",
        code: "st",
        count: 990,
        date: "Jan, 2025"
    },
    {
        name: "Suriname",
        code: "sr",
        count: 11000,
        date: "Jan, 2025"
    },
    {
        name: "Slovakia",
        code: "sk",
        count: 74800,
        date: "Jan, 2025"
    },
    {
        name: "Slovenia",
        code: "si",
        count: 52800,
        date: "Jan, 2025"
    },
    {
        name: "Sweden",
        code: "se",
        count: 660000,
        date: "Jan, 2025"
    },
    {
        name: "Eswatini",
        code: "sz",
        count: 11000,
        date: "Jan, 2025"
    },
    {
        name: "Sint Maarten (Dutch part)",
        code: "sx",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Seychelles",
        code: "sc",
        count: 3740,
        date: "Jan, 2025"
    },
    {
        name: "Syria",
        code: "sy",
        count: 58300,
        date: "Jan, 2025"
    },
    {
        name: "Turks and Caicos Islands",
        code: "tc",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Chad",
        code: "td",
        count: 880000,
        date: "Jan, 2025"
    },
    {
        name: "Togo",
        code: "tg",
        count: 28600,
        date: "Jan, 2025"
    },
    {
        name: "Thailand",
        code: "th",
        count: 440000,
        date: "Jan, 2025"
    },
    {
        name: "Tajikistan",
        code: "tj",
        count: 8140,
        date: "Jan, 2025"
    },
    {
        name: "Tokelau",
        code: "tk",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Turkmenistan",
        code: "tm",
        count: 5170,
        date: "Jan, 2025"
    },
    {
        name: "Timor-Leste",
        code: "tl",
        count: 3520,
        date: "Jan, 2025"
    },
    {
        name: "Tonga",
        code: "to",
        count: 1320,
        date: "Jan, 2025"
    },
    {
        name: "Trinidad and Tobago",
        code: "tt",
        count: 58300,
        date: "Jan, 2025"
    },
    {
        name: "Tunisia",
        code: "tn",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Turkey",
        code: "tr",
        count: 1760000,
        date: "Jan, 2025"
    },
    {
        name: "Tuvalu",
        code: "tv",
        count: 220,
        date: "Jan, 2025"
    },
    {
        name: "Taiwan",
        code: "tw",
        count: 1000000,
        date: "Jan, 2025"
    },
    {
        name: "Tanzania",
        code: "tz",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Uganda",
        code: "ug",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "Ukraine",
        code: "ua",
        count: 330000,
        date: "Jan, 2025"
    },
    {
        name: "United States Minor Outlying Islands",
        code: "um",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Uruguay",
        code: "uy",
        count: 110000,
        date: "Jan, 2025"
    },
    {
        name: "United States",
        code: "us",
        count: 26000000,
        date: "Jan, 2025"
    },
    {
        name: "Uzbekistan",
        code: "uz",
        count: 68200,
        date: "Jan, 2025"
    },
    {
        name: "Holy See (Vatican City State)",
        code: "va",
        count: 385,
        date: "Jan, 2025"
    },
    {
        name: "Saint Vincent and the Grenadines",
        code: "vc",
        count: 2970,
        date: "Jan, 2025"
    },
    {
        name: "Bolivarian Republic of Venezuela",
        code: "ve",
        count: 440000,
        date: "Jan, 2025"
    },
    {
        name: "Virgin Islands, British",
        code: "vg",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Virgin Islands, U.S.",
        code: "vi",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Vietnam",
        code: "vn",
        count: 550000,
        date: "Jan, 2025"
    },
    {
        name: "Vanuatu",
        code: "vu",
        count: 1980,
        date: "Jan, 2025"
    },
    {
        name: "Wallis and Futuna",
        code: "wf",
        count: 0,
        date: "Jan, 2025"
    },
    {
        name: "Samoa",
        code: "ws",
        count: 1760,
        date: "Jan, 2025"
    },
    {
        name: "Yemen",
        code: "ye",
        count: 49500,
        date: "Jan, 2025"
    },
    {
        name: "South Africa",
        code: "za",
        count: 1430000,
        date: "Jan, 2025"
    },
    {
        name: "Zambia",
        code: "zm",
        count: 85800,
        date: "Jan, 2025"
    },
    {
        name: "Zimbabwe",
        code: "zw",
        count: 91300,
        date: "Jan, 2025"
    }
];
const useIsLargeScreen = ()=>{
    _s();
    const [isLargeScreen, setIsLargeScreen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useIsLargeScreen.useEffect": ()=>{
            const checkScreenSize = {
                "useIsLargeScreen.useEffect.checkScreenSize": ()=>{
                    setIsLargeScreen(window.innerWidth >= 1024);
                }
            }["useIsLargeScreen.useEffect.checkScreenSize"];
            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);
            return ({
                "useIsLargeScreen.useEffect": ()=>window.removeEventListener('resize', checkScreenSize)
            })["useIsLargeScreen.useEffect"];
        }
    }["useIsLargeScreen.useEffect"], []);
    return isLargeScreen;
};
_s(useIsLargeScreen, "wPZYqC6UUPv5twGNVUdFoPVsF/c=");
const data = [
    [
        "Country",
        "Customer Count",
        {
            role: "tooltip",
            type: "string",
            p: {
                html: true
            }
        }
    ],
    ...countryData.map((country)=>[
            country.code.toUpperCase(),
            country.count,
            '<div style="\n      padding: 16px 20px;\n      min-width: 200px;\n      border-radius: 12px;\n      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      font-family: \'Inter\', -apple-system, BlinkMacSystemFont, sans-serif;\n    ">\n      <div style="\n        font-size: 13px;\n        color: #6b7280;\n        font-weight: 500;\n        margin-bottom: 8px;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      ">'.concat(country.date, '</div>\n      <div style="\n        display: flex;\n        align-items: center;\n        gap: 12px;\n      ">\n        <img \n          src="https://flagcdn.com/w80/').concat(country.code, '.png" \n          width="28" \n          height="21" \n          style="\n            border-radius: 4px;\n            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n            border: 1px solid rgba(0, 0, 0, 0.1);\n          " \n          alt="').concat(country.name, ' flag"\n        />\n        <div style="flex: 1;">\n          <div style="\n            font-weight: 600;\n            font-size: 16px;\n            color: #1f2937;\n            margin-bottom: 2px;\n          ">').concat(country.name, '</div>\n          <div style="\n            font-size: 14px;\n            color: #ff4200;\n            font-weight: 600;\n          ">').concat(formatNumber(country.count), "</div>\n        </div>\n      </div>\n    </div>")
        ])
];
function GeoChart() {
    _s1();
    const chartRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [lastEvent, setLastEvent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const isLargeScreen = useIsLargeScreen();
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "GeoChart.useMemo[options]": ()=>({
                legend: "none",
                height: isLargeScreen ? 600 : 300,
                enableRegionInteractivity: true,
                defaultColor: "#DDDDDD",
                colorAxis: {
                    colors: [
                        "#ff4200"
                    ],
                    minValue: 0,
                    maxValue: Math.max(...countryData.map({
                        "GeoChart.useMemo[options]": (c)=>c.count
                    }["GeoChart.useMemo[options]"]))
                },
                tooltip: {
                    isHtml: true,
                    trigger: "focus",
                    showColorCode: false,
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    borderWidth: 0,
                    borderColor: "transparent",
                    textStyle: {
                        color: "#000",
                        fontSize: 16,
                        fontName: "Inter, sans-serif"
                    }
                }
            })
    }["GeoChart.useMemo[options]"], [
        isLargeScreen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "GeoChart.useEffect": ()=>{
            if (chartRef.current) {
                const container = chartRef.current.wrapper.getContainerElement();
                container.addEventListener('mouseover', {
                    "GeoChart.useEffect": (e)=>{
                        setLastEvent('mouseover');
                        const event = document.createEvent('SVGEvents');
                        event.initEvent('click', true, true);
                        e.target.dispatchEvent(event);
                    }
                }["GeoChart.useEffect"]);
                container.addEventListener('click', {
                    "GeoChart.useEffect": (e)=>{
                        setLastEvent('click');
                    }
                }["GeoChart.useEffect"]);
                if (chartRef.current.chartWrapper) {
                    google.visualization.events.addListener(chartRef.current.chartWrapper.getChart(), 'select', {
                        "GeoChart.useEffect": ()=>{
                            const chart = chartRef.current.chartWrapper.getChart();
                            const selection = chart.getSelection();
                            if (selection.length > 0) {
                                if (lastEvent === 'mouseover') {
                                    setTimeout({
                                        "GeoChart.useEffect": ()=>{
                                            chart.setSelection([]);
                                        }
                                    }["GeoChart.useEffect"], 100);
                                } else if (lastEvent === 'click') {
                                    console.log("Clicked on country:", selection);
                                }
                            }
                        }
                    }["GeoChart.useEffect"]);
                }
            }
        }
    }["GeoChart.useEffect"], [
        chartRef.current,
        lastEvent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$charts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chart"], {
            chartType: "GeoChart",
            width: "100%",
            data: data,
            options: options,
            ref: chartRef
        }, void 0, false, {
            fileName: "[project]/src/components/MapComponent.js",
            lineNumber: 1660,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MapComponent.js",
        lineNumber: 1659,
        columnNumber: 5
    }, this);
}
_s1(GeoChart, "q4bwa9529s2N4jxUxooYYAly+NU=", false, function() {
    return [
        useIsLargeScreen
    ];
});
_c = GeoChart;
var _c;
__turbopack_context__.k.register(_c, "GeoChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapComponent.js [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MapComponent.js [app-client] (ecmascript)"));
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/node_modules/react-google-charts/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chart",
    ()=>Chart,
    "GoogleDataTableColumnRoleType",
    ()=>GoogleDataTableColumnRoleType,
    "default",
    ()=>Chart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/**
 * Hook to load external script.
 * @param src - Source url to load.
 * @param onLoad - Success callback.
 * @param onError - Error callback.
 */ function useLoadScript(src) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onLoad = ()=>{
        setIsLoading(false);
        setIsSuccess(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLoadScript.useEffect": ()=>{
            if (!document) {
                const error = new Error("[ScriptLoadingError] document not defined when attempting to load ".concat(src));
                setError(error);
                return;
            }
            // Find script tag with same src in DOM.
            const foundScript = document.querySelector('script[src="'.concat(src, '"]'));
            // Call onLoad if script marked as loaded.
            if (foundScript === null || foundScript === void 0 ? void 0 : foundScript.dataset.loaded) {
                onLoad();
                return;
            }
            // Create or get existed tag.
            const script = foundScript || document.createElement("script");
            // Set src if no script was found.
            if (!foundScript) {
                script.src = src;
            }
            // Mark script as loaded on load event.
            const onLoadWithMarker = {
                "useLoadScript.useEffect.onLoadWithMarker": ()=>{
                    script.dataset.loaded = "1";
                    onLoad();
                }
            }["useLoadScript.useEffect.onLoadWithMarker"];
            script.addEventListener("load", onLoadWithMarker);
            script.addEventListener("error", {
                "useLoadScript.useEffect": (err)=>{
                    console.error("Failed to load script:", src, err);
                    const error = new Error("[ScriptLoadingError] Failed to load script: ".concat(src));
                    setError(error);
                }
            }["useLoadScript.useEffect"]);
            // Add to DOM if not yet added.
            if (!foundScript) {
                document.head.append(script);
            }
        }
    }["useLoadScript.useEffect"], []);
    return {
        isLoading,
        error,
        isSuccess
    };
}
const isGoogleReady = (google)=>{
    return google && google.charts;
};
const isGoogleChartsReady = (props, google)=>{
    const { controls, toolbarItems, getChartEditor } = props;
    return google && google.charts && google.visualization && google.visualization.ChartWrapper && google.visualization.Dashboard && (!controls || google.visualization.ChartWrapper) && (!getChartEditor || google.visualization.ChartEditor) && (!toolbarItems || google.visualization.drawToolbar);
};
const getGoogleInstanceFromWindow = (props)=>{
    // @ts-expect-error Getting object from global namespace.
    const google = window.google;
    return google;
};
/**
 * Hook to load Google Charts JS API.
 * @param params - Load parameters.
 * @param [params.chartVersion] - Chart version to load.
 * @param [params.chartPackages] - Packages to load.
 * @param [params.chartLanguage] - Languages to load.
 * @param [params.mapsApiKey] - Google Maps api key.
 * @returns
 */ function useLoadGoogleCharts(props) {
    const { chartVersion = "current", chartPackages = [
        "corechart",
        "controls"
    ], chartLanguage = "en", mapsApiKey } = props;
    const [googleCharts, setGoogleCharts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scriptInitializationError, setScriptInitializationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [googleChartsInitializationError, setGoogleChartsInitializationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isLoading, error: scriptLoadingError, isSuccess } = useLoadScript(props.chartLoaderScriptUrl || "https://www.gstatic.com/charts/loader.js");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLoadGoogleCharts.useEffect": ()=>{
            if (!isSuccess) {
                return;
            }
            const google = getGoogleInstanceFromWindow();
            if (!isGoogleReady(google)) {
                const error = new Error("[ScriptInitializationError] Script loaded but Google not attached to window.");
                setScriptInitializationError(error);
                return;
            }
            if (isGoogleChartsReady(props, google)) {
                setGoogleCharts(google);
                return;
            }
            google.charts.load(chartVersion, {
                packages: chartPackages,
                language: chartLanguage,
                mapsApiKey
            });
            google.charts.setOnLoadCallback({
                "useLoadGoogleCharts.useEffect": ()=>{
                    if (!isGoogleChartsReady(props, google)) {
                        const error = new Error("[GoogleChartsInitializationError] Google Charts not ready after load callback.");
                        console.error(error);
                        setGoogleChartsInitializationError(error);
                        return;
                    }
                    setGoogleCharts(google);
                }
            }["useLoadGoogleCharts.useEffect"]);
        }
    }["useLoadGoogleCharts.useEffect"], [
        isSuccess
    ]);
    return {
        error: scriptLoadingError || scriptInitializationError || googleChartsInitializationError,
        isLoading,
        google: googleCharts
    };
}
const chartDefaultProps = {
    // <DEPRECATED_PROPS>
    legend_toggle: false,
    // </DEPRECATED_PROPS>
    options: {},
    legendToggle: false,
    getChartWrapper: ()=>{},
    spreadSheetQueryParameters: {
        headers: 1,
        gid: 1
    },
    rootProps: {},
    chartWrapperParams: {},
    chartLoaderScriptUrl: "https://www.gstatic.com/charts/loader.js"
};
const GoogleChartControls = (props)=>{
    const { isReady, chartControls, filter } = props;
    if (!isReady || !chartControls || !(chartControls === null || chartControls === void 0 ? void 0 : chartControls.length)) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, chartControls.filter((param)=>{
        let { controlProp, control } = param;
        return filter ? filter({
            control,
            controlProp
        }) : true;
    }).map((param)=>{
        let { control } = param;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: control.getContainerId(),
            id: control.getContainerId()
        });
    }));
};
let uniqueID = 0;
const generateUniqueID = ()=>{
    uniqueID += 1;
    return "reactgooglegraph-".concat(uniqueID);
};
/**
 * An internal helper class for creating and managing Google Charts controls.
 * Offers high-level methods to interact with the Google Chart Controls.
 */ class GoogleChartControlsInternal {
}
/**
   * Initialize the controls once chart is ready
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartControlsInternal, "initializeControls", (googleChartControls)=>{
    for(let i = 0; i < googleChartControls.length; i += 1){
        const { controlType, options, controlWrapperParams } = googleChartControls[i].controlProp;
        if (controlWrapperParams && "state" in controlWrapperParams) {
            googleChartControls[i].control.setState(controlWrapperParams["state"]);
        }
        googleChartControls[i].control.setOptions(options);
        googleChartControls[i].control.setControlType(controlType);
    }
});
/**
   * listen to the control events (ready, statechange, error) specified in the controlEvents prop
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartControlsInternal, "listenToControlEvents", (googleChartControls, props)=>{
    const { google } = props;
    return googleChartControls.flatMap((chartControl)=>{
        const { control, controlProp } = chartControl;
        const { controlEvents = [] } = controlProp;
        return controlEvents.map((event)=>{
            const { callback, eventName } = event;
            return google.visualization.events.addListener(control, eventName, function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                callback({
                    chartWrapper: null,
                    controlWrapper: control,
                    props: props,
                    google: google,
                    eventArgs: args
                });
            });
        });
    });
});
/**
   * If controlID is not provided, generate a unique controlID
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartControlsInternal, "createControlId", (id)=>{
    let controlID;
    if (typeof id === "undefined") {
        controlID = "googlechart-control-".concat(generateUniqueID());
    } else {
        controlID = id;
    }
    return controlID;
});
/**
   * Map the control props to Google Chart Controls
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartControlsInternal, "createChartControls", (props)=>{
    const { controls, google } = props;
    if (!controls) {
        return null;
    }
    return controls.map((control, i)=>{
        const { controlID: controlIDMaybe, controlType, options: controlOptions, controlWrapperParams } = control;
        const controlID = GoogleChartControlsInternal.createControlId(controlIDMaybe);
        return {
            controlProp: control,
            control: new google.visualization.ControlWrapper({
                containerId: controlID,
                controlType,
                options: controlOptions,
                ...controlWrapperParams
            })
        };
    });
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartControlsInternal, "addControls", (props)=>{
    const { chartWrapper, chartDashboard } = props;
    const googleChartControls = GoogleChartControlsInternal.createChartControls(props);
    if (!googleChartControls || !chartDashboard || !chartWrapper) {
        return null;
    }
    chartDashboard.bind(googleChartControls.map((param)=>{
        let { control } = param;
        return control;
    }), chartWrapper);
    GoogleChartControlsInternal.initializeControls(googleChartControls);
    return googleChartControls;
});
const useCreateChartControls = (controls)=>{
    const [chartControls, setChartControls] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const controlAndProp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCreateChartControls.useMemo[controlAndProp]": ()=>{
            if (!chartControls || !controls) return null;
            return controls.map({
                "useCreateChartControls.useMemo[controlAndProp]": (controlProp, i)=>{
                    const control = chartControls[i];
                    return control ? {
                        controlProp,
                        control
                    } : undefined;
                }
            }["useCreateChartControls.useMemo[controlAndProp]"]).flatMap({
                "useCreateChartControls.useMemo[controlAndProp]": (controlAndProp)=>controlAndProp ? [
                        controlAndProp
                    ] : []
            }["useCreateChartControls.useMemo[controlAndProp]"]);
        }
    }["useCreateChartControls.useMemo[controlAndProp]"], [
        chartControls,
        controls
    ]);
    return [
        controlAndProp,
        setChartControls
    ];
};
const useListenToControlEvents = (chartControls, props)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useListenToControlEvents.useEffect": ()=>{
            const listeners = GoogleChartControlsInternal.listenToControlEvents(chartControls !== null && chartControls !== void 0 ? chartControls : [], props);
            return ({
                "useListenToControlEvents.useEffect": ()=>{
                    listeners.forEach({
                        "useListenToControlEvents.useEffect": (listener)=>{
                            props.google.visualization.events.removeListener(listener);
                        }
                    }["useListenToControlEvents.useEffect"]);
                }
            })["useListenToControlEvents.useEffect"];
        }
    }["useListenToControlEvents.useEffect"], [
        chartControls,
        props
    ]);
};
const useChartControls = (props)=>{
    const [chartControls, setChartControls] = useCreateChartControls(props.controls);
    useListenToControlEvents(chartControls !== null && chartControls !== void 0 ? chartControls : [], props);
    /**
   * Render the container divs for the controls
   */ const renderControl = (filter)=>{
        const { chartWrapper, chartDashboard } = props;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](GoogleChartControls, {
            ...props,
            isReady: Boolean(chartWrapper && chartDashboard),
            chartControls: chartControls,
            filter: filter
        });
    };
    return {
        addControls: (props)=>{
            const controls = GoogleChartControlsInternal.addControls(props);
            var _controls_map;
            setChartControls((_controls_map = controls === null || controls === void 0 ? void 0 : controls.map((control)=>control.control)) !== null && _controls_map !== void 0 ? _controls_map : null);
        },
        renderControl
    };
};
const useChartId = (props)=>{
    const chartIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const getChartId = ()=>{
        const { graphID, graph_id } = props;
        const chartIdFromProps = graphID || graph_id;
        let currentChartId;
        if (chartIdFromProps) {
            currentChartId = chartIdFromProps;
        } else {
            currentChartId = chartIdRef.current || generateUniqueID();
        }
        chartIdRef.current = currentChartId;
        return chartIdRef.current;
    };
    const chartId = getChartId();
    return {
        chartId
    };
};
const DEFAULT_CHART_COLORS = [
    "#3366CC",
    "#DC3912",
    "#FF9900",
    "#109618",
    "#990099",
    "#3B3EAC",
    "#0099C6",
    "#DD4477",
    "#66AA00",
    "#B82E2E",
    "#316395",
    "#994499",
    "#22AA99",
    "#AAAA11",
    "#6633CC",
    "#E67300",
    "#8B0707",
    "#329262",
    "#5574A6",
    "#3B3EAC"
];
const loadDataTableFromSpreadSheet = async function(googleViz, spreadSheetUrl) {
    let urlParams = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return new Promise((resolve, reject)=>{
        const headers = "".concat(urlParams.headers ? "headers=".concat(urlParams.headers) : "headers=0");
        const queryString = "".concat(urlParams.query ? "&tq=".concat(encodeURIComponent(urlParams.query)) : "");
        const gid = "".concat(urlParams.gid ? "&gid=".concat(urlParams.gid) : "");
        const sheet = "".concat(urlParams.sheet ? "&sheet=".concat(urlParams.sheet) : "");
        const access_token = "".concat(urlParams.access_token ? "&access_token=".concat(urlParams.access_token) : "");
        const urlQueryString = "".concat(headers).concat(gid).concat(sheet).concat(queryString).concat(access_token);
        const urlToSpreadSheet = "".concat(spreadSheetUrl, "/gviz/tq?").concat(urlQueryString); //&tq=${queryString}`;
        const query = new googleViz.visualization.Query(urlToSpreadSheet);
        query.send((response)=>{
            if (response.isError()) {
                reject("Error in query:  ".concat(response.getMessage(), " ").concat(response.getDetailedMessage()));
            } else {
                resolve(response.getDataTable());
            }
        });
    });
};
const GRAY_COLOR = "#CCCCCC";
/**
 * An internal helper class around the Google Chart API.
 * Offers high-level methods to interact with the Google Chart API.
 */ class GoogleChartInternal {
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartInternal, "grayOutHiddenColumnsLabel", (props, hiddenColumns)=>{
    const { googleChartWrapper, options } = props;
    if (!googleChartWrapper) {
        console.error("googleChartWrapper is not defined");
        return;
    }
    const dataTable = googleChartWrapper.getDataTable();
    if (!dataTable) return;
    const columnCount = dataTable.getNumberOfColumns();
    const hasAHiddenColumn = hiddenColumns.length > 0;
    if (hasAHiddenColumn === false) return;
    const colors = Array.from({
        length: columnCount - 1
    }).map((_dontcare, i)=>{
        const columnID = GoogleChartInternal.getColumnId(dataTable, i + 1);
        if (hiddenColumns.includes(columnID)) {
            return GRAY_COLOR;
        } else if (options && options.colors) {
            return options.colors[i];
        } else {
            return DEFAULT_CHART_COLORS[i];
        }
    });
    googleChartWrapper.setOptions({
        ...options,
        colors
    });
    googleChartWrapper.draw();
});
/**
   * Listens to user clicking on the legend to toggle the visibility of a column.
   * When a user clicks on a legend item, the column id is added to / removed from the hiddenColumns state.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartInternal, "listenToLegendToggle", (props, hiddenColumnsState)=>{
    const [hiddenColumns, setHiddenColumns] = hiddenColumnsState;
    const { google, googleChartWrapper } = props;
    if (!googleChartWrapper) {
        console.error("googleChartWrapper is not defined");
        return;
    }
    return google.visualization.events.addListener(googleChartWrapper, "select", ()=>{
        const chart = googleChartWrapper.getChart();
        const selection = chart.getSelection();
        const dataTable = googleChartWrapper.getDataTable();
        if (selection.length === 0 || // We want to listen to when a whole row is selected. This is the case only when row === null
        selection[0].row !== null || !dataTable) {
            return;
        }
        const columnIndex = selection[0].column;
        const columnID = GoogleChartInternal.getColumnId(dataTable, columnIndex);
        // If the column is hidden remove it from state, otherwise add it
        if (hiddenColumns === null || hiddenColumns === void 0 ? void 0 : hiddenColumns.includes(columnID)) {
            setHiddenColumns((state)=>[
                    ...state.filter((colID)=>colID !== columnID)
                ]);
        } else {
            setHiddenColumns((state)=>[
                    ...state,
                    columnID
                ]);
        }
    });
});
/**
   * (Re-)Draw a Google Chart with the given data, options, and chart type.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartInternal, "draw", async (props)=>{
    const { data, diffdata, rows, columns, options, chartType, formatters, spreadSheetUrl, spreadSheetQueryParameters, googleChartDashboard, googleChartWrapper, google, hiddenColumns, legendToggle, legend_toggle } = props;
    if (!googleChartWrapper) {
        console.error("draw was called with googleChartWrapper = null");
        return;
    }
    let dataTable;
    let chartDiff = null;
    if (diffdata) {
        const oldData = google.visualization.arrayToDataTable(diffdata.old);
        const newData = google.visualization.arrayToDataTable(diffdata.new);
        chartDiff = google.visualization[chartType].prototype.computeDiff(oldData, newData);
    }
    if (data) {
        if (data instanceof google.visualization.DataTable) {
            dataTable = data;
        } else if (Array.isArray(data)) {
            dataTable = google.visualization.arrayToDataTable(data);
        } else {
            dataTable = new google.visualization.DataTable(data);
        }
    } else if (rows && columns) {
        dataTable = google.visualization.arrayToDataTable([
            columns,
            ...rows
        ]);
    } else if (spreadSheetUrl) {
        dataTable = await loadDataTableFromSpreadSheet(google, spreadSheetUrl, spreadSheetQueryParameters);
    } else {
        dataTable = google.visualization.arrayToDataTable([]);
    }
    const columnCount = dataTable.getNumberOfColumns();
    const viewColumns = Array(columnCount).fill(0).map((_c, i)=>{
        const columnID = GoogleChartInternal.getColumnId(dataTable, i);
        if (hiddenColumns.includes(columnID)) {
            return {
                label: dataTable.getColumnLabel(i),
                type: dataTable.getColumnType(i),
                calc: ()=>null
            };
        } else {
            return i;
        }
    });
    const chart = googleChartWrapper.getChart();
    if (googleChartWrapper.getChartType() === "Timeline") {
        chart && chart.clearChart();
    }
    googleChartWrapper.setChartType(chartType);
    googleChartWrapper.setOptions(options || {});
    const viewTable = new google.visualization.DataView(dataTable);
    viewTable.setColumns(viewColumns);
    googleChartWrapper.setDataTable(viewTable);
    googleChartWrapper.draw();
    if (googleChartDashboard) {
        googleChartDashboard.draw(dataTable);
    }
    if (chartDiff) {
        googleChartWrapper.setDataTable(chartDiff);
        googleChartWrapper.draw();
    }
    if (formatters) {
        GoogleChartInternal.applyFormatters({
            dataTable,
            formatters,
            google
        });
        googleChartWrapper.setDataTable(dataTable);
        googleChartWrapper.draw();
    }
    if (legendToggle === true || legend_toggle === true) {
        GoogleChartInternal.grayOutHiddenColumnsLabel(props, hiddenColumns);
    }
    return;
});
/**
   * Get the column ID of a column in a GoogleDataTable.
   * If the column has an ID, return the ID, otherwise return the label.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartInternal, "getColumnId", (dataTable, columnIndex)=>{
    return dataTable.getColumnId(columnIndex) || dataTable.getColumnLabel(columnIndex);
});
/**
   * Apply Chart Formatters passed under the formatters prop to the GoogleDataTable
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(GoogleChartInternal, "applyFormatters", (param)=>{
    let { dataTable, formatters, google } = param;
    for (let formatter of formatters){
        switch(formatter.type){
            case "ArrowFormat":
                {
                    const vizFormatter = new google.visualization.ArrowFormat(formatter.options);
                    vizFormatter.format(dataTable, formatter.column);
                    return;
                }
            case "BarFormat":
                {
                    const vizFormatter = new google.visualization.BarFormat(formatter.options);
                    vizFormatter.format(dataTable, formatter.column);
                    return;
                }
            case "ColorFormat":
                {
                    const vizFormatter = new google.visualization.ColorFormat(formatter.options);
                    const { ranges } = formatter;
                    if (ranges) {
                        for (let range of ranges){
                            vizFormatter.addRange(...range);
                        }
                    }
                    vizFormatter.format(dataTable, formatter.column);
                    return;
                }
            case "DateFormat":
                {
                    const vizFormatter = new google.visualization.DateFormat(formatter.options);
                    vizFormatter.format(dataTable, formatter.column);
                    return;
                }
            case "NumberFormat":
                {
                    const vizFormatter = new google.visualization.NumberFormat(formatter.options);
                    vizFormatter.format(dataTable, formatter.column);
                    return;
                }
            case "PatternFormat":
                {
                    const vizFormatter = new google.visualization.PatternFormat(formatter.options);
                    vizFormatter.format(dataTable, formatter.column);
                    return;
                }
            default:
                {
                    console.warn("Unknown formatter type: ".concat(formatter.type));
                    return;
                }
        }
    }
});
const useGoogleChartDataTable = (props)=>{
    const { google, googleChartWrapper, googleChartDashboard } = props;
    const [hiddenColumns, setHiddenColumns] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    // Re-draw the chart when hiddenColumns change
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useGoogleChartDataTable.useEffect": ()=>{
            if (!googleChartWrapper) {
                return;
            }
            GoogleChartInternal.draw({
                ...props,
                hiddenColumns,
                googleChartWrapper,
                googleChartDashboard,
                google
            });
        }
    }["useGoogleChartDataTable.useEffect"], [
        hiddenColumns,
        props.data,
        props.rows,
        props.columns,
        props.options,
        props.chartLoaderScriptUrl,
        props.chartType,
        props.formatters,
        props.spreadSheetUrl,
        props.spreadSheetQueryParameters,
        props.legendToggle,
        props.legend_toggle
    ]);
    // Re-draw the chart when the window is resized
    const onResize = ()=>{
        const { googleChartWrapper } = props;
        if (!googleChartWrapper) {
            return;
        }
        googleChartWrapper.draw();
    };
    // Draw the chart when the google charts wrapper is ready and when the hiddenColumns change
    const initialize = (googleChartWrapper)=>{
        const listeners = [];
        const { legendToggle, legend_toggle } = props;
        GoogleChartInternal.draw({
            ...props,
            hiddenColumns,
            googleChartWrapper,
            googleChartDashboard,
            google
        });
        window.addEventListener("resize", onResize);
        if (legend_toggle || legendToggle) {
            const listener = GoogleChartInternal.listenToLegendToggle(props, [
                hiddenColumns,
                setHiddenColumns
            ]);
            if (listener) listeners.push(listener);
        }
        return listeners;
    };
    // Remove event listeners and clear the chart when the component is unmounted
    const destroy = (googleChartWrapper, listeners)=>{
        window.removeEventListener("resize", onResize);
        listeners.forEach((listener)=>{
            google.visualization.events.removeListener(listener);
        });
        if (googleChartWrapper.getChartType() === "Timeline") {
            googleChartWrapper.getChart() && googleChartWrapper.getChart().clearChart();
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useGoogleChartDataTable.useEffect": ()=>{
            if (!googleChartWrapper) {
                return;
            }
            const listeners = initialize(googleChartWrapper);
            return ({
                "useGoogleChartDataTable.useEffect": ()=>{
                    destroy(googleChartWrapper, listeners);
                }
            })["useGoogleChartDataTable.useEffect"];
        }
    }["useGoogleChartDataTable.useEffect"], [
        googleChartWrapper,
        initialize,
        destroy
    ]);
};
const listenToEvents = (props)=>{
    const { chartEvents, google, googleChartWrapper } = props;
    if (!chartEvents) {
        return;
    }
    if (!googleChartWrapper) {
        console.warn("listenToEvents was called before chart wrapper ready.");
        return;
    }
    return chartEvents.map((param)=>{
        let { eventName, callback } = param;
        return google.visualization.events.addListener(googleChartWrapper, eventName, function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            callback({
                chartWrapper: googleChartWrapper,
                props,
                google: google,
                eventArgs: args
            });
        });
    });
};
const useGoogleChartEvents = (props)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGoogleChartEvents.useEffect": ()=>{
            if (!props.googleChartWrapper) return;
            const listeners = listenToEvents(props);
            return ({
                "useGoogleChartEvents.useEffect": ()=>{
                    listeners === null || listeners === void 0 ? void 0 : listeners.forEach({
                        "useGoogleChartEvents.useEffect": (listener)=>{
                            props.google.visualization.events.removeListener(listener);
                        }
                    }["useGoogleChartEvents.useEffect"]);
                }
            })["useGoogleChartEvents.useEffect"];
        }
    }["useGoogleChartEvents.useEffect"], [
        props
    ]);
};
const GoogleChart = (props)=>{
    const [googleChartWrapper, setGoogleChartWrapper] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // const [isReady, setIsReady] = React.useState<boolean>(false);
    const [googleChartDashboard, setGoogleChartDashboard] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const { addControls, renderControl } = useChartControls({
        ...props,
        chartDashboard: googleChartDashboard,
        chartWrapper: googleChartWrapper
    });
    useGoogleChartEvents({
        ...props,
        googleChartWrapper
    });
    const { chartId } = useChartId(props);
    const dashboardRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const toolbarRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "GoogleChart.useEffect": ()=>{
            const { options, google, chartType, chartWrapperParams, toolbarItems, getChartEditor, getChartWrapper, onLoad } = props;
            const chartConfig = {
                chartType,
                options,
                containerId: chartId,
                ...chartWrapperParams
            };
            // Create ChartWrapper instance, pass it to the user and store it in state
            const chartWrapper = new google.visualization.ChartWrapper(chartConfig);
            chartWrapper.setOptions(options || {});
            getChartWrapper === null || getChartWrapper === void 0 ? void 0 : getChartWrapper(chartWrapper, google);
            // Create Dashboard instance, needed for controls
            const chartDashboard = new google.visualization.Dashboard(dashboardRef.current);
            // Create toolbar if needed
            if (toolbarItems) {
                google.visualization.drawToolbar(toolbarRef.current, toolbarItems);
            }
            // Create ChartEditor instance if needed and pass it to the user
            let chartEditor = null;
            if (getChartEditor) {
                chartEditor = new google.visualization.ChartEditor();
                getChartEditor({
                    chartEditor,
                    chartWrapper,
                    google
                });
            }
            // Create and add controls to the chart / dashboard
            addControls({
                ...props,
                chartDashboard,
                chartWrapper
            });
            setGoogleChartWrapper(chartWrapper);
            setGoogleChartDashboard(chartDashboard);
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(google, {
                google,
                chartWrapper,
                chartEditor,
                chartDashboard
            });
        }
    }["GoogleChart.useEffect"], []);
    useGoogleChartDataTable({
        ...props,
        googleChartWrapper,
        googleChartDashboard
    });
    const renderChart = ()=>{
        const { width, height, options, style, className, rootProps, google } = props;
        const divStyle = {
            height: height || options && options.height,
            width: width || options && options.width,
            ...style
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            id: chartId,
            style: divStyle,
            className: className,
            ...rootProps
        });
    };
    const renderToolBar = ()=>{
        if (!props.toolbarItems) return null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: toolbarRef
        });
    };
    const { width, height, options, style } = props;
    const divStyle = {
        height: height || options && options.height,
        width: width || options && options.width,
        ...style
    };
    // If render prop is provided, give the user full control over the rendering by passing renderChart, renderControl and renderToolbar functions
    if (props.render) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: dashboardRef,
            style: divStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: toolbarRef,
            id: "toolbar"
        }), props.render({
            renderChart,
            renderControl,
            renderToolbar: renderToolBar
        }));
    } else {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: dashboardRef,
            style: divStyle
        }, renderControl((param)=>{
            let { controlProp } = param;
            return controlProp.controlPosition !== "bottom";
        }), renderChart(), renderControl((param)=>{
            let { controlProp } = param;
            return controlProp.controlPosition === "bottom";
        }), renderToolBar());
    }
};
const ChartContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](chartDefaultProps);
const ContextProvider = (param)=>{
    let { children, value } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ChartContext.Provider, {
        value: value
    }, children);
};
/**
 * Loads Google Charts JS and renders the GoogleChart component.
 */ const ChartView = (props)=>{
    const { google, isLoading, error } = useLoadGoogleCharts(props);
    if (isLoading) {
        var _props_loader;
        return (_props_loader = props.loader) !== null && _props_loader !== void 0 ? _props_loader : null;
    }
    if (error) {
        var _props_errorElement;
        return (_props_errorElement = props.errorElement) !== null && _props_errorElement !== void 0 ? _props_errorElement : null;
    }
    if (google) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GoogleChart, {
            google: google,
            ...props
        });
    }
    return null;
};
/**
 * Updates the context with the props and renders ChartView.
 */ const Chart = (userProps)=>{
    const props = {
        ...chartDefaultProps,
        ...userProps
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ContextProvider, {
        value: props
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ChartView, props));
};
// Complete Google Charts Type Definition : https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/google.visualization/index.d.ts
var GoogleDataTableColumnRoleType;
(function(GoogleDataTableColumnRoleType) {
    GoogleDataTableColumnRoleType["annotation"] = "annotation";
    GoogleDataTableColumnRoleType["annotationText"] = "annotationText";
    GoogleDataTableColumnRoleType["certainty"] = "certainty";
    GoogleDataTableColumnRoleType["emphasis"] = "emphasis";
    GoogleDataTableColumnRoleType["interval"] = "interval";
    GoogleDataTableColumnRoleType["scope"] = "scope";
    GoogleDataTableColumnRoleType["style"] = "style";
    GoogleDataTableColumnRoleType["tooltip"] = "tooltip";
    GoogleDataTableColumnRoleType["domain"] = "domain";
})(GoogleDataTableColumnRoleType || (GoogleDataTableColumnRoleType = {}));
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=_7fac971b._.js.map