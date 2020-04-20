import Vue from 'vue'
import { required, minLength, maxLength, email, sameAs, integer } from 'vuelidate/lib/validators'
import authAxios from '@/axios/axios-auth';
import IRegister from '@/interfaces/registerDetails';
import IRegistered from '@/interfaces/registered';
import newUser from '@/mixins/new-user';

export default Vue.extend({
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      selectedCode: '',
      tel: '',
      password: '',
      rePassword: '',
    }
  },
  validations: {
    username: {
      required
    },
    email: {
      required,
      email: email
    },
    password: {
      required,
      minLength: minLength(4)
    },
    rePassword: {
      sameAs: sameAs('password')
    },
    // tel: {
    //   minLength: minLength(9),
    //   maxLength: maxLength(9),
    //   integer
    // }
  },
  methods: {
    onRegister() {
      this.$v.$touch();
      const payload: IRegister = {
        email: this.email,
        password: this.password,
        username: this.username,
        tel: Number(this.selectedCode + this.tel),
        returnSecureToken: true
      };
      authAxios
        .post(
          '/accounts:signUp',
          payload
        )
        .then((res: IRegistered) => {
          const { idToken, localId, email } = res.data;
          localStorage.setItem('token', idToken);
          localStorage.setItem('userId', localId);
          localStorage.setItem('email', email);

          delete payload.password;
          delete payload.returnSecureToken;
          (this as any).postUser(payload)
            .then(() => {
              this.$store.commit('onAuth');
              this.$router.push('/');
            })
        })
        .catch((err: {}) => {
          console.error(err);
        });
    }
  },
  mixins: [newUser]
})