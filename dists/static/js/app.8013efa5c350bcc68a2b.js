webpackJsonp([10],{"2P9j":function(t,e){},"2Wh+":function(t,e){},Bkjz:function(t,e){},LwEd:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App",data:function(){return{}}},i,!1,function(t){n("2Wh+")},null,null).exports,s=n("Gu7T"),r=n.n(s),l=n("/ocq"),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""}},[n("el-menu-item",{staticStyle:{width:"230px"},attrs:{index:"home",route:"/home"}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),t._v(" "),n("el-menu-item",{attrs:{index:"loan-input",route:"/loan-input"}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("贷款申请")])]),t._v(" "),n("el-menu-item",{attrs:{index:"input-manager",route:"/input-manager"}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("申请管理")])]),t._v(" "),n("el-submenu",{attrs:{index:"approve","show-timeout":3e3,"hide-timeout":3e3,route:"/approve"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",[t._v("贷款审批")])]),t._v(" "),n("el-menu-item",{attrs:{index:"approve-first",route:"/approve/first"}},[n("i",{staticClass:"el-icon-lollipop"}),t._v(" "),n("span",[t._v("初审")])]),t._v(" "),n("el-menu-item",{attrs:{index:"approve-final",route:"/approve/final"}},[n("i",{staticClass:"el-icon-lollipop"}),t._v(" "),n("span",[t._v("终审")])])],2),t._v(" "),n("el-menu-item",{attrs:{index:"obj-manage",route:"/obj-manage"}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("标的管理")])]),t._v(" "),n("el-submenu",{attrs:{index:"admin",route:"/admin"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",[t._v("权限管理")])]),t._v(" "),n("el-menu-item",{attrs:{index:"admin-createAdmin",route:"/permission/createAdmin"}},[n("i",{staticClass:"el-icon-lollipop"}),t._v(" "),n("span",[t._v("创建管理员")])]),t._v(" "),n("el-menu-item",{attrs:{index:"admin-showLists",route:"/permission/showLists"}},[n("i",{staticClass:"el-icon-lollipop"}),t._v(" "),n("span",[t._v("列表展示")])])],2)],1)],1)},staticRenderFns:[]};var u=n("VU/8")({name:"slider",data:function(){return{msg:"Welcome to Your Vue.js App",isCollapse:!1}},methods:{toActive:function(){}},mounted:function(){this.toActive()}},c,!1,function(t){n("LwEd")},"data-v-63ebbc7c",null).exports,d=n("vLgD"),m={data:function(){return{msg:"Welcome to Your Vue.js App",navs:[],content:"隐藏侧边栏"}},methods:{isShowSlider:function(){this.$store.state.isShowSlider=!this.$store.state.isShowSlider,this.$store.state.setSlider();var t=this.$refs.i,e=this.$refs.asd;console.log(e),"el-icon-s-fold"===t.className&&"隐藏侧边栏"===this.content?(t.className="el-icon-s-unfold",this.content="显示侧边栏"):(t.className="el-icon-s-fold",this.content="隐藏侧边栏")},getRouter:function(){this.$route.matched&&(this.navs=this.$route.matched)},handleCommand:function(t){var e=this;"loginOut"===t&&d.a.post("/api/user/logout").then(function(t){e.$router.push("/login"),console.log("已退出",t),e.$store.dispatch("Logout")}).catch(function(t){e.$router.push("/login"),console.log("退出错误",t)})}},created:function(){this.getRouter()},watch:{$route:function(){this.getRouter()}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navs"},[n("div",{staticClass:"sliderShow",on:{click:t.isShowSlider}},[n("el-popover",{attrs:{placement:"top-start",content:t.content,trigger:"hover"}},[n("el-button",{staticStyle:{border:"0"},attrs:{slot:"reference"},slot:"reference"},[t._t("default",[n("i",{ref:"i",staticClass:"el-icon-s-fold"})])],2)],1)],1),t._v(" "),n("div",{staticClass:"nav"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.navs,function(e,o){return n("el-breadcrumb-item",{directives:[{name:"show",rawName:"v-show",value:t.navs[o].meta.title,expression:"navs[i].meta.title"}],key:o},[t._v(t._s(e.meta.title))])}),1)],1),t._v(" "),n("div",{staticClass:"right"},[n("el-dropdown",{attrs:{trigger:"hover"},on:{command:t.handleCommand}},[n("el-button",{attrs:{plain:"",type:"text"}},[n("span",[t._v("欢迎，-"+t._s(this.$store.state.userName))]),t._v(" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"loginOut"}},[t._v("退出")])],1)],1)],1)])},staticRenderFns:[]};var h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("keep-alive",[this.$route.meta.keeplive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keeplive?this._e():e("router-view")],1)},staticRenderFns:[]};var v={name:"layout",data:function(){return{msg:"Welcome to Your Vue.js App",isShowSlider:"230px"}},methods:{setSlider:function(){switch(this.$store.state.isShowSlider){case!0:this.isShowSlider="230px";break;case!1:this.isShowSlider="0"}}},components:{Slider:u,Navs:n("VU/8")(m,p,!1,function(t){n("TuWS")},"data-v-4160f7e1",null).exports,Mains:n("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js App"}}},h,!1,function(t){n("2P9j")},"data-v-6694818e",null).exports},mounted:function(){this.$store.state.setSlider=this.setSlider}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("el-aside",{attrs:{width:this.isShowSlider}},[e("Slider")],1),this._v(" "),e("el-container",[e("el-header",{attrs:{height:""}},[e("Navs")],1),this._v(" "),e("el-main",[e("Mains")],1)],1)],1)},staticRenderFns:[]};var _=n("VU/8")(v,f,!1,function(t){n("Bkjz")},"data-v-285dc08e",null).exports,g=[{path:"/login",name:"login",component:function(){return n.e(5).then(n.bind(null,"YTIe"))}},{path:"/",name:"layout",component:_,redirect:"/home",children:[{path:"home",name:"home",component:function(){return n.e(0).then(n.bind(null,"+3bb"))},meta:{title:"首页"}}]}];o.default.use(l.a);var S=new l.a({routes:[].concat(r()(g),[{path:"*",redirect:"/login"}])}),w=n("zL8q"),b=n.n(w),x=(n("tvR6"),n("NYxO")),E=(n("mtWM"),n("WXYk"));S.beforeEach(function(t,e,n){console.log("要到哪里去",t),console.log("刚从哪里来",e),console.log("下一步",n),n()});var k=[{path:"/permission",name:"layout",component:_,redirect:"/permission/createAdmin",meta:{title:"权限管理"},children:[{path:"createAdmin",name:"createAdmin",component:function(){return n.e(8).then(n.bind(null,"crgP"))},meta:{title:"创建管理员",keeplive:!0}},{path:"showLists",name:"showLists",component:function(){return n.e(7).then(n.bind(null,"5Z7u"))},meta:{title:"列表展示"}}]}];[{path:"/loan-input",name:"layout",component:_,redirect:"/loan-input/index",children:[{path:"index",name:"index",component:function(){return n.e(6).then(n.bind(null,"bu3J"))},meta:{title:"贷款申请",keeplive:!0,roles:["input"]}}]},{path:"/input-manager",name:"layout",component:_,redirect:"/input-manager/index",children:[{path:"index",name:"index",component:function(){return n.e(3).then(n.bind(null,"8nJg"))},meta:{title:"申请管理",roles:["input"]}}]},{path:"/approve",name:"layout",component:_,meta:{title:"贷款审批"},children:[{path:"first",name:"first",component:function(){return n.e(2).then(n.bind(null,"aGzn"))},meta:{title:"初审"}},{path:"final",name:"final",component:function(){return n.e(1).then(n.bind(null,"DrOE"))},meta:{title:"终审"}}]},{path:"/obj-manage",name:"layout",component:_,redirect:"/obj-manage/index",children:[{path:"index",name:"index",component:function(){return n.e(4).then(n.bind(null,"QZCv"))},meta:{title:"标的管理"}}]}].concat(r()(k));o.default.prototype.$message=b.a.Message,o.default.use(b.a),o.default.use(x.a);var C=new x.a.Store({modules:{user:{state:{token:E.a.get(),roles:[]},getters:{token:function(t){return t.token},roles:function(t){return t.roles}},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_ROLES:function(t,e){t.roles=e}},actions:{SET_TOKEN:function(t,e){(0,t.commit)("SET_TOKEN",e)},SET_ROLES:function(t,e){(0,t.commit)("SET_ROLES",e)},GetInfo:function(t){var e=this,n=t.commit;d.a.get("/api/user/info").then(function(t){console.log("成功获取用户信息",t),e.$store.state.userName=t.data.data.roles[0].name,n("SET_ROLES",t.data.data.roles)}).catch(function(t){console.log(t)})},Logout:function(t){var e=t.commit;e("SET_TOKEN",""),e("SET_ROLES",[])}}},permission:{state:{routes:[]}}},state:{isShowSlider:!0}});o.default.config.productionTip=!1,new o.default({el:"#app",router:S,store:C,components:{App:a},template:"<App/>"})},TuWS:function(t,e){},WXYk:function(t,e,n){"use strict";var o=n("lbHh"),i=n.n(o),a={defaultToken:"Admin-Token",set:function(t){i.a.set(this.defaultToken,t)},get:function(){return i.a.get(this.defaultToken)},remove:function(){i.a.remove(this.defaultToken)}};e.a=a},tvR6:function(t,e){},vLgD:function(t,e,n){"use strict";var o=n("//Fk"),i=n.n(o),a=n("mtWM"),s=n.n(a),r=n("WXYk"),l=n("zL8q"),c=(n.n(l),s.a.create({baseURL:"http://47.96.117.121:5003",withCredentials:!0}));c.interceptors.request.use(function(t){return r.a.get()&&(t.headers.token=r.a.get()),t},function(t){return i.a.reject(t)}),c.interceptors.response.use(function(t){if(2e4===t.data.code)return t;if(-1===t.config.url.search("static"))throw Object(l.Message)({message:"请先登录",type:"error"}),new Error("请先登录")},function(t){return Object(l.Message)({message:t,type:"error",iconClass:"el-icon-error",duration:2e3,showClose:!0}),i.a.reject(t)}),e.a=c}},["NHnr"]);
//# sourceMappingURL=app.8013efa5c350bcc68a2b.js.map