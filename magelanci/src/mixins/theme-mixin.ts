import axiosDb from '@/axios/axios-database';

export default {
    data: function () {
        return {
            theme: null,
        }
    },
    methods: {
        async getTheme(id: any) {
            try {
                const res = await axiosDb.get(`themes/${id}.json`);
                (this as any).theme = res.data;

            } catch (err) {
                console.log(err);
            }
        }
    }
}