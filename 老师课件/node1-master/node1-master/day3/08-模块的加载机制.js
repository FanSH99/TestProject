/* 
模块的加载机制：

1.优先从缓存中加载
    模块在第一次加载后会被缓存，这意味着多次调用 require() 不会导致模块的代码多次执行。
    注意，无论是内置模块、用户自定义、第三方模块，都是优先凑够缓存中加载，从而提高模块的加载效率。
*/

// 控制台只打印了一次(加载模块时，执行里面的代码)
// const test = require("./00-test");
// const test1 = require("./00-test");
// const test2 = require("./00-test");

/* 
2.内置模块的加载机制
    内置模块是由 Node.js 官方提供的模块，内置模块的加载优先级更高。
    例如，当第三方和自定义都有 fs 模块，require('fs') ,依旧加载系统的内置模块。
    java 通过双亲委派机制实现。   
    模块化开发 npm 同 java 的 maven

3.自定义模块的加载机制
    使用 require() 加载自定义模块时，必须指定以./ 或 ../ 开头的标识符。
    如果没有，则 node 会把它当作内置模块或第三方模块进行加载。
    同样使用 require() 导入自定义模块时，如果省略了文件的扩展名,则 node.js 会按以下顺序尝试加载文件:
        1. 安装确切的文件名加载
        2. 补全 .js 扩展名进行加载
        3. 补全 .json 扩展名进行加载    
        4. 补全 .node 扩展名进行加载 (.node 是一个 32 位的应用程序，不能写任何 js 代码，了解即可)   
        5. 加载失败，终端报错
*/
// 省略 ./  被当作内置模块或第三方模块进行加载
// const test = require("00-test.js");

// 测试加载顺寻(先新建几个 00-test 文件)
// const test = require('./00-test');

// console.log(test);

console.log("等闲变却故人心,却道故人心易变");
/* 
4.第三方的模块加载机制(了解即可)
    如果 require() 模块标识符不是一个内置模块，也没有 './' 或 '../' 开头，则 Node.js 会从
    当前模块的父目录开始，尝试从 node_modules 文件夹中加载第三方模块。
    如果没有找到对应的第三方模块，则移动到上一次目录，进行加载，直到文件系统的根目录。
    例如，当前文件调用了 fs 模块，则 Node.js 会按以下顺序查找
        当前路径: D:\webWorkSpace\node1\day3\08-模块的加载机制.js
        1. D:\webWorkSpace\node1\day3\node_modules\fs
        2. D:\webWorkSpace\node1\node_modules\fs
        3. D:\webWorkSpace\node_modules\fs
        4. D:\node_modules\fs
*/
const fs = require('fs');

/* 
5.目录作为模块
    当把目录作为模块标识符，传递给 require 进行加载时，有三种加载方式
        1. 在被加载的目录下查找一个叫做 package.json 文件，并寻找 main 属性，
           作为 require() 加载的入口
        2. 如果目录种没有 package.json  文件，或者 main 入口不存在或无法解析，
           则 Node.js 将会试图加载目录下的 index.js  文件
        3. 如果都失败，则 Node.js 会在终端报错：Error ：Cannot find module 'xxx'
        约定大于规范，规范大于编码
*/
const beiyou = require('./09-beiyou');
