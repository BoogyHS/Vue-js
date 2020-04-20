import Vue from 'vue'
import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import themesMixin from '@/mixins/themes-mixin';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Home',
  props: {
  },
  components: {
    myPath,
    Theme,
  },
  created() {
    if(this.isAuth()){
      (this as any).getAllThemes();
    }
  },
  computed: mapState(['isAuth']),
  mixins: [themesMixin]
})