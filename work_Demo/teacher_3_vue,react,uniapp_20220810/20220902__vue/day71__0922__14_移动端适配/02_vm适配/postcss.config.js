module.exports = () => {
    return {
        plugins: {
            autoprefixer: {},
            'postcss-px-to-viewport': {
                viewportWidth: 375,
                // exclude: /(\/|\\)(node_modules)(\/|\\)/ // 第三方UI组件单位不转vw--如果想要引入组件库适配，不能加这句话。
            },
            
        }
    }
}