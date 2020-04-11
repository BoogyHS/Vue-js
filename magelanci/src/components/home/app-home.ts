import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import themesMixin from '@/mixins/themes-mixin';

export default {
  name: 'Home',
  props: {
    isAuth: Boolean,
    isUsername: String
  },
  components: {
    myPath,
    Theme,
  },
  beforeCreate() {
    (this as any).$emit('onAuth', localStorage.getItem('token') !== null);
    (this as any).$emit('onUsername', localStorage.getItem('email'));
  },
  created() {
    if(localStorage.getItem('token') !== null){
      (this as any).getAllThemes();
    }
  },
  // mounted() {
  //   console.log((this as any).themes)
  // },
  mixins: [themesMixin]
}