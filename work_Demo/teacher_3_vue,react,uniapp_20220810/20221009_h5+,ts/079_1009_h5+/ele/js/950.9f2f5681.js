"use strict";(self["webpackChunkele"]=self["webpackChunkele"]||[]).push([[950],{4950:function(t,s,e){e.r(s),e.d(s,{default:function(){return h}});e(7658);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"page"},[s("my-nav-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[s("van-icon",{attrs:{name:"arrow-left"},on:{click:function(s){return t.$router.go(-1)}}})]},proxy:!0},{key:"center",fn:function(){return[t.city?s("div",[t._v(t._s(t.city.name))]):t._e()]},proxy:!0},{key:"right",fn:function(){return[s("div",{on:{click:function(s){return t.$router.push("/city")}}},[t._v("切换城市")])]},proxy:!0}])}),s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{type:"search",placeholder:"输入学校、商务楼、地址"},domProps:{value:t.keywords},on:{input:function(s){s.target.composing||(t.keywords=s.target.value)}}}),s("div",{on:{click:t.search}},[t._v("提交")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.list.length,expression:"list.length != 0"}],staticClass:"list"},[s("div",{staticClass:"searchList"},t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"listitme",on:{click:function(s){return t.goHome(e)}}},[s("p",{staticClass:"p1"},[t._v(t._s(e.name))]),s("p",{staticClass:"p2"},[t._v(t._s(e.address))])])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.list.length&&!t.isData,expression:"list.length == 0 && !isData"}]},[s("div",{staticClass:"title"},[t._v("搜索历史：")]),s("div",{staticClass:"searchList"},[t._l(t.historyList,(function(e,i){return s("div",{key:i,staticClass:"listitme",on:{click:function(s){return t.goHome(e)}}},[s("p",{staticClass:"p1"},[t._v(t._s(e.name))]),s("p",{staticClass:"p2"},[t._v(t._s(e.address))])])})),0!=t.historyList.length?s("div",{staticClass:"clear",on:{click:t.clearHistory}},[t._v(" 清空所有 ")]):t._e()],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isData,expression:"isData"}],staticClass:"nodata"},[t._v("抱歉!无搜索结果")])],1)},a=[],r=e(1076),n=e(6870),o=e(8848),c={data(){return{city_id:0,keywords:"",list:[],city:null,isData:!1,historyList:[]}},async created(){this.city_id=this.$route.params.id;let t=await(0,r.L9)(this.city_id);this.city=t.data;let s=localStorage.getItem("cityList");this.historyList=s?JSON.parse(s):[]},methods:{async search(){if(!this.keywords)return void(0,o.Z)("内容为空");let t={city_id:this.city_id,keyword:this.keywords,type:"search"};(0,n.Q)();let s=await(0,r.bM)(t);console.log(s),this.list=s.data,0==s.data.length?this.isData=!0:this.isData=!1,(0,n.Z)()},goHome(t){localStorage.setItem("geohash",t.geohash),this.$router.push({path:"/home?geohash="+t.geohash});let s=localStorage.getItem("cityList");s=s?JSON.parse(s):[];let e=s.findIndex((s=>s.name===t.name));-1==e&&s.push(t),localStorage.setItem("cityList",JSON.stringify(s))},clearHistory(){localStorage.removeItem("cityList"),this.historyList=[]}},watch:{keywords(t){""==t&&(this.list=[])}}},l=c,u=e(1001),d=(0,u.Z)(l,i,a,!1,null,"5b104ad4",null),h=d.exports},1076:function(t,s,e){e.d(s,{L9:function(){return n},SN:function(){return a},bM:function(){return r}});var i=e(6938);let a=t=>(0,i.P)("/v1/cities",t),r=t=>(0,i.P)("/v1/pois",t),n=t=>(0,i.P)(`/v1/cities/${t}`)},6870:function(t,s,e){e.d(s,{Q:function(){return a},Z:function(){return r}});var i=e(8848);let a=()=>{(0,i.Z)({type:"loading",message:"加载中...",duration:0,forbidClick:!0})},r=()=>{i.Z.clear()}}}]);
//# sourceMappingURL=950.9f2f5681.js.map