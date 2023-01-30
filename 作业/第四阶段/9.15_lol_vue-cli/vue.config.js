const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 在低版本浏览器中会把node_modules里用得到的高级语法进行babel编译（低版本某些不支持es6语法）
  transpileDependencies: true,
  // 关闭校验 ---vue文件命名需要是大驼峰，即首字母大写，否则报错，关闭校验之后就不报错了。
  lintOnSave: false,
  // 设置自动打开浏览器
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080
  }
})

/* 
如果template那里有蓝色波浪线警示，需要在jsconfig.json里的  "compilerOptions":里添加一句"jsx":"preserve"，之后就不会报错了。
*/
