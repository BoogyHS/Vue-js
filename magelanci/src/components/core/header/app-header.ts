
export default {
  name: 'Header',
  components: {},
  data() {
    return {
    }
  },
  props: ['isAuth', 'isUsername'],
  methods: {
    onLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('email');
      (this as any).$emit('onAuth', false);
      (this as any).$emit('onUsername', null);
    }
  },
 
}