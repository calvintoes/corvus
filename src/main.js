/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import Game from './pages/Game'
import Tool from './pages/Tool'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: App},
  { path: '/game', component: Game},
  { path: '/tool', component: Tool}
];

const router = new VueRouter({ routes })

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
