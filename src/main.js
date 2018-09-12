import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import VS2 from 'vue-script2'
import VueClipboards from 'vue-clipboards';

Vue.use(VueClipboards);
Vue.use(VS2)
Vue.use(VueNoty)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
