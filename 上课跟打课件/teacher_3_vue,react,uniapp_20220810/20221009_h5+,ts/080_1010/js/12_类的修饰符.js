"use strict";
// 2022年10月10日16:46:39
class Stu {
    constructor(name, sex, age, like) {
        // public共有属性，哦所有类都能访问。
        this.height = 180;
        this.name = name;
        this.sex = sex;
        // this.age = age;  ---报错
        this.like = like;
    }
    ;
    say() {
        console.log(`${this.name}身高${this.height}喜欢${this.like}`);
    }
    ;
    // 由于私有属性不能被外部访问，可以用方法来获取。
    getLike() {
        return this.like;
    }
}
// static 表示静态属性，类属性。不能用this直接访问 当有static时，this.age不起作用。
Stu.age = 20;
let xhong = new Stu("小红", false, 18, '学习');
console.log(xhong);
console.log(xhong.sex, xhong.name);
// xhong.sex = true; ---报错
// xhong.age = 19;   ---报错 雷属性不能直接调用。
// 实例属性，--xhong.xxx
// console.log(xhong.age); ---报错
console.log(Stu.age); //20
// console.log(xhong.like);  ---报错
xhong.say(); //小红喜欢学习。
console.log(xhong.height);
