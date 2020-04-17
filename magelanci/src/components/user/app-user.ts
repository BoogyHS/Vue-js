import Vue from 'vue'
import usersMixin from '@/mixins/users-mixin';
import IUser from '@/interfaces/user';

export default Vue.extend({
  name: 'User',
  components: {

  },
  props: [],
  data() {
    return {
      username: this.$route.params.username,
      userDetails: {},
    }
  },
  created() {
    (this as any).getAllUsers()
    .then(()=>{
      this.userDetails = (this as any).users.find((x: IUser) => { return x.email === this.username })
    })
  },
  mounted() {
    // console.log((this as any).username);
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  mixins: [usersMixin]
})