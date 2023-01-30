<template>
  <div>
    <parent />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import parent from '@/components/about/parent.vue'
export default defineComponent({
  setup() {

  },
  components: {
    parent,
  },
  data() {
    return {

    }
  },
})
</script>
<style>

</style>