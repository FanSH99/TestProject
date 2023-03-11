// 2022年10月11日14:06:54

/* 
模块儿化
common.js(js规划，规范在nodejs下的运行)
ECMAScript(js规范，用于规范在浏览器环境)

两者的区别。
common.js 
导出模块。
module.exports={}
exports={}
导入模块儿。
let xxx=require('');


es6模块儿：
导出多个
export{xxx,xxx}
默认导出
export default xxx;

导入模块:
导入多个：
import {xxx,xxx} from '';
导入一个 import xxx from 'xxx'

*/

/*
ts模块儿花啊遵循ECMAScript规范，即es6模块儿化。

一个ts文件就是一个模块儿。
*/

// 定义数组接口
interface Myallobj {
    [key: string]: string
}
// 定义函数类型别名。
type myfun1 = (a: string, b: number) => number;
export { Myallobj, myfun1 };