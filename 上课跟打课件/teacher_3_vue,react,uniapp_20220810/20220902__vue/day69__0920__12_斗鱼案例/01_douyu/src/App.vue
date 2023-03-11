<template>
  <div id="app">
   <nav-bar>
{{$store.state.title}}
   </nav-bar>
   <transition>
<nav-slider v-show="$store.state.isSlider"></nav-slider>
   </transition>
   <div class="main">
<router-view />
   </div>
    
  </div>
</template>
<script>
  // 2022年9月20日09:20:12
import navBar from './components/NavBar.vue';
  import navSlider from './components/NavSlider.vue';
export default {
  data() {
    return {
     
    }
  },
  components: {
    navBar,
    navSlider,
  },

  // 监听路由修改标题
  watch: {
    "$route.path": function (path) {
      // console.log(path);
      switch (path) {
        case "/":
          this.$store.state.title = "首页";
          break;
        case "/class":
          this.$store.state.title = "分类";
          break;
        case "/recommond":
          this.$store.state.title = "推荐";
          break;
        case "/mine":
          this.$store.state.title = "我的";
          break;
        case '/homeinfo':
          // console.log(this.$route.query.name);
          this.$store.state.title = this.$route.query.name;
          break;
        case '/classinfo/:id/:name':
          this.$store.state.title = this.$route.params.name;
      }

    }
  }
};
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

.v-enter,.v-leave-to{
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active{
  transition: 0.3s;
}
.main{
  margin:10px auto;
}
</style>
