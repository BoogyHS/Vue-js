import { required, minLength, email } from 'vuelidate/lib/validators'
import authAxios from "@/axios-auth";

export default {
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
        email: (this as any).email,
        password: (this as any).password,
        returnSecureToken: true
      };
      authAxios
        .post(
          '/accounts:signInWithPassword',
          payload
        )
        .then(res => {
         
          const { idToken, localId } = res.data;
          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
          (this as any).$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}