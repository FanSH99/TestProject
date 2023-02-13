import { requestGet } from "@/utils/request.js";

// 获取商铺信息
let getShopInfo = (id) => requestGet("/shopping/restaurant/" + id);
let getShopList = (id) => requestGet("/shopping/v2/menu?restaurant_id=" + id);
let getRate = (id) => requestGet(`/ugc/v2/restaurants/${id}/ratings/scores`);
let getAllRate = (id) => requestGet(`/ugc/v2/restaurants/${id}/ratings`);
let getRateTigs = (id) => requestGet(`/ugc/v2/restaurants/${id}/ratings/tags`);
let getRateAll = (id) => requestGet(`/ugc/v2/restaurants/${id}/ratings?tag_name=全部`)
let getRateHasImg = (id) => requestGet(`/ugc/v2/restaurants/${id}/ratings?tag_name=有图`)
export {
    getShopInfo,
    getShopList,
    getRate,
    getRateTigs,
    getAllRate,
    getRateAll,
    getRateHasImg,
}
