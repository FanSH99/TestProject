import request from '../utils/request.js'
// 用户下单
let getOrder = (data)=>request(`/api/front/order/pre/order`,"post",data);

// 获取用户订单信息
let getOrderInfo = (id)=>request(`/api/front/order/load/pre/${id}`,"get");

// 创建订单
let createPayOrder = (data)=>request(`/api/front/order/create`,"post",data);
//  支付订单
let payment = (data)=>request(`/api/front/pay/payment`,"post",data)
export {
	getOrder,
	getOrderInfo,
	createPayOrder,
	payment
}