// components/two/two.js
let bus=require("../../utils/bus");
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
    title:"学习使我快乐"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendMsg(){
      // 发布消息，
      bus.emit(this.data.title);
    }
  }
})
