<template>
  <div>
     <div class="roomInfo" v-if="info">
            <img :src="info.room_thumb" alt="">
            <h5>{{info.room_name}}</h5>
     </div>
     <loading v-else />
  </div>
</template>
<script>
export default {
  data(){
    return {
       info:null
    }
  },
  activated(){
    this.info = null;
    // 获取房间id
    let room_id = this.$route.query.room_id;
    this.$axios.get(`/api/RoomApi/room/${room_id}`).then(res=>{
        console.log(res)
        this.info = res.data.data;
    })
  }
}
</script>
<style lang="less" scoped>
.roomInfo{
    width: 500px;
    margin: 0 auto;
    min-width: 300px;
    img{
        width: 100%;
    }
}
</style>