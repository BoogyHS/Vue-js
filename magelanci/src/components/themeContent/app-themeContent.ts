import myPath from '../shared/path/myPath.vue'
import Theme from '../shared/theme/Theme.vue'
import Comment from '../comment/Comment.vue'
import { required } from 'vuelidate/lib/validators'
import { VueEditor } from 'vue2-editor';
import newCommentMixin from '@/mixins/new-comment-mixin';

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
      content: '',
    }
  },
  validations: {
    content: {
      required,
    },
  },
  computed: {

  },
  methods: {
    publishComment() {
      (this as any).$v.$touch();


      //TODO themeID to be dinnamic
      const themeId = '-M4VWY77CEng8jn9Yp2v';


      const payload: any = {
        user: localStorage.getItem('email'),
        content: (this as any).content.replace('<p>', '').replace('</p>', ''),
        date: new Date().toISOString(),
        likes: 0,

      };
      console.log(payload);

      (this as any).postComment(payload, themeId)
        .then((res: any) => {
          console.log(res);

          // (this as any).$router.push('/');
        })

    },
    // clear() {
    //   console.log('clear');
    // }

  }  ,
  mixins: [newCommentMixin]
}