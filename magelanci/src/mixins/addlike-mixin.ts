import Vue from 'vue'
import axiosDb from '@/axios/axios-database';

export default Vue.extend({
    data: function (): {} {
        return {
        }
    },
    methods: {
        async addLike(themeId: any, commentId: any, payload: object) {
            try {
                const res = await axiosDb.put(`themes/${themeId}/comments/${commentId}.json`, payload);
            } catch (err) {
                console.log(err);
            }
        }
    }
})