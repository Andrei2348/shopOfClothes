import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLogin: false,
    isModalOpen: false,
    personObject: {}
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setModalOpen(state, payload) {
      state.isModalOpen = payload
    },
    setPersonObject(state, payload) {
      state.personObject = payload
    }
  },
})

export default store
