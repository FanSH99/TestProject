<template>
  <div>
    <h1>我是child子组件---{{ mymsg }}</h1>
    <p>{{ price }}--{{ msg }}</p>
    <button @click="sendPrice">向父组件传递数据</button>
  </div>
</template>
<script>
import bus from "@/bus.js";
export default {
  name: "",
  props: ["mymsg"],
  data() {
    return {
      price: 1000,
      msg: "",
    };
  },
  methods: {
    sendPrice() {
      this.$emit("sendprice", this.price);
    },
  },
  created() {
    bus.$on("getmsg", (value) => {
      console.log(value);
      this.msg = value;
      console.log(this);
    });
  },
};
</script>
<style>
</style>