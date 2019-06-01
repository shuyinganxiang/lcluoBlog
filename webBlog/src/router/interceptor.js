/**
 * @Desc: 路由拦截器
 */
import router from '@/router'

/**
 * 路由全局钩子
 */
router.beforeEach(async (to, from, next) => {
  // 设置页面title
  document.title = to.meta.title
  console.log(to)
  return next()
})
