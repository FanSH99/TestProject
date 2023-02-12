// 定义字符串类型变量
let str:string = "字符串";
str = "张三";
// ts中规范了数据类型之后，那么ts会自动将该数据类型的方法暴露出来供开发者使用。

let num:number = 1234;

let isB:boolean = null;
// isB = '2312312'
// null undefind 是所有数据类型的子集
let n:null = null;

let u:undefined = undefined;

// any 表示任意数据类型 不可以频繁使用any数据类型 any数据类型丧失了ts类型校验
let an:any = 231231;
an = true