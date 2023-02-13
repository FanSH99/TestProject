<template>
  <div class="nav">
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    ChangeActive() {
      switch (this.$route.path) {
        case "/home":
          this.active = 0;
          break;
        case "/cart":
          this.active = 1;
          break;
        case "/mine":
          this.active = 2;
          break;
      }
    },
  },
  created() {
    console.log(this.$route.path);
    this.ChangeActive();
  },
  watch: {
    "$route.path": {
      handler() {
        this.ChangeActive();
      },
      immediate: true,
    },
  },
};
</script>
<style lang="less" scoped>
</style>