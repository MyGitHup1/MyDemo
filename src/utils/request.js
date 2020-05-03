import axios from 'axios'
import CookieUtils from '@/utils/cookieUtils'
import { Message } from 'element-ui'
var request = axios.create({
  baseURL: 'http://47.96.117.121:5003',
  withCredentials: true // 允许请求携带cookie
  // headers: { 'token': CookieUtils.get() }
})
request.interceptors.request.use(function (config) {
  if (CookieUtils.get()) {
    config.headers['token'] = CookieUtils.get()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
request.interceptors.response.use(function (response) {
  if (response.data.code !== 20000) {
    if (response.config.url.search('static') === -1) {
      Message({
        message: '请先登录',
        type: 'error'
      })
      throw new Error('请先登录')
    }
  } else {
    return response
  }
}, function (error) {
  Message({
    message: error,
    type: 'error',
    iconClass: 'el-icon-error',
    duration: 2000,
    showClose: true
  })
  return Promise.reject(error)
})
export default request
