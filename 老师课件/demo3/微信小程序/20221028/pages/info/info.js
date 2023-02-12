Page({
    data:{
        name:"",
        id:""
    },
    onLoad(option){
        // option就是页面传递过来数据
        // 接受页面传递过来数据
        console.log(option)
        this.setData({
            name:option.name,
            id:option.id
        })
    }
})