<template>
  <div>
    <h1>{{ num }}---{{ price }}</h1>
    <h1>总价：{{getSum}}</h1>
    <h2>{{ user.name }}--{{ user.age }}</h2>
    <button @click="add">num++</button>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      num: 0,
      price: 100,
      sum: "",
      user: {
        name: "白浅",
        age: "19",
      },
    };
  },
  methods: {
    add() {
      this.num++;
      this.user.age++;
    },
  },
  watch: {
    num(newVal, oldVal) {
      console.log("监听到了", newVal, oldVal);
    },
    user: {
      handler(newVal, oldVal) {
        console.log("监听到了age变化", newVal, oldVal);
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    getSum() {
      return this.num * this.price;
    },
  },
};
</script>
<style>
</style>