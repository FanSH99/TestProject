<template>

    <div class="all-city van-ellipsis" @click="goInfo(cityItem.id, cityItem.name)">{{ cityItem.name }} </div>
  
</template>
<script>
export default {
  name: "",
  props: ["cityItem"],
  data() {
    return {};
  },
  methods: {
    goInfo(id, name) {
      console.log(id, name);
      this.$store.state.title = name;
      this.$store.state.t_left = 2;
      this.$router.push({
        path: "/city/" + id,
      });
    },
  },
};
</script>
<style lang="less" scoped>
  @h:40px;
.all-city {
  width:25%;
  padding:0 5px;
  height:@h;
  line-height: @h;
  border-radius: 0px !important;
  text-align: center;
  cursor: pointer;
  color:#666;
  font-size:14px;
}
</style>