import request from '../utils/request.js'

// 商品详情
let getGoodsInfo = (id)=>request(`/product/detail/${id}?type=normal`,"get");
let addCollect=(data)=>request("/collect/add","post",data);
let delCollect=(id)=>request(`/collect/cancel/${id}`,"post");

let buyOrder=(data)=>request("/order/pre/order","post",data);
let comfirmOrder=(preOrderNo)=>request(`/order/load/pre/${preOrderNo}`,'get')

export{
    getGoodsInfo,
    addCollect,
    delCollect,
    buyOrder,
    comfirmOrder,
}