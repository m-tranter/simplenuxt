export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/main.css"],
  runtimeConfig: {
    accessToken: process.env.accessToken,
    alias: process.env.alias,
    projectId: process.env.projectId,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-GB',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    buildAssetsDir: '/static/',
  },
  compatibilityDate: "2025-04-14",
});
