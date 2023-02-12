"use strict";
// 2022年10月10日09:57:48
let arry = ["23", "w"];
// let ayyy1:string[]=["1122,""233",true,]  ---报错
let numArry = [11, 22, 33];
// let ayyy1:number[]=[11,22,44,"233"]  ---报错
let arrtT = ['1234', 99, true, null];
// 在元祖中无论多一项还是少一项都会报错。元祖包含数组的所有方法，另外元祖可以直接使用索引值。
arrtT.forEach(item => {
    console.log(item);
});
// ts文件中let编译后会变成var 需要进行配置。--原因是ts默认使用的是es3，es6新增的let声明
