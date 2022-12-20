<template>
  <div>
    <div class="add">
      <el-button type="primary" @click="addRoles">添加角色</el-button>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%" border row-key="id">
        <el-table-column type="expand">
          <template #default="{row}">
            <!-- {{row}} -->
            <div>
              <el-row v-for="(item,idx) in row.children" :key="idx" class="myrow">
                <el-col :span="5">
                  <el-tag size="large" closable @close="removeRights(row.id,item.id,row)">{{item.authName}}</el-tag>
                </el-col>
                <el-col :span="19">
                  <el-row v-for="(item2,idx2) in item.children" :key="idx2" class="myrow">
                    <el-col :span="5">
                      <el-tag type="success" closable @close="removeRights(row.id,item2.id,row)">{{item2.authName}}
                      </el-tag>
                    </el-col>
                    <el-col :span="19">
                      <el-tag type="warning" closable v-for="(item3,idx3) in item2.children" :key="idx3" class="mytag"
                        @close="removeRights(row.id,item3.id,row)">
                        {{item3.authName}}
                      </el-tag>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="角色id" width="120px" />
        <el-table-column prop="roleName" label="角色名称" />
        <el-table-column prop="roleDesc" label="角色描述" />
        <el-table-column prop="email" label="操作">
          <template #default="{row}">
            <el-button type="primary" size="small" :icon="Edit" @click="editRoles(row.id)">编辑</el-button>
            <el-button type="danger" size="small" :icon="Delete" @click="remove(row.id)">删除</el-button>
            <el-button type="warning" size="small" :icon="Setting" @click="setting(row)">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
      <editsRole ref="addOreditRef" @over='getRoles' />
      <setRights ref='setRightRef' @over='getRoles' />
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { getRolesList, deleteRihts } from '../../api/roles'
import { Search, Edit, Delete, Setting, Warning } from '@element-plus/icons-vue'
import editsRole from './components/editsRole.vue';
import { ElMessageBox } from 'element-plus';
import { showMessage } from '../../utils/showMessage';
// import 'element-plus/es/components/message-box/style';
import 'element-plus/es/components/message-box/style/css'
import { deleteRole } from '../../api/roles'
import setRights from './components/setRights.vue'
let tableData = ref([]);

let getRoles = async () => {
  let res = await getRolesList();
  // console.log(res);
  tableData.value = res.data.data;

}
getRoles();

let addOreditRef = ref();
// console.log(addOreditRef);

let addRoles = () => {
  addOreditRef.value.init();
}

let editRoles = (id: number) => {
  // console.log(id);
  addOreditRef.value.init(id);
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
      let res = await deleteRole(id);
      // console.log(res);
      if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
      }
      showMessage("删除成功", 'success');
      getRoles();
    })

}


let removeRights = async (rowId: number, rightsId: number, row?: any) => {
  console.log(rowId, rightsId);
  let res = await deleteRihts(rowId, rightsId)
  // console.log(res);
  if (res.data.meta.status != 200) {
    showMessage(res.data.meta.msg, "error");
    return;
  }
  showMessage("删除成功", 'success');
  row.children = res.data.data;
}

let setRightRef = ref();

let setting = (row: any) => {
  setRightRef.value.init(row);
}
</script>
<style scoped>
.add {
  margin: 8px 0;
}

.myrow {
  padding: 5px 20px;
}

.mytag {
  margin-bottom: 10px;
  margin-right: 10px;
}

</style>