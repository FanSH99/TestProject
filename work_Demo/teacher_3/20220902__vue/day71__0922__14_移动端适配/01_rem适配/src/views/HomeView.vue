<template>
  <div class="home">

    <div class="cate" v-for="(item,index) in 10" :key="index">
{{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
.home {
  width: 750px;
  height: 375px;
  margin: 0 auto;
  background: red;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
}
.cate{
  width:100px;
  height:100px;
  border-radius: 50%;
  background: blue;
  text-align:center;
  line-height: 100px;
}
</style>
