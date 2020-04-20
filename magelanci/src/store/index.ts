import Vue from 'vue'
import Vuex, { createNamespacedHelpers } from 'vuex'
import user from '@/store/user-module'
import themes from '@/store/themes-module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    themes
  }
})

export const userHelpers = createNamespacedHelpers('themes');
export const themesHelpers = createNamespacedHelpers('themes');