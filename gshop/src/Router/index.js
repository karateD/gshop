/**
 * 路由定义
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Msite from '../Pages/Msite/Msite.vue'
import Search from '../Pages/Search/Search.vue'
import Order from '../Pages/Order/Order.vue'
import Profile from '../Pages/Profile/Profile.vue'
import Login from '../Pages/Login/Login.vue'

//声明使用组件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }    
  ]
})