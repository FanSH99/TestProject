<template>
  <div>
    <div>
      <a-button type="primary">添加分类</a-button>
    </div>
    <div class="table">
      <a-table :columns="columns" :data-source="data" bordered  rowKey="cat_id">
        <template #bodyCell="{column,text,record}">
          <div v-if="column.dataIndex==='cat_deleted'">
            <a-tag :color="text?'red':'green'">{{text?'无效':'有效'}}</a-tag>
          </div>
          <div v-if="column.dataIndex==='cat_level'">
            <a-tag color="purple" v-show="text==0">一级</a-tag>
            <a-tag color="blue" v-show="text==1">二级</a-tag>
            <a-tag color="cyan" v-show="text==2">三级</a-tag>
          </div>
          <div v-if="column.dataIndex === 'action'">
            <a-button type="primary">编辑</a-button> &nbsp;
            <a-button type="primary" danger ghost @click="remove(record)">删除</a-button>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang='ts' setup>
import {getCateList} from '../../api/goods'
import { ref } from 'vue';
// 表格列的描述
let columns = ref([
  {
    title: '分类名称',
    dataIndex: 'cat_name',
  },
  {
    title: '是否有效',
    dataIndex: 'cat_deleted',
  },
  {
    title: '排序',
    dataIndex: 'cat_level',
  },{
    title: '操作',
    dataIndex: 'action',
  },
])
let data = ref([])
let getTableList = async ()=>{
  let res = await getCateList();
  console.log(res)
  data.value = res.data.data;
}
getTableList();
let remove = (record:any)=>{
  console.log(record)
}
</script>
<style scoped>

</style>