module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://quan.lukou.com',
        ws: true,
        changeOrigin: true
      }
    }
  },
  publicPath: './',
  outputDir: 'docs'
}
