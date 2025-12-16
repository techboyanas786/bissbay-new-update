import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend) // Loads translations from public/locales
    .use(LanguageDetector) // Detects language
    .use(initReactI18next) // Connects with react
    .init({
        fallbackLng: 'en-US',
        supportedLngs: ['en-US', 'ar', 'nl', 'fr', 'de', 'it', 'ja', 'es'],
        debug: false,
        ns: ['translation'],
        defaultNS: 'translation',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
