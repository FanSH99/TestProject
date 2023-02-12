class Stu {
    name:string;
    // 只读修饰符
    readonly sex:boolean;
    // static 表示静态属性(类属性)
    static age:number=20;
    // private 私有的 表示类私有属性 只能在类中使用this访问
    private like:string;
    // public 公有属性
    public height:number=180;
    constructor(name:string,sex:boolean,like?:string){
        this.name = name;
        this.sex = sex;
        this.like= like
    }
    say(){
        console.log(`喜欢${this.like} 身高 ${this.height}`)
    }
    getLike(){
        return this.like
    }
}

let xiaohong = new Stu("小红",false,"学习");
console.log(xiaohong)
// xiaohong.sex = true;
// console.log(xiaohong)
// console.log(xiaohong.age)
console.log(Stu.age)
// console.log(xiaohong.constructor.age)
// console.log(xiaohong.like)\
xiaohong.say();
let like = xiaohong.getLike();
console.log(like)
console.log(xiaohong.height)
