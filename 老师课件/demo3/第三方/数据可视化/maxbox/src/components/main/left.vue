<template>
    <div>
        <div class="box">
            <dv-border-box-1>
                <div class="title">
                    就业统计
                </div>
                <div class="tubiao">
                    <dv-conical-column-chart :config="config" style="width:100%;height:155px;" />
                </div>
            </dv-border-box-1>
        </div>
        <div class="box">
            <dv-border-box-9>
                <div class="title">
                    热门专业
                </div>
                <div class="tubiao">
                    <dv-capsule-chart :config="config1" style="width:100%;height:160px" />
                </div>
            </dv-border-box-9>
        </div>
        <div class="box">
            <dv-border-box-10>
                <div class="title">
                    高薪就业
                </div>
                <div class="tubiao shui">
                    <dv-water-level-pond :config="config2" style="width:100%;height:160px" />
                </div>
            </dv-border-box-10>
        </div>
    </div>
</template>

<script>
import config from '@/utils/tubiao1'
import config1 from '@/utils/tubiao2'
export default {
    data() {
        return {
            config: config,
            config1: config1,
            config2: {
                data: [100, 55],
                shape: 'roundRect'
            }
        }
    },
    components: {

    },
    mounted() {

    },
    methods: {

    },
}

</script>
<style scoped lang='less'>
.box {
    width: 100%;
    height: 210px;
    margin-bottom: 10px;
    padding: 0 5px;
}

.title {
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #fff;
    padding: 14px 0;
    padding-bottom: 0;
}

.tubiao {
    width: 100%;
    padding: 0 10px;
}
.shui{
    margin-top: 5px;
}
</style>