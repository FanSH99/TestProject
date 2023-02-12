/* 
  需求：
      根据不同的 url,定位不同的资源(响应不同的内容)
      步骤：
         1. 获取请求的 url
         2. 设置默认的响应内容: 404 not found
         3. 判断用户请求是否是 / 或 /index.html 首页
         4. 判断用户请求是否是 /about.html 有关页面
         5. 设置 Content-Type 响应头，防止中文乱码
         6. 使用 res.end() 把内容响应给客户端(封装到 http 协议)
*/

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // 1. 获取请求的 url
  const url = req.url;

  // 2. 设置默认的响应内容: 404 not found
  let content = "<h1>404 Not found!</h1>";

  if (url === "/" || url === "/index.html") {
    // 3. 用户请求首页
    content = "<h1>首页</h1>";
  } else if (url === "/about.html") {
    // 4. 用户请求相关页
    content = "<h1>公司介绍</h1>";
  }

  // 5. 设置响应头
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // 6 封装响应数据
  res.end(content);
});

server.listen(8080, function () {
  console.log("服务器已启动, 127.0.0.1:8080");
});
