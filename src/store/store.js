import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api'

Vue.use(Vuex)
const state = {
    me: {},
},
    getters = {
        me: state => {
            return state.me;
        }
    },
    mutations = {
        SET_ITEMS(state, me) {
            state.me = me
        }
    },
    actions = {
        async me({ commit }) {
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