import usersMixin from '@/mixins/users-mixin';
import IUser from '@/interfaces/user';

export default {
  name: 'User',
  components: {

  },
  props: [],
  data() {
    return {
      username: (this as any).$route.params.username,
      userDetails: {},
    }
  },
  created() {
    (this as any).getAllUsers()
    .then(()=>{
      (this as any).userDetails = (this as any).users.find((x: IUser) => { return x.email === (this as any).username })
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
}