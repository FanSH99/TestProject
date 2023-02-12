<template>
  <div>
    <h1>关于我们</h1>
  </div>
</template>
<script lang='ts' setup>
import {useRoute} from 'vue-router';
let route = useRoute();
console.log(route.params.id) 
</script>
<style scoped lang='less'>
</style>