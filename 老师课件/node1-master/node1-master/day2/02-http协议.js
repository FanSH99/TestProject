/* 
    客户端: 在网络节点中，负责消费资源的电脑成为客户端。(输入)
    服务器：提供网络资源的电脑。(处理、输出)

    http 模块，Node.js 官方提供，用来创建 web 服务器的模块。
        可以通过 http 模块提供的 http.createServer() 方法，将普通电脑变成 web 服务器
    用法：
        const http = require('http');

    简单的服务器配置
        1. 安装 tomcat
        2. 把文件放入 webapps 下    
        3. 启动 tomcat ，并访问文件

    静态资源：HTML, CSS, JavaScript, 图片等,负责页面的展现
    动态资源: Servlet, JSP 等，负责逻辑处理。
    数据库：负责数据存储
    HTTP 协议：定义通信规则 https://www.baidu.com/

    Web 服务器：负责解析 HTTP 协议，解析请求数据，并发送响应的数据。

    HTTP：超文本传输协议(Hyper Text Transfer Protocol)，
            HTTP 规定了浏览器和服务器之间的传输规则。

    HTTP 协议特点：
        1. 基于 TCP 协议：面向连接，安全。
        2. 基于请求-响应模型的，一次请求，一次响应。
        3. 无状态的协议。每次请求和响应是独立。比如无法判断该次请求的用户是否已经登录。
            优点：速度快
            缺点：多次请求之间不共享数据。
                    Java 通过 Cookie 和 Session 来解决这个问题。

    HTTP 请求数据格式(百度 ——> F12 ——> 网络 ——> 请求标头)
        1. 请求数据分为3个部分：
            1.1 请求行：请求数据的第一行。
                get 请求方式，http/1.1 表示协议版本号
            1.2 请求头：第二行开始，格式是 key：value
            1.3 请求体：POST 请求的最后一个部分，存放请求参数。
        2. 常见的HTTP请求头
            Host：请求的主机名
            User-Agent: 请求的浏览器版本                  
            Accept: 请求浏览器能接收的资源类型
            Accept-Language: 浏览器语言偏好
            Accept-Encoding: 浏览器可以支持的压缩类型,例如 gzip
        3. GET 和 POST 请求的区别
            1. GET 请求参数在请求行，没有请求体
            POST 请求参数在请求体
            2. GET请求参数的大小有限制，POST 没有。
            
    HTTP-响应数据格式
        响应的数据分为3部分
            1. 响应行：响应数据的第一行，
                HTTP/1.1 表示协议及版本号        
                200 响应状态码
                OK 状态码的英文描述
            2. 响应头：从第二行开始，格式是 key:value
                Content-Type: 表示该响应内容类型，例如text/html,image/jepg;
                Content-Length: 表示该响应内容的长度(字节数)
                Content-Encoding: 响应的压缩算法，例如gzip
                Cache-Control: 指示客户端如何缓存，例如 max-value=300, 表示最多可以缓存 300 s
            3. 响应体：最后一个部分，存放响应数据。
            4. 常见的状态码
                1xx : 响应中
                2xx : 响应成功
                3xx : 重定向(重定向到其它地方，让客户端再发送一个完整的请求)
                4xx : 客户端异常，如资源不存在，请求方式异常，未授权
                5xx : 服务器异常，服务器宕机，路由异常
                详细见百度       
*/