/* 
个人信息
    1. 获取用户的基本信息
        实现步骤：
            初始化路由模块
            初始化路由处理函数模块
            获取用户的基本信息
        1.1 初始化路由模块
            1.1.1 创建 /router/userinfo.js 路由模块，并初始化如下代码：
                const express = require("express");
                const router = express.Router();
                // 获取用户基本信息的路由
                router.get("/userinfo", (req, res) => {});
                module.exports = router;
            1.1.2 在 app.js 中导入并使用个人中心的路由模块
                // 导入并使用用户信息的路由模块
                const userinfoRouter = require('./router/userinfo');
                app.use('/my',userinfoRouter);
        1.2 初始化路由处理函数模块 
            1.2.1 创建 /router_handler/userinfo.js 路由处理函数模块，代码如下
                // 获取用户基本信息的处理函数
                exports.getUserInfo = (req, res) => {
                    res.send("ok");
                };
            1.2.2 修改 /router/userinfo.js 代码
                // 导入路由处理函数模块
                const userinfo_handler = require("../router_handler/userinfo");
                // 获取用户基本信息的路由
                router.get("/userinfo", userinfo_handler.getUserInfo);
        1.3 获取用户的基本信息
            1.3.1 在 /router_handler/userinfo.js 头部导入数据库操作模块
                const db = require("../db/index");
            1.3.2 定义 SQL 语句
                const sql = `select id, username, nickname, email, user_pic from user where id = ?`;
            1.3.3 调用 db.query() 执行语句
                // 注意：req 对象上的 user 属性，是 token 解析成功后，express-jwt 中间件帮我们挂载的
                // console.log(req.user);
                db.query(sql, req.user["0"].id, (err, result) => {    
                    // 执行 SQL 语句失败
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

    2. 更新用户的基本信息
           实现步骤：  
               定义路由和处理函数
               验证表单数据
               实现更新用户基本信息的功能
        2.1 定义路由和处理函数
            2.1.1 在 /router/userinfo.js 模块中，新增更新用户基本信息的路由
                // 更新用户基本信息的路由
                router.post("/userinfo", userinfo_handler.updateUserInfo);
            2.1.2 在 /router_handler/userinfo.js 模块中，定义并向外共享更新用户基本信息的路由处理函数    
                // 更新用户基本信息的处理函数
                exports.updateUserInfo = (req, res) => {
                    res.send("ok");
                };
        2.2 验证表单数据
            2.2.1 在 /schema/user.js 验证规则模块中，定义 id, nickname, email 的验证规则如下：   
                // 定义 id, nickname, email 的验证规则
                const id = joi.number().integer().min(1).required();
                const nickname = joi.string().required();
                const email = joi.string().email().required();
            2.2.2 并使用 exports 向外共享如下的验证规则对象
                exports.update_userinfo_schema = {
                    body: {
                        id,
                        nickname,
                        email
                    },
                };
            2.2.3 在 /router/userinfo.js 模块中，导入验证数据合法性的中间件：
                const expressJoi = require("@escook/express-joi");
            2.2.4 在 /router/userinfo.js 模块中，导入需要的验证规则对象 
                const { update_userinfo_schema } = require("../schema/user");
            2.2.5 在 /router/userinfo.js 模块中，修改更新用户的基本信息的路由如下：
                router.post(
                    "/userinfo",
                    expressJoi(update_userinfo_schema),
                    userinfo_handler.updateUserInfo
                );
        2.3 实现更新用户基本信息的功能     
            2.3.1 定义待执行的 SQL 语句              
                const sql = "update user set ? where id = ?";    
            2.3.1 调用 db.query() 执行 SQL 语句并传参   
                // 记得导入 db 模块           
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
    3. 重置密码
           实现步骤
               定义路由和处理函数
               验证表单数据
               实现重置密码的功能
        3.1 定义路由和处理函数
            3.1.1 在 /router/userinfo.js 模块中，新增重置密码功能
                router.post("/updatepwd", userinfo_handler.updatePassword);
            3.1.2 在 /router_handler/userinfo.js 模块中，定义并向外共享重置密码的路由处理函数    
                // 更新密码的路由的处理函数
                exports.updatePassword = (req, res) => {
                    res.send("ok");
                };
        3.2 验证表单数据
            核心思路：旧密码和新密码，必须符合密码的验证规则，并且不一致
            3.2.1 在 /schema/user.js 模块中, 使用 exports 向外共享如下的验证规则
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
            3.2.2 在 /router/userinfo.js 模块中，导入需要的验证规则对象  
                // 导入需要的验证规则对象
                const {
                update_userinfo_schema,
                update_password_schema,
                } = require("../schema/user");
            3.2.3 在重置密码路由中，使用 update_password_schema 规则，验证表单的数据，示例代码如下：
                // 更新密码的路由
                router.post(
                    "/updatepwd",
                    expressJoi(update_password_schema),
                    userinfo_handler.updatePassword
                );
        3.3 实现重置密码的功能   
            3.3.1 根据 id 查询用户是否存在
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
                    res.cc("ok");
                });
            3.3.2 判断提交的旧密码是否正确 
                // 导入处理密码的模块
                const bcrypt = require("bcryptjs");   
                const flag = bcrypt.compareSync(req.body.oldPwd, result[0].password);
                if (!flag) {
                    return res.cc("旧密码错误!");
                }    
            3.3.3 对新密码进行 bcrypt 加密后，更新到数据库中 
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
                
    4. 更新用户头像
        实现步骤：
            定义路由和处理函数
            验证表单数据
            实现用户头像的更新
        4.1 定义路由和处理函数
            4.1.1 在 /router/userinfo.js 模块中，新增更新用户头像的路由：
                router.post("/update/avatar", userinfo_handler.updateAvatar);
            4.1.2 在 /router_handler/userinfo.js 模块中，定义并向外共享更新用户头像的路由处理函数：  
                // 更新用户头像的处理函数
                exports.updateAvatar = (req, res) => {
                    res.send("ok");
                };
        4.2 验证表单数据
            4.2.1 在 /schema/user.js 验证规则模块中，定义 avatar 的验证规则如下：  
                // 定义验证 avatar 头像的验证规则
                // base64 格式的字符串:data:image/png;base64,MTIzNDU2
                // https://zhuanlan.zhihu.com/p/384238870
                const avatar = joi.string().dataUri().required();
            4.2.2 并使用 exports 向外共享如下的验证规则对象：    
                // 验证规则对象 - 更新头像
                exports.update_avatar_schema = {
                    body: {
                        avatar,
                    },
                };
            4.2.3 在 /router/userinfo.js 模块中，导入需要的验证规则对象：
                const {
                update_userinfo_schema,
                update_password_schema,
                update_avatar_schema,
                } = require("../schema/user");
            4.2.4 在 /router/userinfo.js 模块中，修改更新用户头像的路由如下：
                router.post(
                    "/update/avatar",
                    expressJoi(update_avatar_schema),
                    userinfo_handler.updateAvatar
                );
        4.3 实现用户头像的更新  
            4.3.1 定义更新用户头像的 SQL 语句     
                const sql = `update user set user_pic = ? where id = ?`;    
            4.3.2 调用 db.query() 执行 SQL 语句，更新应用用户的头像
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





*/
