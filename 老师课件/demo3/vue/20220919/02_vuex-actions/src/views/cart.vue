<template>
  <div>
    <h1>购物车页面</h1>
    <ul>
        <li v-for='(item,index) in cart.list' :key='index'>
            {{item.name}}
        </li>
    </ul>
    <button @click='add'>加入购物车</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
       
    }
  },
  created(){
    console.log(this.$store.state.cart.list)
  },
  computed:mapState([
    "cart"
  ]),
  methods:{
    add(){
        this.$store.commit("addGoods",{
            name:"商品四",
            price:40
        })
    }
  }
}
</script>
<style>
</style>