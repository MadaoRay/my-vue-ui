// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import routerTest from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */

import First from './components/firstComponent.vue'
import Second from './components/secondComponent.vue'
// import {str} from './router/index'
import test from './router/index'

Vue.use(VueRouter)
Vue.use(VueResource)
// console.log(str)
// alert(str)
debugger
alert(test)
// const vueRouter = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/first',
//       component: First
//     },
//     {
//       path: '/second',
//       component: Second
//     }
//   ]
// })

// const routes = [
//   { path: '/first',
//     component: First },
//   { path: '/second',
//     component: Second
//   }]

const router = new VueRouter({
  routes: [
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

// const router = new VueRouter({ routes })
// new Vue({
//   el: '#app',
//   Router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
