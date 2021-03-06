/**
 * 全局注册组件
 */
import Vue from 'vue'
import LSwiper from './common/swiper'
import NavBox from './common/navBox'
import Header from './header'

Vue.component(LSwiper.name, LSwiper)
Vue.component(NavBox.name, NavBox)
Vue.component(Header.name, Header)

Vue.use(LSwiper)
Vue.use(NavBox)
Vue.use(Header)
