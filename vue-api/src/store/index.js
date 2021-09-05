import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn:false,
    user:null,
    token:null,
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
  actions: {
    perforloginAction({commit},payload){
      return new Promise((resolve,reject)=>{
        axios.post('http://localhost:8000/api/auth/login',{
                email:payload.email,
                password:payload.password,
            }).then(res=>{
                commit('SET_State',res.data.access_token)
                commit('SET_User',res.data.user)
                commit('SET_LoggedIn',true)
                resolve(res)
                console.log(res.data);
                localStorage.setItem("user", res.data.user)
            }).catch(err =>{
              reject(err)
            })
      })

      },
    perforRegisterAction({commit},payload){
      return new Promise((resolve,reject)=>{
        axios.post('http://localhost:8000/api/auth/register',{
                name:payload.name,
                email:payload.email,
                password:payload.password,
            }).then(res=>{
                  commit('SET_State',res.data.access_token)
                  commit('SET_User',res.data.user)
                  commit('SET_LoggedIn',true)
                  resolve(res)
              }).catch(err =>{
                reject(err)
              })
        })
  
    },
    performLogoutAction({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.post('http://localhost:8000/api/auth/logout',{token:state.token}).then(res=>{
                  commit('SET_State',null)
                  commit('SET_User',null)
                  commit('SET_LoggedIn',false)
                  resolve(res)
              }).catch(err =>{
                reject(err)
              })
        })
    }
  },
  getters: {
    get_loggedIn(state){
      return state.loggedIn
    }
  },
});
