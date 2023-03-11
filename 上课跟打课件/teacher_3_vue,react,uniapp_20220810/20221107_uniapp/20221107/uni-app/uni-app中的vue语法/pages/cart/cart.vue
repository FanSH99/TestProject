<template>
    <view class="">
        <view class="" v-if="user">
            {{user.name}}--{{user.age}}
        </view>
        <mychild :mymsg="msg" @senduser="getUser">
            <!-- 作用域插槽 -->
            <view>
               作用域插槽
            </view>
            <template #default="props">
                啦啦啦啦具名作用域插槽；{{props.username}}
            </template>
        </mychild>
        <twochild ref="two">
            <!-- 这里需要加上{}，如果不加{}的话，后面使用时候title为{title:""} ，加上则直接显示title的内容了，-->
            <template #header="{title}">头部插槽具名{{title}}</template>
            哈哈哈哈插槽
            <template #footer>底部插槽具名</template>
        </twochild>
        <view class="" ref="myview">
            我是一个view标签
        </view>
        <button @click="getView">获取view</button>
        <view class="" v-for="(item,index) in list" :key="index">
            {{item}}
        </view>
        <button @click="changgList">改变list</button>
        <button @click="getRequest">跨域请求</button>
        <button @click="goInfo">详情页</button>
    </view>
</template>

<script>
    import mychild from '../../components/child.vue';
    import twochild from '../../components/two.vue'
    export default{
        data(){
            return{
                msg:"我是父组件中的数据",
                list:[0,1,4,5],
                user:null
            }
        },
        components:{
            mychild,
            twochild,
        },
        methods:{
            getUser(user){
                console.log(user,user.name,user.age);
                this.user=user;
            },
            getView(){
                console.log(this.$refs.myview);
                console.log(this.$refs.two.title)
            },
            changgList(){
                // vue中不可以直接监听数组中每一项的改变，而是通过处理数组的的7中方法
                // this.list[0]=100;
                this.$set(this.list,0,100)
                this.$nextTick(()=>{
                    console.log("dom更新结束之后执行")
                })
                
            },
            getRequest(){
                uni.request({
                    url: '/douyu/RoomApi/live?offset=0&limit=20',
                    method: 'GET',
                    data: {},
                    success: res => {
                        console.log('请求成功',res);
                    },
                    fail: err=> {
                        console.log('请求失败',err);
                    },
                    complete: () => {}
                });
            },
            // 注意uni中不能用vuex和vue-router
            goInfo(){
                // 跳转路由
                // 注意，'navigateTo:fail can not navigateTo a tabbar page'
                uni.navigateTo({
                    url: '/pages/info/info?id=1111',
                    success: res => {},
                    fail: (err) => {
                        console.log("跳转失败",err);
                    },
                    complete: () => {}
                });
            }
        }
    }
</script>

<style>
</style>