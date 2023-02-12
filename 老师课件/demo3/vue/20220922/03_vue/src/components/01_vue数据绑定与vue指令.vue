<template>
  <div>
    <!-- 数据绑定 可以写表达式 -->
    <h1>{{msg}}</h1>
    <h3>{{isSex?'女':'男'}}</h3>
    <p v-text="text"></p>
    <p v-html="text"></p>
    <ul>
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <p v-if="age>10">大于十</p>
    <p v-else-if="age===10">等于10</p>
    <p v-else>小于10</p>
    <p v-show="10>5">嘿嘿嘿黑嘿嘿</p>
    <!-- v-bind 可以绑定标签自带的属性 绑定之后属性值就不再是字符串啦 -->
    <a :href="href">百度一下</a>
    <!-- v-bind 还可以绑定 自定义属性 -->
    <div data-id="123">自定义属性</div>
    <!-- @+事件名称 v-on:事件名 -->
    <button @click="clickMe">事件</button>
    <input type="text" v-model="msg">
  </div>
</template>
<script>
export default {
//   vue组件中的data必须是一个函数 data 存放的是响应式数据
  data(){
    return {
       msg:"好好学习天上",
       isSex:false,
       text:"<h1>哈哈哈哈</h1>",
       list:["张三",'王五','赵六'],
       age:8,
       href:"http://www.jd.com"
    }
  },
  methods:{
    clickMe(){
        this.age ++;
    alert("触发啦")
  }
  }
}
</script>
<style>
</style>