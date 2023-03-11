<template>
  <div id="app">
   <h4>从子组件接收的数据---{{mynum}}<button @click="mynum++">点击++</button></h4>
    <component-one></component-one>
    <component-child :mymsg="msg" @sendnum="getNum"></component-child>
  <component-child-two>
    hhhhh
    <template #header="props">
<div>
  <h1>header {{props.msg}}</h1>
</div>
    </template>
  </component-child-two>
  </div>
</template>

<script>
import componentOne from './components/componentOne.vue'
import componentChildTwo from './components/componentChildTwo.vue'


export default {
  name: 'App',
  components: {
    componentOne,
    componentChildTwo
  },
  data() {
    return {
      msg: "我是父组件传递过来的数据",
      mynum:"",
    }
  },
  methods: {
    getNum(value) {
      console.log(value);
      this.mynum = value;
    }
  }
}
</script>

<style>
#app {
width:1200px;
margin:0 auto;
}
</style>
