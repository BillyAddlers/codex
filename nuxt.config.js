export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Codex",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#57e0ff" },
      {
        hid: "description",
        name: "description",
        content: "A website consist of a references for an RPG wiki",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Fredoka",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css",
      },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/3391280c2f.js",
        crossorigin: "anonymous",
        defer: true,
        body: true,
      },
      {
        src: "https://unpkg.com/flowbite@1.3.4/dist/flowbite.js",
        crossorigin: "anonymous",
        defer: true,
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/styles/tailwind.css", "@/styles/content.sass", "@/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    apiPrefix: "api",
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Logger stuff for dev server-side
  serverMiddleware: ["@middlewares/ServerLogger.js"],
};
