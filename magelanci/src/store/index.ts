import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: () => { return !!localStorage.getItem('email') }
  },
  getters: {
    isAuth: (state) => { return state.isAuth }
  },
  mutations: {
    onAuth: state => {
      return state.isAuth = () => {
        return !!localStorage.getItem('email')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
