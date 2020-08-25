<template>
  <div class="bottom">
    这是底部
    {{message}}
    <button @click='changeState'>点我该状态</button>
    <p style="color:red">{{this.$store.state.text}}</p>
  </div>
</template>
<script>
export default {
  name:'bottom',
  props:['message'],
  
  methods:{
    changeState(){
      this.$store.commit('render',1000);
      // this.$root.Bus.$emit('isChild',false)
    }
  },
 
  data() {
    return{
      bottomMsg:''
    }
  },
   mounted(){
    this.bottomMsg=this.$store.state.text;
    //  console.log(this.$store.state.text)
  },
}
</script>

