<template>
  <div class="main">
    <div class="left">
        <left-vue></left-vue>
    </div>
    <div class="center">
        <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
    </div>
    <div class="right">
        <right-vue></right-vue>
    </div>
  </div>
</template>

<script>
import leftVue from './left.vue';
import rightVue from './right.vue'
import mapconfig from '@/utils/map'
export default {
  data () {
    return {
        config:mapconfig
    }
  },
  components: {
    leftVue,
    rightVue
  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
.main{
    display: flex;
    .left,.right{
        flex: 3;
    }
    .center{
        flex: 5;
    }
}
</style>