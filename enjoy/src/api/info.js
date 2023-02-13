import { requestGet } from "@/utils/request";

let getInfo = (id) => requestGet(`/api/front/product/detail/${id}?type=normal`);
let getreply = (id) => requestGet(`api/front/reply/product/${id}`);
let getRecommond = () => requestGet(`/api/front/product/good`)

export {
    getInfo,
    getreply,
    getRecommond,
}