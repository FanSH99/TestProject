<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>1111</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";


// defineComponent相当于vue2中的Vue.extend,在定义vue组件中提供类型推导的辅助函数，不需要在声明类型。
export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
</style>

<!-- 
vue2中：
  export default Vue.extend({

  })
 -->