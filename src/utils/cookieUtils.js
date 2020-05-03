import Cookie from 'js-cookie'
var cookieU = {
  defaultToken: 'Admin-Token',
  set (data) {
    Cookie.set(this.defaultToken, data)
  },
  get () {
    return Cookie.get(this.defaultToken)
  },
  remove () {
    Cookie.remove(this.defaultToken)
  }
}
export default cookieU
