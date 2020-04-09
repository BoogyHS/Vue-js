import axiosDb from '@/axios/axios-database';

export default {
    data: function () {
        return {

        }
    },
    methods: {
        async postTheme(payload: {}) {
            try {
                const res = await axiosDb.post(`themes.json`, payload);
                const posted = res.data.name;
                console.log(posted);

            } catch (err) {
                console.log(err);
            }
        }
    }
}