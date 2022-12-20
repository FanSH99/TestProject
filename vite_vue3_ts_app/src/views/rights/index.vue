<template>
  <div>

    <el-table :data="tableData" style="width: 100%" row-key="attr_id">

      <el-table-column prop="id" label="#" width="80" />
      <el-table-column prop="authName" label="权限名称" width="200" />
      <el-table-column prop="path" label="路径" width="200" />
      <el-table-column label="权限等级">
        <template #default="{ row }">
          <div>
            <el-tag v-if="row.level == 0">一级</el-tag>
            <el-tag v-if="row.level == 1" type="success">二级</el-tag>
            <el-tag v-if="row.level == 2" type="warning">三级</el-tag>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';
import { Edit, Delete, } from '@element-plus/icons-vue'
import { getRights } from '../../api/rights'
import { showMessage } from '../../utils/showMessage';
let tableData = ref([]);

let getRightList = async () => {
  let res = await getRights('list');
  console.log(res);
  if (res.data.meta.status != 200) {
    showMessage(res.data.meta.msg, "error");
    return;
  }
  tableData.value = res.data.data

}
getRightList();
</script>
<style lang='less' scoped>

</style>