/* 
发布自己的包到 npm

1. 注册 npm 账号
    1.1 访问 https://www.npmjs.com/ 网站，点击 sign up 按钮，进驻注册用户界面。
    1.2 填写相关的信息：Full Name、Public Email、Username、Password
    1.3 点击 Create an Account 按钮，注册账号
    1.4 登录邮箱，点击验证链接，进行账号的验证
    
2. 终端登录 npm 账号    
    前提: 下载源必须切换为官网的 npm (我们是发布在官方服务器，而不是镜像服务器)
        1. 查看当前的下载包路径
            npm config get registry
        2. 切换至官网
            nrm ls
            nrm usr npm
        3. 再次校验
            npm config get registry
    登录 npm
        npm login

将终端切换到包的根目录所在  
    先去官网确认，项目是否重名
    快捷键 alt + t (已提前定义)
    pwd 确认当前路径
    npm pushlish
web 端登录 npm 官网
    用户头像 ————> packages 
    或直接搜索
删除已发布的包
    npm unpublish beiyou-tools --force
    1. 只能删除 72 小时内发布的包
    2. 删除的包 24 小时内不允许重复发布
    3. 公共资源，尽量不要发布没有意义的包，发布测试完成后删除。
*/