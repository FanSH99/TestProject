<template>
  <div>
    <h1>我是子组件 {{mymsg}}</h1>
    <!-- 子传父 -->
    <button @click="sendmsg">向父组件传递数据</button>
  </div>
</template>
<script>
import bus from '@/bus'
export default {
    props:{
        mymsg:{
            type:String,
            default:()=>{
                return "嘿嘿嘿嘿"
            }
        }
    },  
  data(){
    return {
        price:100
    }
  },
  methods:{
    sendmsg(){
        // 发送自定义事件
        this.$emit("sendprice",this.price)
    }
  },
  created(){
    // 监听自定义事件
    bus.$on("getsum",(msg)=>{
        console.log(msg)
    })
  }
}
</script>
<style>
</style>