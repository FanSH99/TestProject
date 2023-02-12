/* 
CORS相关的三个响应头
    CORS 响应头部 Access-Control-Allow-Origin
        响应头部可以携带 Access-Control-Allow-Origin 字段，语法如下：
            Access-Control-Allow-Origin : <origin> | *
                参数 : 指定允许访问该资源的外域 URL
            示例：
                res.setHeader('Access-Control-Allow-Origin', 'www.jd.com');
                只允许京东域名下的所有请求        
                res.setHeader('Access-Control-Allow-Origin', '*');
                * 通配符，允许来自任何域的请求

    CORS 响应头部 Access-Control-Allow-Header  
         默认情况下，CORS 仅支持客户端向服务器发送如下9个请求头：
         Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、
         Viewport-Width、Width、Content-Type(值限于 text/plain、mutipart/form-data、
         application/x-www-form-urlencodeds 三者之一)如果客户端向服务器发送了额外的请求
         头信息，则需要在服务器端，通过 Access-Control-Allow-Header 对额外的请求头说明，
         否则这次请求失败
         // 允许客户端向服务器额外发送 Content-Type 请求头和 X-Custom-Header 请求头
         // 注意：多个请求头之间用英文逗号分割
         res.setHeader('Access-Control-Allow-Header', 'Conetent-Type, X-Custom-Header');

    CORS 响应头部 Access-Control-Allow-Methods
        默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求
        如果客户端希望通过 PUT、DELETE 等方式请求服务器资源，则需要在服务器端，通过
        Access-Control-Alow-Methods 来指定时机请求允许使用的 HTTP 方法
        示例：
            // 允许 POST、GET、DELETE 、HEAD 请求方式   
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD');
            // 允许所有 HTTP 请求方式
             res.setHeader('Access-Control-Allow-Methods', '*');





*/