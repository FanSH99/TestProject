/* 
中间件(middleware)：
    业务流程的中间多个处理环节。
    在代码中将业务流程分为多个步骤封装，达到组装复用的效果。

    请求 ————> 中间件(步骤)1 ————> 中间件(步骤)2 ————> 中间件(步骤)3 ————> 响应

    一个请求到达 express 服务器，连续调用多个中间件，从而对这次请求进行预处理。
    上一个中间件的输出，作为下一个中间件的输入

    语法如下：
    app.get("/", function(req, res, next){
        next();
    });

    第三个参数是 next 的回调函数就是中间件，本质就是一个必须执行的函数。
    而普通的路由函数只有 req 和 res

    next 函数作用：
        实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由

        请求 ————> 中间件(步骤)1 ——next()——> 中间件(步骤)2 —next()———> 中间件(步骤)3 ————> 响应

        注意：当前中间件的业务处理完毕后，必须执行 next(); 
              表示把流转关系转交给下一个中间件或路由

    中间件作用：
      共享 req , res
      基于这个特性，我们可以在上游的中间件中，统一为 req 或 res 对象添加自定义属性或方法，
*/
const express = require("express");

const app = express();

// 1. 定义一个中间件函数(多了 next 参数)
const mw = function check(req, res, next) {
  console.log("中间件函数:做核算");

  // 该函数执行结束
  next();

  // 代码也能执行，但不建议这样写代码(约定大于规范，规范大于编码)
  //   console.log("end");
};

// 2. 将 mw 注册位全局生效的中间件
app.use(mw);

// 3. 创建并注册中间件函数
app.use(function (req, res, next) {
  console.log("中间件：疯子，给你机会，不中用啊");
  // 5. 共享 req 和 res
  req.hero = "吕布";
  next();
});

app.get("/js", (req, res) => {
  console.log("学习js");
  // 6. 调用共享的 req 和 res
  res.send("js," + req.hero);
});

app.get("/c", (req, res) => {
  console.log("学习C 语言");
  res.send("C 语言," + req.hero);
});

// 4. 定义全局中间件的简化写法
// app.use(function (req, res, next) {
//   console.log("中间件的简化写法：我问你，这瓜保熟吗？");
//   next();
// });

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
