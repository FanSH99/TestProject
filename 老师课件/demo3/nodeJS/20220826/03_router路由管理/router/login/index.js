let express = require("express");
// 获取路由管理对象
let router = express.Router();

// 使用router定义路由
router.get("/login",(req,res)=>{
    res.send("登录成功")
})
console.log(router)

// 退出登录
router.post("/outlogin",(req,res)=>{
    res.send("退出成功")
})
// 将路由导出
module.exports = router;