<template>
  <div>
    <transition></transition>
    <transition-group></transition-group>
    <component :is="childOneVue"></component>
    <keep-alive>
      <p>缓存组件</p>
    </keep-alive>
    <slot></slot>
  </div>
</template>
<script>
import childOneVue from "@/child/child.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    childOneVue,
  },
};
</script>
<style>
</style>