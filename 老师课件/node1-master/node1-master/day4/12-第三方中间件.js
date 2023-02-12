// 导入 expres 模块
const express = require("express");
// 1. 导入解析表单数据的中间件 body-parser
const parser = require("body-parser");

// 创建 express 的服务器实例
const app = express();

// 2. 使用 app.use() 注册中间件
app.use(parser.urlencoded({ extended: false }));

// 3. Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个中间件封装而成，
//    因此用法基本一致。
// app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  // 如果没有配置任何解析表单数据的中间件，则 req.body 默认是 undefined
  console.log(req.body);
  res.send("还是你豪横~");
});

// 指定端口号，并启动服务
app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
