"use strict";
// 2022年10月10日15:25:15
// 联合类型
let str3;
str3 = '12344';
str3 = 111;
str3 = true;
let arry4 = ['123456', 111];
let aa = {
    sex: 1
};
function fun8(a) {
    return a;
}
fun8(2222);
fun8("hhhh");
// fun8(true); ---报错
// 当为联合类型的时候，只会有几种类型的公有方法
// 类型断言
function fun9(b) {
    // as当作的意思。当为字符串返回长度，当为数字编程字符串在返回长度。
    let b1 = b;
    if (b1.length) {
        return b1.length;
    }
    else {
        let b2 = b;
        return b2.toString().length;
    }
}
console.log(fun9('89000001'));
// 类型守卫
function fun10(a) {
    // return a ---直接返回a报错
    if (typeof a === 'string') {
        return a.length;
    }
    else {
        return a;
    }
}
