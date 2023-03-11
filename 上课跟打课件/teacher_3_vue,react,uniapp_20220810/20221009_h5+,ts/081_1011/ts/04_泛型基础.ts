// 2022年10月11日10:48:52

function userLogin(a) {
    console.log(a);//函数中没有类型推断，这里a类型是any
}

userLogin('123');


userLogin(true);

// 泛型 也是一种类型 ---传什么类型，参数就是什么类型。
// 泛型：当我们在封装函数或定义接口或定义类时，不确定某个参数具体的数据类型，可以用泛型定义。
// 泛型就相当于一个变量，传递什么类型， 它就是什么类型。泛型T自定义的，也可以用别的名字。
function userLogin2<T>(a: T) {
    console.log(a);
}
userLogin2<string>('派大星');
userLogin2(true)


function getName<T, U>(name: T, age: U): U {
    return age
}
let age = getName('12222', 1111);
console.log(age);

let age2 = getName<number, string>(111, '2356');
console.log(age2);


// 泛型与接口
interface Myusre<T, U> {
    name: T,
    age: U,
}

let user1: Myusre<string, number> = {
    name: "花千骨",
    age: 18
}
console.log(user1);

let user2: Myusre<number, string> = {
    name: 1111111,
    age: '18'
}
console.log(user2);

// 泛型与类

class HLL<N, A, S, O>{
    name: N;
    age: A;
    sex: S;
    constructor(name: N, age: A, sex: S) {
        this.name = name;
        this.age = age;
        this.sex = sex
    };
    say(a: O) {
        console.log(a);

    }
}

let h1 = new HLL<string, number, boolean, string>('哈哈哈', 18, true);
console.log(h1);

h1.say('111');


