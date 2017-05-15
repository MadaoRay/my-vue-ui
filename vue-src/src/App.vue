<template>
  <div id="app">
  <transition :name="transitionName">
    <router-view></router-view>
    </transition>
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

.slide-enter{
  transform: translateX(100%);
}

.slide-enter-active, .slideBack-enter-active{
  transition: all 0.3s linear;
}
</style>
