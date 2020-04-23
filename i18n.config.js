export default {
    strategy: 'prefix',
    locales: [
        { code: 'ja', iso: 'ja_JP'},
        { code: 'en', iso: 'en_US'},
    ],
    defaultLocale: 'ja',
    vueI18n: {
        fallbackLcale: 'ja'
    },
    vueI18nLoader: true,
    rootRedirect: 'ja',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'locale_i18n'
    }
}