// components/index/top/top.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item:Object
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
        goInfo(e){
            // 获取当前点击的榜单id
           let id = e.currentTarget.dataset.id;
            wx.navigateTo({
            //   跳转榜单详情页面并将当前榜单id传递到榜单详情页
              url: '/pages/topInfo/topInfo?id='+id,
            })
        }
    }
})
