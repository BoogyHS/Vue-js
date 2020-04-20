import { mapState } from 'vuex'

export default {
  name: 'myPath',
  components: {},
  props: [],
  data() {
    return {
    }
  },
  computed: mapState('user',['isAuth']),
  methods: {
  },
  watch: {
  }
}