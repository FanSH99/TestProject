<template>
  <div class="mainItem" @click="goInfo(item.id)">
    <img v-lazy="item.image" alt="" />
    <div class="info">
      <div class="van-ellipsis">{{ item.storeName }}</div>
      <div class="del">￥{{ item.otPrice }}</div>
      <div class="price">￥{{ item.price }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    goInfo(id) {
      this.$router.push({
        path: "/info/" + id,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.mainItem {
  width: 100%;
  background: #fff;
  div {
    width: 100%;
  }
  img {
    width: 100%;
  }
  .info {
    padding: 10px;
    font-size: 14px;
    .del {
      color: #d8d8d8;
      font-size: 14px;
      text-decoration: line-through;
    }
    .price {
      color: #ff0000;
      font-size: 18px;
    }
  }
}
</style>