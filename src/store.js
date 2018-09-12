import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    auth : {
      jwt : ''
    },
    userdata : {
      
    }
  },
  mutations: {
    LOGIN(state,message) {
      state.auth.jwt= message.jwttoken;
      state.userdata = message.userdata;
    },

    SIGNUP(state,message) {
    
    },

    LOGOUT(state) {
      state.auth.jwt = '',
      state.auth.userdata = {}
    }
  },
  actions: {
    LOGIN: (context, payload) => {
      console.log(payload)
      axios.get(baseUrl + '/login',{
        params : {
          email :  payload.email,
          password : payload.password
        }
      }).then((r)=>{
        context.commit('LOGIN', r.data.data);
        payload.router.push({ path: '/dashboard' })
      }).catch((e)=>{
        console.log(e)
        payload.noty.error("Cannot login " + e );
      })
    },

    SIGNUP: (context, payload) => {
      console.log(payload)
      axios.post(baseUrl + '/signup',{
          firstname : payload.firstname,
          lastname : payload.lastname,
          email :  payload.email,
          password : payload.password
      }).then((r)=>{
        payload.noty.success("New account created" );
        context.commit('SIGNUP', r.data.data);
      }).catch((e)=>{
        payload.noty.error("Cannot login " + e );
      })
    },

    LOGOUT: (context, payload) => {
      context.commit('LOGOUT');
      payload.router.replace({path : '/'})
    }
  }
})