<template>
  <div class="">
    <p class="title">商品详情</p>
    <div v-html="imgList" class="info"></div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["imgList"],
  data() {
    return {
      list: [],
    };
  },
};
</script>
<style lang="less" scoped>
.title {
  color: #b4b4b4;
  text-align: center;
  margin: 20px 0;
  font-size: 14px;
}
.info {
  width: 100%;
  overflow: hidden;
  text-align: center;
  img {
    width: auto;
    height: auto;
  }
}
</style>