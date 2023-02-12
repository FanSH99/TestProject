import request from '../utils/request.js'
// 获取轮播banner
let getBannerList=()=>request("/index","get");
// 获取商品排行榜
let getTopList=()=>request("/product/leaderboard","get")

export{
    getBannerList,
    getTopList,
}