import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLogin: false,
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
  },
})

export default store
