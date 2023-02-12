<template>
    <div class="two">
        <p>我也是一个子组件</p>
        <!-- 插槽，在父组件中写数据用slot来接收即可显示。插槽多的话需要命名，name=父组件中模板名称， :自定义名称=数据也可向父组件传递信息-->
        <slot name="header" :msg="msg"></slot>
        <button @click="send">向one组件发送自定义数据</button>
        <!-- 普通插槽，无法相互传递数据。无法定义位置 -->
        <slot></slot>

    </div>
</template>
<script>
    // 2022年9月16日9:30:42
import bus from '@/utils/bus.js'
export default {
    data() {
        return {
                msg:"自定义数据---我来了"
            }
    },
    methods: {
        send() {
            // 向兄弟组件发送数据，bus.$emit("名称",数据) 即可。注意需要引入bus.js文件 
            bus.$emit("sendmsg",this.msg);
     }   
    }
        
    }
</script>
<style>
    .two{
width:400px;
height: 300px;
background: blue;
    }

</style>
