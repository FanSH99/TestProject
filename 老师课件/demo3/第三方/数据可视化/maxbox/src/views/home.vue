<template>
  <div>
    <dv-full-screen-container>
        <myheader></myheader>
        <mymine></mymine>
        <myfooter></myfooter>
    </dv-full-screen-container>
  </div>
</template>

<script>
import myheader from '@/components/header/index.vue'
import mymine from '@/components/main/index.vue'
import myfooter from "@/components/footer/index.vue"
export default {
  data () {
    return {

    }
  },
  components: {
    myheader,
    mymine,
    myfooter
  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang='less'>

</style>