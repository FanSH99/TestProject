<template>
  <div class="item" @click="goInfo(hero.heroId)">
    <img :src="`https://game.gtimg.cn/images/lol/act/img/champion/${hero.alias}.png`" alt="" />
    <p>{{ hero.title }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import request from "@/utils/request";
export default Vue.extend({
  props: ["hero"],
  data() {
    return {};
  },
  methods: {
    goInfo(id: number) {
      console.log(id);
      this.$router.push({
        path: "/info/" + id
      })
    }
  },
});
</script>
<style lang="less" scoped>
.item {
  width: 120px;
  text-align: center;

  p {
    margin-bottom: 14px;
    text-align: center;
  }
}
</style>