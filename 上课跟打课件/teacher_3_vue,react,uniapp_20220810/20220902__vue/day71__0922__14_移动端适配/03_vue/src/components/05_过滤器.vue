<template>
  <div>{{ num }}---{{ num | filterNum(this.follow) }}</div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      num: 123456765,
      follow: "万",
    };
  },
  filters: {
    filterNum(text, follow) {
      return (text / 10000).toFixed(2) + follow;
    },
  },
};
</script>
<style>
</style>