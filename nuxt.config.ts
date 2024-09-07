// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
  ],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },
});
