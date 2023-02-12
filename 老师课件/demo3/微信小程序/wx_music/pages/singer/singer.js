let {getSingerList}  = require('../../api/singer')
Page({
    data:{
        navList:"热abcdefghijklmnopqrstuvwxyz",
        title:"热门",
        offset:0,
        singgerList:[],
        isloading:true
    },
    onLoad(){
        this.getSinger();
    },
    async getSinger(){
        let initial = "";
        if(this.data.title === '热门'){
            initial=-1;
        }else{
            initial = this.data.title
        }
        this.setData({
            isloading:true
        })
        let res = await getSingerList(initial,this.data.offset);
        this.setData({
            singgerList:[...this.data.singgerList,...res.data.artists],
            isloading:false
        })
    },
    // onReachBottom(){
    //     console.log("页面滚动到底部啦")
    // }
    scrolltolower(){
        console.log("滑动到最底部啦")
        this.setData({
            offset:this.data.offset+=20
        },()=>{
           if(this.data.isloading){
               return
           }
           this.getSinger();
        })
    },
    gonav(e){
        let tag = e.currentTarget.dataset.tag;
        let title = tag;
        if(tag === '热'){
            title = '热门'
        }
        this.setData({
            title:title,
            singgerList:[],
            offset:0,
            isloading:true
        },()=>{
            this.getSinger();
        })
    },
    goInfo(e){
       let id = e.currentTarget.dataset.id;
       wx.navigateTo({
         url: '/pages/singerInfo/singerInfo?id='+id,
       })
    }
})