import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import account from '../components/account'
import home from '../components/home'
import game from '../components/game'
import roomList from '../components/roomList'

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
            title: '账号登录'
        },
    },
    {
      path: '/account',
      component: account,
      meta: {
          title: '账号注册'
      },
    },
    {
      path: '/home/:account',
      component: home,
        meta: {
            title: '大吃小互娱世界'
        },
    },
    {
      path: '/game/:account/:roomId/:gameInfoId',
      component: game,
        meta: {
            title: '游戏中心'
        },
    },
      {
          path: '/roomList/:account',
          component: roomList,
          meta: {
              title: '房间列表'
          },
      },
  ]
})
