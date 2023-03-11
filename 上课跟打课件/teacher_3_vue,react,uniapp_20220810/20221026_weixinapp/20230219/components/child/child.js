// components/child/child.js
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
    person:{
      name:"郭靖",
      like:"降龙十八掌"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendData(){
      // 子组件向父组件传值
      // 1.使用this.triggerEvent发送自定义事件,参数1名称，参数2要传递的数据
      // 2.在父组件的子组件标签上绑定自定义事件来接收
      console.log("向父组件传值");
      this.triggerEvent("senduser",this.data.person)
    }
  }
})
