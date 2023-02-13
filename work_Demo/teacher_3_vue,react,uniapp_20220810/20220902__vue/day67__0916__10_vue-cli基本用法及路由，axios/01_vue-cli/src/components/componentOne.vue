<template>
    <div>
        <h1>{{msg}}</h1>
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{red:index==1}">{{item}}</li>
        </ul>
        <button @click="changeMsg">改变字体</button>
        <p>我是子组件二传递过来的数据：{{data}}</p>
    </div>
</template>

<script>
    // 2022年9月16日09:15:59
import bus from '@/utils/bus';

export default {
    data() {
        return {
            msg: "vue基础语法",
            list: ["白浅", "白子画", "风险"],
            data:"",
        }
    },
    methods: {
        changeMsg() {
           /*  this.list[1] = '派大星';
            // 由于vue不能监听对象，所以数据不会自动渲染，可以连接一个空数组解决。
            this.list = this.list.concat([]) */
// 可以直接用$set来改变页面数据
            this.$set(this.list, 1, "无间道");
        }
    },
    created() {
        /* 接收兄弟组件传递过来的数据，用bus.$on("名称",(接收名称)=>{this.自定义数据=接收名称}) 需要引入bus.js文件 */
        bus.$on("sendmsg", (data) => {
            console.log(data);
            this.data = data;
        })
    }
};
</script>
<style>
    .red{
        color:red;
    }
</style>