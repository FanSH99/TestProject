<template>
  <div>
    <h1>其他组合Api</h1>
  </div>
</template>
<script lang='ts'>
import { defineComponent,ref,isRef,unref, reactive, toRef,toRefs,isReactive} from 'vue'
export default defineComponent({
    setup() {
        // 2022年10月13日09:08:55
    // isRefApi用来判断当前数据是否是响应式数据（ref定义的数据），可以用作类型守卫。返回true或false
        let name = '派大星';
        console.log(isRef(name));//false

        let age = ref(20);
        console.log(isRef(age));//true

        // unref，如果是ref数据，返回ref定义的数据，否则直接返回参数本身。
        let str = ref('学习');
        console.log(unref(str));//学习
        console.log(unref(name));//派大星

        // toRef，
        let user = reactive({
            name: "海绵宝宝",
            age:18
        })

        // 将响应式对象中的某个属性转换成一个响应式ref对象，当改变ref数据，可以直接改变原数据。
        let nameRef = toRef(user, "name")
        console.log(nameRef);
        /* ObjectRefImpl {_object: Proxy, _key: 'name', _defaultValue: undefined, __v_isRef: true} */

        let goods = reactive({
            name: "iphone",
            price:5999,
        })

        // toRefs将响应式对象转换成普通对象。
        let mygoods = toRefs(goods);
        console.log(mygoods);//{name: ObjectRefImpl, price: ObjectRefImpl}
        console.log(mygoods.name.value, mygoods.price.value);//iphone,5999

        // isProxy

        // isReactive

        console.log(isReactive(user),isReactive(name));//true,false
        
        // isReadonly
        
        
        
        
},
  data(){
    return {
       
    }
  },
})
</script>
<style>
</style>