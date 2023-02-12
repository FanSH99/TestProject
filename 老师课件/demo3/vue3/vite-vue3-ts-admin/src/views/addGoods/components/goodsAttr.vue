<template>
  <div>
    <el-form
    label-position="top"
    label-width="100px"
  >
  <el-form-item v-for="(item,index) in attrList" :key="index" :label="item.attr_name">
      <el-input  v-model='item.attr_vals'/>
    </el-form-item>
  </el-form>

  <div v-if="attrList.length ==0">
        <el-empty description="没有更多属性" />
    </div>
  </div>
</template>
<script lang='ts' setup>
import bus from '../../../utils/bus';
import {getCateParams} from '../../../api/goods'
import {ref,Ref} from 'vue';
let attrList:Ref<any[]> = ref([])
// 监听自定义事件
bus.on("sendid",async (id:any)=>{
    let sel:Attributes = {
        sel:"only"
    }
    let res = await getCateParams(id,sel);
    console.log(res)
    attrList.value = res.data.data
})

defineExpose({
    attrList
})
</script>
<style scoped lang='less'>
</style>