import {createRouter, createWebHistory} from 'vue-router'
import ListView from '@/views/ListView.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: ListView
}];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
