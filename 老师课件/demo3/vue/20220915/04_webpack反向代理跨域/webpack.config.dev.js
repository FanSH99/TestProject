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
        open:true,
        //使用反向代理跨域
        proxy:{
            "/taobao":{
                // 代理的请求地址
                target:"https://suggest.taobao.com",
                // 重写路径
                pathRewrite:{
                    "^/taobao":""
                },
                // 开启跨域
                changeOrigin:true
            },
            "/maoyan":{
                target:"https://i.maoyan.com",
                pathRewrite:{
                    "^/maoyan":""
                },
                changeOrigin:true
            },
            "/douban":{
                target:"https://movie.douban.com",
                pathRewrite:{
                    "^/douban":""
                },
                changeOrigin:true
            }
        }
    },
    mode:"development"
}