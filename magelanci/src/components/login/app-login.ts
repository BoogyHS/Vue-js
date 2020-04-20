import Vue from 'vue'
import { required, minLength, email } from 'vuelidate/lib/validators'
import authAxios from '@/axios/axios-auth';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email: email
    },
    password: {
      required,
      minLength: minLength(4)
    },
  },
  methods: {
    onLogin() {
      (this as any).$v.$touch();
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };
      authAxios
        .post(
          '/accounts:signInWithPassword',
          payload
        )
        .then(res => {

          const { idToken, localId, email } = res.data;

          localStorage.setItem('token', idToken);
          localStorage.setItem('userId', localId);
          localStorage.setItem('email', email);
          this.$store.commit('user/onAuth');
          this.$router.push('/');
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
})