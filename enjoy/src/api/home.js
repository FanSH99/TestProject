import { requestGet } from "@/utils/request";

// 根据轮播
let getSwiper = () => requestGet(`/api/front/index`);

let getGoodsRank = () => requestGet('api/front/product/leaderboard')

let getgoods = (active) => requestGet(`/api/front/index/product/${active}/?page=1&limit=10`)

export {
    getSwiper,
    getGoodsRank,
    getgoods,
}