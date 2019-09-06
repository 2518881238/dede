// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
import VueRouter from 'vue-router'
import iView from "iview"
import 'iview/dist/styles/iview.css'
import axios from 'axios';
import store from "./store";

Vue.prototype.$axios = axios;
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
