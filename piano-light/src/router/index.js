import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import piano from '../views/piano.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/piano',
    name: 'piano',
    component: piano
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
