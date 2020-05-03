import router from './router'
import request from '@/utils/request'
import cookieUtils from '@/utils/cookieUtils'
import store from '@/store'
import { Message } from 'element-ui'
router.beforeEach(async (to, form, next) => {
    console.log('要到哪里去', to)
    // console.log('刚从哪里来', form)
    // console.log("下一步", next)
    // console.log(store)
    if (to.path == '/login') {//登录直接放行
        next()
    } else {
        // 判断用户是否有角色，如果有角色就去获取角色
        const hasRoles = store && store.getters.roles && store.getters.roles.length > 0;
        // 不是登录 判断是否登录
        if (hasRoles) {
            next()
        } else {
            try {
                let { roles } = await store.dispatch("GetInfo")
                let roleNames = roles.map(r => r.name);
                console.log(roleNames);
                var GenerateRoutes = await store.dispatch('GenerateRoutes', roleNames)
                router.addRoutes(GenerateRoutes);
                next({ ...to })
            } catch (err) {
                console.log(err);
                Message.error('token失效')
                next({ path: '/login' })
            }
        }
    }
    next()
})