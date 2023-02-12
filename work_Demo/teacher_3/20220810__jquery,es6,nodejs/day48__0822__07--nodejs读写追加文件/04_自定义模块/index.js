// 不能用import引入，import 遵循es6规范。

// 导入模块。
let msg = require('./user');//会把原先的文件执行一遍。
console.log(msg);//{ msg: '我叫白浅今年18' , say: [Function: say]}
console.log(msg.msg);//我叫白浅，
console.log(msg.say);//[Function: say]
console.log(msg.say());//白浅会说话
// 导入模块
let { list } = require('./list')
console.log(list);//[ '白浅', '白子画', '白笙' ]


/* 
使用module.exports={}导出模块儿。
使用require（模块路径}导入模块

es6模块化。
使用export{}导出模块，使用import{}form’模块路径'
使用export default 默认导出， import xxx form '模块路径'
*/