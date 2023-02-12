// 导入 Joi 来定义验证规则
const joi = require("joi");

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
const avatar = joi.string().dataUri().required();
const name = joi.string().required();
const alias = joi.string().alphanum().required();

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
};

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
    // 1. joi.ref('oldPwd') 引用指向老密码
    // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
    // 3. .concat() 用户合并两个验证规则
    newPwd: joi.not(joi.ref("oldPwd")).concat(password),
  },
};

// 验证规则对象 - 更新头像
exports.update_avatar_schema = {
  body: {
    avatar,
  },
};

exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
};

exports.delete_cate_schema = {
  params: {
    id,
  },
};

exports.get_cate_schema = {
  params: {
    id,
  },
};

exports.update_cate_schema = {
  body: {
    id,
    name,
    alias,
  },
};
