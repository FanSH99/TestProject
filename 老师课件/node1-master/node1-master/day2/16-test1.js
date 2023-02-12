// 1. 在一个自定义的模块中，默认情况下，module.exports = {}

const hero = "吕布";
const slogan = "人中吕布，马中赤兔";

function fight() {
  console.log(`我${hero},要打十个`);
}

// 2. 向外共享模块作用域中的成员。(对象动态添加属性)
// 对外暴露属性
module.exports.hero = hero;
// 对外暴露方法
module.exports.fight = fight;

// 核心: 这行代码是系统默认写的。
// return module.exports;

