<template>
    <div>
        <h1>城级联动案例</h1>
    </div>
    <div>
        {{provinceIndex}}
        <select v-model="provinceIndex">
            <option v-for="(item,index) in provinceArray" :key="index" :value="index" > {{item.provinceName}}</option>
        </select>
        <select v-model="cityIndex">
            <option v-for="(item,index) in provinceArray[provinceIndex].cityList" :value="index">{{item.cityName}}</option>
        </select>
        <select v-model="areaIndex">
            <option v-for="(item,index) in provinceArray[provinceIndex].cityList[cityIndex].areaList" :value="index">{{item}}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref,watch} from 'vue'
export default defineComponent({
    setup() {
        let provinceIndex = ref(0)
        let cityIndex = ref(0)
        let areaIndex = ref(0)
        // 声明响应式数组 存放城市列表
        let provinceArray = ref([
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
                provinceName: "福建省",
                cityList: [
                    {
                        cityName: "福州市",
                        areaList: ["滨海区", "吴岩区"]
                    }, {
                        cityName: "厦门市",
                        areaList: ["集美区", "翔安区", "思明区"]
                    }
                ]
            }, {
                provinceName: "河北省",
                cityList: [
                    {
                        cityName: "石家庄",
                        areaList: ["A区", "B区"]
                    }, {
                        cityName: "唐山市",
                        areaList: ["一区", "二区", "三区"]
                    }
                ]
            }
        ])
        // 监听当前省级索引变化
        watch(provinceIndex,()=>{
            cityIndex.value = 0;
            areaIndex.value = 0;
        })

        // 监听当前城市改变
        watch(cityIndex,()=>{
            areaIndex.value = 0
        })
        return {
            provinceArray,
            provinceIndex,
            cityIndex,
            areaIndex
        }
    }
})
</script>
<style scoped lang='less'>

</style>