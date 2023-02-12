<template>
    <view class="content">
        <!-- <image class="logo" src="/static/logo.png"></image> -->
        <view class="text-area">
            <text class="title">{{title}}</text>
        </view>

        <!-- 数据绑定，双大括号 -->
        <view class="msg">
            {{msg}}
        </view>
        <view class="" v-text="msg"> </view>

        <view class="" v-html="html"> </view>
        <image src="" mode="widthFix"
            src="https://img.youpin.mi-img.com/ferriswheel/2ea8df6d_5077_42d4_b8ae_1a8c5f6ac8d3.jpeg@base@tag=imgScale&F=webp&h=1228&q=90&w=2560">
        </image>
        <!-- @或者v-on绑定事件 -->
        <button @click="clickMe">绑定事件</button>
        <!-- 输入框双双向数据绑定 -->
        <input type="text" placeholder="请输入内容" v-model="msg">
        <view class="">
            {{num}}---{{getSum |getStr("元")}}
        </view>
        <button @click="add(5)">add</button>
        <view class="" v-for="(item,index) in list" :key="index">
            {{item}}
        </view>
        <!-- key作用有利于虚拟dom的数据更新，必须是唯一的。 -->
        <!-- key绑定的必须唯一，比如这里不能用index，因为上面两个标签中的index都有0.1,2,绑定的值不唯一。 -->
        <!-- key表示当前节点的唯一标识， 要想都用index,可以外面再套一个标签，在不同级别就可以用了。-->
        <view class="" v-for="(item,index) in user" :key="item.name">
            {{item.name}}--{{item.age}}
        </view>
        <view v-color="'blue'">
            自定义指令
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello',
                msg: "vue2基础语法",
                html: "<h1>v-html用法</h1>",
                num: 0,
                price:10,
                list: [0, 1, 4, 8, 356, 23],
                user: [{
                        name: "张三",
                        age: 18,
                    },
                    {
                        name: "隶书",
                        age: 23,
                    }
                ],
                people:{
                    name:"小红",
                    age:23,
                }
                
        
            }
        },
        onLoad() {},
        methods: {
            clickMe() {
                console.log("点我了")
            },
            add(n) {
                console.log(this,this.num)
                this.num+=n;
                this.people.age++;
            }
        },
        watch:{
            num(newVal,oldVal){
                console.log(newVal,oldVal);
            },
            people:{
                handler(){
                    console.log("我发生改变了")
                },
                immediate:true,
                deep:true,
            }
        },
        computed:{
            getSum(){
                return this.price*this.num
            }
        },
        filters:{
            getStr(num,text){
                return num+text;
            }
        },
        directives:{
            color:{
                inserted(el,data){
                    el.style.color=data.value
                }
            }
        }
        
        
    }
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 200rpx;
        width: 200rpx;
        margin-top: 200rpx;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50rpx;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }
</style>
