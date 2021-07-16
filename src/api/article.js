import request from '@/utils/request.js'

export const getArticles = params => {
  return request({
    url: '/mp/v1_0/articles',
    method: 'GET',
    params
  })
}

export const getArticlesChannels = () => {
  return request({
    url: '/mp/v1_0/channels',
    method: 'GET'
  })
}
