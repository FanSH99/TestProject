module.exports = {
    plugins: {
        'postcss-pxtorem': {
            // 设计稿尺寸 10rem=750px 设计稿一般是750px或者37.5px
            rootValue: 75,
            propList: ['*'],
        }
    }
}