import { postRequest } from "@/utils/requset";

// 生成订单
let createOrder = (data)=> postRequest(`/v1/carts/checkout`,data);


export{
    createOrder
}