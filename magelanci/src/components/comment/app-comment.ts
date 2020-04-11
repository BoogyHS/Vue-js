import addLikeMixin from '@/mixins/addlike-mixin';

export default {
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
    like() {
      if ((this as any).comment.user !== localStorage.getItem('email')) {
        const obj = (this as any).comment;
        obj.likes += 1;
        // console.log((this as any).commentId);

        (this as any).addLike((this as any).themeId, (this as any).commentId, obj);
      } else {
        return;
      }
    }
  },
  mixins: [addLikeMixin],
}