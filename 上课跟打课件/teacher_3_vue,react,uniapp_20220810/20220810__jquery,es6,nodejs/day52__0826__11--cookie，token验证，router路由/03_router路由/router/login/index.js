/* 2022年8月26日14:14:55 */

let express = require("express");

// 创建获取路由管理对象

let router = express.Router();
// console.log(router);

// 管理接口

router.get("/login", (req, res) => {
    res.send("登陆成功")
})

router.get("/outlogin", (req, res) => {
    res.send("退出成功")
})



// 导出路由，与其他页面建立联系。
console.log(router);

module.exports = router;