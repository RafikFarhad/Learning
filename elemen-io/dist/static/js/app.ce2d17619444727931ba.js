webpackJsonp([1],{I0qv:function(e,t){},I1Se:function(e,t){},NHnr:function(e,t,r){"use strict";function n(e){r("I0qv")}function o(e){r("y+EM")}function a(e){r("I1Se")}function s(e){r("wevR")}Object.defineProperty(t,"__esModule",{value:!0});var i=r("7+uW"),l={data:function(){return{activeIndex:"home"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav"},[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[r("router-link",{attrs:{to:{name:"home"}}},[r("el-menu-item",{attrs:{index:"home"}},[e._v("\n                    Basic Application\n                 ")])],1),e._v(" "),r("el-row",{staticClass:"row-bg",attrs:{index:"2",type:"flex",justify:"end"}},[r("router-link",{attrs:{to:{name:"register"}}},[r("el-menu-item",{attrs:{index:"register",active:e.activeIndex}},[e._v("\n                    Register\n                ")])],1),e._v(" "),r("el-menu-item",{attrs:{index:"signup"}},[r("a",{attrs:{href:"#"}},[e._v("\n                    Sign up\n                ")])])],1)],1)],1)},u=[],c={render:m,staticRenderFns:u},f=c,d=r("VU/8"),p=n,v=d(l,f,!1,p,"data-v-5b74e8c6",null),h=v.exports,_={name:"app",components:{Navbar:h}},b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),e._v(" "),r("router-view")],1)},x=[],g={render:b,staticRenderFns:x},w=g,y=r("VU/8"),q=o,$=y(_,w,!1,q,null,null),k=$.exports,R=r("/ocq"),E={},F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Welcome")])])}],C={render:F,staticRenderFns:I},N=C,S=r("VU/8"),P=a,U=S(E,N,!1,P,"data-v-3d63828c",null),V=U.exports,A={data:function(){return{form:{name:"",email:"",password:"",phone:"",country:""}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:6}},[r("div",{staticClass:"box"},[r("h3",[e._v("Register Here")]),e._v(" "),r("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"Name",prop:"name",rules:[{required:!0,message:"Name is required"}]}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Email",prop:"email",rules:[{required:!0,message:"Email is required"},{type:"email",message:"Invalid Email"}]}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Password",prop:"password",rules:[{required:!0,message:"Password is required"}]}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Phone",prop:"phone",rules:[{required:!0,message:"Phone is required"}]}},[r("el-input",{attrs:{type:"phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Country"}},[r("el-input",{model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("Submit")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("Reset")])],1)],1)],1)])],1)],1)},M=[],j={render:H,staticRenderFns:M},z=j,W=r("VU/8"),B=s,J=W(A,z,!1,B,null,null),L=J.exports;i.default.use(R.a);var O=new R.a({routes:[{path:"/",name:"home",component:V},{path:"/register",name:"register",component:L}]}),T=r("zL8q"),Z=r.n(T),D=r("wUZ8"),G=r.n(D);r("tvR6");i.default.config.productionTip=!1,i.default.use(Z.a,{locale:G.a}),new i.default({el:"#app",router:O,template:"<App/>",components:{App:k}})},tvR6:function(e,t){},wevR:function(e,t){},"y+EM":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ce2d17619444727931ba.js.map