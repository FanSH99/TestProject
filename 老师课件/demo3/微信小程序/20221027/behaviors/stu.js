// 创建一个behavior实例
let stuBehaviors = Behavior({
    data:{
        list:["张三","王武","李四"],
        name:""
    },
    lifetimes:{
        created(){
            console.log("组件创建")
        },
        attached(){
            console.log("组件渲染")
        },
        ready(){
            console.log("组件渲染后")
        }
    },
    methods:{
        addUser(){
            this.data.list.push(this.data.name)
            this.setData({
                list:this.data.list
            })
        }
    }
})

// 到处behavires实例
module.exports = stuBehaviors;