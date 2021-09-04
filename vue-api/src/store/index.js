import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn:false,
    user:null,
    token:null
  },
  mutations: {
    SET_State(state,payload){
      state.token=payload
    },
    SET_User(state,payload){
      state.user=payload
    },
    SET_LoggedIn(state,payload){
      state.loggedIn=payload
    }
  },
  actions: {},
  getters: {
    get_loggedIn(state){
      return state.loggedIn
    }
  },
});
