// components/cartone/one.js

let stuBehavior=require("../../behaviors/stu");
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    looklook(){
      console.log(this.data);
    }
  },
  // 注册behaviors，可以注册多个
  behaviors:[stuBehavior]
})
