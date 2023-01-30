<template>
  <nav>
    <router-link v-for="(item,index) in navList" :key="index" :to="item.link" :class="{active:active==index}"
      @click="active=index">
      {{item.title}}
    </router-link>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, watch, ref, reactive } from 'vue';


export default defineComponent({
  name: 'HomeView',
  setup() {
    let active = ref(0);
    let navList = ref([
      {
        title: 'Parent to Child',
        link: '/',
      },
      {
        title: 'Child to Parent',
        link: '/about',
      },
      {
        title: 'Brother',
        link: '/brother',
      },
    ])

    return {
      active,
      navList
    }
  }
});
</script>

<style>
input {
  width: 100%;
  height: 20px;
}

textarea {
  width: 100%;
}

a {
  margin: 0 5px;
}

.active {
  color: red
}
</style>
