import { postRequest,requestGet } from "@/utils/requset";

// 生成订单
let createOrder = (data)=> postRequest(`/v1/carts/checkout`,data);

//  获取收获地址
let getAddressList = (user_id)=> requestGet(`/v1/users/${user_id}/addresses`)

//  用户下单
let orderDon = (user_id,cart_id,data)=>postRequest(`/v1/users/${user_id}/carts/${cart_id}/orders`,data);

// 获取订单列表
let getOrderList = (user_id,data)=>requestGet(`/bos/v2/users/${user_id}/orders`,data)
export{
    createOrder,
    getAddressList,
    orderDon,
    getOrderList
}