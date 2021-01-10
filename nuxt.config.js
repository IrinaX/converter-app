export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "converter-app",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {rel: "apple-touch-icon", href: "/apple-touch-icon.png"},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/css/main.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/pwa",
  ],

  pwa: {
    manifest: {
      name: "Currency Converter",
      short_name: "Currency Converter",
      description: "Simple currency converter app.",
      lang: "ru",
      dir: "ltr",
      display: "fullscreen",
      theme_color: "#f9fafc",
      background_color: "#f9fafc",
      useWebmanifestExtension: false
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    scss: [
      "~assets/css/base/_variables.scss",
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},


};
