<template>
  <div>
    <h1>我是组件</h1>
  </div>
</template>
<script>

export default {
  name: '',
  data() {
    return {

    }
  },
  created() {
    this.$axios.get("/xiaochengxu/banner/list").then(res => {
      console.log(res)
    })
  }
}
</script>
<style>

</style>