import Vue from 'vue';
import Vuex from 'vuex';
import counterModule from '../modules/counter';
import auth from '../modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    counterModule,
    auth
  }
})

// state:{
//
// },
// getters:{
//
// },
// mutations:{
//
// },
// actions:{
//
// },
