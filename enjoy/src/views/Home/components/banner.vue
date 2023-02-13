<template>
  <div class="top">
    <div class="search">
      <van-search
        v-model="keyword"
        shape="round"
        placeholder="搜索商品"
        background="transparent"
        @click="goSearch()"
      />
    </div>
    <div class="navswiper">
      <van-swipe class="banner" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in banner" :key="index">
          <img :src="image.pic" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["banner"],
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      this.$router.push({
        path:"/search"
      })
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  width: 100%;
  padding: 10px;
  background: -webkit-linear-gradient(270deg, #e93323, #f5f5f5);
  .van-search {
    padding: 0;
    margin-bottom: 10px;
  }
  .navswiper {
    width: 100%;
    // padding: 0 10px;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }
}
</style>