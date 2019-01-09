
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    on: false,
    url: 'https://www.italyclassico.com',
    hide: false,
    isLogin: false,
    phone: null
  },
  mutations: {
    unfold: state => { state.on = true },
    fold: state => { state.on = false },
    hideLoading: state => { state.hide = true },
    showLoading: state => { state.hide = false },
    onLogin: state => { state.isLogin = true },
    onExit: state => { state.isLogin = false },
    setPhone: (state, phone) => { state.phone = phone }
  },
  actions: {
    savePhone ({commit}, phone) {
      commit('setPhone', phone)
    }
  },
  getter: {
    getPhone (state) {
      console.log(state.phone)
    }
  }
})

export default store
