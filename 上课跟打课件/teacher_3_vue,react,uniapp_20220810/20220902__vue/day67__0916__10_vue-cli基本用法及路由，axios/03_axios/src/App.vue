<template>
  <div id="app">
   
   
    <button @click="sendHttp">发送get请求</button>
    <button @click="sendHttpPost">发送post请求</button>
    <button @click="sendGet">简写发送get请求</button>
    <button @click="sendPost">简写发送post请求</button>
    <my-component></my-component>
<i class="fa fa-address-card-o" aria-hidden="true"></i>

  </div>
</template>

<script>

// import axios from 'axios';
import myComponent from './components/myComponent.vue';

export default {
  name: 'App',
  data() {
    return {
     
   }
  },
  components: {
    myComponent,
  },
  methods: {
    sendHttp() {
      // 基于promise 请求头在
     this.$axios({
        url: "/xiaochengxu/banner/list",
        method: "get",
      }).then(res => {
        // 基于promise，需要用then方法来获取数据。
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    sendHttpPost() {
      this.$axios({
        url: "/xiaochengxu/shop/goods/list",
        method: "post",
        data: {
          name: '111',
          age:11
        }
      }).then(res=> {
        console.log(res);
      })
    },
    sendGet() {
      this.$axios.get("/xiaochengxu/banner/list").then(res=> {
        console.log(res);
      })
    },
    sendPost() {
      this.$axios.post("/xiaochengxu/shop/goods/list").then(res => {
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
  
  
}
</script>

<style>
i{
  font-size:50px !important;
  color:crimson;
}
</style>
