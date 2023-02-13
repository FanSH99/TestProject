// components/one/one.js
let bus=require("../../utils/bus.js");
Component({
  lifetimes:{
    attached(){
      // 订阅消息
      bus.on((msg)=>{
        console.log(msg);
      });
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
