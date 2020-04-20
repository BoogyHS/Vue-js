export default {
    namespaced: true,
    state: {
        isAuth: () => { return !!localStorage.getItem('token') },
        isUsername: () => { return localStorage.getItem('email') }
    },
    getters: {
        isAuth: (state: any) => { return state.isAuth },
        isUsername: (state: any) => { return state.isUsername }
    },
    mutations: {
        onAuth: (state: any) => {
            return state.isAuth = () => {
                return !!localStorage.getItem('token')
            }
        },
        onUsername: (state: any) => {
            return state.isUsername = () => {
                return localStorage.getItem('email')
            }
        }
    },
    actions: {
    },
    modules: {
    }
}