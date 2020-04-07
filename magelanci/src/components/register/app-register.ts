import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import authAxios from "@/axios-auth";

export default {
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
    }
  },
  methods: {
    onRegister() {
      (this as any).$v.$touch();
      const payload = {
        email: (this as any).email,
        password: (this as any).password,
        username: (this as any).username,
        tel: (this as any).selectedCode + (this as any).tel,
        returnSecureToken: true
      };
      // Project Settings -> Web API key
      authAxios
        .post(
          "/accounts:signUp",
          payload
        )
        .then((res: any) => {
          const { idToken, localId } = res.data;
          localStorage.setItem('token', idToken);
          localStorage.setItem('userId', localId);
          (this as any).$router.push('/');
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  }
}