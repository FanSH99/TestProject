

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
    // 入口文件，
    entry: "./src/main.js",
    // 出口，
    output: {
        // 打包后的文件名
        filename: "index.js",
        // 打包后文件存放地址，__dirname指的是根目录，当前项目文件夹根目录，dist是打包后文件夹名字，一般默认就是用dist，下面这行可以不用写，是默认配置。
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            // 解析css
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // 解析图片--webpack5之前需要下载其他的模块
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: 'asset/resource'
            },
            // 解析vue文件
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            }
        ],

    },
    // 加载器
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    devServer: {
        // 设置端口号
        port: "8090",
        // 自动开启浏览器，默认不自动开启浏览器，需要自己打开浏览器查看。
        open: true,
    },
    mode: "production"

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
注意位置，执行的时候会自动找--config后面的文件，如果报错看文件路径是否正确。
    上面的写在"scripts"中，写完之后就可以用npm run serve来预览，用npm run build来打包了。
如果没有package.json和package.lock.json
需要用npx webpack serve --config ./webpack.config.dev.js 来预览
npx webpack --config webpack.config.pro.js来打包，很麻烦，还是建议有package.json等文件，node-modules可以用最外面文件夹的
    */