import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rawLogData: {},
  },
  mutations: {
    setRawLogData(state, data) {
      state.rawLogData = data
    },
  },
  actions: {
    setRawLogData({ commit }, payload) {
      commit('setRawLogData', {
        //data: payload.data.splice(2), //for a row of column headers
        data: payload.data.splice(3), //to just get data
        errors: payload.errors,
        meta: payload.meta,
      })
    },
  },
  modules: {},
  getters: {
    rawLogData: (state) => state.rawLogData,
  },
})
