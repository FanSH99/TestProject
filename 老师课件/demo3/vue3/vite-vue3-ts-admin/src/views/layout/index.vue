<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside :width="isCollapse?'64px':'200px'">
          <myaside :isCollapse="isCollapse"></myaside>
        </el-aside>
        <el-container>
          <el-header>
            <my-header :isCollapse="isCollapse" @changeState="changeCollapse"></my-header>
          </el-header>
          <el-main>
            <div class="content">
              <div>
                <el-breadcrumb :separator-icon="ArrowRight">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item v-for="(item,index) in store.state.navList" :key="index">
                    {{item}}
                  </el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="routerview">
                <router-view v-slot="{ Component }">
                  <transition mode="out-in">
                    <component :is="Component" />
                  </transition>
                </router-view>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import myaside from './components/myaside.vue'
import myHeader from './components/myHeader.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useStore } from 'vuex';
let store = useStore();
// 是否折叠菜单栏
let isCollapse = ref(false);
let changeCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>
<style scoped>
.content {
  width: 100%;
  min-height: 100%;
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 10px;
  overflow-x: hidden;
}

.routerview {
  margin-top: 10px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.v-enter-active,
.v-leave-active {
  transition: 0.2s;
}
</style>