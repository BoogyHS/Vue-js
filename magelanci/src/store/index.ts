import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: () => { return !!localStorage.getItem('token') },
    isUsername: () => { return localStorage.getItem('email') }
  },
  getters: {
    isAuth: (state) => { return state.isAuth },
    isUsername: (state) => { return state.isUsername }
  },
  mutations: {
    onAuth: state => {
      return state.isAuth = () => {
        return !!localStorage.getItem('token')
      }
    },
    onUsername: state => {
      return state.isUsername = () => {
        return localStorage.getItem('token')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
