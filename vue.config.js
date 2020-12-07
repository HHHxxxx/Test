module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    port: 8002,     // 端口
    proxy: {
      '/api': {
        target: 'http://test.thankwork.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },
  },
  lintOnSave: false   // 取消 eslint 验证
}