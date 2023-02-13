<template>
  <div class="top">
    <span>
      <slot name="left"></slot>
    </span>
    <span>
      <slot name="center"></slot>
    </span>
    <span>
      <slot name="right"></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="less"scoped>
@h: 40px;
.top {
  width: 100%;
  height: @h;
  line-height: @h;
  background: #3190e8;
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0 10px;
  font-size: 15px;
  .left {
    width: 20%;
    text-align: left;
  }
  .center {
    width: 55%;
    text-align: center;
  }
  .right {
    width: 25%;
    text-align: right;
  }
}
</style>