<template>
  <div class="cate">
    <div v-for="(item,index) in list" :key="index" class="cate_item" @click="goInfo(item.cate_id,item.game_name)">
      <img :src="item.game_icon" alt="">
      <p>{{item.game_name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      allList: []
    }
  },
  created() {
    // 获取分类列表
    this.$axios.get(`/api/RoomApi/game`).then(res => {
      console.log(res)
      this.allList = res.data.data;
      this.list = this.allList.splice(0, 120)
    })
  },
  methods: {
    goInfo(id, game_name) {
      this.$router.push({
        path: "/cateInfo/" + id + '/' + game_name
      })
    }
  }
}
</script>
<style scoped>
.cate {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cate_item {
  padding: 20px 10px;
  width: 208px;
  background: #f1f1f1;
  border-radius: 5px;
  text-align: center;
  font-size: 13px;
  margin-bottom: 10px;
}

img {
  width: 100%;
  border-radius: 50%;
}
</style>