<template>
  <div></div>
  <Suspense>
     <template #default>
      <div>
        <my-suspense></my-suspense>
      </div>
     </template>
     <template #fallback>
      <div>
         组件加载中....
      </div>
     </template>
  </Suspense>
</template>
<script lang='ts' setup>
import mySuspense from '@/course/09_setup属性顶层是async函数.vue'
</script>
<style scoped lang='less'>
</style>