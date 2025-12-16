"use client";
import React from "react";
import { Chart } from "react-google-charts";

const formatNumber = (num) => {
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

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isLargeScreen;
};

export const data = [
  [
    "Country",
    "Customer Count",
    { role: "tooltip", type: "string", p: { html: true } }
  ],
  ...countryData.map(country => [
    country.code.toUpperCase(),
    country.count,
    `<div style="
      padding: 16px 20px;
      min-width: 200px;
      border-radius: 12px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    ">
      <div style="
        font-size: 13px;
        color: #6b7280;
        font-weight: 500;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      ">${country.date}</div>
      <div style="
        display: flex;
        align-items: center;
        gap: 12px;
      ">
        <img 
          src="https://flagcdn.com/w80/${country.code}.png" 
          width="28" 
          height="21" 
          style="
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(0, 0, 0, 0.1);
          " 
          alt="${country.name} flag"
        />
        <div style="flex: 1;">
          <div style="
            font-weight: 600;
            font-size: 16px;
            color: #1f2937;
            margin-bottom: 2px;
          ">${country.name}</div>
          <div style="
            font-size: 14px;
            color: #ff4200;
            font-weight: 600;
          ">${formatNumber(country.count)}</div>
        </div>
      </div>
    </div>`
  ])
];

export default function GeoChart() {
  const chartRef = React.useRef(null);
  const [lastEvent, setLastEvent] = React.useState(null);
  const isLargeScreen = useIsLargeScreen();

  const options = React.useMemo(() => ({
    legend: "none",
    height: isLargeScreen ? 600 : 300,
    enableRegionInteractivity: true,
    defaultColor: "#DDDDDD",
    colorAxis: {
      colors: ["#ff4200"],
      minValue: 0,
      maxValue: Math.max(...countryData.map(c => c.count)),
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
    },
  }), [isLargeScreen]);

  React.useEffect(() => {
    if (chartRef.current) {
      const container = chartRef.current.wrapper.getContainerElement();
      container.addEventListener('mouseover', (e) => {
        setLastEvent('mouseover');
        const event = document.createEvent('SVGEvents');
        event.initEvent('click', true, true);
        e.target.dispatchEvent(event);
      });

      container.addEventListener('click', (e) => {
        setLastEvent('click');
      });

      if (chartRef.current.chartWrapper) {
        google.visualization.events.addListener(
          chartRef.current.chartWrapper.getChart(),
          'select',
          () => {
            const chart = chartRef.current.chartWrapper.getChart();
            const selection = chart.getSelection();

            if (selection.length > 0) {
              if (lastEvent === 'mouseover') {
                setTimeout(() => {
                  chart.setSelection([]);
                }, 100);
              } else if (lastEvent === 'click') {
                console.log("Clicked on country:", selection);
              }
            }
          }
        );
      }
    }
  }, [chartRef.current, lastEvent]);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Chart
        chartType="GeoChart"
        width="100%"
        data={data}
        options={options}
        ref={chartRef}
      />
    </div>
  );
}