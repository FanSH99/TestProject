<template>
    <div>
        <div class="box">
            <dv-border-box-1>
                <div class="title">
                    就业统计
                </div>
                <div class="tubiao">
                    <dv-conical-column-chart :config="config1" style="width:98%;height:150px;" />
                </div>
            </dv-border-box-1>
        </div>
        <div class="box">
            <dv-border-box-9>
                <div class="title">
                    热门专业
                </div>
                <div class="tubiao">
                    <dv-capsule-chart :config="config2" />
                </div>
            </dv-border-box-9>
        </div>
        <div class="box">
            <dv-border-box-10>
                <div class="title">
                    高薪就业
                </div>
                <div class="tubiao">
                    <dv-water-level-pond :config="config3" style="width:100%;height:160px" />
                </div>
            </dv-border-box-10>
        </div>
    </div>
</template>
<script>
import config1 from '@/utils/config1';
import config2 from '@/utils/config2';
export default {
    name: '',
    data() {
        return {
            config1: config1,
            config2: config2,
            config3: {
                data: [100, 55],//第一个数控制显示的百分比数。
                shape: 'roundRect',
            }
        }
    }
}
</script>
<style lang='less' scoped>
.box {
    width: 100%;
    height: 210px;
    margin-bottom: 10px;
    padding: 5px;
}

.title {
    width: 100%;
    font-size: 15px;
    text-align: center;
    padding: 14px 0;
    color: #fff;
}

.tubiao {
    width: 100%;
    padding: 0 14px;
    box-sizing: border-box;
}
</style>