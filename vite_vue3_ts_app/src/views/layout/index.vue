<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="isCollapse?'64px':'200px'">
                <myAside :isCollapse="isCollapse" />
            </el-aside>
            <el-container>
                <el-header>
                    <MyHeader :isCollapse="isCollapse" @changeState="changeCollapse"></MyHeader>
                </el-header>
                <el-main>
                    <div class="main">
                        <div class="bread">
                            <el-breadcrumb :separator-icon="ArrowRight">
                                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                <el-breadcrumb-item v-for="(item,index) in store.state.navList" :key="index">{{item}}
                                </el-breadcrumb-item>

                            </el-breadcrumb>
                        </div>
                        <!-- 二级路由 -->
                        <!-- <transition>
                            <RouterView />
                        </transition> -->
                        <router-view v-slot="{ Component }">
                            <transition>
                                <component :is="Component" />
                            </transition>
                        </router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import myAside from './components/myAside.vue';
import MyHeader from './components/myHeader.vue';

import { ArrowRight } from '@element-plus/icons-vue'
import { useStore } from 'vuex';
let store = useStore();
let isCollapse = ref(false);

let changeCollapse = () => {
    isCollapse.value = !isCollapse.value
}

</script>
<style scoped>
.main {
    width: 100%;
    min-height: 100%;
    border-radius: 10px;
    background: #f1f1f1;
    padding: 10px;
    overflow-x: hidden;
}

.bread {
    padding: 15px 0;
}


.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(50px);
}
</style>