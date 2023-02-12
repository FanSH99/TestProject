/* 
作用域:
    1. 为了防止变量名冲突
    2. 全局作用域、函数作用域、代码块作用域。

模块作用域
    1. 和函数作用域类似，在自定义模块中的变量、方法等成员，只能在当前模块内被访问，
        这种模块级别的访问限制，叫做模块作用域。
    2. 好处：防止全局变量污染。
       
module.exports 对象  exports(出口、输出的意思)
    1. 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
    2. 外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指的对象
    3. 默认这个对象是空
    4. 类似客厅的食物，可供客人食用，单仓库和卧室的则不被允许。
*/

// const temp = require('./00-demo1');
// const temp = require('./16-test1.js');
const temp = require('./17-test2.js');

// 默认是 null
console.log(temp);




















