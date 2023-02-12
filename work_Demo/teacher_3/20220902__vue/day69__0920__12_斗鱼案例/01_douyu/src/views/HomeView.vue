<template>
  <div class="home">
    <room-item
      v-for="(item, index) in list"
      :key="index"
      :roomItem="item"
    ></room-item>
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script>
import roomItem from "@/components/RoomItem.vue";

// 2022年9月20日09:15:41
export default {
  name: "HomeView",
  data() {
    return {
      isLoading: false,
      list: [],
      offset: 1,
    };
  },
  components: {
    roomItem,
  },
  methods: {
    getDataList() {
      this.isLoading = true;
      this.$axios.get(`/live?offset=${this.offset}&limit=20`).then((res) => {
        // console.log(res);
        this.list = [...this.list, ...res.data.data];
        // console.log(this.list);
        this.isLoading = false;
      });
    },
    pageScroll() {
      // console.log("我滚动了");
      let clientHeight = document.documentElement.clientHeight;
      let contentHeight = document.documentElement.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      scrollTop = Math.ceil(scrollTop);
      // console.log(clientHeight, contentHeight, scrollTop);
      if (clientHeight + scrollTop >= contentHeight) {
        // console.log("我滚动到最后了");
        if (this.isLoading) {
          return;
        }
        this.offset += 20;
        this.getDataList();
        // document.documentElement.scrollTop = 0;
      }
    },
  },
  created() {
    this.getDataList();
    window.onscroll = this.pageScroll;
  },
};
</script>

<style>
.home {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>