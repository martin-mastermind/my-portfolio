// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
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
      viewport: 'width=device-width, initial-scale=1',
    },
  },
})
