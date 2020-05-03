import CookieUtils from '@/utils/cookieUtils'
import request from '@/utils/request'

export default {
    state: {
        token: CookieUtils.get(),
        roles: []
    },
    getters: {
        token: state => state.token,   //token
        roles: state => state.roles,   //用户角色
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_ROLES(state, roles) {
            state.roles = roles
        }
    },
    actions: {
        // 保存token
        SET_TOKEN({ commit }, token) {
            commit('SET_TOKEN', token)

        },
        SET_ROLES({ commit }, roles) {
            commit('SET_ROLES', roles)
        },
        // 获取用户详情
        GetInfo({ commit }) {
            return new Promise(function (resolve, reject) {
                request
                    .get('/api/user/info')
                    .then(res => {
                        console.log('成功获取用户信息', res)
                        // this.$store.state.userName = res.data.data.roles[0].name
                        // 保存角色信息
                        commit('SET_ROLES', res.data.data.roles)
                        // this.$message({
                        //   type: 'success',
                        //   message: '成功获取用户信息'
                        // })
                        resolve(res.data.data)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })

        },
        Logout({ commit }) {
            // 退出清除状态
            CookieUtils.remove()
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
        }
    }
}