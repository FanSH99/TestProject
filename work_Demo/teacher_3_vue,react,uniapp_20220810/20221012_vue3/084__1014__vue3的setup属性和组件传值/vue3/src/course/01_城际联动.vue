<template>
    <div>
        <h1>城市联动</h1>
        <div>
            <select name="" id="" v-model="provinceIndex">
                <option :value="index" v-for="(item,index) in provinceArr" :key="index">{{item.provinceName}}</option>
            </select>
            <select name="" id="" v-model="cityIndex">
                <option :value="index" v-for="(item,index) in provinceArr[provinceIndex].cityList" :key="index">
                    {{item.cityName}}
                </option>
            </select>
            <select name="" id="" v-model="areaIndex">
                <option :value="index" v-for="(item,index) in provinceArr[provinceIndex].cityList[cityIndex].areaList"
                    :key="index">{{item}}</option>
            </select>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
    setup() {
        // 2022年10月14日09:08:04
        let provinceIndex = ref(0);
        let cityIndex = ref(0);
        let areaIndex = ref(0)
        let provinceArr = ref([
            {
                provinceName: "河南省",
                cityList: [
                    {
                        cityName: "郑州市",
                        areaList: ["高新区", "中原区", "金水区", "二七区"]
                    }, {
                        cityName: "安阳市",
                        areaList: ["文峰区", "北关区", "开发区", "汤阴县", "安阳县"]
                    }, {
                        cityName: "新乡市",
                        areaList: ["红旗区", "原阳县", "新乡新区"]
                    }
                ]
            },
            {
                provinceName: "山东省",
                cityList: [
                    {
                        cityName: "济南市",
                        areaList: ["历下区", "槐荫区", "天桥区", "历城区"],
                    }, {
                        cityName: "青岛市",
                        areaList: ["市南区", "崂山区", "城阳区", "即墨区"]
                    }, {
                        cityName: "烟台市",
                        areaList: ["牟平区", "威海区", "莱山区", "福山区"]
                    }
                ]
            },
            {
                provinceName: "浙江省",
                cityList: [
                    {
                        cityName: "杭州市",
                        areaList: ["历上城区", "滨江区", "萧山区", "余杭区"],
                    }, {
                        cityName: "湖州市",
                        areaList: ["南浔区", "吴兴区", "长兴县"]
                    }, {
                        cityName: "绍兴市",
                        areaList: ["悦城区", "柯桥区", "上虞区"]
                    }
                ]
            }
        ]);

        // 监听省份和城市索引的变化。
        watch(provinceIndex, () => {
            cityIndex.value = 0;
            areaIndex.value = 0
        })
        watch(cityIndex, () => {
            areaIndex.value = 0;
        })
        return {
            provinceArr,
            provinceIndex,
            cityIndex,
            areaIndex,
        }
    },
    data() {
        return {

        }
    },
})
</script>
<style lang='less' scoped>

</style>