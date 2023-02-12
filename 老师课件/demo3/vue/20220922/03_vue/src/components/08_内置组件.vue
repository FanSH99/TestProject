<template>
  <div>
    <transition></transition>
    <transition-group></transition-group>
    <component :is="childOneVue"></component>
    <keep-alive>
        <!-- 缓存组件 -->
    </keep-alive>
    <!-- 插槽组件 -->
    <slot></slot>
  </div>
</template>
<script>
import childOneVue from '@/child/childOne.vue';
export default {
  data(){
    return {
       
    }
  },
  components:{
    childOneVue
  }
}
</script>
<style>
</style>