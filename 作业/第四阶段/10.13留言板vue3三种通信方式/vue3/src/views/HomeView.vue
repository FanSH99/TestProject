<template>
  <div class="home">
    <parent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ is an alias to /src
import parent from '@/components/home/parent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    parent,

  },
});
</script>
