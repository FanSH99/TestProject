// 定义class类:属性 方法
// class类 是用来创建对象的
class User {
    // 当使用new关键字调用构造函数会就会执行constructor
    constructor(name, age, sex, like) {
        this.name = '张三';
        this.age = 18;
        this.sex = true;
        console.log(name, age, sex);
        // this指向的是当前构造出来的实例
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.like = like;
    }
    //类中定义方法
    say(msg) {
        console.log(msg);
    }
}
let user = new User("李四", 20, false, "学习");
console.log(user);
