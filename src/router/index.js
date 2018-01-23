import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
