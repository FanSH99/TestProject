<template>
  <div>
    <h1>我是child2另一个子组件--{{ msg }}</h1>
    <button @click="sendMsg">向另一个子组件child发送数据</button>
  </div>
</template>
<script>
import bus from "@/bus.js";

export default {
  name: "",
  data() {
    return {
      msg: "花开花谢自有时",
    };
  },
  methods: {
    sendMsg() {
      bus.$emit("getmsg", this.msg);
    },
  },
  // created() {
  //   bus.$emit("getmsg", this.msg);
  // }
};
</script>
<style>
</style>