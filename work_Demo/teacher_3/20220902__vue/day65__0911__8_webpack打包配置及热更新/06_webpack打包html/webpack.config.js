// 2022年9月14日16:04:51

let path = require("path");

let HtmlWebpackPlugin = require("html-webpack-plugin");
let htmlPlugin = new HtmlWebpackPlugin({
    // 打包后的文件名称
    filename: "index.html",
    // html标题
    title: "打包html",
    // 配置的模板
    template: "./public/index.html"
})


module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },
        ]
    },
    plugins: [htmlPlugin],
    mode: "production"
    // npm i --save-dev html-webpack-plugin
}