import Vue from 'vue'
import store from '@/store/index'
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Header',
  components: {},
  data() {
    return {
    }
  },
  props: ['isUsername'],
  computed: mapState(['isAuth']),
  methods: {
    onLogout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('email');
      this.$store.commit('onAuth');
      // this.$emit('onAuth', false);
      this.$emit('onUsername', null);
    }
  },

})