import Vue from 'vue'
import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import themesMixin from '@/mixins/themes-mixin';
import { mapState } from 'vuex';
import { userHelpers, themesHelpers } from '@/store';

export default Vue.extend({
  name: 'Home',
  props: {
  },
  components: {
    myPath,
    Theme,
  },
  created() {
    // if (this.isAuth()) {
    this.getAllThemes();
    // }
  },
  computed: {
    ...mapState('user', ['isAuth']),
    ...themesHelpers.mapState([
      'themes'
    ])
  },
  methods: {
    ...themesHelpers.mapActions(['getAllThemes'])
  }
  // mixins: [themesMixin]
})