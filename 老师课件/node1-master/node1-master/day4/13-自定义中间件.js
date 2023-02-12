/* 
需求 : 自己手动模拟一个类似 express.urlencoded 这样的中间件，
        来解析 POST 提交到服务器的表单数据。

步骤：
    1. 定义中间件
    2. 监听 req 的 data 事件 (当服务端接收到数据时触发)
         如果数据的量比较大，比如视频，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。
         因此 data 事件可以触发多次，每次都是数据的一部分，需要手动拼接接收的数据。
    3. 监听 req 的 end 事件 (数据接收完时触发)       
    4. 使用 querystring 模拟解析请求体数据
          Node.js 内置了一个 querystring 模块，专门处理查询字符串。
          通过该模块的 parse() 函数，可以把查询的字符串解析为对象格式
          使用时，需要先导入
    5. 将解析出来的数据对象，挂载到 req.body
    6. 将自定义中间件封装为模块
*/
// 导入 express 模块
const express = require("express");
// 4.1 导入内置 querystring 模块
const qs = require("querystring");
// 创建服务器实例
const app = express();

// 1. 解析表单数据的中间件
app.use((req, res, next) => {
  // 函数内部是具体的逻辑

  // 定义一个 str 字符串，存储客户端发送的数据
  let str = "";
  // 2. 监听 req 的 data 事件(当服务端接收到数据时触发)
  req.on("data", (chunk) => {
    str += chunk;
  });

  // 3. 监听 req 的 end 事件 (数据接收完时触发)
  req.on("end", () => {
    // 把 str 中存放了完整的请求数据,数据已被转码。
    console.log(str);

    // todo: 把字符串格式的请求体数据，解析为对象格式
    // 4.2 调用 qs.parse() 方法，把查询的字符串解析为对象
    const body = qs.parse(str);

    console.log(body);
    // 5.1 挂载
    req.body = body;
    // 一定要调用该方法，否则程序停滞
    next();
  });
});

// postman,注意是 post 的 body 请求，x-www-form-urlencoded 传参
app.post("/user", (req, res) => {
  // 5.2 共享 req
  res.send(req.body);
});

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
