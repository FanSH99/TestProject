let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let htmlPlugin = new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./public/index.html"
})
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ]
    },
    plugins:[htmlPlugin,new VueLoaderPlugin()],
    devServer:{
        port:8080,
        open:true
    },
    mode:"development"
}