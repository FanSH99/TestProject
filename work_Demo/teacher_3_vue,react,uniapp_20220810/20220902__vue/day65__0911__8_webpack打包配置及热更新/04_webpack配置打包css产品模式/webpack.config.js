// 2022年9月14日14:22:52
let path = require("path");

module.exports = {
    // 打包的入口文件
    entry: "./src/main.js",
    // 打包的出口文件
    output: {

        // 打包后的文件名称---如果不写和入口文件名称一致。
        filename: "build.js",
        // 打包后的文件路径--文件夹名称 ----路径必须为绝对路径，即从电脑
        path: path.join(__dirname, "build"),
    },
    // 加载器配置--用来解决打包非js文件。
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    // 插件  
    // 打包模式---development开发模式，production生产模式 生产模式代码更简洁。
    mode: "production",
}
