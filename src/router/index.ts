import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue'),
    },
    {
      path: '/news',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/News.vue'),
      children: [
        {
          path: 'detail/:id/:title/:content?',
          name: 'Detail',
          component: () => import('../pages/Detail.vue'),
          // props: true,
          props: (route) => { // route is the current route
            return route.params
            // return {
            //   id: route.params.id,
            //   title: route.params.title,
            //   content: route.params.content,
            // }
          }
        },
      ],
    },
  ],
})

export default router
