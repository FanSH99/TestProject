<template>
  <div>
 <!-- 父传子 -->
<childVue :mymsg="msg" @sendprice="getprice"></childVue>
<childOneVue></childOneVue>
  </div>
</template>
<script>
import childVue from '@/child/child.vue';
import childOneVue from '@/child/childOne.vue';
export default {
  data(){
    return {
       msg:"哈哈哈哈"
    }
  },
  components:{
    childVue,
    childOneVue
  },
  methods:{
    getprice(value){
        console.log(value)
    }
  }
}
</script>
<style>
</style>