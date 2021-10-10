import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Chat from '../components/Chat.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/auth',
    name: 'Login',
    component: Login
  },
  { path: '/', redirect: '/chat' }
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;