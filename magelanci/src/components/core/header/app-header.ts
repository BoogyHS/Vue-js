import Vue from 'vue'
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Header',
  components: {},
  data() {
    return {
    }
  },
  props: [],
  computed: mapState(['isAuth', 'isUsername']),
  methods: {
    onLogout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('email');
      this.$store.commit('onAuth');
      this.$store.commit('isUsername');
    }
  },
})