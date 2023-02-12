<template>
  <div>
    <nav-component></nav-component>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import navComponent from '@/components/navComponent.vue'
export default Vue.extend({
  data(){
    return{
      
    }
  },
  components:{
    navComponent
  },
  methods:{

  }
})
</script>
<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>