class Computer {
    constructor(name, price, color) {
        this.price = price;
        this.name = name;
        this.color = color;
    }
    look() {
        console.log("可以追剧");
    }
}
class Tv extends Computer {
    constructor(name, price, color, size) {
        // super 就是该类继承的父类
        super(name, price, color);
        this.size = size;
    }
    ;
}
let changhong = new Tv("长虹", 1999, "黑色", 70);
console.log(changhong);
changhong.look();
