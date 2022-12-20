<template>
    <div>
        <el-dialog v-model="dialogVisible" title="分配角色" width="50%" :before-close="handleClose">

            <div>
                <p> 当前用户：{{username}} </p>
                <p style="margin:15px 0;">当前角色：{{role_name}}</p>
                <p>
                    分配新角色
                    <el-select v-model="role_id" class="m-2" placeholder="请您选择角色" size="large">
                        <el-option v-for="(item,index) in rolesList" :key="index" :label="item.roleName"
                            :value="item.id" />

                    </el-select>
                </p>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="confirm">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { showMessage } from '../../../utils/showMessage';
import { getRolesList, setUserRole } from '../../../api/roles'

let dialogVisible = ref(false);
let handleClose = () => {
    dialogVisible.value = false;
}

let role_id = ref();
let user_id = ref(0);
// 当前用户名
let username = ref("");
// 当前角色名
let role_name = ref("");
let rolesList: any = ref([]);
let init = async (row: UserRole) => {
    console.log(row);
    username.value = row.username;
    role_name.value = row.role_name;
    user_id.value = row.id;
    let res = await getRolesList();
    console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    rolesList.value = res.data.data;
    dialogVisible.value = true;

}
let emit = defineEmits(["over"]);
let confirm = async () => {
    let data = {
        rid: role_id.value
    }
    console.log(data);

    let res = await setUserRole(user_id.value, data);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    showMessage("修改成功", 'success');
    handleClose();
    emit("over");

}
defineExpose({
    init
})

</script>
<style lang='less' scoped>

</style>