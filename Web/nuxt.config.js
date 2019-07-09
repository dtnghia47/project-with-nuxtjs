module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-alpha1/html2canvas.min.js'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      // console.log(routes)
      // let index = routes.findIndex(route => route.name === 'demo-router')
      // routes[index] = {
      //   ...routes[index],
      //   components: {
      //     default: routes[index].component,
      //     top: resolve(__dirname, 'components/mainTop.vue')
      //   },
      //   chunkNames: {
      //     top: 'components/mainTop'
      //   }
      // }
    }
  },
  async asyncData({ req, res }) {
    // Please check if you are on the server side before
    // using req and res
    console.log(req, res)
    debugger
    if (process.server) {
      return { host: req.headers.host }
    }

    return {}
  }
}
