// 2022年10月11日09:20:09

interface fsh {
    name: string,
    age: number,
}

// 使用接口定义数组

interface Myarray {
    [index: number]: string
}

// let myArray1:Myarray = ['哈哈哈哈', 'llll', 111]; ---报错
let myArray1: Myarray = ['哈哈哈哈', '1111', 'llll']
console.log(myArray1);


let myArray2: Myarray = {
    0: "hhhh",
    1: 'iiii'
}
console.log(myArray2);


// 使用接口定义不声明指定属性的对象。---可以用于封装axops请求。

interface Myobj {
    [key: string]: any,
}

let myobj: Myobj = {
    name: '1235',
    age: '2355',
    sex: 0,
    isChange: false,
    f: function () {
        console.log('1111');
    }
}
console.log(myobj);
