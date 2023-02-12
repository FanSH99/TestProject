// 使用接口定义数组类型
interface Myarry {
    [index:number]:string | number
}
let myarry1:Myarry = ["23",232];
//  变量:类型

// 使用接口定义不声明指定属性名的对象
interface Myobj {
    [key:string]:any
}
let myobj:Myobj= {
    name:"2323",
    age:2222,
    sex:true,
    w:function(){
        
    }
}
// let obj = {
//     "name":"张三"
// }