// 2022年9月15日15:21:08

let path = require("path");

let HtmlWebpackPlugin = require("html-webpack-plugin");

let htmlPlugin = new HtmlWebpackPlugin({
    // 文件名称
    filename: "index.html",
    // 套用的html模板
    template: "./public/index.html"
})

const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: 'asset/resource'
            },
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            }
        ],

    },
    // 加载器
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    // proxy代理的意思，devServer.proxy 
    devServer: {
        port: "8090",
        open: true,
        proxy: {
            // api自定义的，可以换别的名字。"https://suggest.taobao.com" --注意不能直接写地址，因为请求是会默认会带上前面的名字 比如以上更改为localhost:8090/taobao/suggest.taobao.com
            '/taobao': {
                // 要请求的地址
                target: "https://suggest.taobao.com",
                // 去除前面带的名字
                pathRewrite: { "^/taobao": "" },
                // 是否开启跨域 true开启
                changeOrigin: true,
            },
            // 可以写多个处理跨域的对象，逗号隔开。
            "/maoyan": {
                target: "https://i.maoyan.com",
                pathRewrite: {
                    "^/maoyan": ""
                },
                changeOrigin: true
            },
            "/douban": {
                target: "https://movie.douban.com",
                pathRewrite: {
                    "^/douban": ""
                },
                changeOrigin: true
            }

        }
    },
    mode: "development"

}


/* 
npm i （如果package.json已经存在，且配置写好，则可以直接npm i来下载安装，否则需要跟模块名，每个模块名之间空格隔开，注意，会自动下载最新版本，如果想要安装其他版本需要@带上版本号。
##webpack webpack-cli是webpack的核心模块，webpack-dev-server是用来热更新的，
（1）webpack
（2）webpack-cli
（3）webpack-dev-server
##注意vue版本和vue-loader版本是否匹配,vue-loader@17.0版本只适用于vue@3.2版本以上的，所以vue2需要降低vue-loader的版本
（4）vue@2.7.10 
（5）vue-template-compiler 
（6）vue-router@3.5.0
vue-loader@15.0.0
## css-loader和styleloader用来处理css文件
（7）css-loader
（8）style-loader
## html-webpack-plugin用来处理html文件
（9）html-webpack-plugin

另外注意，如果有热更新，每个模块都要有package.json和package-lock.json否则找不到webpackage.config.dev.js和webpackage.config.pro.js文件报错，
webpackage中配置如下， --config .文件名说明要去哪里找文件。
  "serve": "npx webpack serve --config ./config/webpack.config.dev.js",
    "build": "npx webpack --config ./config/webpack.config.pro.js"
    
    上面的写在"scripts"中，写完之后就可以用npm run serve来预览，用npm run build来打包了。
    
    如果没有package.json和package.lock.json
需要用npx webpack serve --config ./webpack.config.dev.js 来预览
npx webpack --config webpack.config.pro.js来打包，很麻烦，还是建议有package.json等文件，node-modules可以用最外面文件夹的
*/