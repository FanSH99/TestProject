/* 
1. 创建项目
    1.1 新建 api_server 文件夹作为项目的根目录，并在项目根目录运行如下命令，初始化项目
          npm init -y
    1.2 安装指定版本的 express
          npm install express@4.17.1
    1.3 在项目的根目录新建 app.js 作为整个项目的入口文件，并初始化如下代码
            // 导入 expres 模块
            const express = require("express");

            // 创建 express 的服务器实例
            const app = express();

            // write your code

            // 指定端口号，并启动服务
            app.listen(8080, () => {
                console.log("服务已启动, 127.0.0.1:8080");
            });

2. 配置跨域
    2.1 安装 cors 中间件
            npm i cors@2.8.5          
    2.2 配置 cors 中间件
            // 导入并配置 cors 中间件
            const cors = require('cors');
            app.use(cors());

3. 配置解析表单数据的中间件
        // 该中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
        app.use(express.urlencoded({extended:false}));
  
4. 初始化路由相关的文件夹
     4.1 在项目根目录，新建 router 文件夹，用来存放所有的路由模块
            路由模块中，只存放客户端的请求与处理函数之间的关系
     4.2 在项目根目录，新建 router_handler 文件夹，用来存放所有的路由函数处理模块
            路由处理函数模块中，专门负责存放每个路由对应的处理函数
    
5. 初始化用户路由模块
     5.1 在 router 文件夹中，新建 user.js 文件，作为用户的路由模块，代码如下：
            const express = require("express");
            // 创建路由对象
            const router = express.Router();

            // 注册新用户
            router.post("/register", (req, res) => {
                res.send("register ok");
            });

            // 登录
            router.post("/login", (req, res) => {
                res.send("login ok");
            });

            // 将路由对象共享出去
            module.exports = router;

     5.2 在 app.js,导入并使用用户路由模块
            // 导入并注册用户路由模块
            const userRouter = require('./router/user');
            app.use("/api",userRouter);

6. 抽离用户路由模块中的处理函数
    6.1 在 /router_handler/user.js 中使用 exports 对象，分别对外共享如下两个路由处理函数
        // 注册新用户的处理函数
        module.exports.register = (req, res) => {
        res.send("register ok");
        };

        // 登录的处理函数
        module.exports.login = (req, res) => {
        res.send("login ok");
        };
    6.2 将 /router/user.js 中的代码修改如下
        // 导入用户路由处理函数对应的模块
        const user_handler = require("../router_handler/user");

        // 注册新用户
        router.post("/register", user_handler.register);

        // 登录
        router.post("/login", user_handler.login);    
            



*/