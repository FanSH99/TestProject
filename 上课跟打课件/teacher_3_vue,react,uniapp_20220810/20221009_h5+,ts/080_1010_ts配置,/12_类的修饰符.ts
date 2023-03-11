// 2022年10月10日16:46:39

class Stu {
    // 当不加修饰符，默认是public
    name: string;
    // readnoly 只读，不允许更改
    readonly sex: boolean;
    // static 表示静态属性，类属性。不能用this直接访问 当有static时，this.age不起作用。
    static age: number = 20;
    // private 私有属性，不能被访问。 类里面可以访问，类的外面不能访问。
    private like: string;
    // public共有属性，哦所有类都能访问。
    public height: number = 180;
    constructor(name: string, sex: boolean, age: number, like?: string) {
        this.name = name;
        this.sex = sex;
        // this.age = age;  ---报错
        this.like = like;
    };
    say() {
        console.log(`${this.name}身高${this.height}喜欢${this.like}`);

    };
    // 由于私有属性不能被外部访问，可以用方法来获取。
    getLike() {
        return this.like;
    }
}

let xhong = new Stu("小红", false, 18, '学习');
console.log(xhong);

console.log(xhong.sex, xhong.name);
// xhong.sex = true; ---报错
// xhong.age = 19;   ---报错 雷属性不能直接调用。

// 实例属性，--xhong.xxx

// console.log(xhong.age); ---报错
console.log(Stu.age);//20

// console.log(xhong.like);  ---报错
xhong.say();//小红喜欢学习。
console.log(xhong.height);









