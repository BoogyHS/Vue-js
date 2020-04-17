import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  components: {},
  data() {
    return {
    }
  },
  props: ['isAuth', 'isUsername'],
  methods: {
    onLogout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('email');
      this.$emit('onAuth', false);
      this.$emit('onUsername', null);
    }
  },
 
})