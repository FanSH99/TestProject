<template>
  <div>
    <topnav :isshow="isShow" id="top" />
    <div v-if="shopInfo" class="shopInfo" id="shopInfo" ref="shopInfo">
      <swiper :info="shopInfo.productInfo.sliderImage" />
      <contents :content="shopInfo" />
      <reply />
      <recommond />
      <info :imgList="shopInfo.productInfo.content" />
      <cart :id="id" :info="this.shopInfo" />
    </div>
  </div>
</template>
<script>
import { getInfo } from "@/api/info";
import swiper from "./components/swiper.vue";
import cart from "./components/cart.vue";
import contents from "./components/contents.vue";
import topnav from "./components/topnav.vue";
let reply = () => import("./components/reply.vue");
let recommond = () => import("./components/recommond.vue");
let info = () => import("./components/info.vue");
export default {
  name: "",
  data() {
    return {
      id: "",
      shopInfo: null,
      isShow: "",
    };
  },
  components: {
    swiper,
    cart,
    contents,
    reply,
    recommond,
    info,
    topnav,
  },
  async created() {
    this.id = this.$route.params.id;
    let info = await getInfo(this.id);
    this.shopInfo = info.data.data;
    // console.log(this.shopInfo);
    this.scrollHeight = document.documentElement.scrollHeight;
    // console.log(this.scrollHeight);
    window.onscroll = this.pagescroll;
  },
  methods: {
    pagescroll() {
      // console.log("我滚动了");
      // console.log(document.documentElement.scrollHeight);
      // console.log(document.documentElement.scrollTop);
      let scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop, this.scrollHeight);
      if (scrollTop >= this.scrollHeight) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.shopInfo {
  background: #f1f1f1;
  min-height: 100vh;
  width: 100%;
}
</style>