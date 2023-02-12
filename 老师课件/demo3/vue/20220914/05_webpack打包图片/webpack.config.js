let path = require("path")
module.exports = {
    entry:"./src/main.js",
    output:{
        filename:"index.js",
        path:path.join(__dirname,"dist")
    },
    module:{
        rules:[
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
    plugins:[],
    mode:"development"
}