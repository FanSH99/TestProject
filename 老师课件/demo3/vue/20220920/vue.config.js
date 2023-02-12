const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
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
