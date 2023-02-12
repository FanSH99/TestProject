const http = require("http");

const server = http.createServer();

// 1. response 响应对象 (包含了与服务器相关的属性和方法)
server.on("request", (req, res) => {
  const result = `你的请求 url 是 ${req.url}, 你的请求方法是 ${req.method}`;
  console.log(result);
  // 3. 解决浏览器中文乱码，
  // 固定写法，告诉浏览器以 utf-8  的方式进行解析。
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  // 2. 结束本次请求，并返回请求的结果
  res.end(result);
});
// 3. 本质是对 http 协议的封装。

server.listen(8080, () => {
  console.log("服务器已启动, 127.0.0.1:8080");
});
