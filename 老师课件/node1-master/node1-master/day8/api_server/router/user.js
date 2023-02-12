const express = require("express");
// 创建路由对象
const router = express.Router();

// 导入用户路由处理函数对应的模块
const user_handler = require("../router_handler/user");

// 1. 导入验证数据的中间件
const expressJoi = require("@escook/express-joi");
// 2. 导入需要验证规则的对象
const { reg_login_schema } = require("../schema/user");

// 注册新用户
// 3. 验证
router.post("/register", expressJoi(reg_login_schema), user_handler.register);

// 登录
router.post("/login", expressJoi(reg_login_schema), user_handler.login);

// 将路由对象共享出去
module.exports = router;
