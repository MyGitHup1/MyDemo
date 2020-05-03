import Layout from '@/layout/Layout'
const permission = [
  {
    path: '/permission',
    name: 'layout',
    component: Layout,
    redirect: '/permission/createAdmin',
    meta: { title: '权限管理' },
    children: [{
      path: 'createAdmin',
      name: 'createAdmin',
      component: () => import('@/views/rights-manage/CreateAdmin'),
      meta: {
        title: '创建管理员',
        keeplive: true
      }
    },
    {
      path: 'showLists',
      name: 'showLists',
      component: () => import('@/views/rights-manage/ShowLists'),
      meta: { title: '列表展示' }
    }]
  }]
export default permission