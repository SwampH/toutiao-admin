// 基于axios模块进行的网络模块的封装
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

export default request
