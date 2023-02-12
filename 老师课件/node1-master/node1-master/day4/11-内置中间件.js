// 导入 expres 模块
const express = require("express");

// 创建 express 的服务器实例
const app = express();

// 1. 快速托管静态资源
app.use("/pic", express.static("./picture"));

// 2.1 解析 JSON 格式数据  固定写法
app.use(express.json());

// 3.1 解析 URL-encoded  固定写法
app.use(express.urlencoded({ extended: false }));

// 2.2 测试表单 post body 请求
//     postman ————> body ————> row  ————> JSON  ————>  写入json数据
app.post("/hero", (req, res) => {
  // 在服务器，可以使用 req.body 属性，来接收客户端发送过来的请求体的数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 是 undefined
  console.log(req.body);
  res.send("ok");
});

// 3.2 测试表单 post body 请求
//     postman ————> body ————> x-www-for-urlencoded  ————>  写入键值对
app.post("/hero", (req, res) => {
  // 在服务器，可以使用 req.body 属性，来获取 json 格式的表单数据和 url-encoded 格式的数据
  console.log(req.body);
  res.send("ok");
});

// 指定端口号，并启动服务
app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
