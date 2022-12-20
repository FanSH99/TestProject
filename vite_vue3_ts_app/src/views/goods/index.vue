<template>
  <div>
    <div class="btn">
      <div style="width: 350px;">
        <el-input v-model="keywords" placeholder="请输入关键字">
          <template #append>
            <el-icon>
              <Search @click="goodsList"></Search>
            </el-icon>
          </template>
        </el-input>
      </div>
      <div style="margin-left: 10px;">
        <el-button type="primary" @click="goAddGoods()">添加商品</el-button>
      </div>
    </div>
    <div class="table" v-loading="loading">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="goods_id" label="商品id" width="100px" />
        <el-table-column prop="goods_name" label="商品名称" />
        <el-table-column prop="goods_price" label="商品价格" width="100px" />
        <el-table-column prop="goods_number" label="商品数量" width="100px" />
        <el-table-column prop="goods_weight" label="商品质量" width="100px" />
        <el-table-column label="操作" width="180px">
          <template #default="{ row }">
            <div>
              <el-tooltip class="box-item" effect="dark" content="编辑" placement="top">
                <el-button type="primary" size="small" :icon="Edit" @click="change(row)">编辑</el-button>
              </el-tooltip>
              <el-tooltip class="box-item" effect="dark" content="删除" placement="top">
                <el-button type="danger" size="small" :icon="Delete" @click="remove(row.goods_id)">删除</el-button>
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination v-model:page-size="pagesize" v-model:current-page="pagenum" :page-sizes="[5, 10, 15, 20]"
        :total="total" layout="total, sizes, prev, pager, next, jumper" @current-change="currentChange"
        @size-change="sizeChange" />
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { Search, Edit, Delete } from '@element-plus/icons-vue';
import { getGoodsList, deleteGoods } from '../../api/goods';
import { showMessage } from '../../utils/showMessage';
import router from '../../router';
let keywords = ref("");
let tableData = ref();
let loading = ref(false);
let pagenum = ref(1);
let pagesize = ref(10);
let total = ref(0);
let goodsList = async () => {
  let data: GoodsData = {
    query: keywords.value,
    pagenum: pagenum.value,
    pagesize: pagesize.value
  }
  loading.value = true;
  let res = await getGoodsList(data);
  console.log(res);

  if (res.data.meta.status != 200) {
    showMessage(res.data.meta.msg, "error");
    return;
  }
  tableData.value = res.data.data.goods;
  total.value = res.data.data.total;
  loading.value = false;
}
goodsList();


let currentChange = (value: number) => {
  // console.log(value);
  pagenum.value = value;
  goodsList();

}

let sizeChange = (value: number) => {
  console.log(value);
  pagesize.value = value;
  goodsList();
}

//跳转到添加商品页面
let goAddGoods = () => {
  router.push({
    path: "/addgoods"
  })
}

let change = (row: any) => {
  console.log(row);
  let data = {
    goods_name: row.goods_name,
    goods_price: row.goods_price,
    goods_number: row.goods_number,
    goods_weight: row.goods_weight,
  }
  console.log(data);

}

let remove = async (id: number) => {
  console.log(id);
  let res = await deleteGoods(id);
  console.log(res);
  if (res.data.meta.status != 200) {
    showMessage(res.data.meta.msg, "error");
    return;
  }
  showMessage("删除成功", 'success');
  goodsList();

}
</script>
<style scoped>
.btn {
  display: flex;
}
</style>