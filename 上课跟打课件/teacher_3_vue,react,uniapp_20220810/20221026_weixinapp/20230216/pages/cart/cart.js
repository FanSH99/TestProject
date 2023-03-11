// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    age: "",
    sex: "",
    person: [{
        name: "海绵宝宝",
        age: 11,
        sex: "男"
      },
      {
        name: "派大星",
        age: 12,
        sex: "男"
      },
      {
        name: "珊迪",
        age: 16,
        sex: "女"
      },
      {
        name: "章鱼哥",
        age: 31,
        sex: "男"
      }
    ]
  },
  add() {
    let obj = {
      name: this.data.name,
      aeg: this.data.age,
      sex: this.data.sex,
    };
    console.log(obj);

    this.data.person.push(obj);
    this.setData({
      person: this.data.person,
      name: "",
      age: "",
      sex: ""
    })


  },
  remove(e) {
    // console.log(e.currentTarget.id);
    // let idx=this.data.person.findIndex(item=>item.includes())
    this.data.person.splice(e.currentTarget.id, 1);
    this.setData({
      person: this.data.person
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})