import { requestGet } from "@/utils/requset";

// 获取分类列表
let getCateList = (data)=>requestGet(`/shopping/v2/restaurant/category`,data);

// 获取配送方式
let getSongType = (data)=>requestGet(`/shopping/v1/restaurants/delivery_modes`,data);

// 获取商家属性列表
let getShopAttr = (data)=>requestGet(`/shopping/v1/restaurants/activity_attributes`,data)
export {
    getCateList,
    getSongType,
    getShopAttr
}