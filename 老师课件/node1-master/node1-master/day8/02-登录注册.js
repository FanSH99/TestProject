/* 
登录注册
    1. 新建数据库 node 和 表 user, 见 day8\api_server\mysql\user.sql

    2. 安装并配置 mysql 模块
        在 API 项目接口中，需要安装并配置 mysql 这个第三方模块，操作mysql 数据库
        2.1 安装 mysql 模块
            npm i mysql@2.18.1
        2.2 在项目根目录中新建 /db/index.js, 在此自定义模块中创建数据库的连接对象    
            // 导入 mysql 模块
            const mysql = require("mysql");

            // 创建数据库连接对象
            const db = mysql.createPool({
            host: "127.0.0.1",
            user: "root",
            password: "123456",
            database: "node",
            });

            // 向外共享 db 数据库连接对象
            module.exports = db;

    3. 注册
        实现步骤
            检测表单数据是否合法
            检测用户名是否被占用
            堆密码进行加密处理
            插入新用户
        3.1 检测表单数据是否合法        
                // 接收表单数据
                const userinfo = req.body;
                // 判断数据是否合法
                if (!userinfo.username || !userinfo.password) {
                    return res.send({ status: 1, message: "用于名或密码不合法" });
                }
        3.2 执行 SQL 语句并根据结果判断用户名是否被占用
                // 导入数据库模块
                const db = require('../db/index');
                // 定义 sql 语句
                const sqlStr = 'select * from user where username = ?';

                db.query(sqlStr, userinfo.username, (err, result) => {
                // 执行 SQL 语句失败
                if (err) {
                    return res.send({ status: 1, message: err.message });
                }
                // 判断用户名是否被占用
                if (result.length > 0) {
                    return res.send({ status: 1, message: "用户名被占用，请更换其它用户名" });
                }
                    // todo: 用户名可以使用
                    res.send("register ok");
                });   
        3.3 密码加密，防止数据库泄露
            当前项目中，使用 bcryptjs 对用户名密码加密
            优点：
                1. 加密后，无法被逆向破解
                2. 同一明文密码，加密后，得到加密结果是不一样的。    
            3.4.1 安装 bcryptjs@2.4.3
                npm install bcryptjs@2.4.3
            3.4.2 在 /router_handler/user.js 中，导入 bcryptjs    
                const bcrypt = require('bcryptjs');
            3.4.3 在注册用户的处理函数中，确认用户名之后，密码加密 
                userinfo.password = bcrypt.hashSync(userinfo.password, 10);
        3.4 插入新用户
            3.4.1 定义插入用户的 SQL 语句
                const sql = "insert into user set ?";     
            3.4.2 调用 db.query() 执行 SQL 语句，插入新用户
                db.query(
                    sql,
                    { username: userinfo.username, password: userinfo.password },
                    (err, result) => {
                        // 判断 SQL 执行失败
                        if (err) {
                        return res.send({ status: 1, message: err.message });
                        }
                        // 判断影响行数是否为 1
                        if (result.affectedRows != 1) {
                        return res.send({ status: 1, message: "注册用户失败,请求后再试" });
                        }
                        // 注册用户成功
                        res.send({ stauts: 0, message: "注册成功" });
                    }
                );
    
    4. 优化 res.send() 代码
        在处理函数中，需要多次调用 res.send() 向客户端响应失败处理请求结果，为了简化代码，可以
        手动封装一个 res.cc 函数
        
        4.1 在 app.js 中，所有路由之前，声明一个全局的中间件，为 res 对象挂载一个 res.cc 函数:
            // 一定要在路由之前，封装 res.cc 函数
            app.use((req, res, next) => {
                // stauts 默认值是1，表示失败的情况
                // err 的值，可能是一个错误情况，也可能是一个错误的描述字符串
                res.cc = function (err, status = 1) {
                    res.send({
                    status,
                    message: err instanceof Error ? err.message : err,
                    });
                };
                next();
            });   

    5. 优化表单数据验证
        表单验证的原则：前端验证为辅，后端验证为主，后端永远不相信前端提交的任何内容
        推荐使用第三方的数据验证模块，辅助验证逻辑
        官网：https://www.npmjs.com/package/@escook/express-joi
        5.1 安装 @hapi/joi 包，为表单中携带的每一数据项，定义验证规则
             npm install joi@17.4.0
        5.2 安装 @escook/express-joi 中间件，来实现自动对表单数据进行验证的功能
             npm install @escook/express-joi
        5.3 新建 /schema/user.js 用户信息验证模块，并初始化代码如下：
            // 导入 Joi 来定义验证规则
            const joi = require("joi");
            // string()     值必须是字符串
            // alphanum()   值必须包含 a-zA-Z0-9 的字符串
            // min(length)  最小长度
            // max(length)  最大长度
            // required()   必填项
            // pattern(正则)正则规则

            // 定义用户名和密码的规则
            const username = joi.string().alphanum().min(3).max(10).required();
            const password = joi.string()
            .pattern(/^[\S]{6,12}$/)
            .required();

            // 定义验证注册和登录表单数据的规则对象
            exports.reg_login_schema = {
                body: {
                    username,
                    password,
                },
            };
        5.4 修改 /router/user.js 中代码    
            // 1. 导入验证数据的中间件
            const expressJoi = require('@escook/express-joi');
            // 2. 导入需要验证规则的对象
            const {reg_login_schema} = require('../schema/user');
            // 3. 验证
            router.post("/register",expressJoi(reg_login_schema), user_handler.register);
        5.5 在 app.js 的全局错误级别中间件，捕获验证失败错误，并把错误结果响应给客户端
            // 4. 导包
            const joi = require('joi');
            // 5.定义错误级别的中间件
            app.use((err, req, res, next) => {
                // 验证失败的导致的错误
                if (err instanceof joi.ValidationError) {
                    return res.cc(err);
                }
                // 未知错误
                res.cc(err);
            });

            记得把之前的代码注释掉
    
    6. 登录
          步骤：
              1. 检测表单数的合法性
              2. 根据用户名查询用户的数据
              3. 判断用户输入的密码是否正确
              4. 生成 JWT 的 token 字符串
        6.1 检测登录表单数据的合法性
            /router/user.js 中登录的路由代码如下修改
            router.post("/login", expressJoi(reg_login_schema), user_handler.login);
        6.2 根据用户名查询用户的数据              
            6.2.1 接收表单数据   
                const userinfo = req.body;
            6.2.2 定义 SQL 语句     
                const sql = `select * from user where username = ?`;
            6.2.3 执行 SQL 语句，查询用户数据 
                db.query(sql, userinfo.username, (err, result) => {
                    // 执行 SQL 语句失败
                    if (err) {
                    return res.cc(err);
                    }
                    // 执行 SQL 语句成功，但是获取到的数据条数不等于1
                    if (result.length != 1) {
                    return res.cc("登录失败");
                    }
                    // todo: 判断密码是否正确
                    res.send("login ok");
                });   
        6.3 判断用户输入的密码是否正确 
            核心实现思路：调用 bcrypt.compareSync(用户提交的密码, 数据库的密码) 比较是否一致
            代码如下：
                const flag = bcrypt.compareSync(userinfo.password, result[0].password);
                if (!flag) {
                    return res.cc("登录失败，密码不一致");
                }
        6.4 生成 JWT 的 token 字符串
            核心注意点：在生成 token 字符串时，一定要剔除密码和头像的值
            6.4.1 通过 ES6 高级语法，快速剔除密码和头像的值
                // 展开后，重新赋值
                const user = { ...result, password: "", user_pic: "" };
            6.4.2 安装 token 的包
                npm i jsonwebtoken@8.5.1        
            6.4.3 在 /router_handler/user.js 模块的头部区域，导入 jsonwebtoken 包：
                const jwt = require("jsonwebtoken");
            6.4.4 创建 config.js 文件，并向外共享加密和还原 token 的 jwtSecretKey 字符串
                // 这是一个全局的配置文件
                module.exports = {
                    // 加密和解密的密钥
                    jwtSecretKey: "123456",
                    // token 有效时间
                    expiresIn: "10h",
                };
            6.4.5 将用户信息对象加密成 token 字符串
                // 导入全局的配置文件
                const config = require("../config");
                const tokenStr = jwt.sign(user, config.jwtSecretKey, {
                    expiresIn: config.expiresIn,
                });
            6.4.6 将生成的 token 字符串响应给客户端
                res.send({
                    status: 0,
                    message: "登录成功",
                    token: "Bearer " + tokenStr,
                }); 
    7. 配置解析 token 的中间件
        7.1 安装解析 token 的中间件            
            npm i express-jwt@5.3.3
        7.2 在 app.js 中注册路由之前，配置解析 token 的中间件
            const expressJWT = require("express-jwt");
            const config = require("./config");
            
            // 全局组件之后
            app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] }));
        7.3 在 app.js 中错误级别中间件里面，捕获并处理 token 认证失败的结果
            // 身份认证失败
            if (err.name == "UnauthorizedError") {
                return res.cc("身份认证失败!");
            }


*/