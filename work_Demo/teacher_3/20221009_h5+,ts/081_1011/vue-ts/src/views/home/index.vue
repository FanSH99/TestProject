<template>
  <div class="list">
    <div v-for="(item, index) in list" :key="index">
      <home-item :hero="item" class="heroitem"></home-item>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import homeItem from "@/components/homeItem.vue";
import request from "@/utils/request";
export default Vue.extend({
  data() {
    return {
      list: [],
    };
  },
  components: {
    homeItem,
  },
  async created() {
    let res = await request("https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js", "GET");
    console.log(res)
    this.list = res.data.hero;
  },
});
</script>

<style lang="less" scoped>
.list {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  flex-wrap: wrap;

  .heroitem {
    margin: 0 5px;
  }
}
</style>