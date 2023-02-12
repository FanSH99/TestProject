// 导入 expres 模块
const express = require("express");
// 跨域
const cors = require("cors");
// 解析body
const bodyParser = require("body-parser");

// 创建 express 的服务器实例
const app = express();

app.use(cors());
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// write your code
app.get("/data1", (req, res) => {
  res.send("data1: 买菜");
});
app.get("/data2", (req, res) => {
  setTimeout(() => {
    res.send("data2: 切菜");
  }, 1000);
});
app.get("/data3", (req, res) => {
  res.send("data3: 做菜");
});

app.get("/data4", (req, res) => {
  //   throw new Error("服务器内部异常");
  res.send("data4: ");
});

app.get("/a1", (req, res) => {
  setTimeout(() => {
    res.send("a1: 小学");
  }, 100);
});
app.get("/a2", (req, res) => {
  setTimeout(() => {
    res.send("a2: 中学");
  }, 200);
});
app.get("/a3", (req, res) => {
  setTimeout(() => {
    res.send("a3: 大学");
  }, 300);
});

app.get("/fetch", (req, res) => {
  res.send("fetch");
});

app.get("/get1", (req, res) => {
  res.send("传统URL传递参数: " + req.query.id + "-----" + req.query.hero);
});

app.get("/get2/:id/:hero", (req, res) => {
  res.send(
    "Restful形式URL传递参数: " + req.params.id + "-----" + req.params.hero
  );
});

app.delete("/delete/:id/:hero", (req, res) => {
  res.send("delete 请求传递参数: " + req.params.id + "-----" + req.params.hero);
});

app.delete("/delete2", (req, res) => {
  res.send("delete 请求传递参数: " + req.query.id + "-----" + req.query.hero);
});

app.post("/post", (req, res) => {
  res.send("post请求传递参数: " + req.body.uname + "-----" + req.body.pwd);
});

app.put("/put/:id", (req, res) => {
  res.send(
    "put请求传递参数: " +
      req.params.id +
      "-----" +
      req.body.uname +
      "-----" +
      req.body.pwd
  );
});

app.get("/json", (req, res) => {
  // res.send函数将内容类型设置为 text/html
  // res.json函数将内容类型设置为 application/json
  res.json({
    uname: "lisi",
    age: 18,
    gender: "male",
  });
});

app.get("/axios", (req, res) => {
  console.log("axios");
  res.send("hello axios");
});

app.get("/axios-json", (req, res) => {
  res.json({
    uname: "lisi",
    age: 12,
  });
});

app.get("/async1", (req, res) => {
  res.send("hello");
});

app.get("/async2", (req, res) => {
  if (req.query.info == "hello") {
    res.send("world");
  } else {
    res.send("error");
  }
});

// 指定端口号，并启动服务
app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
