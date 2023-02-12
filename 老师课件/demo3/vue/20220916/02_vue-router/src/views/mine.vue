<template>
    <div>
        <h1>我的</h1>
    </div>
</template>
<script>

    export default {
        
        // 组件内部路由守卫 进入组件之前调用
        beforeRouteEnter(to,from,next){
            console.log(to,"....组件进入之前守卫")
            console.log(from,"....组件进入之前守卫")
            next();
        },
        // 当不同路由对应相同组件发生改变时触发 例如：动态路由之间的切换
        beforeRouteUpdate(to,from,next){
            console.log(to,'...........update')
            console.log(from,"....update")
            next();
        },
        // 路由离开之前调用
        beforeRouteLeave(to,from,next){
            console.log(to,'...........leave')
            console.log(from,"........leave");
            next();
        }

    }

</script>