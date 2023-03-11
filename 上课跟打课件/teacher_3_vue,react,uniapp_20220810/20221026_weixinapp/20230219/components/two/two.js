// components/two/two.js
let bus = require("../../utils/bus.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: String
  },
  // 是否为纯数据字段,用正则定义，如果是纯数据字段则不会渲染到页面，有利于页面的优化，比如将不是响应式的数据定义为纯数据字段。
  options: {
    // 定义以a开头的数据为纯数据字段
    pureDataPattern: /^a/
  },
  /**
   * 组件的初始数据
   */
  data: {
    title: "学习使我快乐",
    // num:""
    twoNum: 0,
    user: {
      name: "张三",
      age: 18
    },
    ang: 12345
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendMsg() {
      console.log(bus);
      // 发布消息，向one组件传值
      // bus.emit(this.data.title)
      bus.emit("sendmsg", this.data.title)
    },
    add() {
      this.data.twoNum++;
      this.setData({
        twoNum: this.data.twoNum,
        user: {
          name: "张三",
          age: 192
        }
      })
    }
  },
  // 监听，只能监听组件中的数据改变，参数为改变后的值。
  observers: {
    twoNum: function (newVal) {
      console.log("twoNum改变了", newVal);
    },
    "user.age": function (newVal) {
      console.log("user改变了", newVal);
    }
  }
})