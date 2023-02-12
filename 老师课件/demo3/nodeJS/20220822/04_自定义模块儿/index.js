// 导入模块儿
let msg = require('./user');
let {list} = require("./list")
console.log(msg.msg)
msg.say();
console.log(list)

/* 
  node模块儿化：
  使用 module.exports ={} 导出模块儿
  使用require(模块二路径) 导入模块儿
  es6模块儿：
  使用 export{}导出模块儿 使用 import {} from '模块儿路径'
  使用 export default 默认导出 使用 improt xxx form xxxx;
*/