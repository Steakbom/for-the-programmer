import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => {
      return import(
      /* webpackChunkName: "home" */ '@/components/public/views/home.vue'
    )
    },
    meta: {
      title: 'Home'
    }
    },
    {
      path: '/languages',
      name: 'Languages',
      component: () => {
        return import(
        /* webpackChunkName: "languages" */ '@/components/languages/views/languages.vue'
        )
      },
      meta: {
        title: 'Languages'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => {
        return import(
        /* webpackChunkName: "about" */ '@/components/public/views/about.vue'
        )
      },
      meta: {
        title: 'About'
      }
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
