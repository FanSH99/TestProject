<template>
    <div class='two'>
        <h3>俺也是一个子组件</h3>
        <button @click="send">向另一个子组件发送数据</button>
        <slot name='header' :msg="msg" />
        <slot name='footer' />
    </div>
</template>
<script>
    import bus from '@/utils/bus.js';
    export default{
        data(){
            return{
                msg:"我来了"
            }
        },
        methods:{
            send(){
                bus.$emit("sendmsg",this.msg)
            }
        }
    }
</script>
<style>
    .two{
        width:400px;
        height:300px;
        background:blue;
    }
</style>