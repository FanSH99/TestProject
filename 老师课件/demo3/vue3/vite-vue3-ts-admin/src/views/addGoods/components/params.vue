<template>
  <div>
    <div v-for="(item,index) in paramsList" :key="index">
        <div class="attr_name">{{item.attr_name}}</div>
        <div>
            <el-tag  size="large" closable v-for="(value,i) in item.attr_vals" :key="i" class="mytag" @close="closeTag(index,i)"> 
            {{value}}
            </el-tag>
        </div>
    </div>
    <div v-if="paramsList.length ==0">
        <el-empty description="没有更多参数" />
    </div>
  </div>
</template>
<script lang='ts' setup>
import {Ref, ref} from 'vue'
import bus from '../../../utils/bus';
import {getCateParams} from '../../../api/goods'
let paramsList:Ref<any[]> = ref([])
// 监听自定义事件接受参数
bus.on("sendid",async (id:any)=>{
    let data:Attributes = {
        sel:"many"
    }
    // 根据三级分类id请求分类参数
    let res = await getCateParams(id,data);
    paramsList.value = res.data.data;
    paramsList.value.forEach(item=>{
        item.attr_vals = item.attr_vals.split(' ')
    })
})
// 删除对应参数
let closeTag = (index:number,i:number)=>{
    let attrObj = paramsList.value[index];
    attrObj.attr_vals.splice(i,1)
}

defineExpose({
    paramsList
})
</script>
<style scoped>
.attr_name{
    font-size: 14px;
    color: #444;
    margin: 15px 0;
}
.mytag{
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>