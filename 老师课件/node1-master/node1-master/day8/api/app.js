// 导入 expres 模块
const express = require("express");
const cors = require("cors");

// 4. 导包
const joi = require("joi");
const expressJWT = require("express-jwt");
const config = require("./config");

// 创建 express 的服务器实例
const app = express();

// 导入并配置 cors 中间件
app.use(cors());

// 解析 body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
  // stauts 默认值是1，表示失败的情况
  // err 的值，可能是一个错误情况，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

app.use(
  expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] })
);

// 导入并注册用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 导入并使用用户信息的路由模块
const userinfoRouter = require("./router/userinfo");
app.use("/my", userinfoRouter);

const artCateRouter = require("./router/artcate");
app.use("/my/article", artCateRouter);

const articleRouter = require("./router/article");
app.use("/my/article", articleRouter);

// 5.定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败的导致的错误
  if (err instanceof joi.ValidationError) {
    return res.cc(err);
  }
  // 身份认证失败
  if (err.name == "UnauthorizedError") {
    res.cc("身份认证失败!");
  }
  // 未知错误
  res.cc(err);
});

// 指定端口号，并启动服务
app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
