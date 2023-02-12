/* 
WEB 服务器
    web 服务器是一个应用程序(软件),对 http 协议的操作封装，使得程序员不必直接对协议操作，
        让 web 开发更加便捷。主要功能“提供网上信息浏览服务”。

tomcat 是配合 java 最常用的 web 服务器，还有 jetty weblogic 等            
        
tomcat
    概念：Tomcat 是 Apache 软件基金会的一个核心项目，是一个开源免费的轻量级 web 服务器
    作用：让我们主要关注请求参数和响应主体。而具体的请求解析，响应包装等，交给tomcat。        

登录官网下载，解压后免安装。   

目录介绍：
    bin(Binary-二进制) : 可以执行文件。
        .bat window 的执行脚本
        .sh linux 的执行脚本
    config: 配置中心
    lib : tomcat java 编写的，需要的依赖包
    logs : 日志
    temp : tomcat 运行时临时文件存放
    webapps ：存放 web 项目
    work ：web 项目运行过程中产生的临时文件

卸载 ：绿色版，删除文件夹即可。

启动 ：startup.bat

访问 tomcat 的主页：127.0.0.1:8080

控制台乱码：修改字符集编码
    conf/logging.properties 
        java.util.logging.ConsoleHandler.encoding = GBK

使用 tomcat：
        安装 tomcat 服务器，把网页放到 tomcat 指定的文件夹下。
        然后其他人都可以在互联网上通过浏览器访问网页。        
            1. 将 html 文件放入 tomcat 的 webapps 文件夹下
            2. startup.bat 启动
            3. http://localhost:8080/hello/coco.html
            4. shutdown.bat 关闭 tomcat    

关闭 : 
    1. 直接关闭窗口 : 强制关闭。
    2. shutdown.bat : 正常关闭 
    3. Ctrl + C: 正常关闭。

基本配置：
        1. 修改启动端口号 : conf/server.xml 
            <Connector port="8080" protocol="HTTP/1.1"
                connectionTimeout="20000"
                redirectPort="8443" />
        2. 启动时可能出现的问题。
            2.1 端口号冲突 : Address already in use: bind        
            2.2 启动窗口一闪而过 ：JAVA_HOME 环境变量配置异常。

Tomcat-项目部署
    1. 将项目直接放到 webapps 目录下，即可。
    2. 一般将 javaweb 项目打包成 war 包，然后将 war 包放到 webapps 目录下，
        启动的 tomcat 会自带解压缩 war 文件。

tomcat 中运行的一般都是 JavaWeb 项目，JavaWeb 项目一般使用 maven 构建。        
*/