<template>
  <div class="page2">
    <h1> page1</h1>
    <button @click="renderto">跳转路由</button>
   <!-- <div>{{$route.params.id}}</div> -->
   
   <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  name:'page1',
  data(){
    return{
      msg:'我是page1页'
    }
  },
  methods:{
    renderto(){
      this.$router.push({ name: 'page2', params: { userId: 123 }});
    }
  }
}
</script>