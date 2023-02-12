// 1. 多个变量的导出
// export let age = 12;
// export let hero = "吕布";
// export let game = function () {
//   console.log("今晚吃鸡");
// };

let age = 12;
let hero = "吕布";
let game = function () {
  console.log("今晚吃鸡");
};

// 3. 多个变量的导出的第二种方法
export { age, hero, game };
