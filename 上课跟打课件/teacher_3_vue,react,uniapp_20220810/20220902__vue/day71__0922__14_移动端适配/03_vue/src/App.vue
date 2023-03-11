<template>
  <div id="app">
    <my-component7></my-component7>
    <button @click="sendMsg">发送验证码</button>
  </div>
</template>

<script>
import myComponent from "@/components/01_vue数据绑定与指令.vue";
import myComponentOne from "@/components/02_事件修饰符.vue";
import myComponentThree from "@/components/03_绑定样式与类名.vue";
import myComponentFour from "@/components/04_watch_compited.vue";
import myComponent5 from "@/components/05_过滤器.vue";
import myComponent7 from "@/components/07_组件通信.vue";
import myComponent9 from "@/components/09_ref,$set,$neextTick.vue";

export default {
  name: "App",
  components: {
    myComponent,
    myComponentOne,
    myComponentThree,
    myComponentFour,
    myComponent5,
    myComponent7,
    myComponent9,
  },
  // npm i axios
  // import axios from 'axios'
  // npm i qs ---转换请求头。
  // import qs from 'qs'
  // 请求拦截 ---添加授权token
/*   // axios.interceptore.request.use((config)=>{
config.headers[authori-zation]='3233234' --必须添加收钱字段，否则不能添加购物车。
  }) 
  token登录是主流的登录方式。
  */
  methods: {
    sendMsg() {
      axios
        .post("", qs.stringify({ phone: "123435" }), {
          header: {
            "content-type": "application/x-",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
