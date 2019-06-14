import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'


store.subscribe((mutation, state) => {
  window.localStorage.setItem('jp-cart', JSON.stringify(state.cart))
})
// Wxy add
import JpBackTop from '@/components/JpBackTop'
import * as ajax from './request'
import { stat } from 'fs';
import { CLIENT_RENEG_WINDOW } from 'tls';
Vue.prototype.$http = ajax
Vue.component('JpBackTop', JpBackTop)
Vue.config.productionTip = false

Vue.use(Mint)

Vue.mixin({
  filters: {
    countLt99 (value) {
      if (value > 99) {
        return '99+'
      } else {
        return value
      }
    },
    toFix2 (value) {
      return value.toFixed(2)
    }
  }
})

// 登录验证
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequired === true) {
    if (store.getters.isLogin === false) {
      next({ name: 'login', params: { 'from': to.path } })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

