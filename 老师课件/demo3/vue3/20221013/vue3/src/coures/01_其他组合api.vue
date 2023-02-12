<template>
  <div>
    <h1>其他组合Api</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';
import {isRef,unref,toRef,toRefs} from 'vue';
export default defineComponent({
    setup(){
        let name:string = '章三';
        // isRef Api用来判断当前数据是否为ref定义的数据 若是则返回true 若不是则返回false
        console.log(isRef(name))
        let age = ref(20);
        console.log(isRef(age))

        let like = ref("学习");
        //  如果参数是 ref，则返回内部值，否则返回参数本身
        console.log(unref(like))
        
        let user = reactive({
            name:"张三",
            age:18
        })
        // 将 响应式对象中的某个属性转化成ref响应式属性
        let nameRef = toRef(user,"name");
        console.log(nameRef.value)
        let goods = reactive({
            name:"iphone",
            price:5999
        })
        console.log(goods)
        // 将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref
        let mygoods = toRefs(goods);
        console.log(mygoods.name.value)
    }
})
 </script>
<style scoped>
</style>