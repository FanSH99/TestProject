// 2022年10月11日14:17:01

import { Myallobj, myfun1 } from "./module";
import request from './home'

let mybaby: Myallobj = {
    name: '派大星',
    age: '12',
    like: "抓水母"
}
console.log(mybaby);

let sayfun: myfun1 = (a, b) => {
    return a.length + b;
}

console.log(sayfun);


async function getData() {
    let res = await request({ code: 0, msg: "请求成功" })
    console.log(res);

}

getData();