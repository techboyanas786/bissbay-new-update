const i18nextConfig = {
  i18n: {
    defaultLocale: 'en-US', // Default to US English
    locales: [
      'ar',    // Arabic 
      'en-US', // United States: English
      'nl',    // Dutch
      'fr',    // French
      'de',    // German
      'it',    // Italian
      'ja',    // Japanese
      'es'     // Spanish
    ],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
};

export default i18nextConfig;
