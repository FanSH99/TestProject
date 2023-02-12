import { requestGet } from "@/utils/requset";

let getShopInfo = (id)=>requestGet(`/shopping/restaurant/${id}`);

// 获取店铺视频列表
let getShopFoods = (data)=>requestGet(`/shopping/v2/menu`,data);

// 获取评价评分
let getShopScores = (id)=>requestGet(`/ugc/v2/restaurants/${id}/ratings/scores`)
// 获取评价
let pingjiaMsg = (id,data) =>requestGet(`/ugc/v2/restaurants/${id}/ratings`,data)

// 获取评价分类
let getTags = (id) =>requestGet(`/ugc/v2/restaurants/${id}/ratings/tags`)
export {
    getShopInfo,
    getShopFoods,
    getShopScores,
    pingjiaMsg,
    getTags
}