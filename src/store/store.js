import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api'

Vue.use(Vuex)
const state = {
    users: {},
},

    getters = {
        users: state => {
            return state.users;
        }
    },
    mutations = {
        SET_ITEMS(state, users) {
            state.users = users
        }
    },
    actions = {
        async users({ commit }) {
            try {
                const response = await api.get("/api/me");
                commit('SET_ITEMS', response.data)
            }
            catch (error) {
                console.log(error);
            }
        }
    }


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})