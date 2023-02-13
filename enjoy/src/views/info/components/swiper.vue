<template>
  <div class="top" id="top">
    <div class="icon">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
    </div>
    <div class="search">
      <van-search
        v-model="keyword"
        shape="round"
        placeholder="搜索商品"
        background="transparent"
      />
    </div>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in slider" :key="index">
          <img :src="item" alt="" v-if="index > 1" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["info"],
  data() {
    return {
      slider: "",
      mp4: "",
      keyword: "",
    };
  },
  created() {
    this.slider = JSON.parse(this.info);
    this.mp4 = this.slider.shift();
  },
};
</script>
<style lang="less" scoped>
.top {
  width: 100%;
  position: relative;
  .icon {
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    top: 24px;
    left: 10px;
    position: absolute;
    z-index: 99;
  }
  .search {
    position: absolute;
    width: 70%;
    height: 20px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .swiper {
    width: 100vw;
    height: 100vw;
    img {
      width: 100%;
    }
  }
}
</style>