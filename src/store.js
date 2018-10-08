import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = process.env.VUE_APP_API_URL

//const baseUrl = "http://0.0.0.0:3000"


export default new Vuex.Store({
  state: {
    auth: {
      jwt: ''
    },
    userdata: {

    }
  },
  mutations: {
    LOGIN(state, message) {
      state.auth.jwt = message.jwttoken;
      state.userdata = message.userdata;
    },

    SIGNUP(state, message) {

    },

    LOGOUT(state) {
      state.auth.jwt = '',
        state.auth.userdata = {}
    },

    ETHADDRESSUPDATE(state, message) {
      state.userdata.userEthAddress = message
    },

    UPDATEPROFILE(state, message) {
      state.userdata.bio.dob.dd = message.dob_dd
      state.userdata.bio.dob.mm = message.dob_mm
      state.userdata.bio.dob.yyyy = message.dob_yyyy
      state.userdata.bio.address.line = message.address_line
      state.userdata.bio.address.city = message.address_city
      state.userdata.bio.address.country = message.address_country
      state.userdata.bio.address.postalcode = message.address_postalcode
    }
  },
  actions: {
    LOGIN: (context, payload) => {
      console.log(payload)

      axios.get(baseUrl + '/login', {
        params: {
          email: payload.email.toLowerCase(),
          password: payload.password
        },
        crossdomain: true,
        withCredentials: false,
        timeout: 10000
      }).then((r) => {
        context.commit('LOGIN', r.data.data);
        payload.router.push({
          path: '/dashboard'
        })
      }).catch((e) => {
        console.log(e.response)
        payload.noty.error("Cannot login " + e.response.data.message);
      })
    },

    SIGNUP: (context, payload) => {
      payload.noty.info("Signing up....", {
        timeout: 2000
      });
      console.log(payload.noty)
      axios.post(baseUrl + '/signup', {
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email.toLowerCase(),
        password: payload.password
      }).then((r) => {
        payload.noty.success("New account created.<br/>Redirecting to dashboard page.", {
          timeout: 3000
        });
        setTimeout(() => {
          payload.store.dispatch("LOGIN", {
            email: payload.email,
            password: payload.password,
            noty: payload.noty,
            router: payload.router
          });
          //payload.router.replace({ path: "/" });
        }, 4000)
      }).catch((e) => {
        console.log(e)
        payload.noty.error("Cannot signup -  " + e.response.data.message);
      })
    },

    LOGOUT: (context, payload) => {
      context.commit('LOGOUT');
      payload.router.replace({
        path: '/'
      })
    },

    ETHADDRESSUPDATE: (context, payload) => {
      context.commit('ETHADDRESSUPDATE', payload);
    },

    UPDATEPROFILE: (context, payload) => {
      context.commit('UPDATEPROFILE', payload);
    },

    SETADDRESS: (context, payload) => {
      axios.defaults.headers.common['Authorization'] = 'bearer ' + context.state.auth.jwt
      axios.post(baseUrl + '/userEthAddress', {
        email: context.state.userdata.email,
        userEthAddress: context.state.userdata.userEthAddress
      }).then((r) => {
        payload.noty.success("Eth address updated");
      }).catch((e) => {
        payload.noty.error("Provide valid ETH address");
      })
    }
  }
})