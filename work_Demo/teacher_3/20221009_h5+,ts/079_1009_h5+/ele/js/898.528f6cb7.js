"use strict";(self["webpackChunkele"]=self["webpackChunkele"]||[]).push([[898],{3136:function(t,s,e){e.d(s,{Z:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"shops",on:{click:t.goInfo}},[s("div",{staticClass:"shop_img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:`https://elm.cangdu.org/img/${t.shopInfo.image_path}`,expression:"`https://elm.cangdu.org/img/${shopInfo.image_path}`"}],attrs:{alt:""}})]),s("div",{staticClass:"shop_info"},[s("div",{staticStyle:{display:"flex",position:"relative"}},[s("van-tag",{attrs:{color:"#3190e8"}},[t._v("品牌")]),s("span",{staticClass:"ys"},[t._v(t._s(t.shopInfo.name))]),s("ul",{staticClass:"ul"},t._l(t.shopInfo.supports,(function(e,i){return s("li",{key:i},[t._v(t._s(e.icon_name))])})),0)],1),s("div",{staticClass:"shop_rot"},[s("van-rate",{attrs:{size:8,color:"#ffd21e","void-icon":"star","void-color":"#eee"},model:{value:t.shopInfo.rating,callback:function(s){t.$set(t.shopInfo,"rating",s)},expression:"shopInfo.rating"}}),s("span",{staticClass:"rate"},[t._v(t._s(t.shopInfo.rating))]),s("span",{staticClass:"sale"},[t._v("月销"+t._s(t.shopInfo.recent_order_num)+"单")]),s("span",{staticClass:"tag"},[t.shopInfo.delivery_mode?s("van-tag",{attrs:{type:"primary"}},[t._v(t._s(t.shopInfo.delivery_mode.text))]):t._e(),t._l(t.shopInfo.supports,(function(e,i){return s("span",{key:i},["准"==e.icon_name?s("van-tag",{staticClass:"s",attrs:{plain:"",type:"primary"}},[t._v("准时达")]):t._e()],1)}))],2)],1),s("div",{staticClass:"shop_song"},[s("span",[t._v(" ￥"+t._s(t.shopInfo.float_minimum_order_amount)+"起送 / 配送费约¥"+t._s(t.shopInfo.float_delivery_fee)+" ")]),s("span",[s("span",{staticClass:"gl"},[t._v(t._s(t.shopInfo.distance)+" /")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.shopInfo.order_lead_time))])])])])])},a=[],o=(e(7658),{props:{shopInfo:Object},data(){return{value:8}},methods:{goInfo(){this.$router.push({path:"/shop/info/"+this.shopInfo.id})}}}),n=o,r=e(1001),l=(0,r.Z)(n,i,a,!1,null,"63f34dfb",null),u=l.exports},7898:function(t,s,e){e.r(s),e.d(s,{default:function(){return _}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"page"},[s("my-nav-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[s("van-icon",{attrs:{name:"arrow-left"},on:{click:function(s){return t.$router.go(-1)}}})]},proxy:!0},{key:"center",fn:function(){return[s("div",[t._v(t._s(t.title))])]},proxy:!0}])}),s("div",{staticClass:"mymenu"},[s("van-dropdown-menu",[s("van-dropdown-item",{ref:"item1",attrs:{title:t.title}},[s("cate-list",{attrs:{latitude:t.query.latitude,longitude:t.query.longitude},on:{sendcate:t.getcate}})],1),s("van-dropdown-item",{ref:"item2",attrs:{title:t.sortTitle}},[s("sort-list",{on:{sendsort:t.getsortId}})],1),s("van-dropdown-item",{ref:"item3",attrs:{title:"筛选"}},[s("select-shop",{attrs:{latitude:t.query.latitude,longitude:t.query.longitude},on:{sendidlist:t.getList}})],1)],1)],1),0!==t.shopList.length||t.isData?t._e():s("div",{staticClass:"loading"},t._l(6,(function(t){return s("img",{key:t,attrs:{src:e(3005),alt:""}})})),0),s("p",{directives:[{name:"show",rawName:"v-show",value:t.isData,expression:"isData"}],staticClass:"nodata"},[t._v("没有更多数据~~")]),0!=t.shopList.length?s("div",{staticClass:"shopList"},[s("div",{staticClass:"list"},t._l(t.shopList,(function(t,e){return s("div",{key:e,staticClass:"list_item"},[s("myshop",{attrs:{shopInfo:t}})],1)})),0)]):t._e()],1)},a=[],o=(e(7658),e(3136)),n=e(2419);let r=()=>e.e(398).then(e.bind(e,3398)),l=()=>e.e(566).then(e.bind(e,2566)),u=()=>e.e(534).then(e.bind(e,9534));var d={data(){return{title:"",shopList:[],query:{latitude:"",longitude:"",restaurant_category_id:"",order_by:4,delivery_mode:[],support_ids:[],restaurant_category_ids:[]},sortTitle:"智能排序",isData:!1}},components:{myshop:o.Z,cateList:r,sortList:l,selectShop:u},created(){let{latitude:t,longitude:s,id:e,title:i}=this.$route.query;console.log(e),this.title=i,this.query.latitude=t,this.query.longitude=s,this.query.restaurant_category_id=e,this.getDataList()},methods:{async getDataList(){this.shopList=[],this.isData=!1;let t=await(0,n.IU)(this.query);console.log(t),this.shopList=t.data,0==t.data.length&&(this.isData=!0)},getcate(t,s){this.query.restaurant_category_ids=[],this.title=t,console.log(s),this.query.restaurant_category_ids.push(s),this.getDataList(),this.$refs.item1.toggle(!1)},getsortId(t,s){this.query.order_by=t,this.sortTitle=s,this.getDataList(),this.$refs.item2.toggle(!1)},getList(t,s){this.query.delivery_mode=[],this.query.support_ids=[],t.forEach((t=>{this.query.delivery_mode.push(t.id)})),s.forEach((t=>{this.query.support_ids.push(t.id)})),this.$refs.item3.toggle(!1),this.getDataList()}}},p=d,h=e(1001),c=(0,h.Z)(p,i,a,!1,null,"5b34ffeb",null),_=c.exports},2419:function(t,s,e){e.d(s,{IU:function(){return n},k$:function(){return a},k_:function(){return o}});var i=e(6938);let a=t=>(0,i.P)(`/v2/pois/${t}`),o=()=>(0,i.P)("/v2/index_entry"),n=t=>(0,i.P)("/shopping/restaurants",t)},3005:function(t,s,e){t.exports=e.p+"img/loading.7019a6ca.svg"}}]);
//# sourceMappingURL=898.528f6cb7.js.map