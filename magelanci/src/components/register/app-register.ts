import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

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
      email:email
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
    submitHandler(){
      (this as any).$v.$touch();
      // console.log((this as any).$v);
    }
  },
}