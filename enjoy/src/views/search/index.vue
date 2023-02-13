<template>
  <div class="search">
    <div class="searchInput">
      <van-search
        v-model="keyword"
        placeholder="搜索商品"
        background="transparent"
        @search="search"
        @clear="clear"
      />
    </div>
    <div class="searcKey">
      <p class="title">热门搜索</p>
      <div>
        <van-button
          round
          color="#454545"
          plain
          size="small"
          hairline
          v-for="(item, index) in hotKeywords"
          :key="index"
          >{{ item.title }}</van-button
        >
      </div>
    </div>
    <div class="searchList">
      <div>
        <p class="title" v-if="isShow">热门推荐</p>
        <div class="list">
          <div class="goodsmain" v-if="recommondList">
            <goods-item
              :item="item"
              v-for="(item, index) in recommondList.list"
              :key="index"
              class="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getHotKeywords, getHotSearch, getSearch } from "@/api/search";

export default {
  name: "",
  data() {
    return {
      keyword: "",
      hotKeywords: "",
      recommondList: "",
      isShow: true,
    };
  },
  async created() {
    let hotKey = await getHotKeywords();
    this.hotKeywords = hotKey.data.data;
    let hotRecommond = await getHotSearch();
    this.recommondList = hotRecommond.data.data;
    // console.log(this.hotKeywords);
    console.log(this.recommondList);
  },
  methods: {
    async search() {
      this.recommondList = null;
      this.isShow = false;
      if (this.keyword == "") {
        return;
      }
      let search = await getSearch(this.keyword);
      this.recommondList = search.data.data;
    },
    clear() {
      
    }
  },
};
</script>
<style lang="less" scoped>
.searcKey {
  padding: 0 10px;
  .title {
    color: #999;
    font-size: 14px;
    margin: 2px 0 10px;
  }
  .van-button {
    padding: 0 12px;
    margin-right: 8px;
  }
}

.searchList {
  padding: 0 10px;
  .title {
    color: #444;
    font-size: 15px;
    text-align: center;
    margin: 20px 0;
  }
  .list {
    padding: 0 8px;
    .goodsmain {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 48%;
      }
    }
  }
}
.tig {
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #969799;
}
</style>