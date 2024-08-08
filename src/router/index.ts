import { createRouter, createWebHashHistory } from 'vue-router'
import WelCome from '@/views/home/component/WelCome.vue'

WelCome
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WelCome',
      component: WelCome
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('views/home/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('views/about/About.vue')
    },
    {
      path: '/creative-workshop',
      name: 'CreativeWorkshop',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('views/creative_workshop/CreativeWorkshop.vue')
    },
    {
      path: '/no_match',
      name: 'NoMatch',
      meta: {
        type: 'notFound'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('views/no_match/NoMatch.vue')
    }
  ]
})

export default router
