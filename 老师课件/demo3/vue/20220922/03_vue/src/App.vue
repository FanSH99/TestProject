<template>
  <div id="app">
    <my-component></my-component>
     <button @click="sendCode">发送验证码</button>
  </div>
</template>

<script>
import myComponent from '@/components/09_ref、$set、$nextTick.vue'
import axios from 'axios'
axios.interceptors.request.use((config)=>{
  // 请求拦截给每次请求添加授权token
    config.headers["authori-zation"]='998d0bca18d344f6aca043e446bb4cd1'
    return config
})
import qs from 'qs';
export default {
  name: 'App',
  components:{
    myComponent
  },
  methods:{
    sendCode(){
      // 若请求头类型为application/x-www-form-urlencoded 那么请求参数必须使用 qs模块而转换
      axios.post(`https://apif.java.crmeb.net/api/front/sendCode`,qs.stringify({phone:15518835995}),{
        headers:{
          "content-type":"application/x-www-form-urlencoded"
        }
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
