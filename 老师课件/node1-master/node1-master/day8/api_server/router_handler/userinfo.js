// 导入数据库操作模块
const db = require("../db/index");

// 导入处理密码的模块
const bcrypt = require("bcryptjs");

// 获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
  // 定义查询用户信息的 SQL 语句
  const sql = `select id, username, nickname, email, user_pic from user where id=?`;
  // 调用 db.query() 执行 SQL 语句
  // token 解析成功后，自动挂载到 req.user 属性上
  // console.log(req.user);
  db.query(sql, req.user["0"].id, (err, result) => {
    // 执行 SQL 语句失败
    console.log(err);
    if (err) {
      return res.cc(err);
    }
    // 执行 SQL 语句成功，但是查询结果可能是空
    if (result.length !== 1) {
      return res.cc("获取用户信息失败");
    }
    // 用户信息获取成功
    res.send({
      status: 0,
      message: "获取用户信息成功",
      data: result[0],
    });
  });
};

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
  // 定义待执行的 SQL 语句
  const sql = "update user set ? where id = ?";
  db.query(sql, [req.body, req.body.id], (err, result) => {
    console.log(err);
    console.log(result);
    // 执行 SQL 失败
    if (err) {
      return res.cc(err);
    }
    // 执行 SQL 语句成功, 但是影响行数不等于1
    if (result.affectedRows != 1) {
      return res.cc("更新用户的基本信息失败");
    }
    res.cc("更新用户信息成功!", 0);
  });
};

// 更新密码的路由的处理函数
exports.updatePassword = (req, res) => {
  // 根据 id 查询用户的信息
  const sql = `select * from user where id = ?`;
  // 执行 SQL
  db.query(sql, req.user[0].id, (err, result) => {
    // 执行 SQL 失败
    if (err) {
      return res.cc(err);
    }
    // 判断结果是否存在
    if (result.length != 1) {
      return res.cc("用户不存在");
    }
    // todo: 判断用户输入的旧密码是否正确
    const flag = bcrypt.compareSync(req.body.oldPwd, result[0].password);
    if (!flag) {
      return res.cc("旧密码错误!");
    }
    // 定义更新密码的 SQL 语句
    const sql = `update user set password = ? where id = ?`;
    // 对新密码继续宁加密处理
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
    // 调用 db.query() 执行 SQL
    db.query(sql, [newPwd, req.user[0].id], (err, result) => {
      // 执行 SQL 失败
      if (err) {
        return res.cc(err);
      }
      // 判断影响的行数
      if (result.affectedRows != 1) {
        return res.cc("更新密码失败");
      }
      res.cc("密码更新成功", 0);
    });
  });
};

// 更新用户头像的处理函数
exports.updateAvatar = (req, res) => {
  // 1. 定义 SQL 更新用户头像
  const sql = `update user set user_pic = ? where id = ?`;
  // 2. 调用 db.query() 执行 SQL
  db.query(sql, [req.body.avatar, req.user[0].id], (err, result) => {
    // 执行成功
    if (err) {
      return res.cc(err);
    }
    // 影响行数是否等于1
    if (result.affectedRows != 1) {
      return res.cc("更换头像失败");
    }
    // 成功
    res.cc("更新头像成功", 0);
  });
};
