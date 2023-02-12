/* 
web 开发模式
    常见的 web 开发模式有两种：
        1.基于服务端渲染的传统 web 开发模式
             概念：服务器端发送给客户端的 HTML 代码，是由服务器通过字符串拼接好的。
             实例：
                app.get("/index.html", (req, res) => {
                    const result = "<h1>你好</h1>";
                    res.send(result);
                });
              缺点：服务器端压力大，程序员需要前后端技术栈都懂，且代码可读性差。  

        2.基于前后端分离的新型 web 开发模式
             概念：前后端分离的开发模式，依赖于 ajax 技术广泛应用。后端只提供接口。
                   前端获取，并渲染数据。
             优点：服务器压力小，用户体验好，分工明确。
        
        总结：目前都是前后端分离     


*/