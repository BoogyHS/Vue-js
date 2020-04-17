import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import newThemeMixin from '@/mixins/new-theme-mixin';
import newCommentMixin from '@/mixins/new-comment-mixin';
import INewTheme from '@/interfaces/new-theme'
import { VueEditor } from 'vue2-editor';
import IComment from '@/interfaces/comment';

export default Vue.extend({
  name: 'NewTheme',
  components: {
    VueEditor,
  },
  props: [],
  data() {
    return {
      title: '',
      content: '',
    }
  },
  validations: {
    title: {
      required,
    },
    content: {
      required,
    },
  },
  computed: {
  },
  methods: {
    publish() {
      this.$v.$touch();
      const payload: INewTheme = {
        title: this.title,
        user: localStorage.getItem('email'),
        followers: 0,
        date: new Date().toISOString(),
        comments: []
      };
      const comment: IComment = {
        user: localStorage.getItem('email'),
        content: this.content.replace('<p>', '').replace('</p>', ''),
        date: new Date().toISOString(),
        likes: 0,
      };
      (this as any).postTheme(payload)
        .then(() => {
          
        (this as any).postComment(comment, (this as any).postedThemeId);

        this.$router.push('/');
      })
    },
    clear() {
      console.log('clear');
    }
  },
  mixins: [newThemeMixin, newCommentMixin]
})