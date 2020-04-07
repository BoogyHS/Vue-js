
export default {
  name: 'Header',
  components: {},
  data() {
    return {

    }
  },
  props: {
    isAuth: Boolean
  },
  methods: {
    onLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      (this as any).$emit('onAuth', false);
    }
  }
}