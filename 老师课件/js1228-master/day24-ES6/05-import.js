// 2. 多个变量的导入(对象的解构)
// 4. 取别名
import { hero, age, game as lol } from "./04-export.js";

console.log(age);
// game();
lol();


import temp from "./06-default.js";
console.log(temp);