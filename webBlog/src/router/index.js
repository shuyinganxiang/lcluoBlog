import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页
const Home = r => require.ensure([], () => r(require('@/page/home')), 'Login')
const Lunbo = r => require.ensure([], () => r(require('@/page/lunbo')), 'Login')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'homes',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/lunbo',
      name: 'lunbo',
      component: Lunbo,
      meta: {
        title: '轮播'
      }
    }
  ]
})
