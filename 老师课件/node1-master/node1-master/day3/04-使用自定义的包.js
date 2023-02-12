// const tools = require("./03-beiyou-tools/index");

// 此时会查找 package.json 的 main 字段，查找到 index.js 文件
// const tools = require("./03-beiyou-tools");

const tools = require("./06-beiyou-tools");

// 时间格式化
console.log(tools.dateFormat(new Date()));

// 排序
let arr = [9, 5, 2, 6, 2, 5, 1];
const result = tools.sort(arr);
console.log(result);

// 数组去重
console.log(tools.unique(result));
