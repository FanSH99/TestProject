module.exports = () => {


    return {
        plugins: {
            autoprefixer: {},
            'postcss-px-to-viewport': {
                viewportWidth: 375, // 750, //设计稿尺寸
                // exclude: /(\/|\\)(node_modules)(\/|\\)/ // 第三方UI组件单位不转vw
            }
        }
    }
}