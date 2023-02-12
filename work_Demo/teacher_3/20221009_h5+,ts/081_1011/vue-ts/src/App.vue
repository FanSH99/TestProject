<template>
  <div id="app">
    <nav-component />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import navComponent from "@/components/navComponent.vue";

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    navComponent,
  },
  methods() {},
});
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 1200px;
  margin: auto;
  overflow: hidden;
}
</style>
