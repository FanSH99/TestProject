/* 
局部中间件:
    
    不使用 app.use() 定义的中间件，叫做局部中间件，即只在特定请求生效的中间件
    实例如下：
      const mw1 = (req, res, next) => {
        console.log("经典语录 1 : 不气盛叫年轻人吗?");
        next();
      };

      // 局部中间件的使用
      app.get("/js", mw1, (req, res) => {
        console.log("------------请求来了-------------------");
        res.send("js");
      });

      第二个参数 mw1, 即该请求时生效的中间件。
*/

const express = require("express");

const app = express();

const mw1 = (req, res, next) => {
  console.log("经典语录 1 : 不气盛叫年轻人吗?");
  next();
};

const mw2 = (req, res, next) => {
  console.log("经典语录 2 : 我问你，这瓜保熟吗?");
  next();
};

const mw3 = (req, res, next) => {
  console.log("经典语录 3 : 跟我华强拼，你有这实力吗~");
  next();
};

// 1. 局部中间件的使用
app.get("/js", mw1, (req, res) => {
  console.log("------------请求来了-------------------");
  res.send("js");
});

// 2. 多个中间件1
app.get("/c", mw3, mw2, (req, res) => {
  console.log("------------请求来了-------------------");
  res.send("C语言");
});

// 3. 多个中间件2
app.get("/python", [mw1, mw2], (req, res) => {
  console.log("------------请求来了-------------------");
  res.send("python 来了");
});

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
