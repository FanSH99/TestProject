<template>
    <div class="parent">
        <child @sendobj="getobj"></child>
        <h1>留言板</h1>
        <div>
            <div class="msg" v-for="(item,index) in list" :key="index">
                <div>
                    作者：{{item.name}}
                </div>
                <div>
                    内容：{{item.content}}
                    <button style="float: right;">删除</button>
                </div>
            </div>
       
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import child from '@/components/child.vue'
interface Obj {
    name:string,
    content:string
}
export default defineComponent({
    setup() {

        let list = ref([
            {
                name:"小明",
                content:"哈哈哈哈哈哈"
            },{
                name:"小红",
                content:"嘿嘿嘿"
            }
        ])
         let getobj = (value:Obj)=>{
            list.value.push(value)
         }  
        return {
            list,
            getobj
        }
    },
    components:{
        child
    }
})
</script>
<style scoped lang='less'>
     .parent{
            width: 1000px;
            margin: 0 auto;
        }
        .msg{
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
        }
     
</style>