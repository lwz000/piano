import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import piano from '../views/piano.vue'
import page from '../views/page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/page',
    name: 'page',
    component: page
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
