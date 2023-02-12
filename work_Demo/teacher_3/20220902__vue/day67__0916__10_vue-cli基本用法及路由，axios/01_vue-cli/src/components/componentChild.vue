<template>
    <div class="child">
        <p>我是子组件 --{{num}}</p>
        <p>{{mymsg}}</p>
        <button @click="num++">num++</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: 0
        };
    },
 /* 
 2022年9月16日9:20:23
 // 接收父组件传递过来的普通数据，用数组接收即可直接使用，和data里的数据使用方法一致。props: ["mymsg"],
    // 如果想要设置接收数据的类型和如果没有接收到时显示的默认数据，要用对象接收， 数据名：{type：类型，default：function（）{return 默认数据即可}} */
    props: {
        mymsg: {
            type: String,
            default: function () {
                return "哈哈哈哈"
            }
        }
        
    },
    methods: {
        getMsg() {
            console.log(this.mymsg);
            }
    },
    created() {
            // 在子组件中使用this.$emit向父组件发送自定义事件。在父组件子组件标签接收
            this.$emit("sendnum",this.num)
        }
    }
</script>

<style>
    .child{
        width:400px;
        height: 200px;
        background: yellow;
    }
</style>