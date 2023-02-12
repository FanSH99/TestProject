<template>
  <div>
    <h1>响应式api</h1>
    <!-- 组件模板会自动将响应式对象解构，不需要用num.value来获取，用num.value获取报错。 -->
    <p>{{ num }}</p>
    <button @click="add">++</button>
    <h1>{{ str }}</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// 引入ref响应式Api 2022年10月12日14:05:25
import { ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    // 定义一个响应式数据类型。
    let num = ref(0);
    console.log(num); //num.value就是0
    let str = ref("好好学习天天向上");
    let isShow = ref(true);
    let n = ref(null);
    let list = ref(["海绵宝宝", "派大星", "章鱼哥"]);
    function add() {
      num.value++;
      isShow.value = !isShow.value;
      list.value[0] = "哈哈哈哈";
      let user = ref({
        name: "哈哈哈哈",
        age: 15,
      });
      console.log(user);
    //   user.name = "白浅"; ---报错。 ref不能监听对象。
    }
    return {
      // 挂在到模板上
      num, //num:num
      add,
      str,
      isShow,
      list,
    };
  },
  data() {
    return {};
  },
});
</script>
<style>
</style>

    <!-- 
    dep
: 
undefined
__v_isRef
: 
true
__v_isShallow
: 
false
_rawValue
: 
0
_value
: 
0
value
: 
0  -->