let sendHttp=require("../utils/request");

// 获取轮播图列表
let getBanners=()=>sendHttp(`/banner?type=2`);

// 热门榜单推荐
let getHotList=()=>sendHttp(`/toplist/detail`)

module.exports={
  getBanners,
  getHotList
}