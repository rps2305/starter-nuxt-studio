// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", "@nuxtjs/tailwindcss", 'nuxt-headlessui'],
  routeRules: {
    '/': { prerender: true }
  }
})