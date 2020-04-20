import Vue from 'vue'
import Vuex from 'vuex'
import { user } from '@/store/user-module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      state: user.state,
      getters: user.getters,
      mutations: user.mutations,
    }
  }
})
