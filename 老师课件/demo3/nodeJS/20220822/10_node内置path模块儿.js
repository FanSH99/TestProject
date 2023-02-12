// __dirname 表示当前文件所在根目录路径
console.log(__dirname)
// 当前文件完整路径
console.log(__filename)
//  引入path 模块儿;
let path = require("path");
console.log(path)
let url = "user.json";
// 拼接路径
let newUrl = path.join(__dirname,url);
console.log(newUrl)
// 获取路径的文件名称
console.log(path.basename(__filename))
//  获取路径后缀
console.log(path.extname('./data/user.png'))
