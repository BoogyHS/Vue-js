import { required } from 'vuelidate/lib/validators'
import newThemeMixin from '@/mixins/new-theme-mixin';

export default {
  name: 'NewTheme',
  components: {},
  props: [],
  data() {
    return {
      title: '',
      content: '',
    }
  },
  validations: {
    title: {
      required,
    },
    content: {
      required,
    },
  },
  computed: {
  },
  methods: {
    publish() {
      (this as any).$v.$touch();
      const payload = {
        title: (this as any).title,
        content: (this as any).content,
      };
      (this as any).postTheme(payload)
      .then((res: any)=>{

        console.log(res);
      })

    },
    clear() {
      console.log('clear');
    }
  },
  mixins: [newThemeMixin]
}