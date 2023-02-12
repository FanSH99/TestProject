<template>
    <div class="list">
        <div v-for="(item,index) in list" :key="index">
            <hero-item :hero="item"></hero-item>
        </div>
    </div>
  </template>
  <script lang="ts">
  import request from '@/utils/request'
  import heroItem from '@/components/heroItem.vue'
  import Vue from 'vue';
  export default Vue.extend({
    data(){
      return{
        list:[]
      }
    },
    components:{
        heroItem
    },
    methods:{
  
    },
    async created(){
        let res = await request("/images/lol/act/img/js/heroList/hero_list.js","GET");
        console.log(res)
        this.list = res.data.hero;
    }
  })
  </script>
  <style scoped>
  .list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
  }
  </style>