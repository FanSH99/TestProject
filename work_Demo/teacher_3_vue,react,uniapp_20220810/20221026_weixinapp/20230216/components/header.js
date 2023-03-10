// components/header.js
// 创建一个组件实例
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
    num: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(e) {
      this.data.num++;
      // setData更新数据,不能直接在setData中处理数据，比如this.setData({num:this.data.num++})没有效果
      this.setData({
        num: this.data.num
      })
      // 获取事件传递的数据
      console.log(e.currentTarget.id);
    }
  },

  // 存放组件声明周期
  lifetimes: {
    // 小程序生命周期，必须放在lifetimes中，
    created() {
      // 组件刚刚被创建时调用，此时不能用setData
      console.log("组件创建");
    },
    // 组件进入页面节点时调用，相当于渲染，此时可以更新数据，可以用setData
    attached() {
      console.log("组件被渲染时执行");
    },
    // 组件布局完成后执行即渲染后
    ready() {
      console.log("组件布局完成后执行");
    },
    moved() {
      console.log("组件被移动时执行");
    },
    detached() {
      console.log("组件被移除时执行");
    }
  },
  // 存放当前组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("mine页面被展示时执行");
    },
    hide() {
      console.log("mine页面被隐藏时执行");
    },

  }
})