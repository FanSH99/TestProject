// index.js
Page({
  data: {
    msg: "我是父组件中的数据",
    list: ["小明", "小红", "小兰"],
   hero:null
  },
  getUser(e) {
   console.log(e);
   this.data.hero=e.detail
   this.setData({
     hero:this.data.hero
   })
  },
  getNum(e){
    console.log(e.detail);
    this.setData({
      num:e.detail
    })
  }
})