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
          redirect: "/login",
          meta: {
              title: '微信授权'
          },
      },
    {
      path: '/login',
      component: Login,
        meta: {
            title: '微信授权'
        },
    },
    {
      path: '/home',
      component: home,
        meta: {
            title: '大吃小互娱世界'
        },
    },
    {
      path: '/game/:roomId',
      component: game,
        meta: {
            title: '游戏中心'
        },
    }
  ]
})
