import axiosDb from '@/axios/axios-database';

export default {
    data: function () {
        return {

        }
    },
    methods: {
        async addLike(themeId: any, commentId: any, payload: object) {
            try {
                const res = await axiosDb.put(`themes/${themeId}/comments/${commentId}.json`, payload);
                // console.log(res.data);  

            } catch (err) {
                console.log(err);
            }
        }
    }
}