export default {
  ssr: false,
  components: true,
  css: [],
  plugins: [],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: ['@nuxt/content', 'nuxt-i18n', '../lib/nuxt'],
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },
  content: {
    dir: 'markdown'
  }
};
