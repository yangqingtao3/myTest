<template>
  <div class="page2">
    <h1> page2</h1>
   <p>{{msg}}</p>
   <div>{{this.$route.params.userId}}</div>
  </div>
</template>
<script>
export default {
  name:'page2',
  data(){
    return{
      msg:'我是page2页'
    }
  }
}
</script>