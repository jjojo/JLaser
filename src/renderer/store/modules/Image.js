const state = {
  path: '',
  dataURL: '',
  rendering: false,
  svgData: ''
}

const getters = {
  getPath: state => state.path,
  getDataURL: state => state.dataURL,
  getSvgData: state => state.svgData,
  getRendering: state => state.rendering
}

const mutations = {
  SET_IMAGE_PATH (state, payload) {
    state.path = payload
  },
  SET_DATA_URL (state, payload) {
    state.dataURL = payload
  },
  SET_SVG_DATA (state, payload) {
    state.svgData = payload
  },
  SET_RENDERING (state, payload) {
    state.rendering = payload
  }
}

const actions = {
  setImagePath ({ commit }, path) {
    commit('SET_IMAGE_PATH', path)
  },
  setDataURL ({ commit }, dataURL) {
    commit('SET_DATA_URL', dataURL)
  },
  setSvgData ({ commit }, svgData) {
    commit('SET_SVG_DATA', svgData)
  },
  setRendering ({ commit }, bool) {
    commit('SET_RENDERING', bool)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
