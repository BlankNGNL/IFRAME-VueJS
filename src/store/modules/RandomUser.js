import axios from 'axios'

const state = {
  stateArray:[],
  user:{}
}


const mutations = {
  'SAVE_ALL_USERS' (state, data){
    state.stateArray = data;

  },
  'FOUND_USER'(state,user){
    state.user = user
  }
}

const actions = {
  getAllUsers({commit}){
   axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      commit('SAVE_ALL_USERS',response.data)
   }).catch((error)=>{
     console.log(error)
   })
  },

  getUserById({commit},id){

    return state.stateArray.find((user)=>{
      if (user.id === id){
          commit('FOUND_USER',user)
        }
    })
  }
}

const getters = {

}

export default {
  namespaced:'RandomUser',
  actions,
  state,
  mutations,
  getters
}
