// 表示类中必须含有接口Mybig属性
class Big {
    say() {
        return 123;
    }
}
// 若class类中需要用到多个接口 接口与接口之间使用逗号隔开
class Age {
    getSum() {
    }
    say() {
        return 124;
    }
}
// 类可以作为接口使用
class Myname {
    say() {
        return 124;
    }
}
let myuser = {
    name: "张三",
    age: 18,
    say() {
        return 12345;
    }
};
let ages = 10;
if (ages > 100) {
    console.log("凉凉");
}
