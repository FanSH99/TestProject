module.exports = {
    plugins: {
      'postcss-pxtorem': {
        // 设计稿尺寸
        rootValue: 37.5, // 设计稿尺寸 10rem =375px
        propList: ['*'],
      },
    },
  };