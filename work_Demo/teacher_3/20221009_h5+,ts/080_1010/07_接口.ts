// 2022年10月10日14:20:29

// let obj = {
//     name: "张三",
//     age:14,
// }


// ts类型推论。不提前声明数据类型的时候，可以根据复制来推断数据类型。


let object: {
    name: string,
    age: number
} = {
    name: "张三",
    age: 18
}

// let obj2: {
//     name: string,
//     age:number,
// } = {
//     name: '白浅',
//     age:true, //--报错
// }


// 接口，用来定义类型规范的集合。
// 鸭子概念，如果一个东西长得像一个鸭子，并且会嘎嘎叫，像鸭子一样游泳，就判定为鸭子。

// 使用关键字interface定义接口，interface后面跟接口名称，接口名称首字母大写。里不同属性分号或者逗号隔开。
interface People {
    name: string;
    age: number;
    like: string;
}

let p: People = {
    name: "派大星",
    age: 8,
    like: '抓水母',
}


interface Student {
    name: string,
    age: number,
    readonly sno: string,
    // 设置只读
    sex: boolean,
    like?: string,
    subject: string[],
    // 参数是字符串，返回值是数字。
    say(a: string): number,
}

let s: Student = {
    name: "海绵宝宝",
    age: 12,
    sex: false,
    sno: '1001',
    subject: ["语文", '数学', '计算机'],
    say(a) {
        console.log(a);
        return 1
    }
}

// 可以在后面直接修改。
s.sex = true;
// s.subject=['高等数学','java',111]  ---数据类型不完全匹配，报错。

// s.sno = '2222';  ---报错
console.log(s);


s.say("学习是我快乐~~~")

// 接口可以定义函数，对象等。


// 定义函数接口。
interface Read {
    (a: string, b: number, c?: boolean): number
}

let fun1: Read;

fun1 = (a, b) => {
    return a.length + b;
}


// 接口可以继承。

interface Zoo {
    name: string,
    age: number
}

let dog: Zoo = {
    name: "小花",
    age: 1
}

// extends 继承
interface Cat extends Zoo {
    sex: boolean,
    like: string,
}

// 直接写报错。
// let cat: Cat = {
//     sex: true,
//     like:'吃鱼'
// }


let cat: Cat = {
    sex: true,
    like: '吃鱼',
    name: "汤姆",
    age: 2,
}

interface Eat {
    eat: string,
}

// 当继承多个接口的时候，用逗号隔开。
// 如果继承的父接口还有父接口，定义的内容有父接口全部属性，可以直接继承父接口，不需要在继承祖父接口

interface Cow extends Cat, Eat {

    price: string,
}

let cow: Cow = {
    name: "大黄牛",
    age: 3,
    sex: true,
    like: "发呆",
    price: "60",
    eat: '料草'
}

console.log(dog, cat, cow);
