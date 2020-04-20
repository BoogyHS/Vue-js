import Vue from 'vue'
import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import Comment from '../comment/Comment.vue'
import { required } from 'vuelidate/lib/validators'
import { VueEditor } from 'vue2-editor';
import newCommentMixin from '@/mixins/new-comment-mixin';
import IComment from '@/interfaces/comment';
import { themesHelpers, userHelpers } from '@/store'

export default Vue.extend({
  name: 'ThemeContent',
  components: {
    myPath,
    Theme,
    Comment,
    VueEditor,
  },
  props: [],
  mixins: [newCommentMixin,],
  data() {
    return {
      content: null,
      id: this.$route.params.id,
      theme: this.$store.getters.currentTheme,
      currentUser: localStorage.getItem('email'),
    }
  },
  validations: {
    content: {
      required,
    },
  },
  created() {
    this.getTheme(this.currentThemeId());
  },
  computed: {
    ...userHelpers.mapState([
      'isAuth',

    ]),
    ...themesHelpers.mapState([
      'currentTheme',
      'currentThemeId',
    ]),

  },
  watch: {
  },
  methods: {
    ...themesHelpers.mapActions(['getTheme']),
    publishComment() {
      this.$v.$touch();

      const themeId = this.id;

      const payload: any = {
        user: localStorage.getItem('email'),
        content: (this as any).content.replace('<p>', '').replace('</p>', ''),
        date: new Date().toISOString(),
        likes: 0
      };

      (this as any).postComment(payload, themeId)
        .then((res: IComment) => {
          this.content = null;
          (this as any).getTheme(this.id);
        })
    },
  }
})