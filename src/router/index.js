import Vue from 'vue'
import VueRouter from 'vue-router'
import Miste from '../pages/Miste/Miste.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

// 所有路由器配置
export default new VueRouter({
  routes: [
    {
      path: '/miste',
      component: Miste,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/miste'
    }
  ]
})
