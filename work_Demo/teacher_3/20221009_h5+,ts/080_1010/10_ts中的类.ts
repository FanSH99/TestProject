// 2022年10月10日15:40:14

// 定义class类。类中有属性和方法
// class类用来创建对象的。
class User {
    name: string = '章程';
    age: number = 18;
    sex: number | boolean = true;
    like: string;
    constructor(name: string, age: number, sex: boolean) {
        console.log(name, age, sex);
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say(msg: string) {
        console.log(this.name, msg);
    }
}

let user = new User('白浅', 20, false);
console.log(user);



