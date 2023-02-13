console.log("哈哈哈哈");
let app=getApp();
app.getUser();
console.log(app);
Page({
// 定义当前页面中用到的数据，类似于vue中的data
  data:{
    msg:"好好学习好好学习",
    num:6,
    list:["白浅",'杨生','君如'],
    goods:[
      {
        name:'水果',
        price:'10',
        num:10,
        tag:['新','鲜']
      },
      {
        name:'蔬菜',
        price:'15',
        num:15,
        tag:['降','绿']
      },
      {
        name:'饮料',
        price:'20',
        num:'20',
        tag:['营养','蛋白质']
      }
    ],
    user:["海绵宝宝",'派大星','章鱼哥'],
    n:8,
    isShow:false,

  },
  // 页面生命周期
  onLoad(){
    // 只要页面路径不发生改变，则只会调用一次。
console.log('页面加载时调用');
  },
  onShow(){
    // 可以调用多次，每次进入当前页面都会调用
    console.log('监听页面显示');
  },
  onReady(){
console.log('渲染完成调用');
  },
  onHide(){
    // 可调用多次，每次隐藏的都会调用。
    console.log('页面隐藏时调用');
  },
  onPullDownRefresh(){
    console.log('监听用户下拉刷新动作');
  },
  onReachBottom(){
    // 页面滚动到底部时触发，可以用来做上拉加载
    console.log('我滚动到最底部了');
  },
  onShareAppMessage(){
    console.log('转发时触发');
  },
  onPageScroll(e){
    console.log(e.scrollTop);
    console.log('页面滚动了');
  }

})