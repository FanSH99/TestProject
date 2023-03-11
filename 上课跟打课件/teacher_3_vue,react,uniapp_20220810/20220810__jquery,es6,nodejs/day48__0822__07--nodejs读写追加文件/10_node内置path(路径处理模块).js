/* 
2022年8月22日16:30:15
*/
//__dirname表示当前文件所在根目录路径  --两个下划线，不能写少。
console.log(__dirname);//d:\work\work_Demo\teacher_3__0810start\day48__0822__07
// __filename完整路径。--两个下划线，不能写少。
console.log(__filename);//d:\work\work_Demo\teacher_3__0810start\day48__0822__07\10_node内置path(路径处理模块).js

// 引入path模块儿。
let path = require("path");
console.log(path);
let url = "user.json";
//  拼接路径，
let newUrl = path.join(__dirname, url, 'a', 'b');
console.log(newUrl); //d: \work\work_Demo\teacher_3__0810start\day48__0822__07\user.json\a\b

//basename获取文件名称。
console.log(path.basename(url));//user.json
console.log(path.basename(__filename));//10_node内置path(路径处理模块).js
// extname获取路径后缀
console.log(path.extname("./data/user.js"));//.js