const path = require("path");
const fs = require("fs");

/* 
    path 模块是 Node.js 官方提供的，用来处理路径的模块。
        path.join() : 用来进行多个路径片段的拼接
        path.basename() : 从路径字符串中，解析出文件名  
        
        用法：先导入 path 

        语法：
            path.join([...paths]);
                参数(...paths)：路径片段的序列
                返回值：String
*/

// ../ 抵消前一个的层级目录
const pathStr = path.join("/a", "/b/c", "../", "./d", "/e");
console.log(pathStr); // \a\b\d\e

// 案例(以后尽量 join 替换 + 的字符串路径拼接)
// fs.readFile(__dirname + "/files/jay.txt", "utf-8", function (err, data) {
fs.readFile(
//   path.join(__dirname, "/files/jay.txt"),
  path.join(__dirname, "./files/jay.txt"), // 如果多了 . (有一定的容错能力)
  "utf-8",
  function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
