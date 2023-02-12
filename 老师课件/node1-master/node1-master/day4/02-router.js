/* 
路由模块化
    一个完整的项目会有成千上万个路由。为了方便对路由进行模块化管理，
    express 不建议将路由直接挂载到 app 上，
    而是推荐将路由抽离为单独的模块，只负责路由的逻辑。
    
    创建步骤如下：
        1. 创建路由模块对应的 .js 文件,导入 express
        2. 调用 express.Router() 函数创建路由对象
        3. 在路由对象上挂载具体的路由
        4. 使用 module.exports 向外共享路由对象
*/

// 1. 导入 express
const express = require("express");

// 2. 调用 express.Router() 函数创建路由对象
const router = express.Router();

// 3. 在路由对象上挂载具体的路由
router.get("/user/list", (req, res) => {
  res.send("查询用户成功");
});

router.post("/user/add", (req, res) => {
  res.send("新增用户成功");
});

// 4. 使用 module.exports 向外共享路由对象
module.exports = router;
