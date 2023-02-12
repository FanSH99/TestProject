## 安装create-react-app 
npm i -g create-react-app

## 创建react项目
 creat-react-app 项目名称 
 还可以直接使用 npx create-react-app 项目名称创建项目

## 跨域请求 proxy反向代理跨域
1. 安装http-proxy-middleware
npm install http-proxy-middleware --save
2. 在开发目录中创建setupProxy.js
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
3. 发送跨域请求
  axios.get(`/douyu/api/RoomApi/live?offset=0&limit=20`).then(res=>{
                    console.log(res)
                })