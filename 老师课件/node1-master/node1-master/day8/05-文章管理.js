/* 
文章管理
    0. 创建表

    1. 实现步骤
        初始化路由模块
        初始化路由处理函数模块
        使用 multer 解析表单数据
        验证表单数据
        实现发布文章的功能
    2. 初始化路由模块
        2.1 创建 /router/article.js 路由模块，并初始化如下代码
            // 文章的路由模块
            const express = require("express");
            const router = express.Router();

            // 发布文章的路由
            router.post("/add", (req, res) => {
                res.send("ok");
            });

            module.exports = router;
        2.2 在 app.js 中导入并使用文章的路由模块
            const articleRouter = require("./router/article");
            app.use("/my/article", articleRouter);
    3. 初始化路由处理函数模块
        3.1 创建 /router_handler/article.js 路由处理模块函数，并初始化如下代码：
            // 发布文章的处理函数
            exports.addArticle = (req, res) => {
                res.send("ok");
            };
        3.2 修改 /router/article.js 中代码如下： 
            // 导入需要的函数处理模块
            const article_handler = require("../router_handler/article");

            // 发布文章的路由
            router.post("/add", article_handler.addArticle);   
    4. 使用 multer 解析表单数据

    5. 验证表单数据

    6. 实现发布文章的功能


    //todo 作业：
     1. 完成发布文章接口
     2. 获取文章的列表数据
     3. 根据 id 删除文章
     4. 根据 id 获取文章详情
     5. 根据 id 更新文章信息       


*/