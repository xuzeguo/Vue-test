import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/login/Login'
import Test from '@/components/Test'
import Demo from '@/components/Demo'
import componentTest from '@/components/component-test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'demo',
          component: Demo
        },
        {
          path: 'component-test',
          name: 'componentTest',
          component: componentTest
        },
        {
          path: 'test',
          name: 'test',
          component: Test
        }
      ]
    }
  ]
})
