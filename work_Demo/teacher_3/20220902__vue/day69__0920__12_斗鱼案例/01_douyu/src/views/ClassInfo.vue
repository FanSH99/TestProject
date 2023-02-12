<template>
  <div class="classInfo" v-if="classInfo">
    <room-item v-for="(item,index) in classInfo" :key="index" :roomItem="item"></room-item>
  </div>
</template>

<script>

export default {
  data() {
    return {
      classInfo:null,
    }
  },
  created() {
    this.$store.state.title = this.$route.params.name;
    this.classInfo = null;
    // console.log(this.$route.params.id);
    let id = this.$route.params.id;
    this.$axios.get(`/live/${id}`).then(res => {
      // console.log(res);
      this.classInfo = res.data.data;
    })
    }
}
</script>

<style>
  .classInfo{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin:auto;
  }
  .classInfo>div{
    margin:10px
  }

</style>