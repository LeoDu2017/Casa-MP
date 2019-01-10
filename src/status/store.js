import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    on: false,
    serverSide: 'https://www.italyclassico.com',
    hide: false,
    isLogin: false,
    phone: null,
    token: null
  },
  mutations: {
    unfold: state => { state.on = true },
    fold: state => { state.on = false },
    hideLoading: state => { state.hide = true },
    showLoading: state => { state.hide = false },
    onLogin: state => { state.isLogin = true },
    onExit: state => { state.isLogin = false },
    setPhone: (state, phone) => { state.phone = phone },
    setToken: (state, token) => { state.token = token },
    removeToken: (state) => { state.token = null }
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
