import axios from 'axios'

const state = {
  idToken:null,
  userId:null
};

const mutations ={
  authUser (state,userData){
    state.idToken = userData.token
    state.userId = userData.userId
  },
  clearAuthData(state){
    state.idToken = null
    state.userId = null
  }
};

const actions = {
  logout({commit}, state){
    commit('clearAuthData')
  },

  login({commit},userData){
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyARXQL2uG2J79svWtE3BcO8HVP0k9V-tfU',{
      email:userData.email,
      password:userData.password,
      returnSecureToken:true
    }).then(response =>{
      console.log('login',response)
      commit('authUser',{
        token:response.data.idToken,
        userId: response.data.localId
      })
    }, error =>{
      console.log(error)
    });
  },

  signUp({commit},userData){
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyARXQL2uG2J79svWtE3BcO8HVP0k9V-tfU',
      {

        email:userData.email,
        password:userData.password,
        returnSecureToken:true
      })
      .then(response =>{
        console.log(response)
        commit('authUser',{
          token:response.data.idToken,
          userId: response.data.localId
        })
      }, error =>{
        console.log(error)
      });
  }

};

const getters ={
  user(state){
    return state.user
  },
  isAuthenticated(state){
    return state.idToken !==null;
  }
};

export default {
  namespaced:'auth',
  state,
  mutations,
  actions,
  getters
}
