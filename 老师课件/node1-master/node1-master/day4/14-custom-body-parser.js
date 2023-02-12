// 1. 导入 node.js 内置的 querystring 模块
const qs = require('querystring');

// 2. 抽取中间件函数
const bodyParser = (req, res, next) => {

  let str = "";
  req.on("data", (chunk) => {
    str += chunk;
  });

  req.on("end", () => {
    console.log(str);

    const body = qs.parse(str);

    console.log(body);
    req.body = body;
    next();
  });
}

// 3. 导出函数
module.exports = bodyParser;