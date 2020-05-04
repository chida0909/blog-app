import colors from 'vuetify/es5/util/colors'
const jsonData = require('./posts/summary.json')

export default {

  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'blue',
    height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [
    // '@/assets/main.scss'
    { src: '~/assets/main.scss', lang: 'scss' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/constant'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-user-agent',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.performance.maxAssetSize = 300000;
    }
  },
  generate: {
    routes() {
      // タグページ一覧
      const tagPageArray = [
        '/tags/nuxt',
        '/tags/vuetify',
        '/tags/javascript'
      ]
      // 記事ページ一覧
      const dateArray = jsonData.sourceFileArray.map( s => s.replace(/[^0-9]/g, '') )
      const contents = dateArray.map( p => jsonData.fileMap[`posts/json/${p}.json`] )
      const permalinkArray = contents.map( p => p.permalink )
      const result = `${tagPageArray},${permalinkArray}`
      return result.split(',')
    }
  }
}
