
const state = {
  main: 0
}

const getters = {
  main: state => state.main
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  incrementCounter ({ commit }) {
    commit('INCREMENT_MAIN_COUNTER')
  },
  decrementCounter ({ commit }) {
    commit('DECREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
