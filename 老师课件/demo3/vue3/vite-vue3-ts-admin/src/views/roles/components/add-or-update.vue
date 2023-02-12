<template>
   <el-dialog
    v-model="dialogVisible"
    :title="roles_id?'编辑角色':'添加角色'"
    width="30%"
    :before-close="handleClose"
  >
  <el-form
    ref="formRef"
    :model="formModel"
    label-width="120px"
  >
  <el-form-item prop="roleName" label="角色名称" :rules="[
        {
          required: true,
          message: '角色名称不能为空',
          trigger: 'blur',
        },
      ]">
      <el-input v-model="formModel.roleName" />
    </el-form-item>
    <el-form-item label="角色描述" >
      <el-input v-model="formModel.roleDesc" />
    </el-form-item>
  </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script lang='ts' setup>
import {addRolesUser,getRolesInfo,updateRoles} from '../../../api/roles'
import { reactive, ref } from 'vue';
import showMessage from '../../../utils/showMessage';
// 控制对话夸显示与隐藏属性
let dialogVisible = ref(false);
// 表单数据对象
let formModel = reactive({
    roleName:"",
    roleDesc:""
})
// 表单组件对象
let formRef = ref();
let handleClose = ()=>{
    dialogVisible.value = false;
    formModel.roleName = "";
    formModel.roleDesc = "";
}
// 当前编辑的角色id
let roles_id = ref()
//  定义初始化方法
let init = async (id:number)=>{
    if(id){
        // 编辑角色
        roles_id.value = id;
        let res = await getRolesInfo(id);
        console.log(res)
        formModel.roleName = res.data.data.roleName;
        formModel.roleDesc = res.data.data.roleDesc;
    }else{
        // 添加角色
        roles_id.value = null;
    }
    dialogVisible.value = true;
}

// 将组件中属性或方法暴露给父组件那么父组件就可以通过ref获取子组件的属性或方法
defineExpose({
    init
})
let emit = defineEmits(["over"])
// 添加角色
let addRoles =async ()=>{
    let data:AddRolesData = {
        roleName:formModel.roleName,
        roleDesc:formModel.roleDesc
    }
    let res = await addRolesUser(data);
    if(res.data.meta.status!==201){
        showMessage(res.data.meta.msg,"error")
        return
    }
    dialogVisible.value = false;
    formModel.roleDesc = "";
    formModel.roleName = "";
    // 告诉父组件子组件请求成功啦麻烦您获取一下最新列表
    emit("over");
    showMessage("添加成功","success")
}

let update = async ()=>{
    let data:AddRolesData = {
        roleName:formModel.roleName,
        roleDesc:formModel.roleDesc
    }
    let res = await updateRoles(roles_id.value,data);
    if(res.data.meta.status!==200){
        showMessage(res.data.meta.msg,"error")
        return
    }
    dialogVisible.value = false;
    formModel.roleDesc = "";
    formModel.roleName = "";
    // 告诉父组件子组件请求成功啦麻烦您获取一下最新列表
    emit("over");
    showMessage("修改成功","success")
}

// 确认 
let confirm = ()=>{
    // 表单校验
    formRef.value.validate((isVal:boolean)=>{
        if(isVal){
            console.log("表单校验通过")
            if(roles_id.value){
                // 编辑角色
                update();
                return
            }
            // 添加角色、
            addRoles();
        }
    })

}
</script>
<style scoped lang='less'>
</style>