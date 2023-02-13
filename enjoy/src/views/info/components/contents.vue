<template>
  <div class="content" id="content">
    <div class="title">
      <p class="price">￥{{ content.productInfo.price }}</p>
      <p class="name van-multi-ellipsis--l2">
        {{ content.productInfo.storeName }}
      </p>
      <p class="info">
        <span>￥{{ content.productInfo.price }}</span>
        <span>库存：￥{{ content.productInfo.stock }}</span>
        <span>销量：￥{{ content.productInfo.sales }}</span>
      </p>
    </div>
    <div class="sel">
      <p v-for="(item, key, index) in content.productValue" :key="index">
        <span v-if="index == 0">已选择：{{ key }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["content"],
  data() {
    return {};
  },
  created() {
    // console.log(this.content);
  },
};
</script>
<style lang="less" scoped>
.content {
  padding: 10px;
  .sel,
  .title {
    background: #fff;
    padding: 10px;
  }
  .title {
    .price {
      color: #ff0000;
      font-size: 16px;
      font-weight: 700;
    }
    .name {
      font-size: 17px;
      font-weight: 700;
      margin: 10px 0;
    }
    .info {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #b4b4b4;
    }
  }
  .sel {
    margin-top: 10px;
  }
}
</style>