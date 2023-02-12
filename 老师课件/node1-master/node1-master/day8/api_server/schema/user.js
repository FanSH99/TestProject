// 导入 Joi 来定义验证规则
const joi = require("joi");
/* 
  string()     值必须是字符串
  alphanum()   值必须包含 a-zA-Z0-9 的字符串
  min(length)  最小长度
  max(length)  最大长度
  required()   必填项
  pattern(正则)正则规则
*/

// 定义用户名和密码的规则
const username = joi.string().alphanum().min(3).max(10).required();
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required();

// 定义 id, nickname, email 的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();

// 定义验证 avatar 头像的验证规则
const avatar = joi.string().dataUri().required();

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
};

// 验证规则对象-更新用户基本信息
exports.update_userinfo_schema = {
  body: {
    id,
    nickname,
    email,
  },
};

// 验证规则对象 - 更新密码
exports.update_password_schema = {
  body: {
    oldPwd: password,
    newPwd: joi.not(joi.ref("oldPwd")).concat(password),
  },
};

// 验证规则对象 - 更新头像
exports.update_avatar_schema = {
  body: {
    avatar,
  },
};
