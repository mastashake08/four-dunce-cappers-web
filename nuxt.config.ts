// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss"
  ]
})