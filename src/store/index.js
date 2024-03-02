import Vue from 'vue'
import Vuex from 'vuex'

import { APP_CONFIG } from '@/application.config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rawLogData: {},
    chartOptions: {
      throttle: {
        showFullBrake: false,
      },
    },
  },
  mutations: {
    setRawLogData(state, data) {
      state.rawLogData = data
    },
  },
  actions: {
    setRawLogData({ commit }, payload) {
      commit('setRawLogData', {
        data: payload.data.splice(APP_CONFIG.skipThisManyRows), //to just get data
        errors: payload.errors,
        meta: payload.meta,
      })
    },
  },
  modules: {},
  getters: {
    rawLogData: (state) => state.rawLogData,
    hasLogsToView: (state) => !!state.rawLogData?.data?.length > 0 || false,
    throttleData: (state) => {
      return state.rawLogData.data.map((entry) => {
        const formattedValue = Number(entry[APP_CONFIG.fieldMappings.throttle])
        return !isNaN(formattedValue) ? formattedValue : 0
      })
    },
    rpmData: (state) => {
      return state.rawLogData.data.map((entry) => {
        const formattedValue = Number(entry[APP_CONFIG.fieldMappings.rpm])
        return !isNaN(formattedValue) ? formattedValue : 0
      })
    },
    showFullBrakeValues: (state) =>
      state.chartOptions.throttle.showNegativeValues,
    averageRpmValue: (state, getters) => {
      if (!getters.hasLogsToView) return 0
      const sum = getters.rpmData.reduce((acc, value) => acc + value, 0)
      return Math.round(sum / getters.rpmData.length)
    },
    averageThrottleValue: (state, getters) => {
      if (!getters.hasLogsToView) return 0
      const sum = getters.throttleData.reduce((acc, value) => {
        if (value < 0) return acc + 0
        return acc + value
      })
      return Math.round(sum / getters.throttleData.length)
    },
  },
})
