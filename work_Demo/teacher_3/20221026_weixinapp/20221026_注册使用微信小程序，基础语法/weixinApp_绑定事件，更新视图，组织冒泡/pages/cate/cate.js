// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"学习使我快乐",
    list:[
      {
        name:'iphone14',
        price:4999,
        id:1
      },
      {
        name:'macbook',
        price:9999,
        id:2
      },
      {
        name:'ipad',
        price:'5999',
        id:3
      }
    ]
  },
  parentEvent(){
console.log('父标签事件');
  },
  childEvent(){
console.log('子标签事件');
  },
  remove(e){
    console.log(e.currentTarget.dataset.id);
    console.log(this.data.list);
    let id=e.currentTarget.dataset.id;
    let index=this.data.list.findIndex(item=>{
      return id===item.id;
    })
    console.log(index);
    // 数据改变了，但是视图不更新--因为数据是单向数据流，
    this.data.list.splice(index,1);
    // 视图更新,可以一次更新多个属性。
    this.setData({
      list:this.data.list
    })

  },
  clickMe(){
    console.log('你点我了');
  },
  // clickMe:function(){}
move(){
console.log('手指触摸后移动了');
},
sendnum(e){
console.log(e);
let id=e.currentTarget.dataset.id;
let name=e.currentTarget.dataset.name;
console.log(id,name);//10,张三
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
console.log('滚动到底部了');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  }
})