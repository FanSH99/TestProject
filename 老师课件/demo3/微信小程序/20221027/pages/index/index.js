Page({
    data:{
        msg:"好好学习天天向上",
        list:[0,1,2,3,4],
        hroes:{
            name:"",
            like:""
        },
        name:""
    },
    getUser(e){
        // 获取子组件传递的参数
        console.log(e.detail)
        this.setData({
            hroes:e.detail
        })
    },
    gethmg(e){
        console.log(e.detail)
        this.setData({
            name:e.detail
        })
    },
    getOneCom(){
        // 使用this.selectComponent("子组件类名")获取子组件实例
        let oneCom = this.selectComponent(".onecom");
        console.log(oneCom.data.name)
        oneCom.init();
    }
})