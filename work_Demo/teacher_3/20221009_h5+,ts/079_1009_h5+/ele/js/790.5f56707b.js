"use strict";(self["webpackChunkele"]=self["webpackChunkele"]||[]).push([[790],{2790:function(t,i,a){a.r(i),a.d(i,{default:function(){return C}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"info"},[i("myheader",{attrs:{info:t.info}}),i("van-tabs",{attrs:{color:"#3190e8",animated:"",swipeable:""},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[i("van-tab",{attrs:{title:"商品"}},[i("foodsList",{attrs:{restaurant_id:t.id},on:{over:t.over}})],1),i("van-tab",{attrs:{title:"评价"}},[i("pingjia")],1)],1),t.info&&t.isLoading?t._e():i("div",{staticClass:"loading"},[i("img",{attrs:{src:a(3759),alt:""}})]),i("cart",{directives:[{name:"show",rawName:"v-show",value:0==t.active,expression:"active==0"}],attrs:{tip:t.tip,float_minimum_order_amount:t.float_minimum_order_amount}})],1)},e=[],n=function(){var t=this,i=t._self._c;return t.info?i("div",{staticClass:"header"},[i("div",{staticClass:"content"},[i("div",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:`https://elm.cangdu.org/img/${t.info.image_path}`,expression:"`https://elm.cangdu.org/img/${info.image_path}`"}],attrs:{alt:""}})]),i("div",{staticClass:"content_msg"},[i("div",{staticClass:"shopName"},[t._v(t._s(t.info.name))]),i("div",{staticClass:"shop_title"},[t._v("商家配送／分钟送达／配送费¥"+t._s(t.info.float_delivery_fee))]),i("div",{staticClass:"shop_msg"},[t._v("公告： "+t._s(t.info.promotion_info)+" ")])]),i("van-icon",{staticClass:"right",attrs:{name:"arrow"}}),i("van-icon",{staticClass:"left",attrs:{name:"arrow-left"},on:{click:function(i){return t.$router.go(-1)}}})],1),0!=t.info.activities.length?i("div",{staticClass:"tip"},[i("div",[i("van-tag",{attrs:{color:"#"+t.info.activities[0].icon_color}},[t._v(t._s(t.info.activities[0].icon_name))]),t._v(" "+t._s(t.info.activities[0].description)+" ")],1),i("div",[t._v(" "+t._s(t.info.activities.length)+" 个活动 "),i("van-icon",{attrs:{name:"arrow"}})],1)]):t._e(),i("div",{staticClass:"bg_img"},[i("img",{attrs:{src:`https://elm.cangdu.org/img/${t.info.image_path}`,alt:""}}),i("div",{staticClass:"msk"})])]):t._e()},o=[],r={props:["info"],data(){return{}}},c=r,l=a(1001),u=(0,l.Z)(c,n,o,!1,null,"c5c8e46e",null),d=u.exports,m=a(9998);let v=()=>Promise.all([a.e(922),a.e(501)]).then(a.bind(a,2501)),f=()=>a.e(337).then(a.bind(a,1337)),_=()=>Promise.all([a.e(922),a.e(213)]).then(a.bind(a,4213));var g={data(){return{id:0,info:null,active:0,isLoading:!1,tip:null,float_minimum_order_amount:0}},components:{myheader:d,foodsList:v,cart:f,pingjia:_},async created(){this.id=this.$route.params.id,this.$store.commit("setId",this.id);let t=await(0,m.fc)(this.id);this.info=t.data,this.tip=t.data.piecewise_agent_fee.tips,this.float_minimum_order_amount=t.data.float_minimum_order_amount},methods:{over(){this.isLoading=!0}}},p=g,h=(0,l.Z)(p,s,e,!1,null,"3390da10",null),C=h.exports},9998:function(t,i,a){a.d(i,{NJ:function(){return c},SF:function(){return o},UJ:function(){return n},VJ:function(){return r},fc:function(){return e}});var s=a(6938);let e=t=>(0,s.P)(`/shopping/restaurant/${t}`),n=t=>(0,s.P)("/shopping/v2/menu",t),o=t=>(0,s.P)(`/ugc/v2/restaurants/${t}/ratings/scores`),r=(t,i)=>(0,s.P)(`/ugc/v2/restaurants/${t}/ratings`,i),c=t=>(0,s.P)(`/ugc/v2/restaurants/${t}/ratings/tags`)},3759:function(t,i,a){t.exports=a.p+"img/info.40f8ade5.svg"}}]);
//# sourceMappingURL=790.5f56707b.js.map