import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'

Vue.use(VueRouter)

const checkAuth = (to: any, from: any, next: any) => {
  if (localStorage.getItem('token') !== null) {
    next();
  } else {
    next('/login')
  }
}

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Home,
    beforeEnter: checkAuth,
  },
  {
    path: '/newtheme',
    name: 'NewTheme',
    component: () => import('../components/newTheme/NewTheme.vue'),
    beforeEnter: checkAuth,
  },
  {
    path: '/userdetails',
    name: 'User',
    component: () => import('../components/user/User.vue'),
    beforeEnter: checkAuth,
  },
  {
    path: '/themecontent/:title',
    name: 'themeContent',
    component: () => import('../components/themeContent/ThemeContent.vue'),
    beforeEnter: checkAuth,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/register/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/not-found/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
