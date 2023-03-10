// components/one/one.js
// 引入bus
let bus=require("../../utils/bus.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"",
    num:12,
    list:[1,23,5,56]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init(){
      console.log("初始化one组件");
    }
  },
  lifetimes:{
    attached(){
      console.log(bus);
      // 订阅消息传递一个回调函数，接收two组件消息
      // bus.on((msg)=>{
      //   console.log(msg)
      // })
      bus.on("sendmsg",(msg)=>{
        console.log(msg)
        this.data.msg=msg;
        this.setData({ 
           msg:this.data.msg
        })
      });
      this.triggerEvent("sendnum",this.data.num)
    }
  },

})
