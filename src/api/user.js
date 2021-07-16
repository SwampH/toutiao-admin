// 用户相关请求模块
import request from '@/utils/request.js'
// 用户登录
export const loginUser = data => {
  return request({
    url: '/mp/v1_0/authorizations',
    method: 'POST',
    data
  })
}
// 获取用户信息
export const getUserProfile = data => {
  // const user = JSON.parse(window.localStorage.getItem('user'))
  return request({
    url: '/mp/v1_0/user/profile',
    method: 'GET'
    // headers: {
    //   Authorization: `Bearer ${user.token}`
    // }
  })
}
