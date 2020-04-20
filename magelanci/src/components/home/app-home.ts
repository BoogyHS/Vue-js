import Vue from 'vue'
import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
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
    if (this.isAuth()) {
    this.getAllThemes();
    }
  },
  computed: {
    ...mapState('user', ['isAuth']),
    ...themesHelpers.mapState([
      'themes'
    ])
  },
  methods: {
    ...themesHelpers.mapActions(['getAllThemes']),
    setCurrentTheme: function(theme: any){
      localStorage.setItem('themeId', theme.themeId);
      this.$store.commit('themes/setCurrentTheme', theme);      
    }
  }
})