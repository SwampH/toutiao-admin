// 基于axios模块进行的网络模块的封装
import axios from 'axios'
// 配置axios对象
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net'
})
// 配置请求拦截器
request.interceptors.request.use(config => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
})

export default request
