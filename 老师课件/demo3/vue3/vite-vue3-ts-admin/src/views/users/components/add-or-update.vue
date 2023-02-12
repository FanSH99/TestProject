<template>
    <el-dialog v-model="dialogVisible" :title="user_id?'编辑用户':'添加用户'" width="50%" :before-close="handleClose">
        <el-form :model="formModel" label-width="80px" :rules="rules" ref="fromRef">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formModel.username" :disabled="user_id?true:false" />
            </el-form-item>
            <el-form-item label="密码" prop="password" v-show="!user_id">
                <el-input v-model="formModel.password" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="formModel.email" />
            </el-form-item>
            <el-form-item label="手机" prop="mobile">
                <el-input v-model="formModel.mobile" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang='ts' setup>
import { addUser, getUsers, updateUser } from '../../../api/user'
import { reactive, ref, toRefs } from 'vue';
import showMessage from '../../../utils/showMessage';
import { ru } from 'element-plus/es/locale';
// 对话框是否显示
let dialogVisible = ref(false)
// 定义表单数据对象
let formModel = reactive({
    username: "",
    password: "",
    email: "",
    mobile: ""
})
// from组件实例
let fromRef = ref();
// 关闭对话框前回调
let handleClose = () => {
    // 重置表单
    fromRef.value.resetFields();
    formModel.username = "";
    formModel.password = "";
    formModel.email = "";
    formModel.mobile = ""
    dialogVisible.value = false
}
// 定义表单校验规则
let rules = reactive({
    username: { required: true, message: "用户名不能为空", trigger: "blur" },
    password: { required: true, message: "密码不能为空", trigger: "blur" },
    email: [{
        required: true,
        message: '请输入邮箱地址',
        trigger: 'blur',
    },
    {
        type: 'email',
        message: '请输入正确的邮箱地址',
        trigger: ['blur', 'change'],
    },],
    mobile: { required: true, message: "手机号不能为空", trigger: "blur" },
})
let emit = defineEmits(['over'])

// 添加用户
let addUsers = async () => {
    console.log(formModel)
    let data: AddUserData = {
        username: formModel.username,
        password: formModel.password,
        email: formModel.email,
        mobile: formModel.mobile
    }
    let res = await addUser(data);
    console.log(res)
    handleClose();
    if (res.data.meta.status != 201) {
        showMessage(res.data.meta.msg, "error")
        return
    }
    // 子组件告诉父组件添加成功啦
    emit("over")
    showMessage("添加成功", "success")
}
// 当前要编辑的用户id
let user_id = ref();
// 获取当前要编辑的用户信息
let getUsermsg = async (id: number) => {
    let res = await getUsers(id)
    console.log(res)
    formModel.username = res.data.data.username;
    formModel.email = res.data.data.email;
    formModel.mobile = res.data.data.mobile
}

// 确定操作
let confirm = () => {
    // 表单校验
    fromRef.value.validate(async (isValida: boolean) => {
        // isValida为true 则表示校验通过
        if (isValida) {
            if (user_id.value) {
                // 编辑用户
                let res = await updateUser(user_id.value, { email: formModel.email, mobile: formModel.mobile });
                console.log(res)
                if (res.data.meta.status !== 200) {
                    showMessage(res.data.meta.msg, "error")
                    return
                }
                // 关闭弹出框
                handleClose();
                // 向父组件发送自定义事件告诉父组件更新成功啦
                emit("over");
                showMessage("修改成功", "success")
                return
            }
            // 添加用户
            addUsers();
        }
    })
}
// 定义一个初始化方法
let init = (id?: number) => {
    console.log(id)
    dialogVisible.value = true;
    if (id) {
        console.log("编辑用户")
        // 密码不能是必填项
        rules.password.required  =false;
        user_id.value = id;
        getUsermsg(id)
    } else {
        console.log("添加用户")
        user_id.value = null
        rules.password.required  =true;
    }
}
//将init方法暴露给父组件
defineExpose({
    init
})
</script>
<style scoped lang='less'>

</style>