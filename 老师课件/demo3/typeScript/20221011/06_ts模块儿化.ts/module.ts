/* 
 模块儿化：
 common.js (js规范 nodejs环境下js运行)
 ECMAScript (js规范  规范js在浏览器环境运行)
 
 common.js 
 导出模块儿：
 module.exports = {}
 exports = {}
 导入模块儿:
 require("模块儿路径")
 es6 模块儿：
 导出多个
 export {}
 默认导出
 export default 
 导入模块儿：
 导入多个模块儿
 import {xxx,xxx} from "xxx"
 导入一个
 import xxx from 'xxxx'
*/
/* 
 ts模块儿化遵循 ECMAscript 规范(es6 模块儿化)
*/

interface Myallobj{
    [key:string]:string
}
type myfun1 = (a:string,b:number)=>number;
export{
    Myallobj,
    myfun1
}