<template>
  <div>
     <div ref="ha">哈哈哈哈</div>
     <!-- 当ref绑定到组件上时获取到的是当前的组件实例 -->
     <child-vue ref="child"></child-vue>
     <button @click="getDom">获取dom</button>
     {{user.name}} ------ {{user.sex}}
  </div>
</template>
<script>
import childVue from '@/child/child.vue'
export default {
  data(){
    return {
       user:{
        name:"张三"
       }
    }
  },
  components:{
    childVue
  },
  methods:{
    getDom(){
    console.log(    this.$refs.ha)
    console.log(this.$refs.child)
    // this.user.sex = '男'
    this.$set(this.user,"sex","男")
    // $nextTick 当所有异步更新结束之后执行回调 this.$nextTick(()=>{})
  }
  }
}
</script>
<style>
</style>