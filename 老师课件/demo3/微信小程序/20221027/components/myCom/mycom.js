Component({
    // 接受父组件传递的自定义属性
    properties:{
        mymsg:String,
        list:Array
    },
    data:{
        user:{
            name:"郭靖",
            like:"降龙十八掌"
        }
    },
    methods:{
        sendData(){
        // 子组件向父组件传值
        // 1. 子组件中使用this.triggerEvent("自定义事件名称","将要传递的数据")发送自定义事件
        // 2. 在父组件中的子组件标签上绑定自定义事件接受参数
        // 发送自定义事件
        this.triggerEvent("senduser",this.data.user);
        }
    }
})