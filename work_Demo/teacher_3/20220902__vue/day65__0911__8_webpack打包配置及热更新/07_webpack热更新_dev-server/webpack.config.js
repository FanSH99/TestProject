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
        // test 属性，识别出哪些文件会被转换。
        // use 属性，定义出在进行转换时，应该使用哪个 loader。
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
             //   在wbpack5之前的版本中打包图片需要使用file-loader url-loader
           /*  asset / resource 将资源分割为单独的文件，并导出url，就是之前的 file - loader的功能. */
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [htmlPlugin],
    // 配置热更新
    devServer: {
        port: 8090,
        open: true,
    },
    mode: "development"
    /*
    npm i --save-dev html-webpack-plugin
    npm i --save-dev webpack-dev-server
    终端打开： npx webpack serve
    package.json中：
     "serve": "npx webpack serve --config ./config/webpack.config.dev.js",
    "build": "npx webpack --config ./config/webpack.config.pro.js"
    根目录下新建文件夹config：
    webpack.config.dev.js
    webpack.config.pro.js
    npm run serve
    
    注意：必须要有package.json文件在根目录下，而且有上面的配置。否则npm run serve报错 
        但是没有的话也可以用npx webpack serve命令来运行。
    */
}