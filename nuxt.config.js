export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'linkedin.elpan.dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/main.ts',
    '~/plugins/axios.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/',  prefix: 'v-'     },
    { path: '~/assets/svgs/', prefix: 'v-svg-' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      chunk: ({ isDev }) => {
        return isDev
          ? '[name].js'
          : '[id].[contenthash].js'
      }
    }
  },

  // publicRuntimeConfig: {
  //   BACKEND_URL: process.env.BACKEND_URL || 'http://127.0.0.1:8000',
  //   STORAGE_URL: process.env.STORAGE_URL || 'https://storage.googleapis.com/local_receta_land',
  // }
}
