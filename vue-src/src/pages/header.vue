<template>
  <div>
   <div class="title">
     <span>
       <span class="glyphicon glyphicon-chevron-left back"></span>
       <span class="back-to">返回</span>
     </span>
     <span>头部</span>
   </div>
   <p></p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'header'
}
</script>

<style lang="scss">
.title .back{
  position: absolute;
  top:0.5rem;
  left:0.5rem;
  font-size:1rem;
}

.title .back-to{
	text-align: left;
}
</style>
