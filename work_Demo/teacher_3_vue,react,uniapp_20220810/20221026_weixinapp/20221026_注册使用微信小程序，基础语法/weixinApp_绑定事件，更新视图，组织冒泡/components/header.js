// components/header.js
// 创建一个自定义组件实例。
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
    num: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 自定义组件中方法需要写在method里面
    add(e) {
      console.log(e.currentTarget.dataset.id);
      this.data.num++;
      // 更新视图
      this.setData({
        num: this.data.num
      })

    }
  },
  //  组件生命周期
  lifetimes: {
    created() {
      // 此时不能调用setData
      console.log('组件创建时');
    },
    attached() {
      console.log('组件进入节点时执行，相当于渲染');
    },
    ready() {
      console.log('组件渲染后执行');
    },
    detached() {
      console.log('组件被移除时执行。');
    }

  },
  // 存放的是当前组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('mine页面被展示了');
    },
    hide() {
      console.log('mine页面被隐藏了');
    }
  }

})
