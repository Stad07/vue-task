module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-task/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/main.scss"; '
      }
    }
  }
}
