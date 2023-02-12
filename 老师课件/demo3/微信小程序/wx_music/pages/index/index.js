// 引入请求方法
let {getBannerList,getTopList,getHotmv} = require("../../api/index");
Page({
    data:{
        bannerList:[],
        topList:[],
        isloading:true,
        mvList:[]
    },
    async onLoad(){
        // 获取轮播图列表
        let res = await getBannerList();
        // console.log(res)
        let topList = await getTopList();
        // 截取前四个榜单；
        let list = topList.data.list.splice(0,4);
        // 获取热门mv
        let hotmv = await getHotmv();
        console.log(hotmv)
        this.setData({
            bannerList:res.data.banners,
            topList:list,
            mvList:hotmv.data.data
        },()=>{
            // 数据更新完之后进入回调
            this.setData({
                isloading:false
            })
            // 将热门mv列表存储到本地
            wx.setStorage({
                key:"hotMvList",
                data:this.data.mvList,
            })
        })
    },
    goInfo(e){
        let index = e.currentTarget.dataset.index;
        //将热门mv列表存储到storege
        wx.navigateTo({
            url: '/pages/mvInfo/mvInfo?index='+index,
          })
    }
})