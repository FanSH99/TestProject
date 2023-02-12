<template>
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
</template>

<script lang='ts'>
import { defineComponent,ref,watch} from 'vue'
export default defineComponent({
    props:['msg'],
  setup (props) {
    let list = ref([
            {
                name:"小明",
                content:"哈哈哈哈哈哈"
            },{
                name:"小红",
                content:"嘿嘿嘿"
            }
        ])
    watch(props.msg,()=>{
        list.value.push(props.msg)
    })
    return {
        list
    }
  },
})

</script>
<style scoped lang='less'>
</style>