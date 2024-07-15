// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    // production URL
    url: 'https://rps2305-starter-nuxt-studio.nuxt.space',
  },
  modules: [
    '@nuxt/content',
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    'nuxt-headlessui',
    "nuxt-og-image"
  ],
  routeRules: {
    '/': { prerender: true }
  }

})