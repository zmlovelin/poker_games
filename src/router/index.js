import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import home from '../components/home';
import game from '../components/game';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/game',
      component: game
    }
  ]
})
