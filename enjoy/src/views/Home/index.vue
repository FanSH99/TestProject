<template>
  <div class="home">
    <div v-if="swiperList">
      <swiper :banner="swiperList.banner"></swiper>
      <cate :menus="swiperList.menus"></cate>
    </div>
    <div class="main">
      <rank />
      <goods />
    </div>
  </div>
</template>
<script>
import { getSwiper } from "@/api/home.js";
import swiper from "./components/banner.vue";
import cate from "./components/cate.vue";
let rank = () => import("./components/rank.vue");
let goods = () => import("./components/goods.vue");
export default {
  name: "",
  data() {
    return {
      swiperList: null,
    };
  },
  components: {
    swiper,
    cate,
    rank,
    goods,
  },
  async created() {
    let swiper = await getSwiper();
    this.swiperList = swiper.data.data;
  },
};
</script>
<style lang="less" scoped>
.home {
  background: #f1f1f1;
  min-height: 100vh;
}
</style>