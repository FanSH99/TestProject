
// 定义class类:属性 方法
// class类 是用来创建对象的
class User {
    name:string = '张三';
    age:number = 18;
    sex:number | boolean = true;
    like:string
    // 当使用new关键字调用构造函数会就会执行constructor
    constructor(name:string,age:number,sex:boolean,like:string){
        console.log(name,age,sex)
        // this指向的是当前构造出来的实例
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.like = like
    }
    //类中定义方法
    say(msg:string){
        console.log(msg)
    }
}
let user = new User("李四",20,false,"学习");
console.log(user)