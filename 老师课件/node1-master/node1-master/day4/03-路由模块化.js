/* 
注册路由模块
    1. require() 导入路由模块
    2. app.use() 注册路由模块
    3. 为路由模块添加前缀(订单、用户、支付操作)

    注意：上次使用 app.use(express.static('./files'))
          app.use() 函数的作用：注册全局中间件。  
*/
const express = require("express");

// 1. require() 导入路由模块
const router = require("./02-router");

const app = express();

// 2. app.use() 注册路由模块
// app.use(router);

// 3. 添加前缀
app.use("/api", router);

// 4. 注意： app.use() 函数的作用，注册全局中间件。
// app.use('/public', express.static('public'));

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
