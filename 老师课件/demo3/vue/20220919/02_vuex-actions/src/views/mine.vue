<template>
  <div>
    <h1>我的页面 {{$store.state.num}}</h1>
    <button @click="add">调用actions</button>
    <button @click='changeNav'>nav</button>
    <!-- 使用this.$store.getters.属性名获取vuex计算属性值 -->
    <!-- <h3>总价：{{$store.getters.getSum}}</h3> -->
    <h3>总价 {{getSum}}</h3>
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  data(){
    return {
       
    }
  },
  methods:{
    add(){
        // console.log(this.)
        // 使用this.$store.dispath调用 actions
        this.$store.dispatch("addNum",20)
    },
    // this.changeNav  相当于执行的是 this.$store.dispatch("changeNav")
    ...mapActions([
        "changeNav"
    ])
  },
  computed:{
    // 使用辅助函数将 getters 映射成计算属性
    ...mapGetters([
        "getSum"
    ])
  }
}
</script>
<style>
</style>