// 创建一个混入对象
let showMixins = {
    data() {
        return {
            isShow: false,
            num:0,
        }
    },
    methods: {
        show() {
            this.isShow=true
        },
        add() {
            this.num++
        }
    },
    watch: {
        
    },
    computed: {
        
    },

}
export default showMixins