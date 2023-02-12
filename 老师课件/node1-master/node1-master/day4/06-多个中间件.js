/* 
中间件(middleware)：
   定义多个全局中间件
   执行顺序和注册顺序有关

    应用场景：
       1.面向切面编程
       2.权限验证、日志记录等  
*/
// 导入 expres 模块
const express = require("express");

// 创建 express 的服务器实例
const app = express();

// 1. 定义第1个全局中间件
app.use((req, res, next) => {
  console.log("调用第1个全局中间件");
  next();
});

// 1. 定义第2个全局中间件
app.use((req, res, next) => {
  console.log("调用第2个全局中间件");
  next();
});

// 定义路由
app.get("/user", (req, res) => {
  res.send("success");
});

// 指定端口号，并启动服务
app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
