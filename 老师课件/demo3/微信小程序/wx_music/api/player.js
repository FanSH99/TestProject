let request = require("../utils/request")
// 获取歌曲播放地址
let getMusicPlayUrl = (id)=>request(`/song/url?id=${id}`,"get")
// 获取歌曲歌词
let getMusicLyric = (id)=>request(`/lyric?id=${id}`,"get")

module.exports = {
    getMusicPlayUrl,
    getMusicLyric
}