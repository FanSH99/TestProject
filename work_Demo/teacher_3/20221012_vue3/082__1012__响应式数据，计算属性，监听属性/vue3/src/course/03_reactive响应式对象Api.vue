<template>
  <div>
    <h1>响应式对象Api</h1>
    <p>{{ user.name }}----{{ user.age }}----{{ user.sex }}</p>
    <button @click="change">改变名称</button>
  </div>
</template>
<script lang='ts'>
import { readonly } from "vue";
import { defineComponent } from "vue";
// 2022年10月12日14:39:36
// 引入响应式对象Api
import { reactive } from "vue";
export default defineComponent({
  setup() {
    // 定义响应式对象
    let user = reactive({
      name: "派大星",
      age: 18,
      sex: "男",
    });
    console.log(user);

    // 不要网了加function
    function change(): void {
      // 更新数据。
      user.name = "海绵宝宝";
      user.age = 19;
    }

    let people = reactive({
      name: "等等",
      age: 16,
    });
    // readonly只读，将响应式对象变成普通对象。
    let newProple = readonly(people);
    console.log(newProple);
    console.log(newProple.name);
    // newProple.name = "饭饭"; ---报错。
    return {
      user,
      // 必须吧方法也挂载上否则出错change方法不起作用。
      change,
    };
  },
  data() {
    return {};
  },
});
</script>
<style lang='less' scoped>
</style>