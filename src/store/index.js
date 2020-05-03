import vuex from 'vuex'
import CookieUtils from '@/utils/cookieUtils'
import Vue from 'vue'
import user from './user'
import permission from './permission'

Vue.use(vuex);
const store = new vuex.Store({
    modules: {
      user,
      permission
    },
    state: {
        //侧边导航隐藏/显示
      isShowSlider: true,
    }
  })
  export default store