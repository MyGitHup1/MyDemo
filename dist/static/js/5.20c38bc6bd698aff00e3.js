webpackJsonp([5],{"2McK":function(e,t){},YTIe:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("WXYk"),n=r("vLgD"),s={name:"login",data:function(){return{msg:"信贷管理系统",form:{account:"admin",password:"admin@123"},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:16,message:"长度在 3 到 16 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:16,message:"长度在 3 到 16 个字符",trigger:"blur"}]},body:"background-image: url('static/timg.jpg');\n        background-repeat: no-repeat;\n        background-size: 100%;"}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!"),n.a.post("/api/user/login",t.form).then(function(e){if(2e4!==e.data.code)throw new Error("请登录");t.$router.push("/home"),o.a.set(e.data.data.token),t.$store.dispatch("SET_TOKEN",e.data.data.token)}).catch(function(e){console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()}},mounted:function(){document.querySelector("body").setAttribute("style",this.body)},beforeDestroy:function(){document.querySelector("body").removeAttribute("style")}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("div",{staticClass:"loginform"},[r("el-form",{ref:"form",attrs:{"hide-required-asterisk":"",rules:e.rules,model:e.form},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入账号"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("立即登录")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var i=r("VU/8")(s,a,!1,function(e){r("2McK")},"data-v-4f03f4c4",null);t.default=i.exports}});
//# sourceMappingURL=5.20c38bc6bd698aff00e3.js.map