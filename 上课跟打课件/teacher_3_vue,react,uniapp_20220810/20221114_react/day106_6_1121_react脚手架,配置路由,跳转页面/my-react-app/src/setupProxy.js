const { createProxyMiddleware } = require('http-proxy-middleware');

// 解决跨域
module.exports = function (app) {
    app.use(
        '/douyu',
        createProxyMiddleware({
            target: 'https://open.douyucdn.cn',
            changeOrigin: true,
            pathRewrite:{"^/douyu":""}
        })
    );
};