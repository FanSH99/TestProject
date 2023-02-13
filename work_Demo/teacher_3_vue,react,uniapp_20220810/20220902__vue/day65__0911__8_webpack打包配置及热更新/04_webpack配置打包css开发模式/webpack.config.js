// 名称不能变 ，webpack默认只能打包js文件
// 如果想要加载css 需要安装
let path = require("path");

module.exports = {
    // 打包的入口文件
    entry: "./src/main.js",
    // 打包的出口文件
    output: {

        // 打包后的文件名称
        filename: "index.js",
        // 打包后的文件路径--文件夹名称 ----路径必须为绝对路径，即从电脑
        path: path.resolve(__dirname, "build"),
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // 插件
    // 打包模式
    mode: "development"
}
