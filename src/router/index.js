import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Regist from '../components/Regist'
import Home from '../components/Home'
import {Message} from 'element-ui'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/regist', component: Regist},
    {path: '/home', component: Home}
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) =>{
  if(to.path == '/login') return next()
  const token = document.cookie
  if(!token){
    Message.error('未登录，请先登录！')
    return next('/login')
  }
  next()
})

export default router
