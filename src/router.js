import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Dashboard from './views/Dashboard.vue'
import Buy from './components/Buy.vue'
import Account from './components/Account.vue'
import Support from './components/Support.vue'

Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    }, {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          component: Buy
        },
        {
          path: 'buy',
          component: Buy
        },
        {
          path: 'support',
          component: Support
        },
        {
          path: 'account',
          component: Account
        },
      ]
    }, {
      path: '*',
      component: Login
    }
  ]
})