const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 设置自动打开浏览器
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080
  }
})
