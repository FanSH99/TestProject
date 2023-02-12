const express = require("express");
const router = express.Router();

// 导入路由处理函数模块
const userinfo_handler = require("../router_handler/userinfo");

const expressJoi = require("@escook/express-joi");

// 导入需要的验证规则对象
const {
  update_userinfo_schema,
  update_password_schema,
  update_avatar_schema,
} = require("../schema/user");

// 获取用户基本信息的路由

router.post(
  "/userinfo",
  expressJoi(update_userinfo_schema),
  userinfo_handler.updateUserInfo
);

router.post(
  "/updatepwd",
  expressJoi(update_password_schema),
  userinfo_handler.updatePassword
);

router.post(
  "/update/avatar",
  expressJoi(update_avatar_schema),
  userinfo_handler.updateAvatar
);

module.exports = router;
