// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    on: false
  },
  mutations: {
    unfold: (state) => {
      state.on = true
    },
    fold: (state) => {
      state.on = false
    }
  }
})

export default store
