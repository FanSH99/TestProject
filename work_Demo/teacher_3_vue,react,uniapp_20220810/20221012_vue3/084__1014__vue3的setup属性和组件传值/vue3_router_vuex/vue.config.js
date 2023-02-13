const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",//解决打包空白问题。
  transpileDependencies: true,

})
