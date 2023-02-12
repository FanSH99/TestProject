<template>
  <div class="homeInfo" v-if="homeInfo">
    <div class="imgbox">
        <img :src="homeInfo.room_thumb" alt="">
    </div>
   <div>
    <p><i class="fa fa-tv fa-lg"></i>{{homeInfo.room_name}}</p>
   </div>
  </div>
</template>

<script>


export default {
    data() {
        return {
            homeInfo: null,
        }
    },
    created() {
        this.homeInfo = null;
        this.$store.state.title = this.$route.query.name;
        // console.log(this.$route.query.id);
        let id = this.$route.query.id;
        this.$axios.get(`/room/${id}`).then(res => {
            // console.log(res);
            this.homeInfo = res.data.data;
            // console.log(this.homeInfo);
        })
    }
}
</script>

<style lang="less" scoped>

.homeInfo{
    width:500px;
    min-height: 400px;
    margin:auto;
    .imgbox img{
        width:100%;
    }
    i{
        margin-right:5px
    }
}
</style>