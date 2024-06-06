import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLogin: false,
    isModalOpen: false
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setModalOpen(state, payload) {
      state.isModalOpen = payload
    },
  },
})

export default store
