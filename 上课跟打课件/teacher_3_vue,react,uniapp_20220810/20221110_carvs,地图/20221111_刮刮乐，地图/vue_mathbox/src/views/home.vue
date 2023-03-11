<template>
  <div>
    <myheader />
    <mymain />
    <myfooter />
  </div>
</template>
<script>
import myheader from "@/components/header/index.vue";
import mymain from '@/components/main/index.vue';
import myfooter from '@/components/footer/index.vue';
export default {
  name: '',
  data() {
    return {

    }
  },
  components: {
    myheader,
    mymain,
    myfooter,
  }
}
</script>
<style lang='less' scoped>

</style>