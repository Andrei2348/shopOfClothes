import { createStore } from 'vuex'

const store = createStore({
  state: {
    cards: [],
  },
  mutations: {
    setCards(state, payload) {
      state.cards = payload
    },
  },
})

export default store
