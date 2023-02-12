<template>
  <div class='nav'>
    <div>
      <i class="fa fa-bars fa-lg" @click="changeSlider"></i> &nbsp; <slot></slot>
    </div>
    <div>
      <i class="fa fa-user-o fa-lg"></i>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations([
      "changeSlider"
    ])
  }
}
</script>
  <!-- scoped表示当前css样式只作用于当前组件 -->
<style lang="less" scoped>
@navHeight: 50px;

.nav {
  width: 100%;
  height: @navHeight;
  background: #333;
  line-height: @navHeight;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 13px;
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>