import axiosDb from '@/axios-database';

export default {
    data: function () {
        return {
            themes: []
        }
    },
    methods: {
        async getAllThemes() {
            try {
                const res = await axiosDb.get(`themes.json`);
                const allThemes = res.data;
                
                for (const themeId in allThemes) {
                    (this as any).themes.push({
                        themeId,
                        ...allThemes[themeId]
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}