"use strict";
// 2022年10月10日15:40:14
// 定义class类。类中有属性和方法
// class类用来创建对象的。
class User {
    constructor(name, age, sex) {
        this.name = '章程';
        this.age = 18;
        this.sex = true;
        console.log(name, age, sex);
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say(msg) {
        console.log(this.name, msg);
    }
}
let user = new User('白浅', 20, false);
console.log(user);
