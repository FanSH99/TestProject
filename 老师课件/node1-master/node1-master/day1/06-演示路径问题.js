const fs = require("fs");

/* 
    如果出现路径拼接错误的,因为提供操作的相对路径(./ 或 ../)
    原因: 代码在运行的时候，会以执行 node 命令时所处的目录(pwd)，动态拼接被操作文件的路径。
*/
// fs.readFile("./files/jay.txt", "utf-8", function (err, data) {
//   if (err) {
//     // 错误信息: D:\webWorkSpace\node1\files\jay.txt
//     console.log("文件读取失败:" + err.message);
//     return;
//   }
//   console.log("文件读取成功: "+ data);
// });

// 解决方法1：绝对路径.(注意转义符)
// 缺点：移植性差，不利于维护。
// fs.readFile("D:\\webWorkSpace\\node1\\day1\\files\\jay.txt", "utf-8", function (err, data) {
//   if (err) {
//     // 错误信息: D:\webWorkSpace\node1\files\jay.txt
//     console.log("文件读取失败:" + err.message);
//     return;
//   }
//   console.log("文件读取成功: " + data);
// });

// __dirname 表示当前文件所在目录
console.log(__dirname); // D:\webWorkSpace\node1\day1 (切换终端路径，依然不变)

// 解决方法2： __dirname
fs.readFile(__dirname + "/files/jay.txt", "utf-8", function (err, data) {
  if (err) {
    // 错误信息: D:\webWorkSpace\node1\files\jay.txt
    console.log("文件读取失败:" + err.message);
    return;
  }
  console.log("文件读取成功: " + data);
});
