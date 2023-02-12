// 导入
const date = require("./src/dateFormat");
const array = require("./src/array");

// 返回值是对象
console.log(typeof date);
console.log(date);

// 向外暴露需要的成员
module.exports = {
  // 展开运算符(对象的属性展开, 交给新的对象)
  ...date,
  ...array,
};
