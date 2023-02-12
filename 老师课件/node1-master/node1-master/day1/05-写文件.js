/* 
  写文件：
    fs.writeFile(file, data, [options ,] callback);
      参数1 : 文件的路径的字符串，即文件存放位置
      参数2 ：需要写入的内容
      参数3 : 可选，写入文件的格式，默认 utf-8
      参数4 : 文件写入完成后的回调函数
*/
const fs = require("fs");

fs.writeFile("./files/eason.txt", "富士山下", function (err, data) {
  // 在nodejs中存在易错机制 错误信息永远在第一个回调参数中
  // 如果写入成功，则 err 是 null，失败，则是错误对象
  //   console.log(err);
  //   console.log(data); // undefined
  
  // 优化后写法
  if (err) {
    console.log("文件写入失败+ " + err);
    return;
  }
  console.log("文件写入成功");
});
