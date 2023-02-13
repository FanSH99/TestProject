<template>
  <div>
    <h1 :class="classname">好好学习天天向上</h1>
    <h1 :class="isClass ? 'red' : 'blue'">好好学习天天向上</h1>
    <h1 :class="{red:isClass,blue:isClass}">好好学习天天向上</h1>
    <h1 :style="style">好好学习天天向上</h1>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      classname: "red size20",
      isClass: true,
      style: {
        color: "red",
        fontSize:"20px"
      }
    };
  },
};
</script>
<style>
.red {
  color: red;
}
.blue {
  color: blue;
}
.size20 {
  color: 20px;
}
</style>