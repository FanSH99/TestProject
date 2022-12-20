<template>
    <div class="header">

        <el-icon v-show="isCollapse" @click="changeCollapse" color="#79bbff">
            <Expand />
        </el-icon>
        <el-icon v-show="!isCollapse" @click="changeCollapse">
            <Fold />
        </el-icon>

        <div class="outLogin">
            <el-popconfirm title="您确定要退出吗？" @confirm="outLogin">
                <template #reference>
                    <el-button type="primary">退出</el-button>
                </template>
            </el-popconfirm>
        </div>
    </div>
</template>
<script lang='ts' setup>

import {
    Expand,
    Fold,

} from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

let store = useStore();
let router = useRouter();
let props = defineProps({
    isCollapse: Boolean,
})

// 创建事件发送器
let emit = defineEmits(["changeState"])
let changeCollapse = () => {

    // 子组件向父组件传值
    emit("changeState",)
}
// 退出登录
let outLogin = () => {
    // 删除vuex中存储的token
    store.commit("setToken", null)
    // 删除本地存储的token
    localStorage.removeItem("LOGIN_STATE_TOKEN");
    localStorage.removeItem("USERNAME")
    // 跳转到登录页面
    router.push({
        path: "/login"
    })
}
</script>
<style scoped>
.header {
    height: 50px;
    line-height: 50px;
    font-size: 25px;
    color: #b4b4b4;
}

.outLogin {
    float: right;
    margin-top: -3px;

}
</style>