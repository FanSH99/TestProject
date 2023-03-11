<template>
  <div>
    <div>
      <p>基础分页</p>
      <van-pagination
        v-model="currentPage"
        :total-items="24"
        :items-per-page="5"
      />
    </div>
    <div>
      <p>简单分页</p>
      <van-pagination v-model="currentPage2" :page-count="12" mode="simple" />
    </div>
    <div>
      <p>显示省略号</p>
      <van-pagination
        v-model="currentPage3"
        :total-items="125"
        :show-page-size="3"
        force-ellipses
      />
    </div>
    <div>
      <p>自定义</p>
      <van-pagination
        v-model="currentPage4"
        :total-items="50"
        :show-page-size="5"
      >
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
        <template #page="{ text }">{{ text }}</template>
      </van-pagination>
    </div>
    <div>
      <van-tabbar
        v-model="active"
        active-color="red"
        inactive-color="#666"
        @change="onChange"
      >
        <van-tabbar-item icon="home-o" dot>首页</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">购物车</van-tabbar-item>
        <van-tabbar-item badge="3">
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { Notify } from "vant";
export default {
  name: "",
  data() {
    return {
      active: 0,
      currentPage: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  methods: {
    onChange(index) {
      Notify({ type: "primary", message: `您切换到了${index}` });
    },
  },
};
</script>
<style>
</style>