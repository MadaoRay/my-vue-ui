<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav>
      <ul>
        <li><router-link to="/routerExample">路由</router-link></li>
        <li><router-link to="/first">第一页</router-link></li>
      </ul>
      <router-view></router-view>
    </nav>
<!--     <div id="phone">
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'app'
  // data () :{
  //   src:
  // }
}
</script>

<style>
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
body{

}

nav {
  width:200px;
  text-align:center;
  }

#phone {
  background-image:url("./assets/Images/iphone.png");
  height:500px;
  width:247px;
  background-size:cover;
}

ul li{
  list-style-type:none;
}
</style>
