import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'home',
  component: () => {
    return import(
    /* webpackChunkName: "home" */ '@/components/public/views/home.vue'
  )
  },
    meta: {
    allowAnonymous: true,
    title: 'Home'
  }
  },
  {
    path: '/languages',
    name: 'languages',
    component: () => {
      return import(
      /* webpackChunkName: "languages" */ '@/components/languages/views/languages.vue'
      )
    },
    meta: {
      allowAnonymous: true,
      title: 'Languages'
    }
  },
  {
    path: '/mysql',
    name: 'mysql',
    component: () => {
      return import(
      /* webpackChunkName: "mysql" */ '@/components/languages/views/mysql.vue'
      )
    },
    meta: {
      allowAnonymous: true,
      title: 'MySql'
    }
  },
  {
    path: '/converters',
    name: 'converters',
    component: () => {
      return import(
      /* webpackChunkName: "converters" */ '@/components/converters/views/converters.vue'
      )
    },
    meta: {
      allowAnonymous: true,
      title: 'Languages'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => {
      return import(
      /* webpackChunkName: "about" */ '@/components/public/views/about.vue'
      )
    },
    meta: {
      allowAnonymous: true,
      title: 'About'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // TODO: future implementation
  next()
})

export default router
