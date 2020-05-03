import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Layout from '@/layout/Layout'
import constantRouters from './modules/constantRouters'
import yqdt from '@/views/yqdt'
Vue.use(Router)

export default new Router({

  routes: [
    // 默认的不需要权限的路由
    ...constantRouters,
    {
      path: '/yqdt',
      name: 'yqdt',
      // component: () => import('@/views/yqdt')
      component: yqdt
    }
    // 没有匹配路由时重定向
    // { path: '*', redirect: '/login' },
    // ...permission
    // {
    //   path: '/',
    //   name: 'layout',
    //   component: Layout,
    //   redirect: '/home',
    //   children: [{
    //     path: 'home',
    //     name: 'home',
    //     component: () => import('@/views/home/Index'),
    //     meta: { title: '首页' }
    //   }]
    // },
    // {
    //   path: '/loan-input',
    //   name: 'layout',
    //   component: Layout,
    //   redirect: '/loan-input/index',
    //   children: [{
    //     path: 'index',
    //     name: 'index',
    //     component: () => import('@/views/loan-input/Index'),
    //     meta: {
    //       title: '贷款申请',
    //       keeplive: true
    //     }
    //   }]
    // },
    // {
    //   path: '/input-manager',
    //   name: 'layout',
    //   component: Layout,
    //   redirect: '/input-manager/index',
    //   children: [{
    //     path: 'index',
    //     name: 'index',
    //     component: () => import('@/views/input-manager/Index'),
    //     meta: { title: '申请管理' }
    //   }]
    // },
    // {
    //   path: '/approve',
    //   name: 'layout',
    //   component: Layout,
    //   meta: { title: '贷款审批' },
    //   // redirect: '/approve/first',
    //   children: [{
    //     path: 'first',
    //     name: 'first',
    //     component: () => import('@/views/loan-approval/FirstTrial'),
    //     meta: { title: '初审' }
    //   },
    //   {
    //     path: 'final',
    //     name: 'final',
    //     component: () => import('@/views/loan-approval/FinalTrial'),
    //     meta: { title: '终审' }
    //   }]
    // },
    // {
    //   path: '/obj-manage',
    //   name: 'layout',
    //   component: Layout,
    //   redirect: '/obj-manage/index',
    //   children: [{
    //     path: 'index',
    //     name: 'index',
    //     component: () => import('@/views/obj-manage/Index'),
    //     meta: { title: '标的管理' }
    //   }]
    // },
    // {
    //   path: '/permission',
    //   name: 'layout',
    //   component: Layout,
    //   redirect: '/permission/createAdmin',
    //   meta: { title: '权限管理' },
    //   children: [{
    //     path: 'createAdmin',
    //     name: 'createAdmin',
    //     component: () => import('@/views/rights-manage/CreateAdmin'),
    //     meta: {
    //       title: '创建管理员',
    //       keeplive: true
    //     }
    //   },
    //   {
    //     path: 'showLists',
    //     name: 'showLists',
    //     component: () => import('@/views/rights-manage/ShowLists'),
    //     meta: { title: '列表展示' }
    //   }]
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/login/Index')
    // }
  ]
})

