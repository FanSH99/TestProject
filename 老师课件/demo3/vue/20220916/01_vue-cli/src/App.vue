<template>
  <div id="app">
    <component-one/>
    <h1>{{msg}} {{mynum}}</h1>
    <!-- 
      1. 在父组件中的子组件标签上绑定自定义属性
      2. 在子组件中使用props来接收
     -->
    <component-child :mymsg="msg" @sendnum='getnum'></component-child>
    <component-child-two>
       <template v-slot:header='props'>
        <div>
          <h1>header {{props.msg}}</h1>
        </div>
       </template>
       <template #footer>
        <div>
          <h1>footer</h1>
        </div>
       </template>
    </component-child-two>
    <!-- <component :is="componentId"></component> -->
    <!-- <keep-alive>
    
    </keep-alive> -->
    <!-- <transition>
    
    </transition> -->
  </div>
</template>

<script>
  // @ 表示开发目录src  在vue教授夹中若不写文件后缀文件默认为vue文件 
import componentOne from '@/components/componentOne';
import componentChildTwo from '@/components/componentChildTwo';
export default {
  name: 'App',
  components:{
    componentOne,
    componentChildTwo
  },
  data() {
    return {
      msg:"我是父组件中数据",
      mynum:""
    }
  },
  methods:{
    getnum(value){
      console.log(value)
      this.mynum  = value
    }
  }
}
</script>

<style>

</style>
