import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);
 
//导出实例对象
export default new Vuex.Store({
state: {
text: 1,
},
mutations: {
render(state, key) {
state.text += key;
}
},
getters:{
  count:function(state){
    return state.text+=100
  }
}
})