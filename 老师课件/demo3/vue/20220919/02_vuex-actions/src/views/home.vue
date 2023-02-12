<template>
  <div>
    <h1>首页</h1>
    <h2>{{num}}</h2>
    <button @click='changeNum(5)'>++</button>
    <button @click='showNav'>显示nav</button>
    <h1>购物车总数：{{$store.state.cart.list.length}}</h1>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
  data(){
    return {
       
    }
  },
  computed:mapState([
    "num"
  ]),
  methods:{
    // 使用辅助函数 mapMutations 将Mutations 方法映射  this.changeNum  等于 this.$store.commit("changeNum")
    ...mapMutations([
        "changeNum",
        "showNav"
    ])
  }
}
</script>
<style>
</style>