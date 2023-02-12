// 名称不能变 ，webpack默认只能打包js文件

module.exports = {
    // 打包的入口文件
    entry: "./src/main.js",
    // 打包的出口文件
    output: {

        // 打包后的文件名称
        filename: "common.js",
    },
    // 加载器
    // 插件
    // 打包模式
}