// 用户相关请求模块
import request from '@/utils/request.js'
export const loginUser = data => {
  return request({
    url: '/mp/v1_0/authorizations',
    method: 'POST',
    data
  })
}
