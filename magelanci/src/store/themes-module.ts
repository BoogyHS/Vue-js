import axiosDb from '@/axios/axios-database';

export default {
    namespaced: true,
    state: {
        themes: [],
        currentTheme: null,
        currentThemeId: ()=>{ return localStorage.getItem('themeId')},
    },
    getters: {
        currentTheme: (state: any) => { return state.currentTheme }
    },
    mutations: {
        setCurrentTheme(state: any, theme: any) {
            state.currentTheme = theme;
        }
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
        },
        async getTheme(context: any, id: any) {
            try {
                const res = await axiosDb.get(`themes/${id}.json`);
                context.state.currentTheme = res.data;

            } catch (err) {
                console.log(err);
            }
        }
    },
    modules: {
    }
}