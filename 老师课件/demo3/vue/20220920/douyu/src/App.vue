<template>
  <div id="app">
    <navbar>
      {{ title }}
    </navbar>
    <transition>
      <slider v-show="$store.state.isSlider"></slider>
    </transition>
    <div class="page">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import navbar from "./components/navbar.vue";
import slider from "./components/slider.vue";
export default {
  data() {
    return {
      title: "首页",
    };
  },
  components: {
    navbar,
    slider,
  },
  // 监听路由修改标题
  watch: {
    "$route.path": function (path) {
      console.log(path);
      switch (path) {
        case "/":
          this.title = "首页";
          break;
        case "/cate":
          this.title = "分类";
          break;
        case "/tuijian":
          this.title = "推荐";
          break;
        case "/mine":
          this.title = "我的";
          break;
        case "/info":
          let {nickname} = this.$route.query;
          this.title = nickname;
          break;
        default :
          let {catename} = this.$route.params;
          this.title = catename;
      }
    },
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.v-enter,
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: 0.3s;
}
.page{
  margin-top: 60px;
}
</style>
