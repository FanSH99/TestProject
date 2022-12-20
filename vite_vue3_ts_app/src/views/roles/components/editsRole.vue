<template>
    <div>
        <el-dialog v-model="dialogVisible" :title="roleId?'编辑角色':'添加角色'" width="30%" :before-close="handleClose">
            <div>
                <el-form ref="formRef" :model="formModel" label-width="100px">
                    <el-form-item prop="roleName" label="角色名称" :rules="rules.roleName">
                        <el-input v-model="formModel.roleName"></el-input>
                    </el-form-item>

                    <el-form-item prop="roleName" label="角色描述">
                        <el-input v-model="formModel.roleDesc"></el-input>
                    </el-form-item>

                </el-form>
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
import { reactive, ref } from 'vue';
import { addUserRoles, queryRoleId, editUserRole } from '../../../api/roles'
import { showMessage } from '../../../utils/showMessage';
let dialogVisible = ref(false);


let formModel = reactive({
    roleName: "",
    roleDesc: "",

});

let rules = reactive({
    roleName: {
        required: true,
        message: '角色名称不能为空',
        trigger: 'blur',
    },
});

let formRef = ref();
let emit = defineEmits(['over'])
let handleClose = () => {
    dialogVisible.value = false;
    formRef.value.resetFields();
    formModel.roleDesc = '';
    formModel.roleName = '';
}
// 当前编辑的角色id
let roleId = ref();
// 添加角色的方法。
let addRoles = async () => {
    let data: AddRolesData = {
        roleName: formModel.roleName,
        roleDesc: formModel.roleDesc,
    }
    let res = await addUserRoles(data);
    console.log(res);
    if (res.data.meta.status != 201) {
        showMessage(res.data.meta.msg, 'error');
        return;
    }
    showMessage('添加成功', 'success');
    handleClose();
    emit('over')
}

let changeRoles = async () => {
    let data: AddRolesData = {
        roleName: formModel.roleName,
        roleDesc: formModel.roleDesc,
    }
    let res = await editUserRole(roleId.value, data);
    console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, 'error');
        return;
    }
    showMessage('修改成功', 'success');
    handleClose();
    emit('over')
}
let confirm = () => {
    formRef.value.validate((isValide: Boolean) => {
        if (isValide) {
            // console.log("表单校验通过");
            if (roleId.value) {
                // console.log('编辑用户');
                changeRoles();
            } else {
                // console.log('添加用户');
                addRoles();
            }

        }
    })
}

let init = async (id: number) => {
    dialogVisible.value = true;
    if (id) {
        // console.log("编辑角色");
        roleId.value = id;
        let res = await queryRoleId(id);
        // console.log(res);
        formModel.roleDesc = res.data.data.roleDesc;
        formModel.roleName = res.data.data.roleName;

    } else {
        // console.log("添加角色");
        roleId.value = null;
    }
}

defineExpose({
    init,
})
</script>
<style lang='less' scoped>

</style>