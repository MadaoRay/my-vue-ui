<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--     <firstComponent></firstComponent>
    <secondComponent></secondComponent> -->
    <ul>
      <li><router-link to="/first">第一页</router-link></li>
      <li><router-link to="/second">第二页</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// import firstComponent from './components/firstComponent.vue'
// import secondComponent from './components/secondComponent.vue'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
