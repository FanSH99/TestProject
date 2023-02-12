Component({
    properties:{
        musicMsg:Object,
        isPlay:Boolean,
        lyric:Array,
        lyricIndex:Number
    },
    data:{
        current:0,
        toIndex:0
    },
    methods:{
        changeCurrent(e){
            let index = e.detail.current;
            this.setData({
                current:index
            })
        }
    },
    observers:{
        lyricIndex:function(newIndex){
            if(newIndex - this.data.toIndex >=6){
                this.setData({
                    toIndex:newIndex
                })
            }
            if(newIndex<this.data.toIndex){
                this.setData({
                    toIndex:newIndex
                })
            }
        }
    }
})