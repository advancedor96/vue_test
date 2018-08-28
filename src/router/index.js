import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import P1 from '@/components/P1'
import P2 from '@/components/P2'
import P3 from '@/components/P3'
import P4 from '@/components/P4'
import P5 from '@/components/P5'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: HelloWorld
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
    },
    {
      path: '/4',
      component:P4
    },
    {
      path: '/5',
      component:P5
    }
  ]
})
