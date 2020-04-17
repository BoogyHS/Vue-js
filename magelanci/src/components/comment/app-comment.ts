import Vue from 'vue'
import addLikeMixin from '@/mixins/addlike-mixin'

export default Vue.extend({
  name: 'Comment',
  components: {

  },
  props: ['comment', 'themeId', 'commentId'],
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
    like(): void {
      if (this.comment.user !== localStorage.getItem('email')) {
        const obj = (this as any).comment;
        obj.likes += 1;
        // console.log((this as any).commentId);

        (this as any).addLike(this.themeId, this.commentId, obj);
      } else {
        return;
      }
    }
  },
  mixins: [addLikeMixin],
})