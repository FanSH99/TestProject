<template>
  <div>
    <input type="text" v-model="price" placeholder="请输入商品数量。" />*
    <input type="text" v-model="num" placeholder="请输入商品价格" /> =
    商品总价:{{ getSum }}
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { ref } from "vue";
// 引入计算属性Api，所有Api都是一个函数。
import { computed } from "vue";
export default defineComponent({
  setup() {
    /* 
    计算属性特性
    1.比如要有一个return值，
    2.当以来的值发生改变时会自动调用。
    3.使用方法和响应式数据的使用方法一样
    */
    let price = ref(0);
    let num = ref(0);

    // let getSum = computed(price,num); ---报错
    // 计算属性的参数(括号内）是一个回调函数。---算术运算必须是any,number,或者枚举类型。
        let getSum = computed(() => {
        // ref定义的动态数据必须用.value来使用，return里面不需要用.value
      return price.value * num.value;
    });
    return {
      price,
      num,
      getSum,
    };
  },
  data() {
    return {};
  },
});
</script>
<style lang='less' scoped>
</style>