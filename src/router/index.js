import Vue from 'vue'
import Router from 'vue-router'

// page
import Login from '@/views/login/index.vue'
import Index from '@/views/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
  ]
})
