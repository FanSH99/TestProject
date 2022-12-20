<template>
    <div>
        <div class="header">
            <img src="http://106.12.150.223:9000/www/img/header.9145357a.png" alt="">
            <p>{{username}} <span v-show="!isCollapse">管理员</span></p>

            <div>
                <el-menu background-color="#304156" text-color="rgb(191,203,217)" class="el-menu-vertical-demo" router
                    active-text-color="#fff" :collapse="isCollapse" unique-opened :default-active="pathname">
                    <!-- index需要绑定的是字符串，否则报错 -->
                    <el-sub-menu :index="item.path" v-for="(item,index) in menusList" :key="index">
                        <template #title>
                            <el-icon v-if="item.id==125">
                                <User />
                            </el-icon>
                            <el-icon v-else-if="item.id==103">
                                <Checked />
                            </el-icon>
                            <el-icon v-else-if="item.id==101">
                                <Goods />
                            </el-icon>
                            <el-icon v-else-if="item.id==145">
                                <Histogram />
                            </el-icon>
                            <el-icon v-else>
                                <Tickets />
                            </el-icon>
                            <span>{{item.authName}}</span>
                        </template>
                        <el-menu-item :index="value.path" v-for="(value,idx) in item.children" :key="idx">
                            <el-icon>
                                <IconMenu />
                            </el-icon>{{value.authName}}
                        </el-menu-item>

                    </el-sub-menu>

                </el-menu>
            </div>
        </div>

    </div>
</template>
<script lang='ts' setup>
import { Ref, ref, watchEffect } from 'vue';
import {
    Menu as IconMenu,
    User,
    Histogram,
    Checked,
    Goods,
    Tickets,
} from '@element-plus/icons-vue'


import { getMenus } from '../../../api/user';
import { showMessage } from '../../../utils/showMessage';
import { useRoute } from 'vue-router';
let route = useRoute();
// 获取本地用户名
let username = ref(localStorage.getItem("USERNAME"))

let props = defineProps({
    isCollapse: Boolean,
})
// 存放所有左侧菜单栏列表
let menusList: Ref<MenusType[]> = ref([])
// 获取左侧菜单栏权限列表 ---需要携带token
let getMenusList = async () => {
    let res = await getMenus();
    // console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    menusList.value = res.data.data;
}
getMenusList();

let pathname = ref();
// 监听路由
watchEffect(() => {
    pathname.value = route.name;
    if (route.name == 'addgoods') {
        pathname.value = 'goods'
    }
})
</script>
<style  scoped>
.header {
    width: 100%;
    text-align: center;
    /* padding: 60px 0; */
    padding-top: 60px;
    padding-bottom: 50px;
}

.header img {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 10px;
}

.header p {
    font-size: 18px;
    color: #fff;
    margin-top: 7px;
}
</style>