import { request } from "./request";

let getHomeList = () => request("/live?offset=0&limit=20");
let getClassList = () => request("/game");
let getLiveInfo = (id) => request(`/room/${id}`);
let getClassInfo = (id) => request(`/live/${id}`);
export {
    getHomeList,
    getClassList,
    getLiveInfo,
    getClassInfo
}