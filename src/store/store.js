import Vue from 'vue'
import Vuex from 'vuex'
import RandomUser from './modules/RandomUser'


Vue.use(Vuex)

const state = {}
const mutations = {}
const getters = {}

export default new Vuex.Store({
  state,
  modules:{
    RandomUser
  },
  mutations,
  getters
})
