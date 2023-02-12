<template>
  <div>
    <h1>{{ num }}</h1>
    <!-- vue3兼容了vue2的所有方法属性， -->
    <button @click="num++">add++</button>
    <p>{{ arr }}</p>
    <button @click="changeList">changeList</button>
    <p>{{ user.name }}---{{ user.age }}</p>
    <button @click="changeUser">changeUser</button>
  </div>
</template>
<script lang='ts'>
import { reactive } from "vue";
import { watchEffect } from "vue";
import { defineComponent, ref } from "vue";
// 引入监听Api
import { watch } from "vue";
export default defineComponent({
  setup() {
    let num = ref(0);
    let arr = ref([0, 1, 2]);
    //watch监听是个函数，参数1监听的数据，参数2回调函数，
    // 回调函数里面两个参数分别为新值，旧值。 newVal就是最新的值。oldVal旧值
    watch(num, (newVal, oldVal) => {
      console.log("num发生改变了", newVal, oldVal);
    });

    // watch(
    //   () => num,
    //   (newVal,oldVal) => {
    //     console.log("arr发生改变了", newVal,oldVal);
    //   }
    // );
    function changeList() {
      arr.value.push(arr.value.length);
    }

    watch(arr, (newVal) => {
      console.log("arr发生改变了", newVal);
    });
    let user = reactive({
      name: "张三",
      age: 12,
    });

    function changeUser() {
      user.name = "白浅";
    }
    // 当监听对象时，只有一个形参是新值，没有旧值。
    watch(user, (newVal) => {
      console.log("对象发生改变了", newVal);
    });
    /* 
watch(()=>user.age,(newVal)=>{
    console.log("对象发生改变了",newVal)
})
*/

    // watchEffect初始化时便会执行一次，当以来的数据改变之后，会被调用。
    watchEffect(() => {
      console.log("我被调用了");
      console.log(num.value, user.name);
    });
    return {
      num,
      arr,
      user,
      changeList,
      changeUser,
    };
  },
  data() {
    return {};
  },
});
</script>
<style lang='less' scoped>
</style>