<template>
<div>
    <h1>我也是一个组件{{num}}</h1>
    <ul>
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <p>999999999---{{num}}</p>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
   
     computed: mapState([
         "list",
         "num"
     ])

     /* 
     注意这里容易出错，原来的计算属性是computed:{}在对象里面写方法，但是引用mapState后，将mapState({})来代替{}
     不要再原先的{}里面写mapState，另外,mapState不能跟引号。
     mapState里面的数据必须在store的 state里面存在。且名字要一致。名字不一样可以写成userList:"list"，后面一定要和store里面的一致。
     使用的使用直接用userList即可使用了。
     */
}
</script>

<style>

</style>