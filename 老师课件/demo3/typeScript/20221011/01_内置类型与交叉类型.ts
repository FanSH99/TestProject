// 内置类型
let time:Date = new Date();
let m:Math = Math;
m.random();
let w:Window = window;
let fun9:Function = function(){
    console.log("函数类型")
}
let arry1:Array<string>=["sdw2","2332"];
interface Dlog{
    name:string;
    age:number
}
let arry2:Array<Dlog> = [
    {
        name:"张三",
        age:19
    }
]
let dom:HTMLElement=document.getElementById("aa")

let p:Promise<any> = new Promise((reslove:Function,reject:Function)=>{
    reslove(111)
})
//  类型别名
type Heihei = string | number | boolean | Array<string>
let hh:Heihei = ["sdsd",'dsds','sds'];

// interface Funs {
//     (a:string,b:number):number
// }
// let fun10:Funs= (a,b)=>{
//     return a.length+b
// }

// let fun11:Funs = (a,b)=>{
//     return b 
// }
type myfun = (a:string,b:number)=>number;
let fun10:myfun = (a,b)=>{
    return a.length+b
}
fun10("123",12)

// 交叉类型
interface Myab{
    name:string,
    age:number
}
interface Myac{
    color:string
}
type Myhaha = Myab & {sex:number,like:string} & {say:string} & Myac;
let xiaoming:Myhaha = {
    name:"小明",
    age:18,
    sex:1,
    like:"学习",
    say:"嘿嘿",
    color:"red"
}