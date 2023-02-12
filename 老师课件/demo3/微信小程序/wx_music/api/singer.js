let request = require("../utils/request");
let getSingerList = (initial,offset)=>request(`/artist/list?type=-1&area=-1&initial=${initial}&offset=${offset}&limit=20`,"get");
// 过去歌手热门歌单
let getSingerMusic = (id)=>request(`/artist/top/song?id=${id}`,"get")
module.exports = {
    getSingerList,
    getSingerMusic
}