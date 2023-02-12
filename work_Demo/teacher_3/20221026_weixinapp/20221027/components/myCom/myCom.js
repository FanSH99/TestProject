// components/myCom/myCom.js
Component({
  /**
   * 组件的属性列表--properties接收父组件的值
   */
  properties: {
    mymsg: String,
    mylist:Array,
  },

  /**
   * 组件的初始数据
   * 子组件向父组件传值
   */
  data: {
    user:{
      name:"郭靖",
      like:"降龙十八掌"
    }
  },

  /**
   * 组件的方法列表
   * 子组件向父组件传值
   * 1.子组件中使用this.triggerEvent()
   * 2.参数1事件名称，参数2传递的值
   * 3.在父组件的子组件标签上绑定自定义事件接收数据
   */
  methods: {
    sendData(){
      // console.log(this.data.user);
     this.triggerEvent("senduser",this.data.user)
    }
  }
})
