const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 将静态资源路径变为相对路径  解决vue项目打包空白问题
  publicPath:"./",
  transpileDependencies: true,
  devServer:{
    // 反向代理跨域处理 开发环境下才会有效
    proxy:{
      "/douyu":{
        target:"https://open.douyucdn.cn",
        changeOrigin:true,
        pathRewrite:{
          "^/douyu":""
        }
      }
    }
  }
})
