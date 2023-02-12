<template>
    <div class="child">
        <h4>子组件 {{num}}</h4>
        <h5>{{mymsg}}</h5>
        <button @click="num++;$emit('sendnum',num)">++</button>
    </div>
</template>
<script>
    import bus from '@/utils/bus.js';
    export default {
        props:{
            mymsg:{
                type:String,
                default:function(){
                    return "哈哈哈哈"
                }
            }
        },
        methods:{
            getMsg(){
                this.mymsg
            }
        },
        data() {
            return {
                num:0
            }
        },
        created(){
            /* 
            1.在子组件中使用this.$emit向父组件发送自定义事件
            2.在父组件的子组件标签上来接收自定义事件
            */
           this.$emit("sendnum",this.num)
        //    订阅
        bus.$on("sendmsg",(value)=>{
            console.log(value)
        })
        }
    }
</script>
<style>
    .child{
        width: 400px;
        height: 200px;
        background-color: red;
    }
</style>