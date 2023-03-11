"use strict";
// 2022年10月11日08:59:24
// 内置类型是js或ts内置的类型。例如new Data();是data类型，内置。
// 时间类型
let time = new Date();
console.log(time);
// math类型
let math = Math;
math.random();
// window类型，只能等于window
let w = window;
// 函数类型
// let fun9:Function='235' ---报错
let fun9 = function () {
    console.log("函数类型");
};
// let arry1: Array = [23]; ---报错
// 数组类型
let arry1 = ['派大星', '10033'];
let arry2 = [
    {
        name: "海绵宝宝",
        sno: 1004,
    }
];
// html类型
// let dom:HTMLElement='1235' ---报错
let dom = document.getElementById('header');
// 泛型类型
let p = new Promise((resolve, reject) => {
    resolve(1111);
});
console.log(p);
let hh = ['sdsh', 'dsds', 'sds'];
// 类型别名还可以定义接口，但是一般不这样用。
// 类型别名定义函数;
let fun10 = (a, b) => {
    return a.length + b;
};
let fun11 = (a, b) => {
    return b;
};
let fun12 = (a, b) => {
    return b;
};
let fun13 = (a, b) => {
    return a.length + b;
};
// fun13(111, 12); ---报错
fun13("111", 14);
let xhong = {
    name: "小红",
    age: 18,
    sex: 1,
    like: "学习",
};
console.log(xhong);
