
// 创建一个混入对象 混入对象中拥有所有组件属性
// 混入只会共享业务逻辑不会共享数据
let showMixins = {
    data(){
        return{
            isShow:false,
            num:0
        }
    },
    methods:{
        show(){
            this.isShow = true;
        },
        add(){
            this.num++;
        }
    },
    watch:{

    },
    computed:{

    }
}

export default showMixins;