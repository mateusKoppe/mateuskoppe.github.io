module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mateus Koppe | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#6843FF' },
      { hid: 'description', name: 'description', content: 'Mateus Koppe - Web Developer Freelancer - Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#6843FF' },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/api.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
     ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
         test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

