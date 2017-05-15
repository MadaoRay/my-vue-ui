<template>
  <div>
    <div class="header">
      <div class="title">主页</div>
    </div>
     <ul>
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
