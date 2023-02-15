import { createStore } from 'vuex'

export default createStore({
  state: {
    vuex_message: 'vuex中的信息'
  },
  getters: {
  },
  mutations: {
    use_vuex(state, a) {
      console.log('AAAA', a);
    },
  },
  actions: {
    use_ac(context, num) {
      setTimeout(() => {
        context.commit('use_vuex', "参数1")
        console.log('BBB', num);
      }, 1000);
    }
  },
  modules: {
  }
})
