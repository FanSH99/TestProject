/* 
  1. 核心代码
        文件开头默认省略的代码
        let exports = module.exports;
        文件默认默认省略的代码。(因此，永远以 module.exports 指向为准)
        return module.exports;
*/

// 2. module.exports 比较复杂，因此简写为 exports (可以当作别名)
// https://www.cnblogs.com/fightjianxian/p/12150940.html
console.log(module.exports === exports);

module.exports.hero = "剑圣";
module.exports.game = function () {
  console.log("为了部落");
};

// 3. exports 和 module.exports 不要混合使用
// 一旦给exports 重新赋值，就失去和 module.exports 的关联，指向新的对象，且后期无法使用。
exports = {
  game: "今晚吃鸡",
  play: function () {
    console.log("三英战吕布");
  },
};

/* 
  总结：
      核心代码
        文件开头默认省略的代码
        var exports = module.exports;
        文件默认默认省略的代码。(因此，永远以 module.exports 指向为准)
        return module.exports;

      exports 和 module.exports 的区别
          1. exports 只是 module.exports 的一个引用
          2. node 底层返回的依旧是  module.exports
*/
