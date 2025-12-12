import { createWebHistory, createRouter } from 'vue-router'
import FormView from "@/views/FormView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/form',
    name: 'Form',
      component: FormView,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
