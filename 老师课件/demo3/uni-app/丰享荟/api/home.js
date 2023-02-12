import request from '../utils/request.js'
// 获取首页轮播图
let getBannerList = ()=>request("/api/front/index","get");
// 获取商品排行榜
let getTopList = ()=>request(`/api/front/product/leaderboard`,"get")
//获取商品详情
let getGoodsInfo = (id)=>request(`/api/front/product/detail/${id}?type=normal`,"get")
export {
	getBannerList,
	getTopList,
	getGoodsInfo
}