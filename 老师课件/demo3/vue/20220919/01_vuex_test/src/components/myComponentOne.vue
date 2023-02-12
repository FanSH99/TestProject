<template>
  <div>
        <h1>我也是个组件 {{num}}</h1>
        <ul>
            <li v-for="(item,index) in list" :key="index"> {{item}}</li>
         </ul>
  </div>
</template>
<script>
// 引入mapState辅助函数
import { mapState } from 'vuex'
export default {
  data(){
    return {
       
    }
  },
//  相当于将 this.list 映射为 this.$store.state.list
  computed:mapState([
    "list",
    "num"
  ])
}
</script>
<style>
</style>