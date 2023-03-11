"use strict";
// 用implements关键字则class类型中必须含有接口中的属性，且类型数量一致。
class Big {
    say() {
        return 123;
    }
}
// 若类中需要用到多个接口，则接口与接口之间用逗号隔开。
class Age {
    say() {
        return 123;
    }
    getSum() {
        console.log(1243);
    }
}
// 类可以作为接口使用。
class Myname {
    say() {
        return 1323;
    }
}
let myuser = {
    name: "白浅",
    age: 19,
    say() {
        console.log('1245');
        return 1234;
    }
};
console.log(myuser);
console.log(myuser.say());
let ages = 5;
if (ages > 4) {
    console.log('大于4');
}
