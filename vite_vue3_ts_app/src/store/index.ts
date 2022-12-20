import { createStore } from 'vuex';

let store = createStore({
    state: {
        token: localStorage.getItem("LOGIN_STATE_TOKEN") ? localStorage.getItem("LOGIN_STATE_TOKEN") : null,
        navList: []
    },
    mutations: {
        setToken(state, token: string) {
            state.token = token;
        },
        setNavList(state, list) {
            state.navList = list
        }
    },
    actions: {

    },
    getters: {

    },
})

export default store;