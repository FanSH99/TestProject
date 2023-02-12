/* 
中间件分类
    1. 应用级别：绑定到 app 实例上的中间件。如 app.use() 的全局中间件 和 app.get() 的局部中间件
          案例：09-中间件分类.js

    2. 路由级别: 绑定到 express.Router() 实例上的中间件
    　    案例：09-中间件分类.js

    3. 错误级别: 专门用来捕获整个项目中发生的异常错误，从而防止程序的异常崩溃。
          语法格式，必须有四个参数,依次是 (err, req, res, next)
          案例：10-错误中间件.js 

        　注意：错误级别的中间件必须注册在所有路由之后。
             　其它的中间件必须在路由前配置

    4. Express 内置
          自 Express 4.16.0 之后，内置了3个常用中间件，来提高开发效率
          1. express.static 快速托管静态资源。例如：HTML, CSS , 图片等(无兼容性)
          2. express.json  解析 JSON 格式的请求体数据(4.16.0+ 可用)
          3. express.urlencoded 解析 URL-encoded 格式的请求体数据(4.16.0+ 可用)

          案例：10-错误中间件.js 

    5. 第三方中间件
          非 Express 官方内置的，而是第三方开发的中间件。按需下载
          例如：在 express@4.16.0 之前，经常使用 body-parser 这个第三方中间件，解析请求体的数据。
          使用步骤:
              1. 运行 npm install body-parser 安装中间件
              2. require 导入中间件
              3. app.use() 注册使用中间件
          案例：12-第三方中间件.js

          注意：Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个中间件封装而成，
               因此用法基本一致。  
    
    注意：除错误中间件，而其它中间件必须在路由之前配置。
*/
// 导入 expres 模块
const express = require("express");

let router = express.Router();

// 创建 express 的服务器实例
const app = express();

// 1. 应用级别的中间件
app.use(function (req, res, next) {
  console.log("应用级别的中间件");
  next();
});

// 2. 路由级别的中间件
router.use(function (req, res, next) {
  console.log("路由级别的中间件");
  next();
});

// 指定端口号，并启动服务
app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
