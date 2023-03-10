// 获取小程序用户实例app
let app=getApp();
console.log(app);
app.getUser();
// 当前页面实例
console.log("哈哈哈哈");
Page({
  data:{
    tag:["view",'wx:for',"wx:for-item","wx:for-index","wx:if","wx:elif","wx:else","hidden","template","include"],
    "msg":"今天天气很好",
    "num":12,
    "list":["饮料","水果","蔬菜"],
    "goods":[
      {
        "name":"香蕉",
      "price":12.6,
      "num":"21",
      "tag":['新']
      },
      {
        "name":"苹果",
      "price":9.8,
      "num":"16",
      "tag":['新','降']
      },
      {
        "name":"梨",
      "price":11.9,
      "num":"7",
      "tag":["新","降"]
      }
    ],
  // 随机生成一个0-10的整数
   n:Math.floor(Math.random()*10),
   isShow:false,
   like:app.globdata.like
  },
  // 页面加载时显示，会缓存，路径不变则只调用一次
  onLoad(){
    console.log("页面加载时调用，只会调用一次");
    this.getList();//不加this会报错
  },
  // 页面渲染时调用，每次进入页面都会调用。
  onShow(){
    console.log("监听页面显示，页面渲染时调用");
  },
  // 监听页面初次渲染完成，
  onReady(){
    console.log("监听页面渲染完成，只会调用一次");
  },
  // 切换页面即调用
  onHide(){
    console.log("页面隐藏时调用");
  },
  onPullDownRefresh(){
    console.log("监听用户下拉刷新动作");
  },
  //当页面滚动到底部时触发， 可以用来监听上拉加载，
  onReachBottom(){
    console.log("我滚动到最底部了");
  },
  onShareAppMessage(){
    console.log("用户点击右上角转发触发");
  },
  onPageScroll(e){
    console.log(e.scrollTop);
    console.log("页面滚动了");
  },
  getList(){
    console.log([1,2,4]);
  }
})