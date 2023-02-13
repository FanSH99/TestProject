<template>
    <div class="header">
        <div class="left">
            <dv-decoration-10 style="width:100%;height:5px" />
        </div>
        <div class="center">
            <div class="zuo">
                <dv-decoration-8 style="width:100%;height:40px" />
            </div>
            <div class="zhong">
                北游数据中心
            </div>
            <div class="you">
                <dv-decoration-8 :reverse="true" style="width:100%;height:40px;" />
            </div>

        </div>
        <div class="right">
            <dv-decoration-10 style="width:100%;height:5px;transform: rotate(180deg);" />
        </div>

    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {

        }
    }
}
</script>
<style lang='less' scoped>
.header {
    display: flex;
    overflow: hidden;

    .left,
    .right {
        flex: 4;
        width: 100%;
        height: 40px;
    }

    .center {
        flex: 5;
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 50px;

    }

    .zuo,
    .zhong,
    .you {
        flex: 1;
        text-align: center;
        color: #fff;
        font-size: 20px;
    }
}
</style>