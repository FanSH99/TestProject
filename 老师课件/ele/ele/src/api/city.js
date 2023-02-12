import { requestGet } from "@/utils/requset";

// 获取城市列表
let getCityLitst = (data)=> requestGet(`/v1/cities`,data);
// 搜索城市地址
let getSearchCity = (data)=>requestGet(`/v1/pois`,data)
// 获取城市详细信息
let getCityInfo = (id)=>requestGet(`/v1/cities/${id}`)
export {
    getCityLitst,
    getSearchCity,
    getCityInfo
}