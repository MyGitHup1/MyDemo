import asyncRouter from '@/router/modules/asyncRouter';
import constantRouters from '@/router/modules/constantRouters';
function filterAsyncRoutes(asyncRouter, roles) {
    let res = [];
    console.log(asyncRouter)
    asyncRouter.forEach(o => {
        // 
        var bool = o.meta && o.meta.roles && roles.some(role => o.meta.roles.includes(role));
        if (bool) {
            res.push(o)
        }
    })
    return res;
}
export default {
    // 状态 数组
    state: {
        routes: []
    },
    // 计算属性
    getters: {
        permission_routes: state => state.routes
    },
    // 修改state
    mutations: {
        SET_ROUTES(state, asyncRouter) {
            state.routes = constantRouters.concat(asyncRouter)
        }
    },
    actions: {
        // 生成路由路径
        GenerateRoutes({ commit }, roles) {
            return new Promise(function (resolve, reject) {
                let accessedRoutes;
                if (roles.includes('administrator')) {
                    // 管理员拥有所有权限
                    accessedRoutes = asyncRouter;
                } else {
                    accessedRoutes = filterAsyncRoutes(asyncRouter, roles)
                }
                commit('SET_ROUTES', accessedRoutes);
                resolve(accessedRoutes);
            })
        }
    }
}