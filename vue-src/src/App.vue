<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav>
      <ul>
        <li><router-link to="/routerLink">路由</router-link></li>
      </ul>
      <router-view></router-view>
    </nav>
    <!-- <div id="phone" style="background-image:url(src/assets/Images/iphone.png)">      
    </div> -->
  </div>
</template>

<script>
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
