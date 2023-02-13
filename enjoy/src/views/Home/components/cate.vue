<template>
  <div class="cate">
    <div class="menus">
      <div class="menusItem" v-for="(item, index) in menus" :key="index">
        <img v-lazy="item.pic" alt="" class="menus_img" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["menus"],
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.cate {
  padding: 0 10px;
}
.menus {
  padding: 0 10px 10px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
}
.menusItem {
  width: 20%;
  padding-top: 10px;
  font-size: 12px;
  text-align: center;
  color: #333;
  img {
    width: 38px;
    height: 38px;
  }
}
</style>