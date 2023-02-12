let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(HtmlWebpackPlugin)
let htmlPlugin = new HtmlWebpackPlugin({
    // 配置打包后的html文件名称
    filename: "index.html",
    // html标题
    title: "打包html",
    // html模板
    template: "./public/index.html"
});
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //   在wbpack5之前的版本中打包图片需要使用file-loader url-loader
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [htmlPlugin],
    // 开发服务配置
    devServer: {
        port: 8090,
        open: true
    },
    mode: "development"
}
