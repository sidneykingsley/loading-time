import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Experiment from '../views/Experiment.vue'
import Result from '../views/Result.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/experiment',
    name: 'Experiment',
    component: Experiment,
  },
  {
    path: '/results',
    name: 'Result',
    component: Result,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
