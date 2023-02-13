import { requestGet } from "@/utils/request";

let getCateAll = (data) => requestGet(`/shopping/restaurants`, data);

let getSilverWay = (data) => requestGet('/shopping/v1/restaurants/delivery_modes', data);

let getShopAttr = (data) => requestGet('/shopping/v1/restaurants/activity_attributes', data);

export default {
    getCateAll,
    getSilverWay,
    getShopAttr,
}