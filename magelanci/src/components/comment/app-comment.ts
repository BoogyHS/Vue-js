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
      const obj = (this as any).comment;
      obj.likes+=1;
      // console.log((this as any).commentId);
      
      (this as any).addLike((this as any).themeId, (this as any).commentId, obj);

    }
  },
  mixins: [addLikeMixin],
}