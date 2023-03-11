<template>
    <div>
        <h1>详情</h1>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute();
console.log(route.params);

</script>
<style lang='less' scoped>

</style>