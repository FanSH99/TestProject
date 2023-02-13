<template>
  <div class="home">
    <div v-if="isShow">
  <async-component></async-component>
    </div>
    <button @click="show">显示</button>
    <button @click="add">num++</button>
    <p>{{num}}</p>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import asncComponent from '@/components/asncComponent.vue';
/* 异步组件：就是只有使用的时候才会加载

*/

// 引入创建异步组件，只有使用的时候才会加载。非常好用，如果用到大组件需要用，否则会很慢。
// let asyncComponent = () => {
//   return import("@/components/asyncComponent.vue")
// }


const asyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('@/components/asyncComponent.vue'),
  // 异步组件加载时使用的组件
  // loading: LoadingComponent,
  // // 加载失败时使用的组件
  // error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

import showMixins from '@/mixins/showMixins'
export default {
  name: 'HomeView',
  data() {
    return {
      isShow:false
    }

  },
  // 局部注册混入,注册混入之后，混入对象中的所有数据都会自动添加到this即当前组件实例中里面。
  // 混入只会共享业务逻辑，不会共享数据。使用数据可以减少代码量。
  mixins:[showMixins],
  methods: {
    
  },

  components: {
    asyncComponent
    
  }
}
</script>

<style>

               
</style>