/* 
 path.basename()
    作用：获取路径中最后一部分，通常获取路径中的文件名
    语法：
        path.basename(fpath[,ext]);
            fpaht: 必填参数，表示一个路径的字符串
            ext: 可选参数，文件扩展名
            返回值：String 路径中最后一部分
*/
const path = require("path");

const fpath = "/a/b/c/d/index.html";

// 文件名 index.html
console.log(path.basename(fpath));
// 文件名(移除扩展名) index
console.log(path.basename(fpath, ".html"));

/* 
  path.extname(fpath);
    作用：获取文件的扩展名
*/
// 文件扩展名     .html    extend (扩展)
console.log(path.extname(fpath));
