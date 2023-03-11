/* 2022年10月10日09:36:16 */
let str: string = null;

str = '111';

// str=true; ---报错
// str=111; ---报错

let num: number = 12343;

let isTrue: boolean = true;

// null,undefined是所有数据类型的子集。

let n: null = null;
// let n2: null = 1; ---报错

let u: undefined = undefined;
let u2: undefined = null;
// let u3:undefined="111" ---报错


let any1: any = 23454;
// let any2: any = "123";
// let any3: any = true;

// any表示任意数据类型，不可以频繁使用any数据类型，这样会丧失ts的类型校验。
/* 
js中有7中基本数据类型

ts文件中声明数据类型
变量名：数据类型=变量值。
变量值必须符合声明的数据类型，如果不一致报错。（null和undefined可以）

所以刚开始声明可以用null，后面赋值也必须符合声明的数据类型。

当声明为null数据类型时，再次赋值会报错。


*/

