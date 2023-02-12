<template>
  <div>
    <div>
      <div>
        <el-button type="primary" @click="addRoles">添加角色</el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%" row-key="id">
        <el-table-column type="expand">
            <template #default="{row}">
              <div>
                <!-- 遍历一级权限渲染数据 -->
                <el-row v-for="(item,index) in row.children" :key="index" class="myrow">
                  <el-col :span="5">
                  <el-tag  size="large" closable @close="removeRights(row.id,item.id,row)">{{item.authName}}</el-tag>
                  </el-col>
                  <el-col :span="19">
                    <!-- 渲染二级权限 -->
                    <el-row v-for="(item1,index1) in item.children" :key="index1"> 
                      <el-col :span="5">
                        <el-tag  size="large" closable type="success" @close="removeRights(row.id,item1.id,row)">{{item1.authName}}</el-tag>
                      </el-col>
                      <el-col :span="19">
                        <!-- 渲染三级权限 -->
                        <el-tag  size="large" closable v-for="(item2,index2) in item1.children" :key="index2" class="mytag" type="warning" @close="removeRights(row.id,item2.id,row)">{{item2.authName}}</el-tag>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
            </template>
        </el-table-column>
        <el-table-column prop="id" label="角色Id" width='150px'/>
        <el-table-column prop="roleName" label="角色名称" />
        <el-table-column prop="roleDesc" label="角色描述" />
        <el-table-column prop="address" label="操作" width="300px">
          <template #default="{row}">
            <div>
              <el-button type="primary" size="small" :icon="Edit" @click="update(row.id)">编辑</el-button>
              <el-button type="danger" size="small" :icon="Delete" @click="remove(row.id)">删除</el-button>
              <el-button type="warning" size="small" :icon="Setting" @click="setting(row)">分配权限</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <addOrUpdtate ref="addOrUpdateRef" @over="getDataList"></addOrUpdtate>
    <setRights ref="setRightsRef" @over="getDataList"></setRights>
  </div>
</template>
<script lang='ts' setup>
import { ElMessageBox } from "element-plus"
import 'element-plus/es/components/message-box/style/css'
import {getRolesList,removeRoles,romveRolesRights} from '../../api/roles'
import {  Edit, Delete, Setting } from '@element-plus/icons-vue'
import setRights from './components/set-rights.vue'
import addOrUpdtate from './components/add-or-update.vue'
import {ref} from 'vue';
import showMessage from "../../utils/showMessage"
let tableData = ref([]);
// 获取角色列表
let getDataList = async ()=>{
    let res = await getRolesList();
    tableData.value = res.data.data;
    console.log(res)
}
getDataList();
// 用来获取子组件实例
let addOrUpdateRef = ref();

// 添加角色
let addRoles = ()=>{
  // console.log(addOrUpdateRef)
  // 调用子组件中init方法显示对话框
  addOrUpdateRef.value.init();
}
// 编辑角色
let update = (id:number)=>{
   // 调用子组件中init方法显示对话框
   addOrUpdateRef.value.init(id);
}
// 删除角色 
let remove =(id:number)=>{
  ElMessageBox.confirm(
    '您确认要删除当前角色吗？',
    '注意',
    {
      confirmButtonText: '确认删除',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      let res = await removeRoles(id);
      if (res.data.meta.status !== 200) {
        showMessage(res.data.meta.msg, "error");
        return
      }
      showMessage("删除成功", "success");
      // 重新请求最新数据
      getDataList();
    })
}
// 删除角色指定权限
let removeRights = async (rolesId:number,rightsId:number,row?:any)=>{
  let res = await romveRolesRights(rolesId,rightsId);
  row.children = res.data.data;
}

// 分配权限组件的ref
let setRightsRef = ref();

// 分配权限
let setting = (row:any)=>{
  // 将当前角色权限列表传递给init方法 当前角色id传递init方法
  setRightsRef.value.init(row.children,row.id);
}
</script>
<style scoped>
.myrow{
  padding: 15px;
  /* padding-bottom: 15px; */
  border-bottom: 1px solid #f1f1f1;
}
.mytag{
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>