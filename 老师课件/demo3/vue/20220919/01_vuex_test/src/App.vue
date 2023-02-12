<template>
  <div id="app">
    <my-component />
    <my-component-one />
    <button @click="add">++</button>
    <button @click="$store.commit('setList','哈哈哈')">添加用户</button>
  </div>
</template>

<script>
import myComponent from '@/components/myComponent';
import myComponentOne from '@/components/myComponentOne'
export default {
  name: 'App',
  components:{
    myComponent,
    myComponentOne
  },
  methods:{
    add(){
      // vuex 不推荐直接更改状态值 引入在vuex严格模式下直接更改状态那么会报错
      // this.$store.state.num++
      console.log(this)
      // 使用this.$store.commit 提交muations 参数一将要提交的方法 参数二要传递的参数
      this.$store.commit("setNum",5)
    }
  }
}
</script>

<style>

</style>
