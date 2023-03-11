<template>

  <!-- suspense组件还在测试中，可能不是很稳定，了解即可。 -->
  <Suspense>
    <!-- 默认，加载完成显示 -->
    <template #default>
      <div>
        <awaitChild />
      </div>
    </template>
    <!-- 加载中显示 -->
    <template #fallback>
      组件加载中
    </template>
  </Suspense>

</template>

<script lang="ts" setup>

import awaitChild from './course/09_await.vue';

</script>

<style lang="less">

</style>
