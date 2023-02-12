<template>
    <div class="header">
        <el-icon v-show="isCollapse" @click="changCollapse" color="#79bbff">
            <Expand />
        </el-icon>
        <el-icon v-show="!isCollapse" @click="changCollapse">
            <Fold />
        </el-icon>
        <div class="outLogin">
            <el-popconfirm title="您确定要退出吗？" @confirm="outLogin">
                <template #reference>
                    <el-button type="primary" >退出</el-button>
                </template>
            </el-popconfirm>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import {useStore} from 'vuex';
import {useRouter} from 'vue-router'
let store = useStore();
let router = useRouter();
let props = defineProps({
    isCollapse: Boolean
})
// 创建事件发送器
let emit = defineEmits(["changeState"])
let changCollapse = () => {
    // 子组件向父组件传值 发送自定义事件
    emit("changeState")
}

// 退出登录
let outLogin = () => {
    // 删除vuex中存储的token
    store.commit("setToken",null)
    // 删除本地存储的token
    localStorage.removeItem("LOGIN_STATUS_TOKEN");
    localStorage.removeItem("username")
    // 跳转到登录页面
    router.push({
        path:"/login"
    })
}
</script>
<style scoped>
.header {
    line-height: 50px;
    font-size: 25px;

    color: #b4b4b4;
}

.outLogin {
    float: right;
    margin-top: -3px;
}
</style>