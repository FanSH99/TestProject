"use strict";
// 2022年10月10日15:52:55
// 类非常重要。react中运用非常多。
class Computer {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    getsuper() {
        console.log(this.name);
    }
    watch() {
        console.log("追剧喽~~~");
    }
}
// 累的继承
class Tv extends Computer {
    constructor(name, price, color, size) {
        // this.size = size; --报错
        super(name, price, color);
        //继承的信息必须放在前面，否则报错
        this.size = size;
    }
}
let changhong = new Tv('长虹', 1999, '黑色', 70);
console.log(changhong);
changhong.getsuper(); //长虹
changhong.watch(); //追剧喽
