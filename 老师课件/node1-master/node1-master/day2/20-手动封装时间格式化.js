// 导入自定义格式化时间的模块
const df = require("./21-dateFormat");

const dt = new Date();
console.log(dt);
console.log(df.dateFormat(dt));
