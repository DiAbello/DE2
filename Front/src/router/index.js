import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/views/Auth.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    }
  ]
})

router.beforeEach((to, from ,next) => {
  const store = useStore()
  if(to.path === '/auth' && store.user !== null) {
    next('/profile')
  } else {
    next()
  }
})

router.beforeEach((to, from ,next) => {
  const store = useStore()
  if(to.path === '/profile' && store.user === null) {
    next('/auth')
  } else {
    next()
  }
})

export default router
