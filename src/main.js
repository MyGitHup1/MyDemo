/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vuex from 'vuex'
import axios from 'axios'
import CookieUtils from '@/utils/cookieUtils'
import request from '@/utils/request'
import './permission'
import asyncRouter from '@/router/modules/asyncRouter'
import constantRouters from '@/router/modules/constantRouters'
import store from '@/store/'
// axios.interceptors.request.use(function (config) {
//   if (sessionStorage.loginToken) {
//     config.headers.token = sessionStorage.loginToken
//     return config
//   }
// }, function (error) {
//   return Promise.reject(error)
// })

// axios.defaults.baseURL = 'http://47.96.117.121:5003/api/'
Vue.prototype.$message = ElementUI.Message
// Vue.prototype.$http = axios.create({
//   baseURL: 'http://47.96.117.121:5003',
//   withCredentials: true,//允许请求携带cookie
//   headers: { 'token': CookieUtils.get() },
// })

Vue.use(ElementUI);
// Vue.use(vuex);
// const store = new vuex.Store({
//   modules: {
//     user: {
//       state: {
//         token: CookieUtils.get(),
//         roles: []
//       },
//       getters: {
//         token: state => state.token,   //token
//         roles: state => state.roles,   //用户角色
//       },
//       mutations: {
//         SET_TOKEN(state, token) {
//           state.token = token
//         },
//         SET_ROLES(state, roles) {
//           state.roles = roles
//         }
//       },
//       actions: {
//         // 保存token
//         SET_TOKEN({ commit }, token) {
//           commit('SET_TOKEN', token)

//         },
//         SET_ROLES({ commit }, roles) {
//           commit('SET_ROLES', roles)
//         },
//         // 获取用户详情
//         GetInfo({ commit }) {
//           request
//             .get('/api/user/info')
//             .then(res => {
//               console.log('成功获取用户信息', res)
//               // this.$store.state.userName = res.data.data.roles[0].name
//               // 保存角色信息
//               commit('SET_ROLES',res.data.data.roles)
//               // this.$message({
//               //   type: 'success',
//               //   message: '成功获取用户信息'
//               // })
//             })
//             .catch(err => {
//               console.log(err)
//             })
//         },
//         Logout({commit}){
//           // 退出清除状态
//           commit('SET_TOKEN','')
//           commit('SET_ROLES',[])
//         }
//       }
//     },
//     permission: {
//       state:{
//         routes: []
//       },
      
//     }
//   },
//   state: {
//     isShowSlider: true,
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})