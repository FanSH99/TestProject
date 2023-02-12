// let obj = {
//     name:"张三",
//     age:true
// }
// let obj:{name:string,age:number} = {
//     name:"张三",
//     age:1234
// }
// 接口 用来定义类型规范的集合
// 鸭子概念：如果一个东西长得像一个鸭子，像鸭子一样会嘎嘎叫,像鸭子一样会游泳那么它就是个鸭子。
// interface 接口
// 使用关键字 interface 定义接口
interface People {
    name:string;
    age:number;
    like:string
}

let p:People = {
    name:"徐梓林",
    age:8,
    like:"女"
}
interface Student{
    name:string,
    age:number,
    // readonly 表示只读属性不能发生改变
    readonly sex:boolean,
    //？表示可选属性
    like?:string,
    kecheng:string[],
    say(a:string):number
}

let s:Student = {
    name:"马国庆",
    age:18,
    sex:false,
    like:"吃",
    kecheng:["语文","科学",'音乐'],
    say(a){
        return a.length
    }
}
// s.sex = true;  报错
s.age = 20
s.say("学习使我emo")
console.log(s)

// 接口与函数
interface Read{
    (a:string,b:number):number
}
let funn1:Read;
funn1 = (a,b)=>{
    return a.length+b
}

// 接口的继承
interface Dog{
    name:string,
    age:number
}
let dog:Dog={
    name:"小花",
    age:1
}
// extends 继承其他接口
interface Cat extends Dog {
    sex:boolean,
    like:string
}
let cat:Cat = {
    sex:true,
    like:"老鼠",
    name:"汤姆",
    age:2
}
// 若要继承多个接口那么 接口与接口之间需要使用,隔开
interface Cow extends Dog,Cat{
    price:string
}

let cow:Cow = {
    price:"60/斤",
    name:"老黄牛",
    age:4,
    sex:true,
    like:"嫩草"
}


