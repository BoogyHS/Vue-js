import Vue from 'vue'
import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import themesMixin from '@/mixins/themes-mixin';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Home',
  props: {
    // isAuth: Boolean,
    isUsername: String
  },
  components: {
    myPath,
    Theme,
  },
  beforeCreate() {
    // this.$emit('onAuth', localStorage.getItem('token') !== null);
    this.$emit('onUsername', localStorage.getItem('email'));
  },
  created() {
    if(this.isAuth()){
      (this as any).getAllThemes();
    }
  },
  computed: mapState(['isAuth']),
  // mounted() {
  //   console.log((this as any).themes)
  // },
  mixins: [themesMixin]
})