// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  srcDir: 'app',
  css: ['~/assets/main.css'],
  modules: ['@nuxt/icon', '@nuxtjs/color-mode', '@nuxt/fonts'],
  colorMode: {
    classSuffix: '',
  },
  fonts: {
    families: [{ name: 'Roboto', provider: 'google', weights: [400, 500, 700] }],
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Martin — Senior Fullstack Engineer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Martin — Senior Fullstack Engineer. Go + Nuxt. Performance & Scalability Expert.' },
      ],
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
