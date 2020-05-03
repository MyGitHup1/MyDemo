import Layout from '@/layout/Layout'

// 默认不需要权限的路由
const constantRouters = [{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/Index')
},
{
  path: '/',
  name: 'layout',
  component: Layout,
  redirect: '/home',
  children: [{
    path: 'home',
    name: 'home',
    component: () => import('@/views/home/Index'),
    meta: { title: '首页' }
  }]
}
]
export default constantRouters