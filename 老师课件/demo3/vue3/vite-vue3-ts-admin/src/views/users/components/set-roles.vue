<template>
    <el-dialog v-model="dialogVisible" title="分配角色" width="50%" :before-close="handleClose">
        <div>
            当前用户：{{username}}
        </div>
        <div style="margin: 15px 0;">
            当前角色：{{role_name}}
        </div>
        <div>
            分配新角色：
            <el-select v-model="roles_id" placeholder="请您选择角色" size="large">
                <el-option :value="item.id" v-for="(item,index) in rolesList" :key="index" :label="item.roleName" >{{item.roleName}}</el-option>
            </el-select>

        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="confirm">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
// 获取角色列表接口
import { getRolesList } from "../../../api/roles";
import {setUserRoles} from '../../../api/user'
import showMessage from '../../../utils/showMessage';
let dialogVisible = ref(false)
let handleClose = () => {
    dialogVisible.value = false
}
// 当前选中的角色Id
let roles_id = ref()
// 当前用户名
let username = ref("");
// 当前角色名
let role_name = ref("")
// 角色列表
let rolesList:any = ref([])
// 当前用户id
let user_id = ref(0)
// 定义一个组件初始化方法
let init = async (row:UserRow)=>{
    // console.log(row)
    username.value = row.username;
    role_name.value= row.role_name
    user_id.value = row.id;
    //  获取角色列表
    let res = await getRolesList();
    console.log(res)
    rolesList.value = res.data.data;
    dialogVisible.value = true
}
defineExpose({
    init
})

let emit = defineEmits(["over"])

// 确认分配角色
let confirm = async ()=>{
    let data:SetRoleData = {
        rid:roles_id.value
    }
    let res = await setUserRoles(user_id.value,data);
    console.log(res)
    showMessage(res.data.meta.msg,"success");
    handleClose();
    emit("over")
}
</script>
<style scoped lang='less'>

</style>