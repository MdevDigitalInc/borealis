const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Page Title TODO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Client, Driven, Keywords, TODO' },
      { hid: 'description', name: 'description', content: 'Client Description TODO' },
      // FB Open Graph
      { property:'fb:app_id', content: 'APP_ID_TODO' },
      { property:'og:type', content: 'website' },
      { property:'og:url', content: '//URL_TO_SITE_TODO' },
      { property:'og:title', content: 'Page Title TODO' },
      { property:'og:image', content: 'http://moreiradevelopment.io/social/moreira-development-twitcard.png' },
      // Twitter Card
      { name:'twitter:card', content: 'summary_large_image' },
      { name:'twitter:site', content: '//URL_TO_SITE_TODO' },
      { name:'twitter:title', content: 'Page Title TODO' },
      { name:'twitter:description', content: 'Client Description TODO' },
      { name:'twitter:image', content: 'http://moreiradevelopment.io/social/moreira-development-twitcard.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // Add Google fonts or Font Awesome here.
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#16b1a9' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/global-main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Google Analytics plugin -- NEEDS TO BE CONFIGURED PER CLIENT - TODO
    { src: '~plugins/g-analytics.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Replace GTM-XXXXXXX With Client GTM code. - TODO
    ['@nuxtjs/google-tag-manager', { id: 'GTM-XXXXXXX' }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // PostCSS - AKA Autoprefixer
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': false,
        'postcss-hexrgba': false
      },
      preset: {
        // Change the postcss-preset-env settings
        stage: 3,
        autoprefixer: {
          grid: true,
          flexnox: true,
          browsers: ['last 2 versions']
        }
      }
    },

    // Minify - Production only
    minify: true,
    minifyCSS: true,
    minifyJS: true
  }
}
