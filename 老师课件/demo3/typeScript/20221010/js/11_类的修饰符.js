class Stu {
    constructor(name, sex, like) {
        // public 公有属性
        this.height = 180;
        this.name = name;
        this.sex = sex;
        this.like = like;
    }
    say() {
        console.log(`喜欢${this.like} 身高 ${this.height}`);
    }
    getLike() {
        return this.like;
    }
}
// static 表示静态属性(类属性)
Stu.age = 20;
let xiaohong = new Stu("小红", false, "学习");
console.log(xiaohong);
// xiaohong.sex = true;
// console.log(xiaohong)
// console.log(xiaohong.age)
console.log(Stu.age);
// console.log(xiaohong.constructor.age)
// console.log(xiaohong.like)\
xiaohong.say();
let like = xiaohong.getLike();
console.log(like);
console.log(xiaohong.height);
