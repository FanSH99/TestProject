// 声明文件：使用.d.ts 后缀的文件就是ts中的声明文件，开发者只要实在ts声明文件中定义的类型，那么在整个项目中任意一个ts文件都可以直接使用该类型，不在需要导入导出。

declare type Sfile = string | number;

declare interface Sobj {
    name: string,
    age: number
}
// 定义全局变量
// declare 声明
declare let myLike: string;

// declare function sendUser(a:string,b:number):number{
//     return a.length+b
// };
