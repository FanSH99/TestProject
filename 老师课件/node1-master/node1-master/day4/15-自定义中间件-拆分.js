// 导入 express 模块
const express = require("express");

// 4. 导入自己封装的中间件模块
const customBodyParser = require('./14-custom-body-parser');

// 创建服务器实例
const app = express();

// 5. 将自定义中间件函数，注册为全局可用的中间件
app.use(customBodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
