Component({
    properties:{
        imgurl:String
    },
    methods:{
        goPlayer(){
            // 向父组件发送自定义事件
            this.triggerEvent("randomPlay")
        }
    }
})