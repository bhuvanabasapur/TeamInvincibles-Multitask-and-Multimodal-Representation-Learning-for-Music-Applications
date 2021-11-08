// module.exports = {
//   lintOnSave: false
// }

// const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,

  // For serving from github pages
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/vue_midi_generator/'
  //   : '/',
  publicPath: '/', // For custom domain

  devServer: {
    proxy: {
      '/api*': {
        // // Forward frontend dev server request for /api to django dev server
        target: 'http://35.202.175.109:5000/'
      }
    }
  }
}

