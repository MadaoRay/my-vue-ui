// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import testrouter from './testRouter'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    transitionName: 'slide'
  },
  watch: {
    '$route' (to, from) {
      //转换效果
      const toDepth = to.path.substring(0,to.path.length).split('/').length
      const FromDepth = from.path.substring(0,from.path.length).split('/').length
      this.transitionName = toDepth < FromDepth ? 'slide' : 'slideBack'
    }
  }
})
