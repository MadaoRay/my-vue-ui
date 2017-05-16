import Vue from 'vue'
import Router from 'vue-router'
import RouterExample from '../components/RouterExample.vue'
import First from '../components/firstComponent.vue'
import PageA from '@/components/pageA'
import Index from '@/components/index'
import Paragraph from '../pages/Paragraph'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/routerExample',
      component: RouterExample
    },
    {
      path: '/first',
      component: First
    },
    {
      path: '/pageA',
      component: PageA
    },
    {
      path: '/paragraph',
      component: Paragraph
    }
  ]
})
