let {getSingerMusic} = require("../../api/singer")
Page({
    data:{
        // 歌手精选歌曲列表
        list:[],
        imgurl:""
    },
    async onLoad(option){
        // 获取页面传递的参数
        let id = option.id;
        let res = await getSingerMusic(id);
        console.log(res)
        this.setData({
            list:res.data.songs,
            imgurl:res.data.songs[0].al.picUrl
        })
    },
     // 去播放
     goPlayer(e){
        // 获取当前点击的歌曲索引
        let index = e.currentTarget.dataset.index;
        // 将当前榜单列表存储到本地播放列表中
        wx.setStorage({
            key:"playList",
            data:this.data.list,
            success(){
                // 将要播放的歌曲索引传递到播放页面
                wx.reLaunch({
                    url: '/pages/player/player?playIndex='+index,
                  })
            }
        })
    },
    randomPlay(){
        wx.setStorage({
            key:"playList",
            data:this.data.list,
            success(){
                // 跳转到正在播放页面
                wx.reLaunch({
                  url: '/pages/player/player?isRandom='+true,
                })
            }
        })
    }
})