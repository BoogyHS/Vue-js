import axiosDb from '@/axios/axios-database';

export default {
    data: function () {
        return {

        }
    },
    methods: {
        async postComment(payload: {}, id: string) {
            try {
                const res = await axiosDb.post(`themes/${id}/comments.json`, payload);
                const posted = res.data.name;
            } catch (err) {
                console.log(err);
            }
        }
    }
}