import Vue from 'vue'
import VueRouter from 'vue-router'
import Talk from './views/Talk.vue'
import Login from './views/Login.vue'

Vue.use(VueRouter)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/talk',
      name: 'talk',
      component: Talk
    }
  ]
})
