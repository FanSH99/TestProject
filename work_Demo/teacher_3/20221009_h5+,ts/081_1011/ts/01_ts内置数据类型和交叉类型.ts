// 2022年10月11日08:59:24

// 内置类型是js或ts内置的类型。例如new Data();是data类型，内置。

// 时间类型
let time: Date = new Date();
console.log(time);


// math类型
let math: Math = Math;
math.random();


// window类型，只能等于window
let w: Window = window;


// 函数类型
// let fun9:Function='235' ---报错
let fun9: Function = function () {
    console.log("函数类型");

}

// let arry1: Array = [23]; ---报错
// 数组类型
let arry1: Array<string> = ['派大星', '10033'];

interface Dlog {
    name: string;
    sno: number;
}

let arry2: Array<Dlog> = [
    {
        name: "海绵宝宝",
        sno: 1004,
    }
]

// html类型
// let dom:HTMLElement='1235' ---报错
let dom: HTMLElement = document.getElementById('header');

// 泛型类型
let p: Promise<any> = new Promise<any>((resolve: Function, reject: Function) => {
    resolve(1111);
});
console.log(p);


// 类型别名 ---给内置的类型取一个名字，直接调用名字来使用。

// let Types: string | number | boolean;

type Heihei = string | number | boolean | Array<string>;
let hh: Heihei = ['sdsh', 'dsds', 'sds'];

// 类型别名还可以定义接口，但是一般不这样用。

// 类型别名定义函数;

let fun10 = (a: string, b: number): number => {
    return a.length + b;
}

let fun11 = (a: string, b: number): number => {
    return b;
}

// 重复使用函数类型，方法1接口
interface Funs {
    (a: string, b: number): number
}

let fun12: Funs = (a, b) => {
    return b;
}

// 方法2类型别名

type myfun = (a: string, b: number) => number;

let fun13: myfun = (a, b) => {
    return a.length + b;
}

// fun13(111, 12); ---报错
fun13("111", 14);

// 交叉类型。

// 联合类型 a:string|number; 取一个、

// 交叉类型取并集，全都有。
interface Mab {
    name: string,
    age: number
}

type myHahas = Mab & ['name'] & {};

type myHaha = Mab & { sex: number, like: string };//{sex,like}

let xhong: myHaha = {
    name: "小红",
    age: 18,
    sex: 1,
    like: "学习",
}

console.log(xhong);


