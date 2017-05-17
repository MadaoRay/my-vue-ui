<template>
  <div id="app">
  <transition :name="transitionName">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$route.isBack
    debugger
    if (isBack) {
      this.transitionName = 'slideBack'
    } else {
      this.transitionName = 'slide'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style>
/*@import '@/assets/content/bootstrap.min.css'*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
<style lang="scss">
.slideBack-leave{
  transform: translateX(-10rem);
}

.slide-enter{
  transform: translateX(10rem);
}

.slide-enter-active, .slideBack-enter-active{
  transition: all 0.3s ease;
}
</style>
