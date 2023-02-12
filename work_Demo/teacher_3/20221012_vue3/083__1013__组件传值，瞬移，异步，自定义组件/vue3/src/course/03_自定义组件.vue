<template>
  <div>
    <h1>自定义组件</h1>
    <my-child></my-child>
    <one-child></one-child>
    <two-child></two-child>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
// 引入自定义组件
import myChild from '@/components/child.vue';
export default defineComponent({
  setup() {

  },
  // 注册组件
  components: {
    myChild,
  },
  data() {
    return {

    }
  },
})
</script>
<style>

</style>