<!-- 2022年10月12日10:26:49 -->

<template>
  <div>{{ sum }}</div>
  <ul>
    <li v-for="(item, index) in arry" :key="index">{{ item }}</li>
  </ul>
  <button @click="add">++</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  //   setup是vue3的入口函数，在里面可以写任意方法。通常会将业务逻辑编写到setup中
  // 可以将setup入口看做是vue2中的beforeCreate和created
    setup() {
    // 普通变量，只是一个普通数据，不是响应式数据，所以不能直接改变视图，视图不更新。--同理，arry也不是响应式的。
    let sum: number = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    console.log(sum);
    // setup入口函数可以有一个返回值，返回值是一个对象，返回值可以暴露给组件模板和组件实例。可以直接调用。
    let arry: Array<number> = [1, 225, 35, 22, 99];

    let add = () => {
      console.log("点我了");
      sum++;
      console.log(sum);
    };
    return {
      sum,
      arry: arry,
      add,
    };
  },
  data() {
    return {};
  },
});
</script>
<style>
</style>