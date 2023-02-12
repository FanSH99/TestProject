let name = "白浅";
let age = 18;
let msg = `我叫${name}今年${age}`;

let say = () => {
    console.log(name + "会说话");
}

// 导出模块。
module.exports = {
    msg,
    say,
}

// console.log(module);
/* 
Module {
  id: '.',
  path: 'd:\\work\\work_Demo\\teacher第3阶段\\day48--8.22(07)\\04_自定义模块',
  exports: {},
  filename: 'd:\\work\\work_Demo\\teacher第3阶段\\day48--8.22(07)\\04_自定义模块\\user.js',
  loaded: false,
  children: [],
  paths: [
    'd:\\work\\work_Demo\\teacher第3阶段\\day48--8.22(07)\\04_自定义模块\\node_modules',
    'd:\\work\\work_Demo\\teacher第3阶段\\day48--8.22(07)\\node_modules',
    'd:\\work\\work_Demo\\teacher第3阶段\\node_modules',
    'd:\\work\\work_Demo\\node_modules',
    'd:\\work\\node_modules',
    'd:\\node_modules'
  ]
}
*/