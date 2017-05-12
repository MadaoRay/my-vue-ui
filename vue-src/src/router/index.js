import Vue from 'vue'
import Router from 'vue-router'
import RouterExample from '../components/RouterExample.vue'
import First from '../components/firstComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/routerExample',
      // name: 'routerExample',
      component: RouterExample
    },
    {
      path: '/first',
      component: First
    }
  ]
})
