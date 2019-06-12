import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import main from './modules/main'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        main,
    },
    state: {
        baseUrl: 'http://127.0.0.1:8000/v1',
        token: null,
        tuid: null,
    },
    mutations: {
        setBaseTwitchInfo (state, auth) {
            state.token = auth.token
            state.tuid = auth.userId
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.token
        },
    },
    getters: {

    },
    actions: {
        async fetchUser ({ commit, state }) {
            try {
                const response = await axios.get(state.baseUrl + '/auth/twitch/extension/viewer')
                return {
                    data: response,
                    status: true,
                }
                // fetch(state.baseUrl + '/auth/twitch/extension/viewer', {
                //     method: 'GET',
                //     headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + state.token }),
                // })
            } catch (e) {
                return {
                    data: e,
                    status: false,
                }
            }
        },
    },
})
