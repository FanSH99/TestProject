import { requestGet } from "@/utils/requset";

// 根据经纬度获取 定位详细信息
let getLocation = (geohash)=> requestGet(`/v2/pois/${geohash}`);

// 获取店铺分类
let getShopCate = ()=>requestGet(`/v2/index_entry`)

// 获取店铺列表
let getShopList = (data)=>requestGet(`/shopping/restaurants`,data)
export {
    getLocation,
    getShopCate,
    getShopList
}