"use strict";(self["webpackChunkele"]=self["webpackChunkele"]||[]).push([[535],{535:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("my-nav-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[e("div",{staticClass:"lefts"},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}})],1)]},proxy:!0},{key:"center",fn:function(){return[e("div",[t._v("账户信息")])]},proxy:!0}])}),t.userInfo?e("div",{staticClass:"user"},[e("van-cell",{attrs:{"is-link":""},on:{click:t.changeFile},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"custom-title"},[t._v("头像")])]},proxy:!0},{key:"right-icon",fn:function(){return[e("img",{staticClass:"acatar",attrs:{src:"https://elm.cangdu.org/img/"+t.userInfo.avatar,alt:""}}),e("van-icon",{staticClass:"right",attrs:{name:"arrow"}})]},proxy:!0}],null,!1,71080773)}),e("van-cell",{attrs:{title:"用户名","is-link":"",value:t.userInfo.username}}),e("van-cell",{attrs:{title:"收货地址","is-link":""}})],1):t._e(),t.userInfo?e("div",[e("p",{staticClass:"bd"},[t._v("账号绑定")]),e("van-cell",{attrs:{title:"手机","is-link":"",icon:"phone-o"}})],1):t._e(),t.userInfo?e("div",[e("p",{staticClass:"bd"},[t._v("安全设置")]),e("van-cell",{attrs:{title:"登录密码","is-link":"",value:"修改"}})],1):t._e(),t.userInfo?e("div",{staticStyle:{width:"95%",margin:"20px auto"}},[e("van-button",{attrs:{color:"#d8584a",block:"",size:"small"}},[t._v("退出登录")])],1):t._e(),e("input",{ref:"myfile",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.fileChange}})],1)},n=[],l=s(2900),i=s(8848),r={data(){return{userInfo:null}},async created(){let t=await(0,l.f)({user_id:this.$store.state.user_id});console.log(t),0!=t.data.status?this.userInfo=t.data:this.userInfo=null},methods:{changeFile(){console.log("选择图片"),console.dir(this.$refs.myfile),this.$refs.myfile.click()},async fileChange(t){console.log(t);let e=t.target.files[0];console.log(e);let s=new FormData;s.append("file",e);let a=await(0,l.c)(this.$store.state.user_id,s);console.log(a),i.Z.success("上传成功"),this.userInfo.avatar=a.data.image_path}}},o=r,c=s(1001),u=(0,c.Z)(o,a,n,!1,null,"466c2d38",null),f=u.exports},2900:function(t,e,s){s.d(e,{c:function(){return l},f:function(){return n}});var a=s(6938);let n=t=>(0,a.P)("/v1/user",t),l=(t,e)=>(0,a.j)(`/eus/v1/users/${t}/avatar`,e)}}]);
//# sourceMappingURL=535.dc602329.js.map