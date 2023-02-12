const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/douyu',
        createProxyMiddleware({
          target: 'https://open.douyucdn.cn',
          changeOrigin: true,
        })
      );
};