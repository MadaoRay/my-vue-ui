<template>
  <div>
    <div class="header">
      <div class="title">主页</div>
    </div>
     <ul>
        <li><router-link to="paragraph">段落</router-link></li>
        <li><router-link to="routerExample">路由</router-link></li>
        <li><router-link to="first">第一页</router-link></li>
        <li><router-link to="pageA">pageA</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss">
@mixin text-center{
  text-align: center;
}

.title{
  background-color: #35F7C3;
  height:2rem;
  line-height:2rem;
  @include text-center;
  font-weight: bold;
}

ul{
  list-style-type: none;
  padding: 0;
}

ul li{
  margin: 0.25rem;
  @include text-center;
}

ul li a{
  text-decoration: none;
  color: #666;
}
</style>
