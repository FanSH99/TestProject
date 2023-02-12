/* 
JSONP 
    概念：浏览器端通过<script> 标签的 src 属性，请求服务器上的数据，同时服务器返回一个函数的调用。
         这种请求方式叫做 JSONP
    特点：
        1.JSONP 不属于真正的 ajax 请求，因为它没有使用 XMLHttpRequest 这个对象。
        2.JSONP 仅支持 GET 请求，不支持 POST 、PUT、DELETE 等请求。
        
    创建 JSONP 接口的注意事项：
        如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突，必须在配置 CORS 中间件之前声明 JSONP 接口，
        否则 JSONP 接口会被处理成开启了 CORS 的接口。示例代码如下：
            // 优先创建 JSONP 接口[这个接口不会被处理成 CORS 接口]
            app.get('/api/jsonp', (req, res) => {});
            // 再配置 CORS 中间件[后续所有的接口，都会被处理成 CORS 接口]
            app.use(cors());
            // 这是一个开启了 CORS 的接口
            app.get('/api/jsonp', (req, res) => {});

    实现 JSONP 接口的步骤
        1. 获取客户端发送过来的回调函数名字
        2. 得到要通过 JSONP 形式发送给客户端的数据、
        3. 根据前两步，拼接出一个函数调用的字符串
        4. 把上一步拼接得到的字符串，响应给客户端<script> 标签进行解析执行

        JSOP 实现原理：
            客户端通过 <script> 把函数的名字发送给服务器，希望服务器返回函数的调用。在调用期间，把数据传进去即可
            因此服务器需要拿到函数的名字，然后准备发送的数据，拼接字符串，并发送给客户端。
            
        代码如下：
            // 1. 获取函数名字
            const funcName = req.query.callback;
            // 2. 定有发送给客户端的数据对象
            const data = { name: "zs", age: 22 };
            // 3. 拼接出函数的调用
            const scriptStr = `${funcName}(${JSON.stringify(data)})`;
            // 4. 拼接的字符串，响应给客户端
            res.send(scriptStr);
*/

// 导入 expres 模块
const express = require('express');

// 创建 express 的服务器实例
const app = express();

// write your code
app.get('/api/jsonp', (req, res) => {});

app.use(cors());

app.get('/api/jsonp', (req, res) => {});

// 指定端口号，并启动服务
app.listen(8080, () => {
console.log('服务已启动, 127.0.0.1:8080');
});