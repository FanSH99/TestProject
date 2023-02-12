<template>
  <div id="app">
     <button @click="sendHttp">发送请求</button>
     <button @click="sendGet">axios发送get请求</button>
     <button @click="sendPost">axios发送post请求</button>
     <my-component></my-component>
     <i class="fa fa-address-card-o" aria-hidden="true"></i>
  </div>
</template>

<script>
// import axios from 'axios';
import myComponent from '@/components/myComonent'
export default {
  data() {
    return {
    }
  },
  components:{
    myComponent
  },
  methods:{
    sendHttp(){
      this.$axios({
        url:"/xiaochengxu/shop/goods/list",
        method:"post",
        data:{
           pingtuan:false,
           kanjia:false
        }
      }).then(res=>{
        console.log(res)
      })
    },
    sendGet(){
      // 发送get请求
      this.$axios.get("/xiaochengxu/banner/list").then(res=>{
        console.log(res)
      })
    },
    sendPost(){
      this.$axios.post('/xiaochengxu/shop/goods/list',{
           pingtuan:false,
           kanjia:false
        }).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
    }
  }
}
</script>

<style>
.fa-address-card-o{
  font-size:100px !important;
  color:red;
}
</style>
