<template>
  <div>
    <div class="btn">
      <div style="width: 350px;">
        <el-input v-model="keyWords" placeholder="请输入关键字">
          <template #append>
            <el-icon>
              <Search @click="getDataList"></Search>
            </el-icon>
          </template>
        </el-input>
      </div>
      <div style="margin-left: 10px;">
        <el-button type="primary" @click="addGoods">添加商品</el-button>
      </div>
    </div>
    <div class="table" v-loading="loading">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="goods_id" label="商品id"/>
        <el-table-column prop="goods_name" label="商品名称"   width="600"/>
        <el-table-column prop="goods_price" label="商品价格"/>
        <el-table-column prop="goods_number" label="商品数量"/>
        <el-table-column prop="goods_weight" label="商品重量"/>
        <el-table-column label="操作"  width="200">
          <template #default>
            <div>
              <el-button type="primary" size="small" :icon="Edit">编辑</el-button>
              <el-button type="danger" size="small" :icon="Delete">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination v-model:page-size="pagesize" v-model:current-page="pagenum" :page-sizes="[5, 10, 15, 20]"
        layout="total, sizes, prev, pager, next, jumper" :total="total" @current-change="currentChange"
        @size-change="sizeChange" />
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { Search, Edit, Delete } from '@element-plus/icons-vue'
import {getGoodsList} from '../../api/goods'
import {useRouter} from 'vue-router'
let router = useRouter();
let keyWords = ref("")
let tableData = ref([]);
let pagenum = ref(1);
let pagesize = ref(10);
let total = ref(0)
let loading = ref(false);
// 获取商品列表
let getDataList = async ()=>{
  loading.value = true;
   let data:GoodsListParams ={
    query:keyWords.value,
    pagenum:pagenum.value,
    pagesize:pagesize.value
   }
   let res = await getGoodsList(data);
   console.log(res)
   tableData.value = res.data.data.goods;
   total.value = res.data.data.total
   loading.value = false
}
getDataList();

let currentChange = (value:number)=>{
    pagenum.value = value;
    getDataList();
}
let sizeChange = (value:number)=>{
    pagesize.value = value;
    getDataList();
}
let addGoods = ()=>{
  router.push({
    path:"/addGoods"
  })
}
</script>
<style scoped>
.btn {
  display: flex;
}
</style>