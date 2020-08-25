<template>
  <div id="app">
    {{msg}}
   <!-- <router-link :to="{name:'page1',params:{id:110,title:'444'}}">Page1</router-link> -->
    <router-link to="/page2">Page2</router-link>
 <router-link to="/page1/198/jspang website is very good">Page1</router-link>
    <img src="./assets/logo.png">
    <button @click="appChange">点我</button>
     <button @click="add">添加</button>
    <child :message='msg'
           v-if='isChild'
            @childFn="parentFn">
      <p>jfldsjflsd </p>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
      <template #middle>
        <h1>Here might be a page middle</h1>
      </template>
    </child>
    <bottom :message='msg'
            v-if='isChild'></bottom>
    <p>{{stateMsg}}</p>
    <p>{{count}}</p>
   <router-view></router-view>
  </div>
</template>

<script>
import child from '@/components/child.vue'
import bottom from '@/components/bottom.vue'
import page1 from '@/components/page1.vue'
import page2 from '@/components/page2.vue'
export default {
  name: 'App',
  components: {
    child,
    bottom,
    page1,
    page2
  },
  data () {
    return {
      isChild: true,
      msg: '666666',
      stateMsg: ''
    }
  },
  mounted () {
    // this.$root.Bus.$on('isChild', (e) => {
    //   this.isChild = e
    // })
  },
  computed:{
    count(){
            return this.$store.state.text;
        }
  },
  methods: {
    appChange () {
      // this.isChild=!this.isChild
    this.stateMsg=this.$store.state.text;
    },
    add () {
      // this.msg +=1;
      this.$store.commit('render', 10);
      this.stateMsg=this.$store.state.text;
      // window.location.reload()
      console.log(this.$store.state.text)
    },
    
      parentFn(payload) {
        this.msg = payload;
      }
    
  }
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
