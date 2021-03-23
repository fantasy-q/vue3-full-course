import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      authUser: null,
      isSigned: false,
      isShowLoginForm: false,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    signedIn(state, payload) {
      state.isSigned = payload;
    },
    authedUser(state, payload) {
      state.authUser = payload;
    },
    setLoginModal(state, payload) {
      state.isShowLoginForm = payload;
    }
  }
})

export default store;