import { requestGet } from "@/utils/request.js";

// 获取商铺信息
let getShops = (params) => requestGet("/shopping/restaurants", params);
let getGeo = (geohash) => requestGet(`/v2/pois/${geohash}`);
let getCate = () => requestGet("/v2/index_entry");
export {
    getGeo,
    getCate,
    getShops,
}
