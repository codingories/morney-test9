import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // 把 store 绑到 Vue.prototype上

const store = new Vuex.Store({
  state: { // data,也就是数据
    count: 0
  },
  mutations: {
    increment(state, n: number) { // methods,也就是对数据的改动
      state.count += n
    }
  }
})


export default store;
