const demo1 = require("./00-demo1.js");

// 1. 输出空对象
console.log(demo1);

// 2. 无法访问 00-demo.js 模块的属性和方法
//        模块的属性和方法默认是私有的访问权限
// console.log(hero);
sayHello();
