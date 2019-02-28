const  state ={
  counter:0
};

const getters = {
  doubleCounter(state){
    return state.counter ;
  },
  stringCounter: state => {
    return state.counter + ' Clicks'
  }
};

const mutations = {
  increment(state,value){
    state.counter += value
  },
  decrement(state,value ){
    state.counter -= value
  }
};

const actions = {
  increment({commit},value){
    commit('increment',value);
  },
  decrement({commit},value) {
    commit('decrement',value);
  },

  asyncIncrement({commit},object){
    setTimeout(()=>{
      commit('increment',object.value);
    }, object.duration)
  },
  asyncDecrement({commit}, object){
    setTimeout(()=>{
      commit('decrement',object.value);
    }, object.duration)
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
