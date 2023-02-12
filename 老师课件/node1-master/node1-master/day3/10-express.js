/* 
什么是 Express
    官方给出的概念: Express 是基于 Node.js 平台，快速、开房、极简的 Web 开发框架。
    通俗理解：Express 的作用和 Node.js 内置的 http 模块类似，是专门创建 Web 服务器的。
    Express 的本质：就是一个 npm 的第三方包，提供了快速创建 Web 服务器的便捷方法。
    
    官网：https://www.expressjs.com.cn/
    
    http 与 Express 关系
        http 内置模块使用起来比较复杂，开发效率低；
        Express 是基于内置的 http 模块再次封装出来的，极大极高开发效率。
        类似 jQuery 是基于 Web API 的再次封装。

Express 的作用
    对于前端程序员，最常见的两种服务器
        Web 网站服务器：专门对外提供 web 网页资源的服务器
        API 接口服务器: 专门对外提供 API 接口的服务器。
    使用 Express 可以方便、快捷地创建 Web 网站的服务器和 API 接口服务器。            

    安装
        npm i express@4.17.1  // 大家保持版本一致

    使用步骤：
        1. 导入 express
        2. 创建 web 服务器
        3. 启动 web 服务器

*/
// 1. 导入 express
const express = require("express");

// 2. 创建 web 服务器
const app = express();

// 3. 启动 web 服务器
app.listen(8080, () => {
  console.log("web 服务器已启动, 127.0.0.1:8080");
});
