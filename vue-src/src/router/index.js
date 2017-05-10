import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import RouterLink from '@/components/RouterLink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'routerLink',
      component: RouterLink
    }
  ]
})
