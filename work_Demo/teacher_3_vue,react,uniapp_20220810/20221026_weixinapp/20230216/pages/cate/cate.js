// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"12345675",
    list:[
      {
        name:"xiaomi13",
        price:"3999",
        id:1
      },
      {
        name:"macbook",
        price:"11999",
        id:"2"
      },
      {
        name:"huawei",
        price:"5999",
        id:3
      }
    ]
  },
  // 事件不用在写到methods里面，直接写外面就行。
// clickMe或者clickMe:function(){},
  clickMe(){
    console.log(this.data.msg);
    this.data.msg="你点我了"
    this.setData({
      msg:this.data.msg
    })
  },
  move(){
    console.log("移动了");
  },
  sendNum(e){
// console.log(e);
// 用e.target.dataset.自定义名称 来获取传递的参数。自定义名称需要和标签中data-自定义的名称一致。
console.log(e.target.dataset.id,e.target.dataset.name);
  },
  remove(e){
// console.log(e.currentTarget.dataset.id);
// console.log(this.data.list);
let index=this.data.list.findIndex(item=>{
  return e.currentTarget.dataset.id===item.id
})
console.log(index);
// 微信小程序中绑定的数据不是双向的，不能触发视图更新。
this.data.list.splice(index,1);
console.log(this.data.list);
// 用setData来更新数据视图更新
this.setData({
  list:this.data.list
})
  },

  clickParent(){
    console.log("点击了父标签");
  },
  clickChild(){
    console.log("子标签被点击了");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
console.log(options);
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})