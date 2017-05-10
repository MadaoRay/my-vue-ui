import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import First from '../components/firstComponent.vue'
import Second from '../components/secondComponent.vue'
Vue.use(Router)

const routerTest = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: Second
    }
  ]
})
export default routerTest
export const str = 'hello world'
