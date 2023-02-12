/* 
fs 模块 file syetem
    fs 模块是 Node.js 官方提供的，通过一些系统的属性和方法用来操作文件的模块。
      fs.readFile() 读取指定文件的内容
      fs.writeFile() 指定文件写入内容
    使用前，需要先导入
*/
// 1. 导入 fs 模块，操作文件(该模块由 node 提供，安装 node 环境时就有了)
const fs = require("fs");

/* 
  语法：
    fs.readFile(path, [optioins ,] callback);
      参数1: 读取文件的存放路径
      参数2：读取文件时候，采用的编码格式，一般都是 utf-8
      参数3：回调函数，err data 分别获取失败和成功的结果
  
  需求：以 utf-8 编码格式，读取指定文件内容，并分别大于 err 和 dataStr
*/
fs.readFile("./files/jay.txt", "utf-8", function (err, data) {
  // 读取成功，则 err 是 null，data 是文件内容
  // 读取失败，则 err 是错误对象，data 是 undefined
  console.log(err); 
  console.log("-------------------");
  console.log(data); // 文件的具体内容
});
