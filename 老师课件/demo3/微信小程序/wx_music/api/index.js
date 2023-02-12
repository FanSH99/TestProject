let request = require("../utils/request")
// 获取轮播图列表
let getBannerList = ()=>request(`/banner?type=2`,"get");
// 获取热门榜单
let getTopList = ()=>request(`/toplist/detail`,"get")
// 获取榜单详情
let getTopInfo = (id)=>request(`/playlist/detail?id=${id}`,"get");
// 获取热门mv
let getHotmv = ()=>request(`/top/mv?limit=20&offset=0`,"get")
// 获取mv播放地址
let getMvurl = (id)=>request(`/mv/url?id=${id}`,"get")
// 获取热门搜索
let getHotSearch = ()=>request(`/search/hot`,"get");
// 搜索音乐
let searchMusic = (keywords)=>request(`/search/suggest?keywords=${keywords}`,"get")
module.exports = {
    getBannerList,
    getTopList,
    getTopInfo,
    getHotmv,
    getMvurl,
    getHotSearch,
    searchMusic
}