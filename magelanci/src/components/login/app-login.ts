import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      // error:false
    }
  },
  validations: {
    email: {
      required,
      email:email
    },
    password: {
      required,
      minLength: minLength(4)
    },
  },
  methods: {
    submitHandler(){
      (this as any).$v.$touch();
    }
  },
  // computed: {
  //   classObject: function () {
  //     return {
  //       error: (this as any).$v.email.$error,
  //     }
  //   }
  // }
}