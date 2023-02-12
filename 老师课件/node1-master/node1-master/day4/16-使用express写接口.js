/* 
步骤：
    1. 创建基本服务器
    2. 创建路由API模块(组件),并引入
    3. get 接口
    4. post 接口
         如果要获取 url-encoded 格式的请求体数据，
         必须配置中间件 app.use(express.urlencoded({extend:false})) 

*/

// 1.1 导入 express
const express = require("express");
// 5.1 跨域：npm i cors 安装中间件
// 5.2 跨域：导入中间件
const cors = require("cors");

// 1.2 创建服务器实例
const app = express();

// 6. 必须在配置 cors 中间件之前，配置 jsonp 的接口，否则变成了普通的 cors 接口
//        没有在路由模块中进行统一注册，因此需要单独加前缀 api
app.get("/api/jsonp", (req, res) => {
  // todo: 定义 jsop 接口的具体实现逻辑

  // 1. 获取函数名字
  const funcName = req.query.callback;
  // 2. 定有发送给客户端的数据对象
  const data = { name: "zs", age: 22 };
  // 3. 拼接出函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;
  // 4. 拼接的字符串，响应给客户端
  res.send(scriptStr);
});

// 5.3 跨域：路由之前注册
app.use(cors());

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

// 3.1 导入路由模块
const router = require("./17-api-router");
// 3.2 把路由模块(组件)，注册到 app 上
app.use("/api", router);

// 1.3 启动服务实例
app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
