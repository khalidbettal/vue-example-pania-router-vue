import { createRouter, createWebHistory } from 'vue-router';
import Users from '@/views/Users.vue';
import User from '@/views/User.vue';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'users',
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

export default router;
