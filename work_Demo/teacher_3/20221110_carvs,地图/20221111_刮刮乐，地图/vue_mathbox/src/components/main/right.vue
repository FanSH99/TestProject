<template>
    <div>
        <div class="box">

            <dv-border-box-13>
                <div class="title">
                    生源信息
                </div>
                <div class="tubiao">
                    <dv-scroll-ranking-board :config="config4" style="width:100%;height:150px" />
                </div>
            </dv-border-box-13>
        </div>

        <div class="box">
            <dv-border-box-10>
                <div class="title">
                    就业统计
                </div>
                <div class="tubiao">
                    <dv-scroll-board :config="config5" style="width:100%;height:150px" />
                </div>
            </dv-border-box-10>
        </div>
        <div class="box">
            <dv-border-box-8>
                <div class="title">
                    就业统计
                </div>
                <div class="tubiao">
                    <dv-active-ring-chart :config="config6" style="width:100%;height:150px" />
                </div>
            </dv-border-box-8>

        </div>
    </div>
</template>
<script>
import config4 from '@/utils/config4'
import config5 from '@/utils/config5'
import config6 from '@/utils/config6'

export default {
    name: '',
    data() {
        return {
            config4,
            config5,
            config6,
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