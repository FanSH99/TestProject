/*
    在 Node.js 中，我们不需要 tomcat ，weblogic 等第三方web服务器软件。
    我们可以通过 http 模块，简单的几行代码，手写一个服务器软件，对外提供服务。 

    创建web服务器的基本步骤
        1. 导入 http 模块
        2. 创建 web 服务器实例
        3. 为服务器实例绑定 request 事件，监听客户端的请求。
        4. 启动服务器。
        5. ctrl + C 停止服务器
*/
const http = require("http");

const server = http.createServer();

// 服务器接收到客户端的请求，就会触发 request 事件。
server.on("request", (req, res) => {
  console.log("有人在请求我们的服务器");
});

// 参数分别是：端口号和回调函数
server.listen(8080, () => {
  console.log("服务已启动,http://127.0.0.1:8080");
});
