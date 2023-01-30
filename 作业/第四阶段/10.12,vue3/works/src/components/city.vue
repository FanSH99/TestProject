<template>
  <div>
    <select name="" id="" v-model="provinceIndex">
      <option v-for="(item, index) in provinceArr" :key="index" :value="index">
        {{ item.provinceName }}
      </option>
    </select>
    <select name="" id="" v-model="cityIndex">
      <option
        v-for="(item, index) in provinceArr[provinceIndex].cityList"
        :key="index"
        :value="index"
      >
        {{ item.cityName }}
      </option>
    </select>
    <select name="" id="" v-model="areaIndex">
      <option
        v-for="(item, index) in provinceArr[provinceIndex].cityList[cityIndex]
          .areaList"
        :key="index"
        :value="index"
      >
        {{ item }}
      </option>
    </select>

    <div class="car">
      id:<input disabled /> 名称:<input v-model="name" />
      <button @click="add">添加</button> &emsp;<input
        type="text"
        name=""
        id=""
        placeholder="请输入商品搜索"
        v-model="keyword"
      />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>date</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in getList" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.Name }}</td>
            <td>{{ getTime }}</td>
            <td><button @click="del(index)">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { reactive } from "vue";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    let provinceIndex = ref(0);
    let cityIndex = ref(0);
    let areaIndex = ref(0);
    let provinceArr = ref([
      {
        provinceName: "河南省",
        cityList: [
          {
            cityName: "郑州市",
            areaList: ["高新区", "中原区", "金水区", "二七区"],
          },
          {
            cityName: "安阳市",
            areaList: ["文峰区", "北关区", "开发区", "汤阴县", "安阳县"],
          },
          {
            cityName: "新乡市",
            areaList: ["红旗区", "原阳县", "新乡新区"],
          },
        ],
      },
      {
        provinceName: "山东省",
        cityList: [
          {
            cityName: "济南市",
            areaList: ["历下区", "槐荫区", "天桥区", "历城区"],
          },
          {
            cityName: "青岛市",
            areaList: ["市南区", "崂山区", "城阳区", "即墨区"],
          },
          {
            cityName: "烟台市",
            areaList: ["牟平区", "威海区", "莱山区", "福山区"],
          },
        ],
      },
      {
        provinceName: "浙江省",
        cityList: [
          {
            cityName: "杭州市",
            areaList: ["历上城区", "滨江区", "萧山区", "余杭区"],
          },
          {
            cityName: "湖州市",
            areaList: ["南浔区", "吴兴区", "长兴县"],
          },
          {
            cityName: "绍兴市",
            areaList: ["悦城区", "柯桥区", "上虞区"],
          },
        ],
      },
    ]);

    watch(provinceIndex, () => {
      cityIndex.value = 0;
      areaIndex.value = 0;
    });
    watch(cityIndex, () => {
      areaIndex.value = 0;
    });

    let carList = ref([
      {
        id: 1,
        Name: "奔驰",
        date: new Date(),
      },
      {
        id: 2,
        Name: "宝马",
        date: new Date(),
      },
      {
        id: 3,
        Name: "法拉利",
        date: new Date(),
      },
      {
        id: 4,
        Name: "劳斯莱斯",
        date: new Date(),
      },
    ]);

    console.log(carList);

    let getTime = computed(() => {
      let time = new Date();
      //   console.log(time);
      let y = time.getFullYear();
      let m = time.getMonth() + 1;
      return y + "年" + m + "月";
    });

    let keyword = ref("");

    let getList = computed(() => {
      console.log(keyword);

      if (keyword.value == "") {
        return carList.value;
      } else {
        let newList: any = [];
        carList.value.forEach((item) => {
          if (item.Name == keyword.value) {
            newList.push(item);
          }
        });
        return newList;
      }
    });

    return {
      provinceIndex,
      cityIndex,
      areaIndex,
      provinceArr,
      carList,
      getTime,
      keyword,
      getList,
    };
  },
  data() {
    return {
      name: "",
      keyword: "",
    };
  },
  methods: {
    add() {
      if (this.name == "") {
        alert("名称不能为空");
        return false;
      }
      console.log(this.name);
      console.log(this.carList.length);
      let length = this.carList.length - 1;
      let lastId = this.carList[length].id;
      console.log(lastId);
      let obj = {
        id: lastId + 1,
        Name: this.name,
        date: new Date(),
      };
      this.carList.push(obj);
    },
    del(index: number) {
      this.carList.splice(index, 1);
    },
  },

  components: {},
});
</script>

<style>
table,
td,
th {
  border: 1px solid #333;
  border-collapse: collapse;
  font-size: 14px;
}
table,
.car {
  margin: 10px 0;
}
td,
th {
  padding: 2px 10px;
}
</style>
