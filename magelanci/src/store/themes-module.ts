import axiosDb from '@/axios/axios-database';

export default {
    namespaced: true,
    state: {
        themes: []
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        async getAllThemes(context: any) {
            const x = [];
            try {
                const res = await axiosDb.get(`themes.json`);
                const allThemes = res.data;

                for (const themeId in allThemes) {
                    x.push({
                        themeId,
                        ...allThemes[themeId]
                    });

                }
                context.state.themes = x.slice(0);
            } catch (err) {
                console.log(err);
            }
        }
    },
    modules: {
    }
}