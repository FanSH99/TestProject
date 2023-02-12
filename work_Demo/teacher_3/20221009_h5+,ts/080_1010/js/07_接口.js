"use strict";
// 2022年10月10日14:20:29
// let obj = {
//     name: "张三",
//     age:14,
// }
// ts类型推论。不提前声明数据类型的时候，可以根据复制来推断数据类型。
let object = {
    name: "张三",
    age: 18
};
let p = {
    name: "派大星",
    age: 8,
    like: '抓水母',
};
let s = {
    name: "海绵宝宝",
    age: 12,
    sex: false,
    sno: '1001',
    subject: ["语文", '数学', '计算机'],
    say(a) {
        console.log(a);
        return 1;
    }
};
// 可以在后面直接修改。
s.sex = true;
// s.subject=['高等数学','java',111]  ---数据类型不完全匹配，报错。
// s.sno = '2222';  ---报错
console.log(s);
s.say("学习是我快乐~~~");
let fun1;
fun1 = (a, b) => {
    return a.length + b;
};
let dog = {
    name: "小花",
    age: 1
};
// 直接写报错。
// let cat: Cat = {
//     sex: true,
//     like:'吃鱼'
// }
let cat = {
    sex: true,
    like: '吃鱼',
    name: "汤姆",
    age: 2,
};
let cow = {
    name: "大黄牛",
    age: 3,
    sex: true,
    like: "发呆",
    price: "60",
    eat: '料草'
};
console.log(dog, cat, cow);
