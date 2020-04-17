import Vue from 'vue'
import addLikeMixin from '@/mixins/addlike-mixin'

export default Vue.extend({
  name: 'Comment',
  components: {

  },
  props: ['comment', 'themeId', 'commentId'],
  mixins: [addLikeMixin],
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
    like(): void {
      if (this.comment.user !== localStorage.getItem('email')) {
        const obj = this.comment;
        obj.likes += 1;
        // console.log(this);

        (this as any).addLike(this.themeId, this.commentId, obj);
      } else {
        return;
      }
    }
  }
})