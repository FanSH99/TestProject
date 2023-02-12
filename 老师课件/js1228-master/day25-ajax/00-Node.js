/* 
01. Node.js 可以做什么？
    1. 可以操作数据库，做完整的项目开发。
    2. 为后期的 VUE 做准备。
02. 安装，登录官网，下载对应安装包，直接下一步即可。
    LTS = Long Term Support , 长期稳定版。
    Current,尝鲜版，新特性居多,可能有 bug。
    DOS 系统中查看 : node -v
03. 在 Node.js 环境中执行 JS 代码
        1. 打开 cmd
        2. 切换到当前路径
        3. node 文件名 例如： node demo.js
项目要求：
    1. 启动项目：
        npm init ：初始化项目
        npm install ：安装第三方插件
        node 01-api.js 启动项目。
    2. 请求处理
        以下代码是处理了一个 get 请求。
        请求路径是 get
        req 和 res 分别处理请求和响应。
            router.get("/get", (req, res) => {
                // 通过 req.query 获取客户端查询的字符串
                const query = req.query;
                console.log(query);
                res.send({
                    status: 200, // 状态码
                    msg: "GET 请求成功!", // 描述信息
                    data: query, // 响应的数据
                });
            });            
*/