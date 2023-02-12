<template>
  <div>
    <!-- 3种通信方式 
    父传子--:msg="msg" props:["msg"] props:{msg:String}
    -->
    <child-vue :mymsg="msg" @sendprice="getPrice"></child-vue>
    <p>{{ price }}</p>
    <child-two-vue></child-two-vue>
  </div>
</template>
<script>
import childVue from "@/child/child.vue";
import childTwoVue from "@/child/childTwo.vue";
export default {
  name: "",
  data() {
    return {
      msg: "哈哈哈哈",
      price: "",
    };
  },
  components: {
    childVue,
    childTwoVue,
  },
  methods: {
    getPrice(value) {
      console.log(value);
      this.price = value;
    },
  },
};
</script>
<style>
</style>