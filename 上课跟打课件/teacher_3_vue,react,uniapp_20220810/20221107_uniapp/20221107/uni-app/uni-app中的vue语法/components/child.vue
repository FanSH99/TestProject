<template>
    <view>
        我是一个子组件
        {{mymsg}}
        <slot :username="user.name"></slot>
        <button @click="sendUser">向父组件传值</button>
    </view>
</template>

<script>
    import bus from '../bus.js'
    export default {
        name: "child",
        props: {
            // mymsg:{
            // 	type:String,
            // 	default(){
            // 		return"无"
            // 	}
            // }
         			mymsg: String
        },

        data() {
            return {
                user: {
                    name: "张三",
                    age: 18
                }
            };
        },


        methods: {
            sendUser() {
                // 1.使用this.$emit()发送自定义事件，
                // 2.在父组件的子组件标签上接收。
                this.$emit("senduser", this.user);
            }
        },
        created() {
            // 接收父组件传递的值
            bus.$on("gettitle", (title) => {
                console.log(title)
            })

        }
    }
</script>

<style scoped>
    view {
        width: 100%;
        height: 300rpx;
        color: #fff;
        background: red;
    }
</style>
