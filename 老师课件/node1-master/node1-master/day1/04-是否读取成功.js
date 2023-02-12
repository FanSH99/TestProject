const fs = require("fs");

fs.readFile("./files/jay1.txt", "utf-8", function (err, data) {
  // 如果 err 为 null 则读取文件成功
  if (err) {
    console.log(err);
    console.log("读取文件失败:  " + err.message);
    return;
  }
  console.log("读取文件成功:  " + data);
});
