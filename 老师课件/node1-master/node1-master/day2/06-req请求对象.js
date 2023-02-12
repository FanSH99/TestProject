const http = require("http");

const server = http.createServer();


// 1. req 是请求对象，它包含了与客户端相关的数据
server.on("request", (req) => {
  // console.log(req);
  // 2. req.url 客户端的 URL 地址 ( IP 和 port 之后的字符串)
  const url = req.url;
  // 3. req.method 是客户端的 method 请求类型。
  const method = req.method;
  const result = `你的请求 url 是 ${url}, 你的请求方法是 ${method}`; 
  console.log(result);
});

// 4. 本质 ：对 http 协议的封装,方便请求和响应的操作。

server.listen(8080, () => {
  console.log("服务器已启动,127.0.0.1:8080");
});
