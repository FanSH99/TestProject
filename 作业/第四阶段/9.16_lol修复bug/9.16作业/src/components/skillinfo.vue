<template>
    <div>
        <p>技能{{active | skillid}}介绍：</p>
        <p class="infoTig">{{info[active].description}}</p>
    </div>
</template>
<script>
export default {
    props: {
        active: Number,
        info: Array,
    },
    data() {
        return {
            skillinfo: "",
        }
    },
    filters: {
        // 过滤器名称 括号跟的参数1是要处理的数据，参数2是
        skillid(text) {
            switch (text) {
                case 0: return "一";
                case 1: return "二";
                case 2: return "三";
                case 3: return "四";
                case 4: return "五";
            }
        }
    }
};
</script>