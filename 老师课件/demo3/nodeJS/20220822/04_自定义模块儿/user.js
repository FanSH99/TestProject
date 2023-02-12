let name = '张三';
let age = 18;
let msg =  `我叫${name}今年${age}`;
let say = ()=>{
    console.log("我会说")
}
// 导出模块儿
module.exports = {
   msg,
   say
}
// console.log(module)
