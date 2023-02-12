const express = require("express");

const app = express();

// 核酸检测
function check() {
  console.log("拿出手机");
  console.log("扫码");
  console.log("请出示扫码结果-----------");
  min = Math.ceil(1);
  max = Math.floor(10);
  let num = Math.floor(Math.random() * (max - min)) + min;
  let flag = true;
  if (num % 2 == 1) {
    flag = false;
  }
  return flag;
}

app.get("/js", (req, res) => {
  if (check()) {
    res.send("请做核酸");
  }
  res.send("js");
});

app.get("/c", (req, res) => {
  if (check()) {
    res.send("请做打疫苗");
  }
  res.send("C 语言");
});

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});


