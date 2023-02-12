Component({
    properties:{
        duration:String,
        currentTime:String,
        percent:Number
    },
    methods:{
        percentChange(e){
            // 获取slider百分比
            let percent = e.detail.value;
            // console.log(percent) 
            // 将百分比传递给父组件
            this.triggerEvent("sendPercent",percent)
        }
    }
})