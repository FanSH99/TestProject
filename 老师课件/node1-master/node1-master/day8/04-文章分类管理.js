/* 
文章分类管理：
    1. 创建表

    2. 获取文章分了列表
        实现步骤：
            初始化路由模块
            初始化路由处理函数模块
            获取文章分类列表数据
        2.1 初始化路由模块
            2.1.1 在 /router/artcate.js 路由模块，并初始化如下的代码
                const express = require("express");
                const router = express.Router();

                // 获取文章分类列表数据的路由
                router.get("/cates", (req, res) => {
                res.send("ok");
                });

                module.exports = router;
            2.1.2 在 app.js 中导入并使用文章分类的路由模块：
                const artCateRouter = require("./router/artcate");
                app.use("/my/article", artCateRouter);
        2.2 初始化路由处理函数模块
            2.2.1 创建 /router_handler/artcate.js 路由处理函数模块，并初始化如下代码
                exports.getArtCates = (req, res) => {
                    res.send("ok");
                };
            2.2.2 修改 /router/artcate.js 中代码：  
                // 导入文章分类的路由处理函数模块
                const artCate_handler = require("../router_handler/artcate");

                // 获取文章分类列表数据的路由
                router.get("/cates", artCate_handler.getArtCates);  
        2.3 获取文章分类列表数据
            2.3.1 在 /router_handler/artcate.js 头部导入数据库操作模块
                const db = require("../db/index");
            2.3.2 定义并执行 SQL
                // 获取文章分类列表的处理函数
                exports.getArtCates = (req, res) => {
                    // 定义 SQL
                    const sql = `select * from article_cate where is_delete = 0 order by id asc`;
                    // 执行 SQL
                    db.query(sql, (err, result) => {
                        if (err) {
                            return res.cc(err);
                        }
                        res.send({
                            status: 0,
                            message: "获取文章数据成功",
                            data: result,
                        });
                    });
                };

    3. 新增文章分类
        实现步骤：
            定义路由和处理函数
            验证表单数据
            查询文章名称和分类别名是否被占用
            实现新增文章分类的功能  
        3.1 定义路由和处理函数
            3.1.1 在 /router/artcate.js 模块中，添加新增文章分类的路由
                router.post("/addCates", artCate_handler.addArticleArtCates);
            3.1.2 在 /router_handler/artcate.js 模块中，定义并向外共享 新增文章分类的路由处理函数    
                // 新增文章分类的处理函数
                exports.addArticleArtCates = (req, res) => {
                    res.send("ok");
                };
        3.2 验证表单数据
            3.2.1 创建 /schema/artcate.js 文章分类数据验证模块，并定义如下规则
                // 1. 导入 Joi 来定义验证规则
                const joi = require("joi");

                // 2. 定义 name 和 alias 的验证规则
                const name = joi.string().required();
                const alias = joi.string().alphanum().required();

                // 3. 向外共享验证规则对象
                exports.add_cate_schema = {
                    body: {
                        name,
                        alias,
                    },
                };
            3.2.2 在 /router/artcate.js 模块中，使用 add_cate_schema 对数据进行验证    
                // 导入验证数据的中间件
                const expressJoi = require("@escook/express-joi");
                // 导入需要的验证规则对象
                const { add_cate_schema } = require("../schema/user");

                // 新增文章分类的路由
                router.post(
                    "/addCates",
                    expressJoi(add_cate_schema),
                    artCate_handler.addArticleArtCates
                );
        3.3 查询文章名称和分类别名是否被占用
            // 1. 定义查询的 SQL 语句
            const sql = `select * from article_cate where name = ? or alias = ?`;
            // 2. 执行 SQL
            db.query(sql, [req.body.name, req.body.alias], (err, result) => {
                // 3. 判断 SQL 执行失败
                if (err) {
                return res.cc(err);
                }
                // 4. 判断数据的长度
                if (result.length > 0) {
                return res.cc("名称分类或分类别名被占用, 请更换后重试~");
                }
                // todo : 执行添加动作
            });   
        3.4 实现新增文章分类的功能        
            // 定义插入文章分类的 SQL 语句，
            const sql2 = `insert into article_cate(name, alias) values (?, ?)`;
            // 执行插入文章的 SQL 语句
            db.query(sql2, [req.body.name, req.body.alias], (err, result) => {
                if (err) {
                    return res.cc(err);
                }
                if (result.affectedRows != 1) {
                    return res.cc("新增文章分类失败");
                }
                res.cc("新增文章分类成功!", 0);
            });

    4. 根据 id 删除文章分类
        实现步骤
            定义路由和处理函数
            验证表单数据
            实现删除文章分类功能
        4.1 定义路由和处理函数
            4.1.1 在 /router/artcate.js 模块中，添加删除文章分类的路由
                router.get("/deletecate/:id", artCate_handler.deleteCateById);
            4.1.2 在 /router_handler/artcate.js 模块中，定义并向外共享删除文章分类的路由处理函数
                // 删除文章分类的处理函数
                exports.deleteCateById = (req, res) => {
                    res.send("ok");
                };
        4.2 验证表单数据
            4.2.1 在/schema/artcate.js 验证规则模块中，定义 id 的验证规则如下：
                const id = joi.number().integer().min(1).required();
            4.2.2 并使用 exports 向外共享如下人验证规则对象：
                exports.delete_cate_schema = {
                    params: {
                        id,
                    },
                };
            4.2.3 在 /router/artcate.js 模块中，导入需要的验证规则对象，并在路由中使用    
                const { add_cate_schema, delete_cate_schema } = require("../schema/user");
                router.get(
                    "/deletecate/:id",
                    expressJoi(delete_cate_schema),
                    artCate_handler.deleteCateById
                );
        4.3 实现删除文章分类功能    
            定义 SQL, 并执行   
            exports.deleteCateById = (req, res) => {
                // 定义 SQL
                const sql = `update article_cate set is_delete = 1 where id = ?`;
                // 执行 SQL
                db.query(sql, req.params.id, (err, result) => {
                    if (err) {
                        return res.cc(err);
                    }
                    if (result.affectedRows != 1) {
                        return res.cc("删除文章分类失败!");
                    }
                    res.cc("删除文章分类成功", 0);
                });
            };
    
    5. 根据 id 获取文章分类数据
        实现步骤：
            定义路由和处理函数
            验证表单数据
            实现获取文章分类的功能
        5.1 定义路由和处理函数
            5.1.1 在 /router/artcate.js 模块中，添加根据 id 获取文章分类的功能
                router.get("/cate/:id", artCate_handler.getArtCatesById);
            5.1.2 在 /router_handler/artcate.js 模块中，定义并向外共享根据 id 获取文章分类的路由处理函数
                exports.getArtCatesById = (req, res) => {
                    res.send("ok");
                };
        5.2 验证表单数据
            5.2.1 在 /schema/user.js 验证规则模块中，使用 exports 向外共享如下的验证规则对象
                // 验证规则对象 - 根据 id 获取文章分类
                exports.get_cate_schema = {
                    params: {
                        id,
                    },
                };
            5.2.2 在 /router/artcate.js 模块中，导入需要的验证规则对象，并在路由中使用
                // 导入需要的验证规则对象
                const {
                    add_cate_schema,
                    delete_cate_schema,
                    get_cate_schema,
                } = require("../schema/user");

                // 根据 id 获取文章分类的路由
                router.get(
                    "/cate/:id",
                    expressJoi({ get_cate_schema }),
                    artCate_handler.getArtCatesById
                );
        5.3 实现获取文章分类的功能
            定义并执行 SQL    
            const sql = `select * from article_cate where id = ?`;
            // 执行 SQL
            db.query(sql, req.params.id, (err, result) => {
                if (err) {
                    return res.cc(err);
                }
                if (result.length != 1) {
                    return res.cc("获取文章分类数据失败");
                }
                res.send({
                    status: 0,
                    message: "获取文章分类数据成功~",
                    data: result[0],
                });
            }); 
    
    6. 根据 id 更新文章分类数据
        实现步骤
            定义路由和处理函数
            验证表单数据
            查询分类名称和分类别名是否被占用
            实现更新文章分类的功能
        6.1 定义路由和处理函数
            1. 在 /router/artcate.js 模块中，添加 更新文章分类的路由
                router.post("/updatecate", artCate_handler.updateCateById);
            2. 在 /router_handler/artcate.js 模块中，定义并共享更新文章分类的处理函数
                // 根据 id 更新文章分类的处理函数
                exports.updateCateById = (req, res) => {
                    res.send("ok");
                };
        6.2 验证表单数据
            6.2.1 在 /schema/artcate.js 验证规则模块中，向外共享如下规则：
                // 验证规则对象 - 更新分类
                exports.update_cate_schema = {
                    body: {
                        id,
                        name,
                        alias,
                    },
                };
            6.2.2 在 /router/artcate.js 模块中，导入需要的验证规则对象，并在路由中使用   
                // 导入需要的验证规则对象
                const {
                    add_cate_schema,
                    delete_cate_schema,
                    get_cate_schema,
                    update_cate_schema,
                } = require("../schema/user");

                // 根据 id 更新文章分类的路由
                router.post(
                    "/updatecate",
                    expressJoi(update_cate_schema),
                    artCate_handler.updateCateById
                ); 
        6.3 查询分类名称和分类别名是否被占用
            // 定义 SQL
            const sql = `select * from article_cate where id <> ? and (name = ? or alias= ? )`;
            // 执行 SQL
            db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, result) => {
                if (err) {
                return res.cc(err);
                }
                if (result.length > 0) {
                return res.cc("分类名称或别名被占用");
                }
                // todo : 可以更新数据
                res.send("success");
            });
        6.4 实现更新文章分类的功能
            // 定义更新文章分类的 SQL 语句
            const sql2 = `update article_cate set ? where id = ?`;
            // 执行 SQL
            db.query(sql2, [req.body, req.body.id], (err, result) => {
                if (err) {
                    return res.cc(err);
                }
                if (result.affectedRows != 1) {
                    return res.cc("更新文章分类失败");
                }
                res.cc("更新文章分类成功~", 0);
            });
                     
                
            
     



*/