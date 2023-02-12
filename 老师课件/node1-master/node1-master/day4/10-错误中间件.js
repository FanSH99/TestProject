// 无异常捕获，请求前端返回错误页面，后台也报错。

const express = require("express");

const app = express();

app.get("/js", (req, res) => {
  // 1. 人为制造异常
  throw new Error("服务器内部异常");
  // 2. 发生异常，后续的代码不再执行
  res.send();
});

// 3. 定义错误中间件，捕获程序中的异常
app.use((err, req, res, next) => {
  console.log("捕获到程序异常,提示: " + err.message);
  res.send("Error:" + err.message);
});

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
