import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'

export default {
  name: 'Home',
  props: {
    isAuth: Boolean
  },
  components: {
    myPath,
    Theme,
  },
  beforeCreate() {
    (this as any).$emit('onAuth', localStorage.getItem('token') !== null);
  },
  
}