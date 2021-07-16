import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home/Home'
import Layout from '@/views/layout/Layout'
import Article from '@/views/article/Article'
import Comment from '@/views/comment/Comment'
import Fans from '@/views/fans/Fans'
import Images from '@/views/images/Images'
import Publish from '@/views/publish/Publish'
import Settings from '@/views/settings/Settings'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'article',
        name: 'article',
        component: Article
      },
      {
        path: 'comment',
        name: 'comment',
        component: Comment
      },
      {
        path: 'fans',
        name: 'fans',
        component: Fans
      },
      {
        path: 'images',
        name: 'images',
        component: Images
      },
      {
        path: 'publish',
        name: 'publish',
        component: Publish
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 配置路由前置拦截器
router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (to.path !== '/login') {
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
