import Layout from '@/layout/Layout'
import permission from './permission'


export default [
    {
        path: '/loan-input',
        name: 'layout',
        component: Layout,
        redirect: '/loan-input/index',
        meta: {
            title: '贷款申请',
            roles: ['input'] // 角色销售人员
        },
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('@/views/loan-input/Index'),
            meta: {
                title: '贷款申请',
                keeplive: true,
            }
        }]
    },
    {
        path: '/input-manager',
        name: 'layout',
        component: Layout,
        redirect: '/input-manager/index',
        meta: {
            title: '申请管理',
            roles: ['input'] // 角色销售人员
        },
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('@/views/input-manager/Index'),
            meta: {
                title: '申请管理',
                roles: ['input']
            }
        }]
    },
    {
        path: '/approve',
        name: 'layout',
        component: Layout,
        meta: {
            title: '贷款审批',
            roles: ['approve'] // 角色审核人员
        },
        // redirect: '/approve/first',
        children: [{
            path: 'first',
            name: 'first',
            component: () => import('@/views/loan-approval/FirstTrial'),
            meta: { title: '初审' }
        },
        {
            path: 'final',
            name: 'final',
            component: () => import('@/views/loan-approval/FinalTrial'),
            meta: { title: '终审' }
        }]
    },
    {
        path: '/obj-manage',
        name: 'layout',
        component: Layout,
        redirect: '/obj-manage/index',
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('@/views/obj-manage/Index'),
            meta: { title: '标的管理' }
        }]
    }, ...permission
]