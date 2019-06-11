import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        main,
    },
    state: {
        baseUrl: 'http://127.0.0.1:8000',
    },
    getters: {
        baseUrl (state) {
            return state.baseUrl
        },
    },
    actions: {},
    mutations: {},
})
