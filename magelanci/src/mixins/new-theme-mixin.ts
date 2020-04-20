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
                (this as any).postedThemeId = res.data.name;
            } catch (err) {
                console.log(err);
            }
        }
    }
}