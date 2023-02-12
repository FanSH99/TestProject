import { Myallobj, myfun1} from "./module";
import * as Cart from './cart'
let mycart:Cart.mycart = [211212]
import request from './home'
let mybaby:Myallobj = {
    name:"张三",
    age:"12"
}
let sayfun:myfun1 = (a,b)=>{
    return a.length +b
}

sayfun("和hi",123)

async function getData(){
    let res = await request({
        code:0,
        msg:"请求成功"
    })
    console.log(res)
}
getData();

let Sxiaoming:Sobj = {
    name:"张三",
    age:12234
}
