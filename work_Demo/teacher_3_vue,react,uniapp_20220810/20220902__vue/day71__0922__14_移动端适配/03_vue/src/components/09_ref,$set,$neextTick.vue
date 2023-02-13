<template>
  <div>
    <div ref="ha">哈哈哈哈</div>
    <child-vue ref="child"></child-vue>
    <button @click="getDom">获取dom</button>
    <p>{{user}}</p>
  </div>
</template>
<script>
import childVue from "@/child/child.vue";
export default {
  name: "",
  data() {
    return {
      user: {
        name: "白浅",
      },
    };
  },
  components: {
    childVue,
  },
  methods: {
    getDom() {
      console.log(this.$refs.ha);
      console.log(this.$refs.child);
      this.$set(this.user, "sex", "男");
    },
  },
};
</script>
<style>
</style>