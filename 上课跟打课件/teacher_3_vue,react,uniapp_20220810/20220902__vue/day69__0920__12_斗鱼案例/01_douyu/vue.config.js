const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 反向代理跨域。
    proxy: {
      "/douyu": {
        target: "https://open.douyucdn.cn",
        changeOrigin: true,
        pathRewrite: { "^/douyu":""}
      }
      
    }
  }
})
