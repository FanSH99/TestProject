# 一、Nodejs课程

> 目标:
>
> 1. 能够熟悉Nodejs编写API接口
> 2. 熟悉Nodejs开发环境、NPM的安装工具。
> 3. 熟悉模块化编程
> 4. 熟悉Nodejs的框架 （Express、KOA、EGG....）
> 5. 熟练对接Nodejs或者其他语言编写的API接口

# 二、Nodejs的前言

## 2.1 Nodejs到底是什么？

Nodejs是什么？

没有学习Nodejs之前 js代码只能在浏览器中运行。js需要解析？chrome V8 。。。sarafi 。。。jscore解析。。。

Chrome V8性能高，Nodejs开发团队单独将Chrome V8引擎从chrome中提取出来。开让v8引擎解析执行js代码。

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

nodejs 、框架、mysql、mysql与框架接口（API）、前端和后台对接

## 2.2 Nodejs下载安装

### 2.2.1 cmd命令打开

- window+R -> cmd
- 按住shift-> 右键
- 在资源管理器中 输入cmd

 **常见命令有哪些: **

> cd: 进入某一个目录
>
> cls：清除屏幕
>
> tab键: 补全
>
> esc键: 清除命令
>
> 上下键: 历史记录
>
> touch: 创建一个文件
>
> echo:  输出字符串  ； echo "123">1.txt
>
> ls: 显示当前目录的文件及其文件夹
>
> ipconfig: 查看你电脑的ip信息
>
> ping:  查看电脑和ping的地址是否连通。
>
> C:\Windows\System32\drivers\etc\hosts:  是将一个域名映射到某一个IP地址。

### 2.2.2 测试node是否安装成功

安装完成测试是否安装完毕

打开cmd命令窗口输入：

```cmd
node -v
```

### 2.2.3 切换Node的版本--NVM （一般情况下不需要使用nvm，但是如果电脑上需要配置多个版本的nodejs 就需要了）

- 1.安装NVM
- 2.使用nvm list available 查看可以安装的nodejs的版本
- 3.使用nvm安装 nodejs，nvm install nodejs版本

### 2.2.4 Nodejs和浏览器的区别

ECMAscript + DOM的API + BOM的API --  浏览器上的编程了

ECMAscript + Nodejs的API  -- 后台开发

# 三、Nodejs的基础语法 -- 内置模块

## 3.1 全局变量

- module
- __dirname
- __filename
- process  process.env

## 3.2 模块化？

将js和js之间联系到一块就是模块化。common.js标准规范 就是后台开发的一种模块化规范。

一个js文件就是一个模块（module）。

module.exports = {}  // 导入导出

require()

- 使用commonjs规范完成nodejs开发的模块化
- commonjs规范怎么使用？使用module.exports 导出，require()函数进行导入

## 3.3 模块化需要分类

- 自定义模块

  自己定义的模块

- 内置模块

   Nodejs已经帮你写好的模块

## 3.4 内置模块 - fs模块

**提前讲解路径问题：**

./ ： 当前目录

../ : 上级目录

/:    根目录

**编码格式：**

utf-8： 统一所有的编码

gb2312：想要显示中文

gbk：国标扩展

ASCII： 没有中文， 美国佬

- 读取文件

  ```javascript
  const fs = require("fs")
  // console.log(fs)
  
  // 这个函数是异步代码
  fs.readFile("./1.txt", 'utf-8', function(err, data) {
      console.log(data)
  })
  ```

- 写入文件

  ```javascript
  const fs = require("fs")
  fs.writeFile("./1.txt", "helloworld", "", function() {})
  
  // writeFileSync
  ```

  

## 3.5 Path模块

- path.resolve()

  path.resolve("./1.txt")

- path.join()

  path.join(__dirname,  "")

## 3.6 http模块

- const server = http.createServer()

- server.listen(3000)

- server.on("request", (req, res)=> {})

  req.url   req.method

  res.end()

  res.setHeader()

- 解析post请求过程中

  const qs = require("querystring")

  req.on("data", (chunk)=> {

     postData += chunk

  })  

  req.on("end", ()=-> {

  ​    qs.parse(postData) // name=""&age=11  => {name:"", age:111}

  })

# 四、Nodejs -- 第三方模块

## 4.1 第三方模块怎么进行使用？

### 4.1.1 npm是什么？

npm全称: node package manager   node包管理工具

可以下载 移除  。。。。。。

从哪里下载? 

https://www.npmjs.com

是咱们第三方模块的查询网站。node 包是世界上最大的社区  （ios android）



### 4.1.2 使用npm命令

只要你安装了nodejs，就会自带npm命令

```javascript
npm -v
```

- 安装第三方模块(包)

  ```javascript
  npm install 包名
  // 会生成几个文件或者文件夹
  node_modules: 所有包的文件目录
  package.json: 里面解释依赖的包的信息
  package-lock.json：
  
  npm install jquery@3.5.0 // 使用npm下载时指定包的版本号
                     大版本号
                     功能版本号
                     bug版本号
                     APP -- 2.10.1  
  ```

- 使用第三方模块（包）

  ```javascript
  const jquery = require("jquery")
  ```

- 其他命令

  ```java
  npm init -- 生成了一个package.json文件
  ```

  

### 4.1.3 package.json文件

  dependencies： 开发和上线阶段都需要依赖  {包名: 版本号}

  文件作用： 保存该项目依赖哪些包 还有项目信息

 devDependencies：开发阶段依赖的包

### 4.1.4 npm命令扩展

```javascript
npm uninstall moment -- 卸载第三方包

npm install moment  --save    一般使用简写   npm i moment -S

npm install moment --development  一般使用简写 npm i moment -D

// 从官方地址下载会很慢registry.npmorj.com
npm config set registry https://registry.npm.taobao.org/  // 当你去下载包的时候去淘宝镜像官方网站下载
npm config get registry // 查看第三方包 从哪里下载。


npm install express-generator -g
```
## 4.2 第三方包的搜索机制原理（原理）

```javascript
const _ = require("moment")

// 1.在当前的文件夹中搜索node_modules，如果当前的文件夹中没有该目录，往上级找
D:\ftp\210\Nodejs\02-第三方模块\myprj\node_modules
D:\ftp\210\Nodejs\02-第三方模块\node_modules
D:\ftp\210\Nodejs\node_modules
D:\ftp\210\node_modules
D:\ftp\node_modules
D:\node_modules
// 2.找moment文件夹，并且找到文件夹中的package.json文件

// 3.在package.json文件中查找main，main的值就是最终加载的js文件
```

# 五、Nodejs-自定义模块

将自定义模块，变为了第三方模块。

1. 注册npm账号 -- 邮箱验证
2. npm init -y生成package.json ，将package中的信息补充完整
3. 在工程中使用                               npm login 
4. 将工程publish到npm官方中去  npm publish

# 六、Express

基于 [Node.js](https://nodejs.org/en/) 平台，快速、开放、极简的 Web 开发框架。

- npm install express-generator -g 
- express 06-myprj
- 切换到06-myprj文件夹中，使用 npm install
- 启动项目：  需要查看package.json文件中scripts



**supervisor工具**

npm install supervisor -g

supervisor bin/www



**总结:**

- 1.安装express-generator安装器
- 2.express myprj
- 3.cd myprj 
- 4.npm install 
- 5.npm start

>- 增加api接口
>
>  1. 在app.js中匹配一个路径
>
>     ```javascript
>     app.use('/api', apiRouter);
>     ```
>
>  2. 定义apiRouter
>
>     ```javascript
>     var apiRouter = require('./routes/api');
>     ```
>
>  3. 定义api.js文件
>
>     ```javascript
>     var express = require('express');
>     var router = express.Router();
>     
>     var arr = [
>         {
>             id:1,
>             name: "xiaogang",
>             age: 30
>         }
>     ]
>     
>     /* GET home page. */
>     router.get('/getStudent', function(req, res, next) {
>         // res.end()  send
>         res.send(arr)
>     });
>     
>     router.post("/addStudent", function(req, res, next) {
>         // console.log(req.body)
>         arr.push({
>             id: arr.length+1,
>             name: req.body.name,
>             age: req.body.age
>         })
>         res.send({
>             status: 1,
>             message: "添加成功"
>         })
>     })
>     
>     router.delete("/deleteStudent/:id", function(req, res, next) {
>         console.log(req.params.id)
>         arr = arr.filter((item)=> {
>             return item.id != req.params.id
>         })
>     
>         res.send({
>             status:1,
>             message: "删除成功"
>         })
>     })
>     
>     module.exports = router;
>     
>     ```
>
>     
>
>

