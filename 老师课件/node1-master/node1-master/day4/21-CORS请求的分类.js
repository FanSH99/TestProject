/* 
CORS 请求的分类
    客户端在请求CORS接口时，根据请求方式和请求头的不同，可以将 CORS 请求分为两大类。
    分别是：
        1. 简单请求
        2. 预检请求

    简单请求：
        同时满足一下2个条件    
            1. 请求方式：POST, GET, HEAD三者之一
            2. HTTP 头部信息不超过一下几个字段：无自定义头部字段、Accept、Accept-Language、
               Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、
               Content-Type(值限于 text/plain、mutipart/form-data、application/x-www-form-urlencodeds 三者之一)

    预检请求：
        只要符合一下任意一个条件都即可：
            1. 请求方式为 POST, GET, HEAD三者之外 
            2. 请求头部中包含自定义头部字段
            3. 向服务器发送了 application/json 格式的数据
            
        在浏览器和服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该
            实际请求，所以这一次的 OPTION 请求称为 "预检请求"。服务器成功响应预检请求后，才会
            发送真正的请求，并携带真实的数据。

    简单请求和预检请求区别：
        简单请求特点：客户端与服务器之间只发生一次请求。
        预检请求特点：客户端与服务器之间发生2次请求，OPTION 预检请求成功后，才会发起真正的请求            

 */