import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import Comment from '../comment/Comment.vue'
import { required } from 'vuelidate/lib/validators'
import { VueEditor } from 'vue2-editor';
import newCommentMixin from '@/mixins/new-comment-mixin';
import currentTheme from '@/mixins/theme-mixin';
import IComment from '@/interfaces/comment';

export default {
  name: 'ThemeContent',
  components: {
    myPath,
    Theme,
    Comment,
    VueEditor,
  },
  props: [],
  data() {
    return {
      content: null,
      id: (this as any).$route.params.id,
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
    (this as any).getTheme((this as any).id);
    // console.log((this as any).theme);
  },
  mounted() {
    (this as any).getTheme((this as any).id);
    // console.log((this as any).theme);
  },
  computed: {

  },
  watch: {

  },
  methods: {
    publishComment() {
      (this as any).$v.$touch();

      const themeId = (this as any).id;

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
          (this as any).content = null;
          (this as any).getTheme((this as any).id);
        })

    },
    // clear() {
    //   console.log('clear');
    // }

  },
  mixins: [newCommentMixin, currentTheme]
}