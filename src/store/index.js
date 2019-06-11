export const state = () => ({
    baseUrl: 'http://127.0.0.1:8000',
})

export const mutations = {
    // SET_ENVIRONMENT (state, environment) {
    //     state.environment = environment
    // },
}

export const getters = {
    baseUrl (state) {
        return state.baseUrl
    },
}

export const actions = {
    // async fetchUser ({ commit, state, dispatch }) {
    //     try {
    //         this.$axios.setToken(state.accessToken, 'Bearer')
    //         const response = await this.$axios.$get('/auth/user')
    //         commit('SET_USER', response)
    //         return {
    //             data: response,
    //             status: true,
    //         }
    //     } catch (e) {
    //         console.log(e)
    //         return {
    //             data: e,
    //             status: false,
    //         }
    //     }
    // },
}
