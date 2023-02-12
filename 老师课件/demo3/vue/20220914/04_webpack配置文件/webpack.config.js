let path = require("path");
module.exports = {
    //入口
    entry:"./src/main.js",
    // 出口
    output:{
        // 打包后的文件名称
        filename:"build.js",
        // 必须时绝对路径
        path:path.join(__dirname,"build")
    },
    // 加载器模块儿
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },

    // 插件

    // 模式 development开发模式  production 生产模式
    mode:"production"
}
    
/* 
 entry:打包入口
 output:出口配置
 module: 加载器配置 通常用来解决打包非js文件
 plugins：插件配置
 mode：development开发模式 production

*/