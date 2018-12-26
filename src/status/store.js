// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    on: false,
    url: 'https://www.italyclassico.com',
    hide: false
  },
  mutations: {
    unfold: (state) => {
      state.on = true
    },
    fold: (state) => {
      state.on = false
    },
    hideLoading: (state) => {
      state.hide = true
    },
    showLoading: (state) => {
      state.hide = false
    }
  }
})

export default store
