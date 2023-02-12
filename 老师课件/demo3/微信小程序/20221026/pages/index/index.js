// 获取小程序应用实例 app
let app = getApp();
console.log(app)
app.getUser();
// 当前页面实例
Page({
  // 定义当前页面中用到的数据 类似于vue中data属性
   data:{
     msg:"好好学习天天向上",
     num:5,
     list:["张三","王五","赵六","冯七"],
     goods:[
       {
         name:"水果",
         price:"10",
         num:10,
         tag:["新","鲜"]
       },{
         name:"蔬菜",
         price:"5",
         num:20,
         tag:["降","绿"]
       },
       {
         name:"牛奶",
         price:"2",
         num:50,
         tag:["营养","蛋白质"]
       }
     ],
    user:['刘备',"关羽","张飞"],
     n:Math.floor(Math.random()*10),
     isshow:false,
     like:app.globdata.like
   },
  //   页面生命周期
  onLoad(){
       // 只要页面路径不发生改变只会调用一次
      console.log("页面加载时调用")
      this.getList();
  },
  onShow(){
    //   每次进入当前页面都会调用
      console.log("监听页面显示")
  },
  onReady(){
    //    只会调用一次
      console.log("监听初次 页面渲染完成")
  },
  onHide(){
      console.log("页面隐藏时调用")
  },
  onPullDownRefresh(){
      console.log("监听用户下啦刷新")
  },
//  页面滚动到底部时触发 可以用来做上啦加载
  onReachBottom(){
      console.log("我滚动到最底部啦")
  },
  onShareAppMessage(){
      console.log("用户点击右上角转发触发")
  },
  onPageScroll(e){
      console.log(e.scrollTop)
      console.log("页面滚动啦")
  },
  getList(){
      console.log([1,2,3,4,5])
  }
})