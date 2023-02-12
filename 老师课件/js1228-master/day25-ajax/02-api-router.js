const express = require("express");

// 2.1 创建路由模块：创建路由实例
const router = express.Router();

// 4.1 创建并挂载路由
router.get("/get", (req, res) => {
  // 通过 req.query 获取客户端查询的字符串
  const query = req.query;
  console.log(query);
  res.send({
    status: 200, // 状态码
    msg: "GET 请求成功!", // 描述信息
    data: query, // 响应的数据
  });
});

// 4.2 创建并挂载路由
router.post("/post", (req, res) => {
  // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
  // 注意：配置解析表单数据的中间件
  const body = req.body;
  console.log(body);
  res.send({
    status: 200, // 状态码
    msg: "POST 请求成功!", // 描述信息
    data: body, // 响应的数据
  });
});

// 2.2 创建路由模块：暴露路由模块
module.exports = router;
