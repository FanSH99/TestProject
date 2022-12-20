<template>
  <div>

    <div class="btn">
      <div style="width: 350px;">
        <el-input v-model="keywords" placeholder="请输入关键字">
          <template #append>
            <el-icon>
              <Search></Search>
            </el-icon>
          </template>
        </el-input>
      </div>
      <div style="margin-left: 10px;">
        <el-button type="primary" @click="changeUser()">添加用户</el-button>
      </div>
    </div>
    <div class="table" v-loading="loading">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="id" label="用户id" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="mobile" label="电话" />
        <el-table-column prop="role_name" label="角色" />
        <el-table-column prop="mg_state" label="状态">
          <template #default="{row}">
            <div>
              <!-- {{row}} -->
              <el-switch v-model="row.mg_state" @change="updateUserState(row.id,row.mg_state)"></el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template #default="{row}">
            <div>
              <el-tooltip class="box-item" effect="dark" content="编辑" placement="top">
                <el-button type="primary" size="small" :icon="Edit" @click="changeUser(row.id)"></el-button>
              </el-tooltip>
              <el-tooltip class="box-item" effect="dark" content="删除" placement="top">
                <el-button type="danger" size="small" :icon="Delete" @click="remove(row.id)"></el-button>
              </el-tooltip>
              <el-tooltip class="box-item" effect="dark" content="设置" placement="top">
                <el-button type="warning" size="small" :icon="Setting" @click="setUser(row)"></el-button>
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination v-model:page-size="pagesize" v-model:current-page="pagenum" :page-sizes="[5, 10,15, 20]"
        :total="total" layout="total, sizes, prev, pager, next, jumper" @current-change="currentChange"
        @size-change="sizeChange" />
    </div>
    <editUser ref="editUserRef" @over="getDataList" />
    <setRole ref="setRoleRef" @over="getDataList" />
  </div>
</template>
<script lang='ts' setup>
import { Search, Edit, Delete, Setting, Warning } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { getUserList, deleteUser, updateState } from '../../api/user'
import { showMessage } from '../../utils/showMessage';
import editUser from './components/editUser.vue'
import { ElMessageBox } from 'element-plus';
// import 'element-plus/es/components/message-box/style';
import 'element-plus/es/components/message-box/style/css'

import setRole from './components/setRole.vue'
let keywords = ref("");
let pagenum = ref(1);
let pagesize = ref(5);
let tableData = ref([]);
let total = ref(0)
let loading = ref(false)

let getDataList = async () => {
  let data: UserData = {
    query: keywords.value,
    pagenum: pagenum.value,
    pagesize: pagesize.value,
  }
  loading.value = true;
  let res = await getUserList(data);
  // console.log(res);
  if (res.data.meta.status != 200) {
    showMessage(res.data.meta.msg, "error");
    return;
  }
  tableData.value = res.data.data.users;
  total.value = res.data.data.total;
  loading.value = false;
}
getDataList();

let currentChange = (value: number) => {
  // console.log(value);
  pagenum.value = value;
  getDataList();

}

let sizeChange = (value: number) => {
  console.log(value);
  pagesize.value = value;
  getDataList();
}

// 获取组价实例
let editUserRef = ref();
// 添加用户
let changeUser = (id?: number) => {
  console.log(id);
  console.log(editUserRef);
  // 调用init显示编辑页面
  editUserRef.value.init(id);
}

// 删除用户
let remove = async (id: number) => {
  ElMessageBox.confirm(
    '你确认要删除当前用户吗？',
    'Warning',
    {
      confirmButtonText: '确认删除',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      let res = await deleteUser(id);
      console.log(res);
      if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
      }
      showMessage("删除成功", 'success');
      getDataList();
    })

}

// 更改状态
let updateUserState = async (id: number, type: boolean) => {
  console.log(id, type);
  let res = await updateState(id, type);
  console.log(res);
  if (res.data.meta.status != 200) {
    showMessage(res.data.meta.msg, "error");
    return;
  }
  showMessage("设置成功", 'success');
  getDataList();
}

// 分配角色
let setRoleRef = ref();

let setUser = (row: UserRole) => {
  console.log(row);
  console.log(setRoleRef.value);
  // 调用子组件
  setRoleRef.value.init(row);
}

</script>
<style  scoped>
.btn {
  display: flex;
}
</style>