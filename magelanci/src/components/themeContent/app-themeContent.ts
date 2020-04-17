import Vue from 'vue'
import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import Comment from '../comment/Comment.vue'
import { required } from 'vuelidate/lib/validators'
import { VueEditor } from 'vue2-editor';
import newCommentMixin from '@/mixins/new-comment-mixin';
import currentTheme from '@/mixins/theme-mixin';
import IComment from '@/interfaces/comment';

export default Vue.extend({
  name: 'ThemeContent',
  components: {
    myPath,
    Theme,
    Comment,
    VueEditor,
  },
  props: [],
  mixins: [newCommentMixin, currentTheme],
  data() {
    return {
      content: null,
      id: this.$route.params.id,
      theme: {},
      currentUser: localStorage.getItem('email'),
      comments: [],
    }
  },
  validations: {
    content: {
      required,
    },
  },
  created(){
    (this as any).getTheme(this.id);
    // console.log((this as any).theme);
  },
  mounted() {
    (this as any).getTheme(this.id);
    // console.log((this as any).theme);
  },
  computed: {

  },
  watch: {

  },
  methods: {
    publishComment() {
      this.$v.$touch();

      const themeId = this.id;

      const payload: any = {
        user: localStorage.getItem('email'),
        content: (this as any).content.replace('<p>', '').replace('</p>', ''),
        date: new Date().toISOString(),
        likes: 0,

      };
      console.log(payload);

      (this as any).postComment(payload, themeId)
        .then((res: IComment) => {
          // console.log(res);
          this.content = null;
          (this as any).getTheme(this.id);
        })

    },
    // clear() {
    //   console.log('clear');
    // }

  }
})