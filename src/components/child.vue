<template>
  <div class="child">
   <h1>今天天气时：</h1>
   {{message}}
    <slot name="header"></slot>
     <slot></slot>
    <slot name="middle"></slot>
   <button @click="changeState">给父级发送信息</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  props:['message'],
  data(){
    return{
      childMsg:'你好我是小明'
    }
  },
   methods:{
    changeState(){
      this.$emit('childFn', this.childMsg);
      this.$root.Bus.$emit('isChild',true)
    }
  }
}
</script>