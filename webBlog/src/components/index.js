/**
 * 全局注册组件
 */
import Vue from 'vue'
import LSwiper from './common/swiper'
import NavBox from './common/navBox'

Vue.component(LSwiper.name, LSwiper)
Vue.component(NavBox.name, NavBox)

Vue.use(LSwiper)
Vue.use(NavBox)
