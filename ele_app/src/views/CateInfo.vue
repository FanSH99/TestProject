<template>
  <div class="page">
    <top>
      <template #left>
        <span @click="$router.go(-1)">
          <van-icon name="arrow-left" size="20px" />
        </span>
      </template>
      <template #center>
        <span>{{ title }}</span>
      </template>
    </top>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item :title="title">
          <div>111</div>
        </van-dropdown-item>
        <van-dropdown-item title="排序">
          <div>222</div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选">
          <div>333</div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>
<script>
import { getCateAll } from "@/api/cate";
export default {
  name: "",
  data() {
    return {
      title: "",
      value1: 0,
      value2: "a",
      id: "",
      data: {
        latitude: "",
        longitude: "",
        offset: 0,
        limit: 20,
        restaurant_category_id: 1,
        order_by: 4,
        delivery_mode: [],
        support_ids: [],
        restaurant_category_ids: [],
      },
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.title = this.$route.query.title;
    this.data.latitude = this.$route.query.latitude;
    this.data.longitude = this.$route.query.longitude;
    this.getCateList();
  },
  methods: {
    async getCateList() {
      console.log(this.params);
      let cateList = await getCateAll(this.data);
      console.log(cateList);
    },
  },
};
</script>
<style>
</style>