import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import P1 from '@/components/P1'
import P2 from '@/components/P2'
import P3 from '@/components/P3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'P3',
      component: P3
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/1',
      component: P1
    },
    {
      path: '/2',
      component:P2
    },
    {
      path: '/3',
      component:P3
    }
  ]
})
