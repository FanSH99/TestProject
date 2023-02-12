/* 
函数的定义：具名函数与匿名函数
函数的调用
函数参数
函数的返回值
*/
function funn(a:string,b:number):number{
    return a.length +b
} 
funn("223",2)
// void 类型表示不能为任意类型 any 
function fun1(a:boolean):void{
    console.log("哈哈哈哈")
}
let fun2 = function(a:number,b:number):number{
    return a*b
}
fun2(12,345)
// 箭头函数只能是匿名函数
let fun3 = (a:number,b:string):number=>{
    return a+b.length
}

let fun4 = (a:number)=>a;
// ? 表示参数可有可无
let fun5 = (a:string,b?:number):string=>{
    return "哈哈哈哈"
}
fun5("wsew")
// 函数的默认值
let fun6 = (a:string,b:number=100)=>{
    console.log(b)
}
fun6("2312")

// 函数的其他参数
let fun7=(a:number,...b:string[])=>{
    console.log("哈哈哈哈")
}
fun7(123,"123","232","哈哈哈哈")
