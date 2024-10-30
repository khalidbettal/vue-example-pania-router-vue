import { createRouter, createWebHistory } from 'vue-router';
import Users from '@/views/Users.vue';
import User from '@/views/User.vue';
import Home from '@/views/Home.vue';
import { useAuthStore } from '@/stores/authStore';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'users',
    meta : {
      isAuth : true
    },
    component: Users,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    props: true, // Allows passing params as props to the User component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.isAuth && !authStore.user.token) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
