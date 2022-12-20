<template>
    <div>
        <el-dialog v-model="dialogVisible" :title="user_id?'编辑用户':'添加用户'" width="50%" :before-close="handleClose">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="80px" class="demo-ruleForm"
                status-icon>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username" :disabled="user_id?true:false" />
                </el-form-item>
                <el-form-item label="密码" prop="password" v-show="!user_id">
                    <el-input v-model="ruleForm.password" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email" />
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input v-model="ruleForm.mobile" />
                </el-form-item>
            </el-form>
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
import { reactive, ref, toRefs } from 'vue';
import { addUser, queryUser, changeUser } from '../../../api/user'
import { showMessage } from '../../../utils/showMessage';
// 对话框是否显示
let dialogVisible = ref(false);


let ruleForm = reactive({
    username: "",
    password: "",
    email: "",
    mobile: "",

});

// 定义表单验证规则
let rules = reactive({
    username: {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
    },
    password: {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
    },
    email: [
        {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur',
        },
        {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
        },
    ],
    mobile: {
        required: true,
        message: '手机号不能为空',
        trigger: 'blur',
    }

})



// 存放当前要编辑的用户id
let user_id = ref();
// 存放要编辑的用户信息
let ruleFormRef = ref();
let queryUserMsg = async (id: number) => {
    let res = await queryUser(id);
    // console.log(res);
    ruleForm.username = res.data.data.username;
    ruleForm.password = res.data.data.password;
    ruleForm.email = res.data.data.email;
    ruleForm.mobile = res.data.data.mobile;
};

let emit = defineEmits(["over"]);
// 对话框关闭前回调
let handleClose = () => {
    dialogVisible.value = false;
    ruleFormRef.value.resetFields();
}
let addUsers = async () => {
    let data: AddUser = {
        username: ruleForm.username,
        password: ruleForm.password,
        email: ruleForm.email,
        mobile: ruleForm.mobile,
    }
    let res = await addUser(data);
    // console.log(res);
    if (res.data.meta.status != 201) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    emit("over")
    showMessage("添加成功", "success");
    // dialogVisible.value = false;
    handleClose();
}

let changeUsers = async () => {
    let data = {
        email: ruleForm.email,
        mobile: ruleForm.mobile
    }
    // console.log(data);
    let res = await changeUser(user_id.value, data);
    console.log(res);
    if (res.data.meta.status !== 200) {
        showMessage(res.data.meta.msg, "error");
        return
    }
    handleClose();
    emit("over");
    showMessage("修改成功", "success");
}

// 提交
let confirm = async () => {
    // console.log(ruleFormRef.value);
    // 表单校验
    ruleFormRef.value.validate(async (isValide: boolean) => {
        // console.log(isValide);
        // 为true时校验通过可提交，
        if (isValide) {
            // 当有id时表示是编辑用户
            if (user_id.value) {
                changeUsers();
            } else {
                addUsers();
            }
        }
    });

}
let init = (id?: number) => {
    dialogVisible.value = true;
    console.log(id);
    if (id) {
        // console.log("编辑用户");
        rules.username.message = '';
        rules.password.required = false;
        user_id.value = id;
        queryUserMsg(id);
    } else {
        // console.log("添加用户");
        rules.password.required = true;
        user_id.value = null;
    }

}
// 暴露出来
defineExpose({
    init
})





</script>
<style scoped>

</style>