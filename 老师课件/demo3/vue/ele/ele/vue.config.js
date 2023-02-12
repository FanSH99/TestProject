const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
