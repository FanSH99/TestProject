// 2022年9月14日15:54:45
let path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "index.js",
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
    plugins: [],
    mode: "development"

}