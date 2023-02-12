const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 解决vue项目打包空白问题
  publicPath:"./",
  devServer:{
    proxy:{
      "/elelogin":{
        target:"http://elm.cangdu.org",
        changeOrigin:true,
        pathRewrite:{
          "^/elelogin":""
        }
      }
    }
  }
})
