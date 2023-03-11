<template>
  <div>
    <h1>我是一个组件---<button @click="send">请求数据</button></h1>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      this.$axios({
        url: "/xiaochengxu/banner/list",
        method: "get",
        params: {
          id: 111
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    console.log(this);
    
  }
}
</script>

<style>

</style>