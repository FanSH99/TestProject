<template>
  <div>
    <h1>{{num}} -- {{user.age}}</h1>
    <button @click="add">add</button>
    <div>
        总价：{{getSum}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       num:0,
       user:{
        name:"张三",
        age:19
       },
       price:100
    }
  },
  methods:{
    add(){
        this.num++
        this.user.age++
    }
  },
  watch:{
    num(newVal,oldVal)  {
        console.log('监听到了',newVal,oldVal)
    },
    user:{
        handler(newVal){
            console.log("监听到对象中的age了",newVal)
        },
        // 开启深度监听
        deep:true,
        immediate:true
    }
  },
//   必须要有返回值 当其依赖的数据发生改变时就会自动调用 使用方法与data中数据一样
  computed:{
        getSum(){
            return this.num *this.price
        }
  }
}
</script>
<style>
</style>