import { requestGet } from "@/utils/request";

// 获取城市列表
let getCityList = (type) => requestGet(`/v1/cities?type=${type}`);
// 获取城市信息

let getCityInfo = (id) => requestGet(`/v1/cities/${id}`);

let getAreas = (data) => requestGet("/v1/pois", data);

export {
    getCityList,
    getCityInfo,
    getAreas,
}
