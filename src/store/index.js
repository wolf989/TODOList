import Vue from 'vue'
import Vuex from 'vuex'
import todosStore from "@/store/modules/todosStore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todosStore,
  }
})
