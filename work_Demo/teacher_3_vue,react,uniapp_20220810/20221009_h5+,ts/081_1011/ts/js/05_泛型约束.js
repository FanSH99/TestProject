"use strict";
// 2022年10月11日11:08:09
// 泛型约束---泛型中必须要有接口中的所有属性。
function getLength(a) {
    console.log(a);
    return a.length;
}
// getLength(111); ---报错 数字没有长度，也没有push方法。
// getLength('ghjkdfg'); ---报错 字符串没有push方法
// getLength({ length: 10000 })  ---报错，对象没有push方法
getLength(['1111', '8888']);
