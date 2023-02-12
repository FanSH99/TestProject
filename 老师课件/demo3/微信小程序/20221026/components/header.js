// 创建自定义组件实例
Component({
    // 存放数据
    data:{
        num:0
    },
    // 在自定义组件中方法函数需要写在methods属性
    methods:{
        add(e){
            console.log(e.currentTarget.dataset.id)
            this.data.num++;
            this.setData({
                num:this.data.num
            })
        }
    },
    // 小程序组件生命周期
    lifetimes:{
        created(){
            // 组件生命周期函数 - 在组件实例刚刚被创建时执行，注意此时不能调用 setData )
            console.log("组件创建")
        },
        attached(){
            // 相当于渲染时
            console.log("组件进入页面节点时调用")
        },
        ready(){
            console.log("组件渲染后")
        },
        detached(){
            console.log("组件被移除时调用")
        }
    },
    // 存放的是 当前组件所在页面的生命周期
    pageLifetimes:{
        show(){
            console.log("mine页面被展示啦")
        },
        hide(){
            console.log("mine页面被隐藏")
        }
    }
   
})