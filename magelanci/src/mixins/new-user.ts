import axiosDb from '@/axios/axios-database';

export default {
    data: function () {
        return {
        }
    },
    methods: {
        async postUser(payload: {}) {
            try {
                const res = await axiosDb.post(`users.json`, payload);
                (this as any).postedUserId = res.data.name;
            } catch (err) {
                console.log(err);
            }
        }
    }
}