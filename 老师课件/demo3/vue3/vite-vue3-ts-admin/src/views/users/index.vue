<template>
  <div>
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
        <el-button type="primary" @click="addUser">添加用户</el-button>
      </div>
    </div>
    <div class="table" v-loading="loading">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="用户id" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="mobile" label="电话" />
        <el-table-column prop="role_name" label="角色" />
        <el-table-column prop="mg_state" label="状态">
          <template #default="{row}">
            <div>
              <!-- {{row}} -->
              <el-switch v-model="row.mg_state" @change="updateStates(row.id,row.mg_state)"/>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template #default="{row}">
            <div>
              <el-tooltip effect="dark" content="编辑" placement="top">
                <el-button type="primary" size="small" :icon="Edit" @click="updateUser(row.id)"></el-button>
              </el-tooltip>
              <el-tooltip effect="dark" content="删除" placement="top">
                <el-button type="danger" size="small" :icon="Delete" @click="remove(row.id)"></el-button>
              </el-tooltip>
              <el-tooltip effect="dark" content="分配角色" placement="top">
                <el-button type="warning" size="small" :icon="Setting" @click="setRole(row)"></el-button>
              </el-tooltip>
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
  <addOrUpdate ref="addOrUpdateRef" @over="getDataList"></addOrUpdate>
  <setRoles ref="setRolesRef" @over="getDataList"></setRoles>
  </div>
</template>
<script lang='ts' setup>
import { ElMessageBox } from "element-plus"
import 'element-plus/es/components/message-box/style/css'
import { Search, Edit, Delete, Setting } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
import { getUserList, removeUser,updateState } from '../../api/user'
import showMessage from '../../utils/showMessage';
import addOrUpdate from './components/add-or-update.vue'
import setRoles from './components/set-roles.vue'
// 当前加载状态
let loading = ref(false)
// 搜索关键子
let keyWords = ref("")
// 当前页码
let pagenum = ref(1);
// 每返回多少条
let pagesize = ref(5);
// 表格数据
let tableData = ref([])
// 总数据
let total = ref(0)
// 获取用户列表
let getDataList = async () => {
  loading.value = true
  let data: UserData = {
    query: keyWords.value,
    pagenum: pagenum.value,
    pagesize: pagesize.value
  }
  let res = await getUserList(data);
  console.log(res)
  if (res.data.meta.status !== 200) {
    showMessage(res.data.meta.msg, "error")
    return
  }
  tableData.value = res.data.data.users;
  total.value = res.data.data.total
  loading.value = false;
}
getDataList();
// 当前页码发生改变时调用
let currentChange = (value: number) => {
  // console.log(value)
  pagenum.value = value;
  getDataList();
}
// 每页显示条数发生改变
let sizeChange = (value: number) => {
  console.log(value)
  pagesize.value = value;
  getDataList();
}
// 用来绑定组件实例
let addOrUpdateRef = ref();
// 添加用户
let addUser = () => {
  // console.log(addOrUpdateRef)
  addOrUpdateRef.value.init();
}

// 编辑用户
let updateUser = (id: number) => {
  // console.log(id)
  addOrUpdateRef.value.init(id);
}

// 删除用户
let remove = (id: number) => {
  ElMessageBox.confirm(
    '您确认要删除当前用户吗？',
    '注意',
    {
      confirmButtonText: '确认删除',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      let res = await removeUser(id);
      if (res.data.meta.status !== 200) {
        showMessage(res.data.meta.msg, "error");
        return
      }
      showMessage("删除成功", "success");
      // 重新请求最新数据
      getDataList();
    })
}
// 设置用户状态
let updateStates = async (id:number,type:boolean)=>{
  // console.log(id,type)
  let res:any = await updateState(id,type);
  if(res.data.meta.status !== 200){
        showMessage(res.data.meta.msg,"error");
        return
  }
  showMessage(res.data.meta.msg,"success")
}

// 当前分配角色组件对象
let setRolesRef = ref();
// 分配角色
let setRole = (row:Object)=>{
  // console.log(row)
  // console.log(setRolesRef.value)
  // 调用子组件中的初识化方法显示弹出框
  setRolesRef.value.init(row);
}
</script>
<style scoped>
.btn {
  display: flex;
}
</style>