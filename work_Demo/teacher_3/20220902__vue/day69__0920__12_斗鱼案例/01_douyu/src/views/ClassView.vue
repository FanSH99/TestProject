<template>
  <div class="classlist" v-if="classlist">
    <div
      v-for="(item, index) in classlist"
      :key="index"
      class="classItem"
      @click="goClassInfo(item.cate_id, item.game_name)"
    >
      <img :src="item.game_icon" alt="" />
      <p>{{ item.game_name }}</p>
    </div>
  </div>
</template>
<script>
// 2022年9月20日09:17:32
export default {
  name: "",
  data() {
    return {
      classlistAll: null,
      offset: 1,
      limit: 31,
      classlist: [],
      isLoading: false,
    };
  },
  methods: {
    getDataList() {
      this.classlistAll = null;
      this.isLoading = true;
      this.$axios.get("/game").then((res) => {
        // console.log(res);
        this.classlistAll = res.data.data;
        // console.log(this.classlistAll);
        let classlist = this.classlistAll.slice(this.offset, this.limit);
        console.log(classlist);
        this.classlist = [...this.classlist, ...classlist];
        console.log(this.classlist);
        this.isLoading = false;
        console.log(this.classlistAll);
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
        this.offset += this.limit;
        this.limit += this.limit;
        this.getDataList();
        // document.documentElement.scrollTop = 0;
      }
    },
    goClassInfo(id, name) {
      this.$router.push({
        path: "/classinfo/" + id + "/" + name,
      });
    },
  },
  created() {
    this.getDataList();
    window.onscroll = this.pageScroll;
  },
};
</script>
<style lang="less" scoped>
.classlist {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  .classItem {
    width: 160px;
    height: 180px;
    text-align: center;
    background: #f1f1f1;
    margin: 10px;
    img {
      width: 120px;
      border-radius: 100%;
      margin: 10px 0;
    }
  }
}
</style>