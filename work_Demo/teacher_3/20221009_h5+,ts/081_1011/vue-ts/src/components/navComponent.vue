<template>
  <div class="nav">
    <div
      v-for="(item, index) in navList"
      :key="index"
      :class="{ active: activeIndex == index }"
      @click="goNav(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",
  data() {
    return {
      activeIndex: 0,
      navList: [
        {
          title: "home",
          path: "/",
        },
        {
          title: "分类",
          path: "/cate",
        },
        {
          title: "购物车",
          path: "/cart",
        },
        {
          title: "我的",
          path: "/mine",
        },
      ],
    };
  },
  methods: {
    goNav(index: number): void {
      this.activeIndex = index;
      this.$router.push({
        path: this.navList[index].path,
      });
    },
  },
});
</script>


<style scoped lang="less">
.nav {
  display: flex;
  width: 1200px;
  justify-content: space-between;
  div {
    width: 25%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    position: relative;
  }
  div.active {
    color: red;
  }
  div.active::before {
    content: "";
    width: 20px;
    height: 3px;
    background: red;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
}
</style>
