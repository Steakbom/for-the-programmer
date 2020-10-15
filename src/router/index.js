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
      allowAnonymous: true,
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
        allowAnonymous: true,
        title: 'Languages'
      }
    },
        {
      path: '/sql',
      name: 'Sql',
      component: () => {
        return import(
        /* webpackChunkName: "sql" */ '@/components/languages/views/sql.vue'
        )
      },
      meta: {
        allowAnonymous: true,
        title: 'SQL'
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

export default router
