import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: ''
}];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router