import Vue from 'vue';
import Router from 'vue-router';
import Home from "../components/Home";
import MainPage from "../components/MainPage";
import Find from "../components/Find";
import Info from "../components/Info";
import Me from "../components/Me";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/mainPage',
          name: 'mainPage',
          component: MainPage
        },
        {
          path: '/find',
          name: 'find',
          component: Find
        },
        {
          path: '/info',
          name: 'info',
          component: Info
        },
        {
          path: '/me',
          name: 'me',
          component: Me
        }
      ]

    }
  ]
})
