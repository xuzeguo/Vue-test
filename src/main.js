// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "Vuex"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import '@/style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
